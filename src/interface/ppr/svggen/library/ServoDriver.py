from svggen.api.Driver import Driver
from svggen.api.ports.CodePort import InPort
from svggen.api.component import Component
from svggen.api.ports.ElectricalPort import PWMInputPort, PWMOutputPort, ElectricalPort, DigitalInputPort
from svggen.api.CodeComponent import CodeComponent
from svggen.api.ports.CodePort import *
from svggen.api.ElectricalComponent import ElectricalComponent
from svggen.api.composables.VirtualElectricalComposable import VirtualElectricalComposable
from svggen.api.targets.ArduinoTarget import Arduino
from svggen.api.targets.PythonTarget import Python

from svggen.api.composables.ElectricalComposable import ElectricalComposable


class RGBLEDDriver(CodeComponent):
    def __init__(self, yamlFile=None, **kwargs):
        CodeComponent.__init__(self, yamlFile, **kwargs)

    def define(self, **kwargs):
        self.meta = {
            Arduino: {
                "code": "",

                "inputs": {
                    "in_@@name@@": None,
                },

                "outputs": {
                    "driven": "servo_@@name@@.write(<<in_@@name@@>>)"
                },

                "declarations": "Servo servo_@@name@@",

                "setup": "    servo_@@name@@.attach(<<Pin_@@name@@>>);\n",

                "needs": set("Servo.h")
            }
        }

        self.addInterface("inInt", InIntPort(self, "inInt", "in_@@name@@"))
        self.addInterface("eOut", ElectricalPort(self, [2], virtual=True))
        self.addInterface("PWMin", PWMInputPort(self, [2], virtual=True))

        self.addParameter("Pin", "", isSymbol=False)

        CodeComponent.define(self)

    def getPinAlias(self, pin):
        return [None, None, "Pin"][pin[0]]

    def setPinParameter(self, pinName, pinValue):
        self.setParameter(pinName, pinValue, forceConstant=True)

    def getTokenSubs(self):
        return {
            "Pin_@@name@@".replace("@@name@@", self.getModifiedName()): self.getParameter("Pin")
        }

    def assemble(self):
        self.composables['electrical'] = ElectricalComposable(self.getName(),         {
            "numPins": 3,
            "power": {
                "Vin": [1],
                "Ground": [0]
            },
            "aliases": ["Vin", "ground", "PWMin"]
        }, isVirtual=True)

        CodeComponent.assemble(self)
