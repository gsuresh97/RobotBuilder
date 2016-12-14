from sympy import symbols

class Dimensions(object):
  def __init__(self, params):
      self.parameters = params.copy()

  def setParameter(self, name, val):
      self.parameters[name] = val

  def getParameter(self, name):
      return self.parameters[name]


class BrainDimensions(Dimensions):
  def __init__(self):
      params = {}

      params.setdefault("length")
      params.setdefault("width")
      params.setdefault("height")

      params.setdefault("nrows")
      params.setdefault("ncols")
      params.setdefault("rowsep")
      params.setdefault("colsep")

      super(BrainDimensions, self).__init__(params)

'''
             |<-F->|
^      =====v===== { H
E          _I_
v ________| | |_____
  ^ |       |<-F->|<> D
  | |             |
  B | <--- A ---> |
  | | (X) C       |
  v |_____________|

A : motorlength
B : motorheight
C : motorwidth
D : shoulderlength

E : hornheight
F : hornoffset

G : horndiameter
H : horndepth

'''

class ServoDimensions(Dimensions):
    def __init__(self):
        params = {}

        params.setdefault("motorlength")
        params.setdefault("motorwidth")
        params.setdefault("motorheight")
        params.setdefault("shoulderlength", 0)

        params.setdefault("hornheight", 0)
        params.setdefault("hornoffset", 0)

        params.setdefault("horndiameter", 0)
        params.setdefault("rhorndiameter", 0)
        params.setdefault("lhorndiameter", 0)
        params.setdefault("horndepth", 0)

        super(ServoDimensions, self).__init__(params)

    def setParameter(self, name, val):
        Dimensions.setParameter(self, name, val)

        if name == "horndiameter":
            self.setParameter("rhorndiameter", val)
            self.setParameter("lhorndiameter", val)


proMini = BrainDimensions()

proMini.setParameter("length", 39)
proMini.setParameter("width", 19)
proMini.setParameter("height", 9)

proMini.setParameter("nrows", 12)
proMini.setParameter("ncols", 2)
proMini.setParameter("rowsep", 0.1 * 25.4)
proMini.setParameter("colsep", 0.6 * 25.4)

s4303r = ServoDimensions()

s4303r.setParameter("motorlength", 31)
s4303r.setParameter("motorwidth", 17)
s4303r.setParameter("motorheight", 29)
s4303r.setParameter("shoulderlength", 10)

s4303r.setParameter("horndiameter", 38)
s4303r.setParameter("hornheight", 14)
s4303r.setParameter("hornoffset", 7)
s4303r.setParameter("horndepth", 2)

tgy1370a = ServoDimensions()

tgy1370a.setParameter("motorlength", 20)
tgy1370a.setParameter("motorwidth", 9)
tgy1370a.setParameter("motorheight", 14)
tgy1370a.setParameter("shoulderlength", 4)

tgy1370a.setParameter("hornheight", 10)
tgy1370a.setParameter("hornoffset", 4)
tgy1370a.setParameter("horndepth", 2)

fs90r = ServoDimensions()

fs90r.setParameter("motorlength", 23)
fs90r.setParameter("motorwidth", 12.2)
fs90r.setParameter("motorheight", 19)
fs90r.setParameter("shoulderlength", 5)

brainSymbols = BrainDimensions()
l, w, h, r, c, rs, cs = symbols("brainLength brainWidth brainHeight brainNRows brainNCols brainRowSep brainColSep", positive=True)

brainSymbols.setParameter("length", l)
brainSymbols.setParameter("width", w)
brainSymbols.setParameter("height", h)

brainSymbols.setParameter("nrows", r)
brainSymbols.setParameter("ncols", c)
brainSymbols.setParameter("rowsep", rs)
brainSymbols.setParameter("colsep", cs)

servoSymbols = ServoDimensions()
l, w, h, s, hh, ho, hd = symbols("servoLength servoWidth servoHeight servoShoulder servoHornHeight servoHornOffset servoHornDepth", positive=True)

servoSymbols.setParameter("motorlength", l)
servoSymbols.setParameter("motorwidth", w)
servoSymbols.setParameter("motorheight", h)
servoSymbols.setParameter("shoulderlength", s)

servoSymbols.setParameter("hornheight", hh)
servoSymbols.setParameter("hornoffset", ho)
servoSymbols.setParameter("horndepth", hd)
