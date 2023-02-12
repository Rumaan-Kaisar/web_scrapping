""" Using os.makedirs()
os.makedirs() method in Python is used to create a directory recursively. That means while making leaf directory if any intermediate-level directory is missing, os.makedirs() method will create them all.
For example, consider the following path:

D:/Pycharm projects/GeeksForGeeks/Authors/Nikhil
Suppose we want to create directory ‘Nikhil’ but Directory ‘GeeksForGeeks’ and ‘Authors’ are unavailable in the path. Then os.makedirs() method will create all unavailable/missing directories in the specified path. ‘GeeksForGeeks’ and ‘Authors’ will be created first then ‘Nikhil’ directory will be created. """


""" 
Syntax: os.makedirs(path, mode = 0o777, exist_ok = False)

Parameter:
path: A path-like object representing a file system path. A path-like object is either a string or bytes object representing a path.
mode (optional): A Integer value representing mode of the newly created directory. If this parameter is omitted then the default value Oo777 is used.
exist_ok (optional): A default value False is used for this parameter. If the target directory already exists an OSError is raised if its value is False otherwise not.

Return Type: This method does not return any value. 
"""


# Use of os.makedirs() method to create directory.

# Python program to explain os.makedirs() method
	
# importing os module
import os
	
# Leaf directory
directory = "Nikhil"
	
# Parent Directories
parent_dir = "D:/Pycharm projects/GeeksForGeeks/Authors"
	
# Path
path = os.path.join(parent_dir, directory)
	
# Create the directory
# 'Nikhil'
os.makedirs(path)
print("Directory '% s' created" % directory)
	
# Directory 'GeeksForGeeks' and 'Authors' will
# be created too
# if it does not exists
	
	
	
# Leaf directory
directory = "c"
	
# Parent Directories
parent_dir = "D:/Pycharm projects/GeeksforGeeks/a/b"
	
# mode
mode = 0o666
	
path = os.path.join(parent_dir, directory)
	
# Create the directory 'c'
	
os.makedirs(path, mode)
print("Directory '% s' created" % directory)
	
	
# 'GeeksForGeeks', 'a', and 'b'
# will also be created if
# it does not exists
	
# If any of the intermediate level
# directory is missing
# os.makedirs() method will
# create them
	
# os.makedirs() method can be
# used to create a directory tree


