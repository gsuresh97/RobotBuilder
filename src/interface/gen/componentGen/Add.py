from svggen.api.component import Component
from svggen.api.composables.CodeComposable import CodeComposable

from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import InIntPort
from svggen.api.ports.CodePort import OutIntPort



class add(CodeComponent):

	def __init__(self,  yamlFile=None, **kwargs):
		CodeComponent.__init__(self, yamlFile, **kwargs)
		name = self.getName()

		self.meta = {
			"arduino": {
				"code": "" + \
					"@@name@@item = (int)(a@@name@@ + b@@name@@);\n"
				,

				"inputs": {
					"a": None,
					"b": None,
				},

				"outputs": {
					"c" : "OutIntPort"
				},

				"declarations": "" + \
					"int @@name@@item;\n"
				,

				"needs": set()
			}
		}

	def define(self, **kwargs):
		CodeComponent.define(self, **kwargs)
		self.addInterface("inPort0", InIntPort(self, "inPort0", "a"))
		self.addInterface("inPort1", InIntPort(self, "inPort1", "b"))
		self.addInterface("outPort0", @@name@@item(self, "outPort0", "c"))
		self.addInterface()
		self.addInterface()

	def assemble(self):
		CodeComponent.assemble(self)

if __name__ == "__main__":
	pass
