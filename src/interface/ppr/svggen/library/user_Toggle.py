from svggen.api.targets.PythonTarget import Python
from svggen.api.targets.ArduinoTarget import Arduino

from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import OutIntPort



class user_Toggle(CodeComponent):

	def __init__(self,  yamlFile=None, **kwargs):
		CodeComponent.__init__(self, yamlFile, **kwargs)
		name = self.getName()

	def define(self, **kwargs):
		self.meta = {
			Arduino: {
				"code": ( "@@name@@count = (int)(0);\n" 
					"@@name@@tog();\n" )
				,

				"inputs": {
				},

				"outputs": {
					"ledLevel@@name@@" : "@@name@@count",
				},

				"declarations": ( "int @@name@@count;\n" 
					"// Describe this function...\n" 
					"void @@name@@tog() {\n" 
					"    @@name@@count = (int)(!@@name@@count);\n" 
					"    delay( 1000 );\n" 
					"}\n" )
				,

				"setup": "",

				"needs": set()
			},

			Python: {
				"code": ( "@@name@@count = None\n" 
					""""Describe this function...\n" 
					""""\n" 
					"def @@name@@tog():\n" 
					"    global count\n" 
					"    @@name@@count = int(not @@name@@count)\n" 
					"    import time\n" 
					"    time.sleep( 1000/1000. )\n" 
					"@@name@@count = int(0)\n" 
					"@@name@@tog()\n" )
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

