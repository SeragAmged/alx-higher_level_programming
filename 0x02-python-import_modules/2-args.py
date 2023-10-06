#!/usr/bin/python3

if __name__ == "__main__":
    """Print the number of and list of arguments."""
    import sys
    if sys.argv == 1:
        print("0 arguments.")
    else:
        print(f"{len(sys.argv) - 1:d} arguments:")
        for index, arg in enumerate(sys.argv):
            if index == 0:
                continue
            elif index + 1 == len(sys.argv):
                print(f"{index}: {arg}")
            else:
                print(f"{index}: {arg}")
