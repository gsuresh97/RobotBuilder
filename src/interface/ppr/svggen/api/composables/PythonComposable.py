import ntpath
import os
from svggen import SVGGEN_DIR
from Composable import Composable
from collections import OrderedDict
import re

from svggen.api.ports.DataOutputPort import DataOutputPort
from svggen.api.ports.DataInputPort import DataInputPort
from svggen.api.ports.DataPort import DataPort

import os
from svggen import SVGGEN_DIR
import yaml

from Composable import Composable

class PythonComposable(Composable):
    def new(self):
        new_composable = self.__class__({
            "name": "",
            "source": "",
            "declaration": "",
            "invocation": ""
        }, set())

        new_composable.meta = self.meta
        return new_composable

    def __init__(self, meta, needs=None):
        self.meta = {
            meta["name"]: {
                "source": meta["source"],
                "invocation": meta["invocation"],
                "arguments": dict(),
                "parameters": dict(),
                "callers": list()
            }
        }

        if needs is None:
            needs = meta["needs"]
        self.needs = set(needs)

    def append(self, newComposable, newPrefix):
        self.needs.update(newComposable.needs)
        self.meta.update(newComposable.meta)

    def tokenize(self, token_str):
        return "@@" + token_str + "@@"

    def insert_param(self, key, caller, token, to_replace):
        modified_source = ""
        for line in caller["source"].splitlines():
            replacement_line = line.replace(self.tokenize(token), to_replace)
            modified_source += replacement_line + "\n"
        self.meta[key]["source"] = modified_source

    def insert_arg(self, key, caller, token, to_replace):
        caller["invocation"] = caller["invocation"].replace(self.tokenize(token), to_replace)
        self.meta[key] = caller

    def replace_tokens(self, key, caller):
        for (invoked, token) in caller["arguments"].iteritems():
            self.replace_tokens(invoked, self.meta[invoked])

        for (invoked, token) in caller["parameters"].iteritems():
            self.replace_tokens(invoked, self.meta[invoked])

        for (invoked, token) in caller["arguments"].iteritems():
            self.insert_arg(key, caller, token, self.meta[invoked]["invocation"])

        for (invoked, token) in caller["parameters"].iteritems():
            self.insert_param(key, caller, token, self.meta[invoked]["invocation"])

    def attach(self, fromPort, toPort, kwargs):
        invoked = fromPort.getName()
        token = toPort.getToken()
        caller = toPort.getName()

        if toPort.isArgument():
            self.meta[caller]["arguments"].update({invoked: token})
        else:
            self.meta[caller]["parameters"].update({invoked: token})

        self.meta[invoked]["callers"].append(caller)

    def find_root(self):
        for (name, info) in self.meta.iteritems():
            if not info["callers"]:
                return name
    # Make the final output
    def makeOutput(self, filedir, **kwargs):
        root = self.find_root()
        self.replace_tokens(root, self.meta[root])

        filename = "%s/main.py" % filedir
        f = open(filename, "w")

        for include in self.needs:
            f.write("import " + include + "\n")

        f.write("\n")
        f.write(
            "if __name__ == \"__main__\":\n" +\
            "    %s\n" % self.meta[root]["invocation"] + \
            "\n")

        for (key, val) in self.meta.iteritems():
            f.write(val["source"] + "\n")

        f.close()

