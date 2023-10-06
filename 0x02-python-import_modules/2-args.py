#!/usr/bin/python3

if __name__ == "__main__":
    """Print the number of and list of arguments."""
    import sys
    if len(sys.argv) == 1:
        print("0 arguments.")
    elif len(sys.argv) == 2:
        print("argument:".format(len(sys.argv) - 1))
        print("1: {}".format(sys.argv[1]))
    else:
        print("arguments:".format(len(sys.argv) - 1))
        for index, arg in enumerate(sys.argv):
            print("{}: {}".format(index, arg)) if index != 0 else None
