from svggen.api.component import Component
from svggen.api.composables.CodeComposable import CodeComposable
from svggen.api.ports.CodePort import OutStringPort
from svggen.api.CodeComponent import CodeComponent


class GetString(CodeComponent):

    def define(self, **kwargs):
        CodeComponent.define(self, **kwargs)
        name = self.getName()
        self.setParameter("meta", {
            "cpp": {
                "name": name,
                "invocation": "%s()" % name,
                "declaration": "std::string %s();" % name,
                "source": \
                    "std::string %s()" % name + \
                    "{\n" + \
                    "    std::string inStr;\n" + \
                    "    std::cin >> inStr;\n" + \
                    "    return inStr;\n" + \
                    "}\n\n",
                "needs": ["iostream", "string"]
            },

            "python": {
                "name": name,
                "invocation": "raw_input()",
                "source": "",
                "needs": []
            }
        }, forceConstant=True)

        self.addInterface("outStr", OutStringPort(self, self.getName()))

