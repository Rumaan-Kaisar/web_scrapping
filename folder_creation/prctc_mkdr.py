import os

# Directory: List of the folders you want to create
directories = ["Testy_dir_1"]

# Parent Directory path
# parent_dir = "D:/Pycharm projects/GeeksForGeeks/Authors"

# Path
# path = os.path.join(parent_dir, directory)
for i in range (0, len(directories)):
    path = "./"+directories[i]

    # Create the directory
    try:
        os.makedirs(path, exist_ok = True)
        f = open(f"{path}/myfile.txt", "w") # creates an empty text file
        print("Directory '%s' created successfully" % directories[i])
    except OSError as error:
        print("Directory '%s' can not be created" % directories[i])

# run windows cmd/terminal inside the working directory
# python prctc_mkdr.py

