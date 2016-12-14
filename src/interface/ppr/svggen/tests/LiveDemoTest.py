from svggen.library import getComponent

def test_make():
    test = getComponent("LiveDemo1")
    test.makeOutput("output/demo1")
    test2 = getComponent("LiveDemo2")
    test2.makeOutput("output/demo2")

if __name__ == '__main__':
    test_make()