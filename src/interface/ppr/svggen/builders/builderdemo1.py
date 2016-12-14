from svggen.api.component import Component
from svggen.library import *
from svggen.library import getComponent
from svggen.library.F import F


c = Component()
c.addSubcomponent("pot", "DrivenPot")
c.addSubcomponent("rgbled", "DrivenRGBLED")
c.addSubcomponent("color", "GetColor")
c.addSubcomponent("arduino", "ArduinoUno")
c.addConnection(("arduino", "pwm2"), ("rgbled", "gPWM"))
c.addConnection(("color", "green"), ("rgbled", "inGreen"))
c.addConnection(("arduino", "pwm1"), ("rgbled", "rPWM"))
c.addConnection(("color", "red"), ("rgbled", "inRed"))
c.addConnection(("color", "blue"), ("rgbled", "inBlue"))
c.addConnection(("arduino", "pwm3"), ("rgbled", "bPWM"))
c.addConnection(("pot", "outInt"), ("color", "inInt"))
c.addConnection(("pot", "aOut"), ("arduino", "a1"))
c.toYaml("library/demo1.yaml")