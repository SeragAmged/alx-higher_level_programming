#!/usr/bin/python3

if __name__ == "__main__":
    """Print the number of and list of arguments."""
    import sys
    if len(sys.argv) == 1:
        print("0 arguments.")
    elif len(sys.argv) == 2:
        print(f"{len(sys.argv) - 1:d} argument:")
        print(f"{1}: {sys.argv[1]}")
    else:
        print(f"{len(sys.argv) - 1:d} arguments:")
        for index, arg in enumerate(sys.argv):
            print(f"{index}: {arg}") if index != 0 else None