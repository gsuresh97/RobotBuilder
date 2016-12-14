from svggen.api.component import Component
from svggen.library import *
from svggen.library import getComponent
from svggen.library.F import F


c = Component()
c.addSubcomponent("add", "Add")
c.inheritInterface("in1", ("add", "inInt2"))
c.inheritInterface("in2", ("add", "inInt1"))
c.inheritInterface("sum", ("add", "outInt"))
c.toYaml("library/add1.yaml")