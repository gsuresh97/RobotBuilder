from svggen.library import getComponent


def test_make_arm():
    f = getComponent("FourBarLinkage")
    return f

if __name__ == '__main__':
    from svggen.utils.utils import printEquations, printSummary
    c = test_make_arm()
    printEquations(c)

