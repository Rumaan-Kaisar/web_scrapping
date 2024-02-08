
# before using:
    # connect to a VPN server
    # use 'https://www.vpnbook.com/'

# ---------------    Selenium Application    ---------------
from curses.ascii import ctrl
from msilib import type_key
from multiprocessing.connection import wait
from time import time
from tkinter.tix import PopupMenu
from selenium import webdriver
from selenium.webdriver.common.by import By     # to search by class, name, id & more
from selenium.webdriver.common.keys import Keys     # to input "key-stroke"


driver = webdriver.Firefox()    # firefox can be run without webdriver
# Selenium: geckodriver executable needs to be in PATH?
    # The best way to fix this error is to use the webdriver-manager package. 
    # It will make sure that you have a valid geckodriver executable in PATH and if it is not available, 
    # it will download it automatically. You can install it using PIP:
# pip install webdriver-manager

# Fixing issue: in that case use following code to install 'gecodriver'
from selenium.webdriver.firefox.service import Service
from webdriver_manager.firefox import GeckoDriverManager
driver = webdriver.Firefox(service=Service(GeckoDriverManager().install()))


# after fix, following should run
driver = webdriver.Firefox()    # firefox can be run without webdriver

driver.get("https://www.fiverr.com/") 


driver.quit()   # closes the window



# selenium in any browser
# https://stackoverflow.com/questions/72331816/how-to-connect-to-an-existing-firefox-instance-using-seleniumpython

C:\Program Files\Mozilla Firefox\

firefox.exe -marionette -start-debugger-server 2828 //only use 2828

CMD:

C:\Program Files\Mozilla Firefox\

firefox.exe -marionette -start-debugger-server 2828 //only use 2828
Python Script:

from selenium import webdriver

driver = webdriver.Firefox(executable_path = "YOUR GECKODRIVER PATH", service_args = ['--marionette-port', '2828', '--connect-existing'] )

pageSource = driver.page_source
print(pageSource)




First Step:

Open CMD and execute: firefox.exe --marionette

This command will open a firefox instance that has its marionette-port=2828 (by default)

(writes about:config in url bar of the firefox instance, press enter and then search: marionette.port)
Then:

from selenium import webdriver
from selenium.webdriver.firefox.service import Service

