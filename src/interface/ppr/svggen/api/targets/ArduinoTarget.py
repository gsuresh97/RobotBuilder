from svggen.api.targets.CppTarget import Cpp
from re import findall
import os, errno

class Arduino(Cpp):

    @staticmethod
    def new():
        return {"code": "", "declarations": "", "setup": "", "inputs": {}, "outputs": {}, "needs": set()}

    def __str__(self):
        return "Arduino"

    def mangle(self, name):
        self.meta["setup"] = self.meta["setup"].replace("@@name@@", name)
        return Cpp.mangle(self, name)

    def append(self, newMeta, newPrefix):
        pNewLine = "" if not self.meta["setup"] else "\n"
        if newMeta["setup"]:
            self.meta["setup"] += pNewLine + newMeta["setup"]
        return Cpp.append(self, newMeta, newPrefix)

    def getParameters(self):
        params = Cpp.getParameters(self)
        sparams = [self.detokenize(s) for s in findall("<<[0-9a-zA-Z]+?>>", self.meta["setup"])]
        return list(set(params) | set(sparams))

    def subParameters(self, subs):
        # for inputToken, inputSub in self.meta["inputs"].iteritems():
        #    if token == inputToken:
        #        self.meta["inputs"][token] = pSub
        for (token, sub) in subs.iteritems():
            for outputToken, outputExpr in self.meta["outputs"].iteritems():
                self.meta["outputs"][outputToken] = outputExpr.replace(self.tokenize(token), sub)
            self.meta["code"] = self.meta["code"].replace(self.tokenize(token), sub)
            self.meta["setup"] = self.meta["setup"].replace(self.tokenize(token), sub)
        return self.meta

    def makeOutput(self, filedir, **kwargs):
        self.replaceAllInputs()

        if filedir[-1] == "/":
            filedir += "main"
        else:
            filedir += "/main"

        filename = "%s/main.ino" % filedir

        if not os.path.exists(filename):
            try:
                os.makedirs(os.path.dirname(filename))
            except OSError as exc:  # Guard against race condition
                if exc.errno != errno.EEXIST:
                    raise

        f = open(filename, "w")

        for include in self.meta["needs"]:
            f.write("#include <" + include + ">\n")

        f.write("\n\n")
        f.write(self.meta["declarations"])
        f.write("\n\n")
        f.write(self.meta["code"])

        setup = "\nvoid setup()\n" + \
                "{\n" + \
                "%s\n" % self.meta["setup"] + \
                "}\n"

        loop = "\nvoid loop()\n" + \
                "{\n" + \
                "   %s\n" % "".join([s + ";\n" for (k,s) in self.meta["outputs"].iteritems() if s]) + \
                "}\n"

        f.write(setup)
        f.write(loop)
        f.close()
