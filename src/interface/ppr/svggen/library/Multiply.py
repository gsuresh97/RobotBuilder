from svggen.api.targets.ArduinoTarget import Arduino

from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import InIntPort
from svggen.api.ports.CodePort import OutIntPort



class Multiply(CodeComponent):

	def __init__(self,  yamlFile=None, **kwargs):
		CodeComponent.__init__(self, yamlFile, **kwargs)
		name = self.getName()

	def define(self, **kwargs):
		self.meta = {
			Arduino : {
				"code": "@@name@@item = (int)(<<num1@@name@@>> * <<num2@@name@@>>);\n" 
				,

				"inputs": {
					"num1@@name@@": None,
					"num2@@name@@": None,
				},

				"outputs": {
					"product@@name@@" : "@@name@@item"
				},

				"declarations":  "int @@name@@item;\n" 
				,

				"setup": "",				"needs": set()
			}
		}

		self.addInterface("num1", InIntPort(self, "num1", "num1@@name@@"))
		self.addInterface("num2", InIntPort(self, "num2", "num2@@name@@"))
		self.addInterface("product", OutIntPort(self, "product", "product@@name@@"))
		CodeComponent.define(self, **kwargs)

	def assemble(self):
		CodeComponent.assemble(self)

if __name__ == "__main__":
	pass

