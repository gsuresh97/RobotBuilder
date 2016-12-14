from svggen.library import *
from svggen.library.PrintString import PrintString

def test_make():
    fg = getComponent("GetColor")
    fg.makeOutput("output/putString")

if __name__ == '__main__':
    test_make()
