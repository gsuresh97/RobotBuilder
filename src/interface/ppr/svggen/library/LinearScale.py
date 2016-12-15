from svggen.api.targets.ArduinoTarget import Arduino

from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import InIntPort
from svggen.api.ports.CodePort import OutIntPort



class LinearScale(CodeComponent):

	def __init__(self,  yamlFile=None, **kwargs):
		CodeComponent.__init__(self, yamlFile, **kwargs)
		name = self.getName()

	def define(self, **kwargs):
		self.addParameter("inStart", 0, isSymbol=False)
		self.addParameter("inEnd", 1023, isSymbol=False)
		self.addParameter("outStart", 0, isSymbol=False)
		self.addParameter("outEnd", 255, isSymbol=False)
		self.meta = {
			Arduino : {
				"code": "@@name@@ans = (int)(@@name@@scale(<<in@@name@@>>));\n" 
				,

				"inputs": {
					"in@@name@@": None,
				},

				"outputs": {
					"scaled@@name@@" : "@@name@@ans",
				},

				"declarations": ( "int @@name@@ans;\n" 
					"int @@name@@num1;\n" 
					"int @@name@@den1;\n" 
					"int @@name@@frac1;\n" 
					"int @@name@@num2;\n" 
					"int @@name@@den2;\n" 
					"int @@name@@frac2;\n" 
					"int @@name@@sum;\n" 
					"// Describe this function...\n" 
					"int @@name@@scale(int t @@name@@undefined) {\n" 
					"if (@@name@@t < <<inStart@@name@@>> || @@name@@t > <<inEnd@@name@@>>) {\n" 
					"return 0;\n" 
					"}\n" 
					"@@name@@num1 = (int)((@@name@@t - <<inStart@@name@@>>) * <<outEnd@@name@@>>);\n" 
					"@@name@@den1 = (int)(<<inEnd@@name@@>> - <<inStart@@name@@>>);\n" 
					"@@name@@frac1 = (int)(@@name@@num1 / @@name@@den1);\n" 
					"@@name@@num2 = (int)((<<inEnd@@name@@>> - @@name@@t) * <<outStart@@name@@>>);\n" 
					"@@name@@den2 = (int)(<<inEnd@@name@@>> - <<inStart@@name@@>>);\n" 
					"@@name@@frac2 = (int)(@@name@@num2 / @@name@@den2);\n" 
					"@@name@@sum = (int)(@@name@@frac1 + @@name@@frac2);\n" 
					"return @@name@@sum;\n" 
					"}\n" )
				,

				"setup": "",

				"needs": set()
			}
		}

		self.addInterface("in", InIntPort(self, "in", "in@@name@@"))
		self.addInterface("scaled", OutIntPort(self, "scaled", "scaled@@name@@"))
		CodeComponent.define(self, **kwargs)

	def assemble(self):
		CodeComponent.assemble(self)

if __name__ == "__main__":
	pass

