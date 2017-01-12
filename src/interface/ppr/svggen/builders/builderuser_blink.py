from svggen.api.component import Component
from svggen.library import *
from svggen.library import getComponent
from svggen.library.F import F


c = Component()
c.addSubcomponent("counter", "user_Counter")

c.addSubcomponent("led", "DrivenLED")

c.addSubcomponent("arduno", "ArduinoUno")

c.addConnection(("arduno", "do2"), ("led", "Din"))
c.addConnection(("counter", "ledLevel"), ("led", "inInt"))
c.toYaml("library/user_blink.yaml")