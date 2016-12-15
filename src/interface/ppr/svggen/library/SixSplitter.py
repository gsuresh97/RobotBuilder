from svggen.api.targets.ArduinoTarget import Arduino

from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import OutPort
from svggen.api.ports.CodePort import InPort



class SixSplitter(CodeComponent):

	def __init__(self,  yamlFile=None, **kwargs):
		CodeComponent.__init__(self, yamlFile, **kwargs)
		name = self.getName()

	def define(self, **kwargs):
		self.meta = {
			Arduino : {
				"code": "\n" 
				,

				"inputs": {
					"in@@name@@": None,
				},

				"outputs": {
					"out1@@name@@" : "<<in@@name@@>>",
					"out2@@name@@" : "<<in@@name@@>>",
					"out3@@name@@" : "<<in@@name@@>>",
					"out4@@name@@" : "<<in@@name@@>>",
					"out5@@name@@" : "<<in@@name@@>>",
					"out6@@name@@" : "<<in@@name@@>>",
				},

				"declarations":  "\n" 
				,

				"setup": "",

				"needs": set()
			}
		}

		self.addInterface("in", InPort(self, "in", "in@@name@@"))
		self.addInterface("out1", OutPort(self, "out1", "out1@@name@@"))
		self.addInterface("out2", OutPort(self, "out2", "out2@@name@@"))
		self.addInterface("out3", OutPort(self, "out3", "out3@@name@@"))
		self.addInterface("out4", OutPort(self, "out4", "out4@@name@@"))
		self.addInterface("out5", OutPort(self, "out5", "out5@@name@@"))
		self.addInterface("out6", OutPort(self, "out6", "out6@@name@@"))
		CodeComponent.define(self, **kwargs)

	def assemble(self):
		CodeComponent.assemble(self)

if __name__ == "__main__":
	pass

