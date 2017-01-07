from svggen.api.CodeComponent import CodeComponent
from svggen.api.composables.VirtualElectricalComposable import VirtualElectricalComposable


class Driver(CodeComponent):

    def define(self, **kwargs):
        CodeComponent.define(self)
        #self.addParameter("eMeta", dict(), False)

    def assemble(self):
        CodeComponent.assemble(self)

    def setContainer(self, virtualObject, containerObject, virtualParams, containerParams, types=list(['code'])):
        for (key, val) in virtualParams.iteritems():
            self.setParameter(key, val, forceConstant=True)

        for type in types:
            containerComposable = containerObject.composables[type]
            if type == 'code':
                self.composables['code'].setContainer(containerComposable)
            elif type == 'electrical':
                self.composables['electrical'].setContainer(virtualObject.getName(),
                                                            containerObject.getName(),
                                                            containerObject.composables['electrical'],
                                                            [])