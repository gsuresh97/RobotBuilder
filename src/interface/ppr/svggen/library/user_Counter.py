from svggen.api.targets.PythonTarget import Python
from svggen.api.targets.ArduinoTarget import Arduino

from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import OutIntPort



class user_Counter(CodeComponent):

	def __init__(self,  yamlFile=None, **kwargs):
		CodeComponent.__init__(self, yamlFile, **kwargs)
		name = self.getName()

	def define(self, **kwargs):
		self.meta = {
			Arduino: {
				"code": ( "@@name@@count = (int)(0);\n" 
					"while (true) {\n" 
					"    @@name@@count = (int)(1);\n" 
					"    delay( 1000 );\n" 
					"    @@name@@count = (int)(0);\n" 
					"    delay( 1000 );\n" 
					"}\n" )
				,

				"inputs": {
				},

				"outputs": {
					"ledLevel@@name@@" : "@@name@@count",
				},

				"declarations":  "int @@name@@count;\n" 
				,

				"setup": "",

				"needs": set()
			},

			Python: {
				"code": ( "@@name@@count = None\n"
					"@@name@@count = int(0)\n" 
					"while True:\n" 
					"    @@name@@count = int(1)\n" 
					"    import time\n" 
					"    time.sleep( 1000/1000. )\n" 
					"    @@name@@count = int(0)\n" 
					"    import time\n" 
					"    time.sleep( 1000/1000. )\n" )
				,

				"inputs": {
				},

				"outputs": {
					"ledLevel@@name@@" : "@@name@@count",
				},

				"setup": "",

				"needs": set()
			}
		}

		self.addInterface("ledLevel", OutIntPort(self, "ledLevel", "ledLevel@@name@@"))
		CodeComponent.define(self, **kwargs)

	def assemble(self):
		CodeComponent.assemble(self)

if __name__ == "__main__":
	pass

