from svggen.api.component import Component
from svggen.library import *


driverTest = Component()
driverTest.addSubcomponent("LED", "LED")
driverTest.addSubcomponent("Pot", "Pot")
driverTest.addSubcomponent("InputDriver", "InputDriver", interface="Analog")
driverTest.addSubcomponent("OutputDriver", "OutputDriver", interface="Analog")
driverTest.addSubcomponent("ArduinoUno", "ArduinoUno")
driverTest.setContainer("InputDriver", "ArduinoUno", {"pin": 15}, {
                        "pin15": ["InputDriver", 1]}, types=['code', 'electrical'])
driverTest.setContainer("OutputDriver", "ArduinoUno", {"pin": 6}, {
                        "pin6": ["OutputDriver", 0]}, types=['code', 'electrical'])
driverTest.make()
driverTest.addConnection(("Pot", "vOut"), ("InputDriver", "ein"))
driverTest.addConnection(("OutputDriver", "eout"), ("LED", "ein"))
driverTest.addConnection(("InputDriver", "aout"), ("OutputDriver", "ain"))
driverTest.toYaml("library/ledpot.yaml")
driverTest.makeOutput("output/driverTest")


rgbTest = Component()
rgbTest.addSubcomponent("Red", "Red", target="Arduino")
rgbTest.addSubcomponent("Green", "Green", target="Arduino")
rgbTest.addSubcomponent("Blue", "Blue",  target="Arduino")
rgbTest.addSubcomponent("InputDriver", "InputDriver", interface="Analog")
rgbTest.addSubcomponent("RGBLEDDriver", "RGBLEDDriver")
rgbTest.addSubcomponent("Pot", "Pot")
rgbTest.addSubcomponent("RGBLED", "RGBLED")
rgbTest.addConnection(("Pot", "vOut"), ("InputDriver", "ein"))
rgbTest.addConnection(("RGBLEDDriver", "rOut"), ("RGBLED", "rIn"))
rgbTest.addConnection(("RGBLEDDriver", "gOut"), ("RGBLED", "gIn"))
rgbTest.addConnection(("RGBLEDDriver", "bOut"), ("RGBLED", "bIn"))
rgbTest.addConnection(("InputDriver", "aout"), ("Red", "inInt"))
rgbTest.addConnection(("InputDriver", "aout"), ("Green", "inInt"))
rgbTest.addConnection(("InputDriver", "aout"), ("Blue", "inInt"))
rgbTest.addConnection(("Red", "outInt"), ("RGBLEDDriver", "rPWM"))
rgbTest.addConnection(("Green", "outInt"), ("RGBLEDDriver", "gPWM"))
rgbTest.addConnection(("Blue", "outInt"), ("RGBLEDDriver", "bPWM"))
rgbTest.addSubcomponent("ArduinoUno", "ArduinoUno")
rgbTest.setContainer("RGBLEDDriver", "ArduinoUno", {"rPin": 3, "gPin": 5, "bPin": 6}, {"pin3": ["RGBLEDDriver", 0],
                                                                                "pin5": ["RGBLEDDriver", 2],
                                                                                "pin6": ["RGBLEDDriver", 3]}, types=['code', 'electrical'])
rgbTest.setContainer("InputDriver", "ArduinoUno", {"pin": 15}, {"pin15": ["InputDriver", 1]},  types=['code', 'electrical'])
rgbTest.setContainer("Red",   "ArduinoUno", {}, {})
rgbTest.setContainer("Green", "ArduinoUno", {}, {})
rgbTest.setContainer("Blue",  "ArduinoUno", {}, {})
rgbTest.toYaml("library/rgbledpot.yaml")
rgbTest.makeOutput("output/rgbTest")
