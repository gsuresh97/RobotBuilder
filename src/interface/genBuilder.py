import os, sys, importlib


def removeSetupLoop(code):
    loopIndex = code.find("loop")
    code = code[loopIndex + 1:]

    loopIndex = code.find("{")
    code = code[loopIndex + 1:]
    return code

def getCName(code):
    return code[0:code.find("|")].strip(), code[code.find("|")+3:]

def saveBuilder(code):
    code = removeSetupLoop(code)
    cName, code = getCName(code)
    cName = "user_" + cName

    build = "from svggen.api.component import Component\n"
    build += "from svggen.library import *\n"
    build += "from svggen.library import getComponent\n"
    build += "from svggen.library.F import F\n\n\n"
    build += "c = Component()\n"

    connections = []
    inherit = []

    while(code.find('#') > 0):
        print "Here"
        classTypeIndex = code.index("|", 0)
        classType = code[0:classTypeIndex]
        code = code[classTypeIndex + 1:]

        classIndex = code.index("|", 0)
        className = code[0:classIndex]
        code = code[classIndex + 1:]

        inputCountIndex = code.index("|", 0)
        inputCount = code[0:inputCountIndex]
        code = code[inputCountIndex + 1:]
        print "Before: ", code
        paramCountIndex = code.index("|", 0)
        paramCount = code[0:paramCountIndex]
        code = code[paramCountIndex + 1:]
        print "Param Count Index: ", paramCountIndex
        print "Param Count: ", paramCount
        print "After: ", code
        for i in range(int(inputCount)):
            varNameIndex = code.index("\\", 0)
            varName = code[0:varNameIndex]
            code = code[varNameIndex + 1:]


            print connections
            print varName
            print code, code.find("_")
            if (code.find("_") > 0) and ((code.find("_") < code.find("\\") or code.find("\\") is -1)):
                print "Here3"
                outNameIndex = code.index("_", 0)
                outName = code[0:outNameIndex]
                code = code[outNameIndex + 1:]

                print outName, code

                outTypeIndex = code.index(">", 0)
                outType = code[0:outTypeIndex]
                code = code[outTypeIndex + 1:]

                print outType, code

                if "inin" in outName:
                    inherit.append([outType, className, varName])
                else:
                    connections.append([className, varName, outName, outType])
                    print code

        classType.rstrip('1234567890')
        build += "c.addSubcomponent(\"{}\", \"{}\")\n".format(className, classType)
        code = code[1:]

        for i in range(int(paramCount)):
            paramNameIndex = code.find("|")
            paramName = code[0:paramNameIndex]
            code = code[paramNameIndex+1:]

            paramValIndex = code.find("|")
            paramVal = code[0:paramValIndex]
            code = code[paramValIndex+1:]

            print "=============================================ParamVal: ",paramVal, "===================================="
            if paramVal.strip() is "":
                paramVal = "0"

            build += "c.setSubParameter((\"{}\", \"{}\"), {})\n".format(className, paramName, paramVal)

        build += "\n"
        code = code[1:]
        print code

    outputs = []
    while code.find("^") > 0:
        outClassIndex = code.find("_")
        outClassName = code[:outClassIndex]
        code = code[outClassIndex+1:]

        outVarIndex = code.find(">")
        outVarName = code[:outVarIndex]
        code = code[outVarIndex+1:]

        outNameIndex = code.find("^")
        outNameName = code[:outNameIndex]
        code = code[outNameIndex+1:]

        outputs.append([outNameName, outClassName, outVarName])

    for i in connections:
        build += "c.addConnection((\"" + i[2] + "\", \"" + \
            i[3] + "\"), (\"" + i[0] + "\", \"" + i[1] + "\"))\n"
    for i in inherit:
        build += "c.inheritInterface(\"" + i[0] + "\", (\"" + \
            i[1] + "\", \"" + i[2] + "\"))\n"
    for i in outputs:
        build += "c.inheritInterface(\"" + i[0] + "\", (\"" + \
            i[1] + "\", \"" + i[2] + "\"))\n"


    build += "c.toYaml(\"library/{}.yaml\")".format(cName)

    # TODO make this system independent
    buildPath = os.path.join(os.getcwd(), "interface/ppr/svggen/builders/")
    if not os.path.exists(buildPath):
        os.makedirs(buildPath)

    sys.path.append(str(buildPath))

    blpath = os.path.join(buildPath, "builder" + cName + ".py")
    blFile = open(blpath, 'wb', 0)
    blFile.write(build)


    importlib.import_module("builder"+cName)


    return cName
