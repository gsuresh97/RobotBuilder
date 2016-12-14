from svggen.utils import mymath as np


def MirrorX():
    return np.diag([-1, 1, 1, 1])


def MirrorY():
    return np.diag([1, -1, 1, 1])


def Scale(scale):
    return np.diag([scale, scale, scale, 1])


def RotateX(angle):
    r = np.array([[1, 0, 0, 0],
                  [0, np.cos(angle), -np.sin(angle), 0],
                  [0, np.sin(angle), np.cos(angle), 0],
                  [0, 0, 0, 1]])
    return r


Roll = RotateX


def RotateY(angle):
    r = np.array([[np.cos(angle), 0, np.sin(angle), 0],
                  [0, 1, 0, 0],
                  [-np.sin(angle), 0, np.cos(angle), 0],
                  [0, 0, 0, 1]])
    return r


Pitch = RotateY


def RotateZ(angle):
    r = np.array([[np.cos(angle), -np.sin(angle), 0, 0],
                  [np.sin(angle), np.cos(angle), 0, 0],
                  [0, 0, 1, 0],
                  [0, 0, 0, 1]])
    return r


Yaw = RotateZ


def quat2DCM(quat):
    (a, b, c, d) = quat
    r = np.array([[a ** 2 + b ** 2 - c ** 2 - d ** 2, 2 * b * c - 2 * a * d, 2 * b * d + 2 * a * c, 0],
                  [2 * b * c + 2 * a * d, a ** 2 - b ** 2 + c ** 2 - d ** 2, 2 * c * d - 2 * a * b, 0],
                  [2 * b * d - 2 * a * c, 2 * c * d + 2 * a * b, a ** 2 - b ** 2 - c ** 2 + d ** 2, 0],
                  [0, 0, 0, 1]])
    return r


def MoveToOrigin(pt):
    return Translate([-pt[0], -pt[1], 0])


def RotateOntoX(pt, pt2=(0, 0)):
    dx = pt[0] - pt2[0]
    dy = pt[1] - pt2[1]
    l = np.sqrt(dx * dx + dy * dy)
    dx = dx / l
    dy = dy / l
    r = np.array([[dx, dy, 0, 0],
                  [-dy, dx, 0, 0],
                  [0, 0, 1, 0],
                  [0, 0, 0, 1]])
    return r


def RotateXTo(pt, pt2=(0, 0)):
    dx = pt[0] - pt2[0]
    dy = pt[1] - pt2[1]
    l = np.sqrt(dx * dx + dy * dy)
    dx = dx / l
    dy = dy / l
    r = np.array([[dx, -dy, 0, 0],
                  [dy, dx, 0, 0],
                  [0, 0, 1, 0],
                  [0, 0, 0, 1]])
    return r


def MoveOriginTo(pt):
    return Translate([pt[0], pt[1], 0])


def Translate(origin):
    r = np.array([[1, 0, 0, origin[0]],
                  [0, 1, 0, origin[1]],
                  [0, 0, 1, origin[2]],
                  [0, 0, 0, 1]])
    return r


def get6DOF(dcm):
    sixdof = {}
    sixdof["dx"] = dcm[0, 3]
    sixdof["dy"] = dcm[1, 3]
    sixdof["dz"] = dcm[2, 3]
    for row in range(3):
        for col in range(3):
            sixdof["dcm%d%d" % (row, col)] = dcm[row, col]
    return sixdof


def DCM2quat(dcm):
    den = np.array([1.0 + dcm[0, 0] + dcm[1, 1] + dcm[2, 2],
                    1.0 + dcm[0, 0] - dcm[1, 1] - dcm[2, 2],
                    1.0 - dcm[0, 0] + dcm[1, 1] - dcm[2, 2],
                    1.0 - dcm[0, 0] - dcm[1, 1] + dcm[2, 2]])
    # max_index = [x[0] for x in enumerate(list(den)) if x[1] == max(den)][0]
    max_index = 0  # XXX Can't find symbolically?

    q = [0] * 4
    q[max_index] = 0.5 * np.sqrt(den[max_index])
    denom = 4.0 * q[max_index]

    if (max_index == 0):
        q[1] = -(dcm[1, 2] - dcm[2, 1]) / denom
        q[2] = -(dcm[2, 0] - dcm[0, 2]) / denom
        q[3] = -(dcm[0, 1] - dcm[1, 0]) / denom
    if (max_index == 1):
        q[0] = -(dcm[1, 2] - dcm[2, 1]) / denom
        q[2] = (dcm[0, 1] + dcm[1, 0]) / denom
        q[3] = (dcm[0, 2] + dcm[2, 0]) / denom
    if (max_index == 2):
        q[0] = -(dcm[2, 0] - dcm[0, 2]) / denom
        q[1] = (dcm[0, 1] + dcm[1, 0]) / denom
        q[3] = (dcm[1, 2] + dcm[2, 1]) / denom
    if (max_index == 3):
        q[0] = -(dcm[0, 1] - dcm[1, 0]) / denom
        q[1] = (dcm[0, 2] + dcm[2, 0]) / denom
        q[2] = (dcm[1, 2] + dcm[2, 1]) / denom

    return q
