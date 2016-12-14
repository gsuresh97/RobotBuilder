from svggen.api.ElectricalComponent import ElectricalComponent
from svggen.api.ports.ElectricalPort import ElectricalPort


class LED(ElectricalComponent):

    def __init__(self, yamlFile=None, **kwargs):
        ElectricalComponent.__init__(self, yamlFile, **kwargs)

    def define(self, **kwargs):
        self.physical = {
            "anode": None,
            "cathode": None
        }

        self.addInterface('ein', ElectricalPort(self, self.getName(), ["anode"]))
        ElectricalComponent.define(self, **kwargs)

    def assemble(self):
        ElectricalComponent.assemble(self)

"""

class LED(ElectricalComponent):

    def define(self, **kwargs):
        ElectricalComponent.define(self)

        self.setParameter("physical", {
            "numPins": 2,
            "power": {
                "Vin": [0],
                "Ground": [1],
                "pullDown": self.getParameter("pulldown"),
                "pullUp": self.getParameter("pullup")
            },
        }, forceConstant=True)

        self.addInterface('ein', ElectricalPort(self, self.getName(), [0]))

"""
