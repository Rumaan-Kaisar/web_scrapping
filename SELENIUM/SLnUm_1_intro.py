
# ----------    intro    ----------
# install firefox
# pip install selenium

# -----    SELENIUM DOCUMENTATION    -----
# https://www.selenium.dev/documentation/webdriver/interactions/windows/


# --------------    Handling Window    --------------
# Get window handle:
    # WebDriver does not make the distinction between windows and tabs. 
        # If your site opens a new tab or window, Selenium will let you work with it using a window handle. 
        # Each window has a unique identifier which remains persistent in a single session. 
        # You can get the window handle of the current window by using:

driver.current_window_handle # '6b2bad8e-e24f-430a-9db9-9d6e26377c43'


# Switching windows or tabs:
    # Clicking a link which opens in a new window will focus the new window or tab on screen, 
        # but WebDriver will not know which window the Operating System considers active. 
        # To work with the new window you will need to switch to it.
    # Selenium 4 provides a new api 'NewWindow' which creates a new tab (or) new window and automatically switches to it.

from selenium import webdriver
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC

with webdriver.Firefox() as driver:
    # Open URL
    driver.get("https://seleniumhq.github.io")

    # Setup wait for later
    wait = WebDriverWait(driver, 10)

    # Store the ID of the original window
    original_window = driver.current_window_handle

    # Check we don't have other windows open already
    assert len(driver.window_handles) == 1

    # Click the link which opens in a new window
    driver.find_element(By.LINK_TEXT, "new window").click()

    # Wait for the new window or tab
    wait.until(EC.number_of_windows_to_be(2))

    # Loop through until we find a new window handle
    for window_handle in driver.window_handles:
        if window_handle != original_window:
            driver.switch_to.window(window_handle)
            break

    # Wait for the new tab to finish loading content
    wait.until(EC.title_is("SeleniumHQ Browser Automation"))


# Create new window (or) new tab and switch : 
driver.switch_to.new_window('tab')  # Opens a new tab and switches to new tab
driver.switch_to.new_window('window')   # Opens a new window and switches to new window


# Closing a window or tab :
driver.close()  # Close the tab or window
driver.switch_to.window(original_window)    # Switch back to the old tab or window


# Quitting the browser at the end of a session:
driver.quit()





# --------------    selenium test    --------------
# For more visit: https://www.browserstack.com/guide/python-selenium-to-run-web-automation-test

from selenium import webdriver
from selenium.webdriver.common.keys import Keys

# Next, create an instance of Chrome with the path of the driver you downloaded through the websites of the respective browser. 
# This example assumes the driver is in the same directory as the Python script you will execute.

# driver = webdriver.Chrome('./chromedriver')
driver = webdriver.Firefox()

# .get() method starts loading a website and waits for it to render completely before moving on to the next step.
driver.get("https://www.python.org")

# use the .title attribute to access the textual title of the webpage.
print(driver.title)

# submit a query in the search bar
# search_bar = driver.find_element(By.locator("q"))   # wont work
# search_bar = driver.find_element_by_id("//input[@id='search__input']")
# You now need to use:

# ------------     driver.find_element("name", "q")     ------------
# In your example, it would become:

search_box = driver.find_element("name", "q")
search_box.clear()
search_box.send_keys("getting started with python")
search_box.send_keys(Keys.RETURN)

search_box = driver.find_element("name", "q")
search_box.clear()
search_box.send_keys('ChromeDriver')
search_box.submit()





# ----------------------    MOZILLA DOC : first use    ----------------------
# https://developer.mozilla.org/en-US/docs/Web/WebDriver

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support.expected_conditions import presence_of_element_located



with webdriver.Firefox() as driver:
# with webdriver.Chrome() as driver:

    
    driver.get("http://google.com/ncr")
    wait = WebDriverWait(driver, 10)
    driver.find_element(By.NAME, "q").send_keys("cheese" + Keys.RETURN)
    wait.until(presence_of_element_located((By.XPATH, '//*[@id="rcnt"]')))
    results = driver.find_elements(By.XPATH, "//a[@href]")

    for i, elem in enumerate(results):
        print(f'#{i} {elem.text} ({elem.get_attribute("href")})')





#	---------------    Selenium Tutorial #1    ---------------
#	https://sites.google.com/a/chromium.org/chromedriver/downloads 
from selenium import webdriver

# PATH = "C:Hrogram Files (x86)\chromedriver.exe"   # for chrome browserr
# driver = webdriver.Chrome(PATH)
driver = webdriver.Firefox()    # firefox can be run without webdriver
driver.get("https://developer.mozilla.org/en-US/docs/Web/WebDriver") 

driver.switch_to.new_window('tab')
driver.close()  # closes the tab
driver.quit()   # closes the window

# Note: No need of giving path of Firefox driver . It is the default browser for web driver. Just need to initialize the Firefox driver.
# WebDriver driver=new FirefoxDriver();
# When using Selenium 3 , you have to download geckodriver.