firefox_services = Service(executable_path='firefoxdriver', port=3000, service_args=['--marionette-port', '2828', '--connect-existing'])
driver = webdriver.Firefox(service=firefox_services)
driver.get('https://youtube.com')
driver.execute_script('alert(\'your favorite music is here\')'


executable_path='firefoxdriver'
My geckodriver.exe is inside firefoxdriver folder

Screenshot my VSCode

port=3000
I want to send my 'geckodriver orders' throught port 3000

service_args=['--marionette-port', '2828', '--connect-existing']
I want to control an open firefox instance that has its marionette-port=2828

I got the same error but it worked when I used the default Marionette port of 2828. 
Go to about:config in your Firefox and look up marionette.port, 
and make sure it is the same as the port in your web driver's service_args. 
Then, start a Firefox instance simply with the -marionette option but without the -start-debugger-server option.


# pip install pywinauto
from pywinauto import Application
import time

# Start Firefox
firefox = Application(backend="uia").start("firefox.exe")

# Wait for Firefox to open
time.sleep(5)

# Find the Firefox window
firefox_window = firefox.window(title_re=".*Mozilla Firefox")

# Maximize the window (optional)
firefox_window.maximize()

# Navigate to a URL
firefox_window.type_keys("^l")  # Press Ctrl+L to focus the address bar
firefox_window.type_keys("https://www.example.com{ENTER}")

# Wait for the page to load
time.sleep(5)

# Perform further actions, such as clicking buttons or filling forms
# For example:
# firefox_window.click_input(coords=(100, 100))  # Click at coordinates (100, 100)

# Close Firefox
firefox_window.close()



# works!!!!
from pywinauto import Application # pip install pywinauto

app = Application(backend='uia')

app.connect(title_re=".*Chrome.*")

element_name="Address and search bar"

dlg = app.top_window()

url = dlg.child_window(title=element_name, control_type="Edit").get_value()

print(url)

dlg.type_keys("https://www.youtube.com{ENTER}")
get_1 = dlg.child_window(title=element_name, control_type="Edit")
get_1.type_keys("^l")
get_1.type_keys("https://www.youtube.com{ENTER}")
dlg.close() # close chrome



# ------------    access fiverr using 'Brave'    ------------
from pywinauto import Application
import time
import pywinauto
app_2 = Application(backend='uia')
app_2.connect(title_re=".*Brave.*")
srch_bar = "Address and search bar"
brave_windw = app_2.top_window()
get_2 = brave_windw.child_window(title=srch_bar, control_type="Edit")
get_2.type_keys("^l")
get_2.type_keys("https://www.fiverr.com{ENTER}")

pywinauto.mouse.click(button='right', coords=(245, 302))
time.wait(1000)
pywinauto.mouse.click(button='left', coords=(280, 540))
# pywinauto.mouse.click(button='left', coords=(280, 560))



# brave_windw.type_keys("+{F10}")
# brave_windw.type_keys("{down 10}")
# pywinauto.mouse.click(button='left', coords=(0, 0))




# -------------   mouse   ---------------
import mouse
import time
 
# left click
mouse.click('left')
# right click
mouse.click('right')
# middle click
mouse.click('middle')

# get the current location of your mouse
mouse.get_position() 
#current position of the mouse using the "position" function
position = mouse.position()
print(position)

(245, 302)

pywinauto.mouse.click(button='left', coords=(245, 302))
pywinauto.mouse.click(button='right', coords=(245, 302))
time.wait(1000)
pywinauto.mouse.click(button='left', coords=(280, 540))
# pywinauto.mouse.click(button='left', coords=(280, 560))


# app_2.PopupMenu.wait('ready').menu().get_menu_path('Inspect')[0].click_input()
# app_2.PopupMenu.get_menu_path('Inspect').click_input()

popup_menu = Desktop(backend='uia').window(title="Context")
popup_menu['Inspect'].click_input()




# Modifiers:

'+': {VK_SHIFT}
'^': {VK_CONTROL}
'%': {VK_MENU} a.k.a. Alt key
Example how to use modifiers:

send_keys('^a^c') # select all (Ctrl+A) and copy to clipboard (Ctrl+C)
send_keys('+{INS}') # insert from clipboard (Shift+Ins)
send_keys('%{F4}') # close an active window with Alt+F4
Repetition count can be specified for special keys. {ENTER 2} says to press Enter twice.






# ------------    access fiverr using 'Brave':: view page source    ------------
from pywinauto import Application
import time
import pywinauto
app_2 = Application(backend='uia')
app_2.connect(title_re=".*Brave.*")
srch_bar = "Address and search bar"
brave_windw = app_2.top_window()
get_2 = brave_windw.child_window(title=srch_bar, control_type="Edit")
get_2.type_keys("^l")
get_2.type_keys("view-source:https://www.fiverr.com{ENTER}")
pywinauto.mouse.click(button='left', coords=(245, 302))
p = brave_windw.type_keys("^a^c")
data = pywinauto.clipboard.GetData()


# Use pyperclip.

import pyperclip

# set the clipboard
pyperclip.copy('some text')

# get the clipboard
pyperclip.paste()



# ------------    access fiverr using 'Brave':: view page source    ------------
from pywinauto import Application
import time
import pywinauto
app_2 = Application(backend='uia')
app_2.connect(title_re=".*Brave.*")
srch_bar = "Address and search bar"
brave_windw = app_2.top_window()
get_2 = brave_windw.child_window(title=srch_bar, control_type="Edit")
get_2.type_keys("^l")
get_2.type_keys("view-source:https://www.fiverr.com{ENTER}")
pywinauto.mouse.click(button='left', coords=(245, 302))
p = brave_windw.type_keys("^a^c")
data = pywinauto.clipboard.GetData()


# Use pyperclip.

import pyperclip

# set the clipboard
pyperclip.copy('some text')

# get the clipboard
pyperclip.paste()