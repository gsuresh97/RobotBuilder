from svggen.api.component import Component
from svggen.api.composables.CodeComposable import CodeComposable

from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import InIntPort
from svggen.api.ports.CodePort import OutIntPort



class IntegerDivide3(CodeComponent):

	def __init__(self,  yamlFile=None, **kwargs):
		CodeComponent.__init__(self, yamlFile, **kwargs)
		name = self.getName()

		self.meta = {
			"arduino": {
				"code": "@@name@@item = (String)(<<dividend@@name@@>> / <<divisor@@name@@>>);\n" 
				,

				"inputs": {
					"dividend@@name@@": None,
					"divisor@@name@@": None,
				},

				"outputs": {
					"quotient@@name@@" : "@@name@@item"
				},

				"declarations":  "String @@name@@item;\n" 
				,

				"needs": set()
			}
		}

	def define(self, **kwargs):
		CodeComponent.define(self, **kwargs)
		self.addInterface("dividend", InIntPort(self, "dividend", "dividend@@name@@"))
		self.addInterface("divisor", InIntPort(self, "divisor", "divisor@@name@@"))
		self.addInterface("quotient", OutIntPort(self, "quotient", "quotient@@name@@"))

	def assemble(self):
		CodeComponent.assemble(self)

if __name__ == "__main__":
	pass

