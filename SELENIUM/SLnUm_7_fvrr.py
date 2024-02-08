

# ------------    access fiverr using 'Brave':: view page source    ------------
from pywinauto import Application
import time
import pywinauto
import pyperclip # Use pyperclip to copy/paste from clipbord

app_2 = Application(backend='uia')
app_2.connect(title_re=".*Brave.*")
srch_bar = "Address and search bar"
brave_windw = app_2.top_window()
get_2 = brave_windw.child_window(title=srch_bar, control_type="Edit")
get_2.type_keys("^l")
get_2.type_keys("https://www.fiverr.com{ENTER}")
time.sleep(10)
brave_windw.type_keys("^s")
time.sleep(5)
# Wait for the "Save As" dialog to appear
save_as_dialog = app_2.window(title="Save As")

# Enter the file name and path (adjust as needed)
save_as_dialog.child_window(title="File name:", control_type="Edit")

.set_edit_text("C:\\example.mhtml")

# Click the "Save" button
save_as_dialog.child_window(title="Save", control_type="Button").click()

# Wait for the file to be saved
time.sleep(2)  # Adjust this wait time as needed


app_2.connect(title_re=".*Brave.*")
brave_windw.type_keys("page_1.mhtml")

# pywinauto.mouse.click(button='right', coords=(245, 302))
# time.sleep(6)
# pywinauto.mouse.click(button='left', coords=(280, 560))
# time.sleep(10)

# pywinauto.mouse.click(button='left', coords=(245, 302))
brave_windw.type_keys("^a")
brave_windw.type_keys("^c")
# brave_windw.send_keys('^a^c')
print(brave_windw.type_keys('+{INS}'))

brave_windw.type_keys('+{INS}').get_selection()


from pywinauto import clipboard

# Get text from the clipboard
clipboard_text = clipboard.GetData()

# Print the text
print("Text from clipboard:", clipboard_text)

# Works!!!



