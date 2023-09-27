
# ---------------    Selenium Tutorial #3    ---------------
# ----------------    Navigate browser using selenium    ----------------

# get to specific pages by clicking links
# click on buttons
# back to the starting page

from selenium import webdriver
from selenium.webdriver.common.keys import Keys
from selenium.webdriver.common.by import By
import time

driver = webdriver.Firefox()

driver.get("https://www.ml.cmu.edu/people/core-faculty.html")

link = driver.find_element(By.LINK_TEXT, "Zachary Lipton")
link.click()
# we need to wait untill the page loades, then we apply click()



# we make sure the element exists before we click it
    # use try-except
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support  import expected_conditions as EC

try:
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.LINK_TEXT, "Beginner Python Tutorials"))
    )
    element.click()

    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "sow-button-19310003"))
    )
    element.click()

    # going back to the start-page
    driver.back()
    driver.back()
    driver.back()

    # going forward
    driver.forward()
    driver.forward()


except:
    driver.quit()


# -----    clear search-text-field before input    -----
search_field_2 = driver.find_element(By.CSS_SELECTOR, '[aria-label="Search Amazon"]')
search_field_2.clear()


driver.quit() 

