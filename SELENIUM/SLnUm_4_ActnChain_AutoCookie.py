
# ---------------    Selenium Tutorial #4    ---------------
# ----------------    ActionChains & Automating Cookie Clicker    ----------------
    # Drag & Drop
    # Double click
    # Long press

# Automating "cookie clicker" game

# Be Careful: we're about to creating a bot.
    # Some sites can detect "BOTs"
    # You can get banned


# ---------    ACTION CHAINS    ---------
# More on SELENIUM documnetation
# click, click_and_hold, context_click, double_click, drag_and_drop

from selenium import webdriver
from selenium.webdriver.common.by import By
from selenium.webdriver.common.action_chains import ActionChains
import time

driver = webdriver.Firefox()

driver.get("https://orteil.dashnet.org/cookieclicker/")

# ----    wait untill it loads 
# driver.implicitly_wait(40)
time.sleep(10)
langs = driver.find_element(By.ID, "langSelect-EN")
langs.click()

driver.get("https://orteil.dashnet.org/cookieclicker/")


# Game goal:
    # click the coockie
    # get hoe many cookies wwe have
    # upgrade, from the side-bar

# inspect the elements: 
    # <div class="langSelectButton title" style="padding:4px;" id="langSelect-EN">English</div>
    # Cookie to click:      <button id="bigCookie"></button>
    # No. of cookies:      <div id="cookies" class="title">2 cookies<div id="cookiesPerSecond">per second: 0</div></div>

# wait untill the page is loaded. Use 'implicit wait'
    # to make sure the following element exist on which the action is applied


# ----    wait untill it loads 
# driver.implicitly_wait(40)
time.sleep(10)


cookie = driver.find_element(By.ID, "bigCookie")
cookie_count = driver.find_element(By.ID, "cookies")


# upgrade the cookie clicker
    # <div class="icon" id="productIcon0" style="background-position: 0px 0px;"></div>
        # <span class="price" id="productPrice0">15</span>
    # <div class="icon" id="productIcon1" style="background-position: 0px -64px;"></div>
        # <span class="price" id="productPrice1">100</span>

# instead of variables, we load them in a list. To loop through the items to see the upgrade
itms = [driver.find_element(By.ID, "productPrice"+str(itm)) for itm in range(1, -1, -1)]
# above is a list comprehesion, ranges from 1, 0 with -1 inrement. 
    # it loads productPrice1 and then productPrice0
    # we did it in reverse order to upgrate the expensive-one first


# -----    'action-chain' to press COOKIE    -----
# create an action_chain object that can act on this 'driver'
    # we'll setup action chains by creating the instance of the following object
actn = ActionChains(driver)
actn.click(cookie)
# However it doesn't worked, we had to define inside the for-loop

# how it works: 
    # WE CREATE pre-defined list of actions to perform in a specific sequence
    # we dont exucet all action at once. We store them in a variable
    # Then we execute the set-of-actions by using "perform()"
    # e.g. 
        # actions.click()
        # actions.perform()    # click() is not perfprmed untill perform() is called


""" 
# --------    just press the cookie    --------
for i in range(10):
    actn = ActionChains(driver)
    actn.click(cookie)
    actn.perform()
    count = int(cookie_count.text.split(" ")[0])
    print(count)
    time.sleep(.1)

"""


# --------    press the cookie and upgrade    --------
for i in range(200):
    actn = ActionChains(driver)
    actn.click(cookie)
    actn.perform()
    count = int(cookie_count.text.split(" ")[0])    # how many cookies we have
    print(count)
    # for item in itms:
    for item in [driver.find_element(By.ID, "productPrice1"), driver.find_element(By.ID, "productPrice0")]:
        value = int(item.text)  # get the price to upgrade
        if count >= value:      # if we have enough cookie, purces the upgrade
            # upgrade action chain
            upgd_actn = ActionChains(driver)    # create action object
            upgd_actn.move_to_element(item)     # move the cursor to the element "item"
            upgd_actn.click()   # click the item
            upgd_actn.perform()     # perfom the action
    time.sleep(.01)

# since the "item" is changing, we define the corresponding action-chain inside the loop

driver.quit()

# python SLnUm_4_ActnChain_AutoCookie.py