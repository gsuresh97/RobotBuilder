from svggen.api.ElectricalComponent import ElectricalComponent
from svggen.api.ports.ElectricalPort import ElectricalPort


class Microphone(ElectricalComponent):

    def __init__(self, yamlFile=None, **kwargs):
        ElectricalComponent.__init__(self, yamlFile, **kwargs)

    def define(self, **kwargs):
        ElectricalComponent.define(self)
        self.physical = {
            "numPins": 3,
            "power": {
                "Vin": [2],
                "Ground": [1]
            },
            "aliases": ["out", "gnd", "vcc"],
        }
        self.addInterface("vOut", ElectricalPort(self, [0]))


    def assemble(self):
        ElectricalComponent.assemble(self)