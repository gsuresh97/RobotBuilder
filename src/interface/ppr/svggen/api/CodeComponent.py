from svggen.api.component import Component
from svggen.api.composables.CodeComposable import CodeComposable
from svggen.api.ports.CodePort import CodePort

class CodeComponent(Component):

    def __init__(self, yamlFile=None, **kwargs):
        Component.__init__(self, yamlFile, **kwargs)
        self.meta = dict()

    def define(self, **kwargs):
        self.addParameter("target", "", isSymbol=False)

    def getModifiedName(self):
        name = self.getName()
        if name == self.__class__.__name__:
            name = self.__class__.__name__ + str(id(self))
        return name.replace(".", "_")

    def mangleNames(self):
        newMeta = dict()
        name = self.getModifiedName()


        for (target, meta) in self.meta.iteritems():
            newMeta[target] = target(None, meta).mangle(name)

        for (iname, interface) in self.interfaces.iteritems():
            if isinstance(interface, CodePort):
                interface.mangle(name)

        return newMeta

    def getAllSubs(self):
        allSubs = Component.getAllSubs(self)
        return allSubs

    def getTokenSubs(self):
        subs = dict()
        for (param, val) in self.parameters.iteritems():
            subs[param + "_" + self.getModifiedName()] = str(val)
        return subs

    def assemble(self):
        self.composables['code'] = CodeComposable(self.mangleNames())
