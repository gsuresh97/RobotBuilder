from svggen.library import buildDatabase, filterComponents, getComponent, queryDatabase

def populateDatabase():
    queryDatabase("times3")
    # comp = getComponent("times3")
    # buildDatabase([comp])

    # buildDatabase(filterComponents())


if __name__ == '__main__':
    populateDatabase()
