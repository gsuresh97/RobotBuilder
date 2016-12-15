from svggen.api.targets.ArduinoTarget import Arduino

from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import InIntPort
from svggen.api.ports.CodePort import OutFloatPort
from svggen.api.ports.CodePort import InFloatPort



class addIntFloat(CodeComponent):

	def __init__(self,  yamlFile=None, **kwargs):
		CodeComponent.__init__(self, yamlFile, **kwargs)
		name = self.getName()

	def define(self, **kwargs):
		self.meta = {
			Arduino : {
				"code": "@@name@@ans = (float)(<<intNum@@name@@>> + <<floatNum@@name@@>>);\n" 
				,

				"inputs": {
					"intNum@@name@@": None,
					"floatNum@@name@@": None,
				},

				"outputs": {
					"name@@name@@" : "@@name@@ans",
				},

				"declarations":  "float @@name@@ans;\n" 
				,

				"setup": "",

				"needs": set()
			}
		}

		self.addInterface("intNum", InIntPort(self, "intNum", "intNum@@name@@"))
		self.addInterface("floatNum", InFloatPort(self, "floatNum", "floatNum@@name@@"))
		self.addInterface("name", OutFloatPort(self, "name", "name@@name@@"))
		CodeComponent.define(self, **kwargs)

	def assemble(self):
		CodeComponent.assemble(self)

if __name__ == "__main__":
	pass

