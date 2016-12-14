from svggen.api.targets.ArduinoTarget import Arduino

from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import InIntPort
from svggen.api.ports.CodePort import OutIntPort



class times3(CodeComponent):

	def __init__(self,  yamlFile=None, **kwargs):
		CodeComponent.__init__(self, yamlFile, **kwargs)
		name = self.getName()

	def define(self, **kwargs):
		self.addParameter("d", 3, isSymbol=False)
		self.meta = {
			Arduino : {
				"code": "\n" 
				,

				"inputs": {
					"inInt@@name@@": None,
				},

				"outputs": {
					"outInt@@name@@" : "<<inInt@@name@@>> * <<d@@name@@>>",
				},

				"declarations":  "\n" 
				,

				"setup": "",

				"needs": set()
			}
		}

		self.addInterface("inInt", InIntPort(self, "inInt", "inInt@@name@@"))
		self.addInterface("outInt", OutIntPort(self, "outInt", "outInt@@name@@"))
		CodeComponent.define(self, **kwargs)

	def assemble(self):
		CodeComponent.assemble(self)

if __name__ == "__main__":
	pass

