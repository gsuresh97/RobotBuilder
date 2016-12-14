from svggen.api.component import Component
from svggen.library import *
from svggen.library import getComponent
from svggen.library.F import F


c = Component()
c.addSubcomponent("plus", "Add")
c.addSubcomponent("copy", "DuplicateNumber")
c.addSubcomponent("times", "Multiply")
c.addConnection(("plus", "sum"), ("copy", "num"))
c.addConnection(("copy", "copy1"), ("times", "num1"))
c.addConnection(("copy", "copy2"), ("times", "num2"))
c.inheritInterface("n1", ("plus", "num1"))
c.inheritInterface("n2", ("plus", "num2"))
c.inheritInterface("name", ("times", "product"))
c.toYaml("library/AddSquare.yaml")