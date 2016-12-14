from svggen.api.targets.ArduinoTarget import Arduino

from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import InIntPort
from svggen.api.ports.CodePort import OutIntPort



class DuplicateNumber(CodeComponent):

	def __init__(self,  yamlFile=None, **kwargs):
		CodeComponent.__init__(self, yamlFile, **kwargs)
		name = self.getName()

	def define(self, **kwargs):
		self.meta = {
			Arduino : {
				"code": "\n" 
				,

				"inputs": {
					"num@@name@@": None,
				},

				"outputs": {
					"copy1@@name@@" : "<<num@@name@@>>",
					"copy2@@name@@" : "<<num@@name@@>>",
				},

				"declarations":  "\n" 
				,

				"setup": "",

				"needs": set()
			}
		}

		self.addInterface("num", InIntPort(self, "num", "num@@name@@"))
		self.addInterface("copy1", OutIntPort(self, "copy1", "copy1@@name@@"))
		self.addInterface("copy2", OutIntPort(self, "copy2", "copy2@@name@@"))
		CodeComponent.define(self, **kwargs)

	def assemble(self):
		CodeComponent.assemble(self)

if __name__ == "__main__":
	pass

