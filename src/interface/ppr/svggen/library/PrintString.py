from svggen.api.ports.CodePort import InStringPort
from svggen.api.ports.CodePort import OutStringPort
from svggen.api.CodeComponent import CodeComponent
from svggen.api.targets.CppTarget import Cpp

class PrintString(CodeComponent):

    def __init__(self, yamlFile=None, **kwargs):
        CodeComponent.__init__(self, yamlFile, **kwargs)

    def define(self, **kwargs):
        CodeComponent.define(self, **kwargs)
        self.meta = {
            Cpp: {
                "code": "",

                "inputs": {
                    "str@@name@@": None
                },

                "outputs": {
                    "print@@name@@": "std::cout << <<str@@name@@>>"
                },

                "declarations": "",

                "needs": set(["iostream"])
            }
        }
        self.addInterface("inStr", InStringPort(self, "inStr", "str@@name@@"))

    def assemble(self):
        CodeComponent.assemble(self)

if __name__ == "__main__":
    ps = PrintString()