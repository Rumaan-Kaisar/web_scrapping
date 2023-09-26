
# ---------------    Selenium Tutorial #2    ---------------
# ----------------    Navigate browser using selenium    ----------------
# interact with a pge:
# type any text
# hit enter
# navigate differnt pages

# --------    access search bar    -------- 
    # search for a topic, 
    # grab the result

# Find the element by "inspect"
    # id : helps the best because it's UNIQUE
    # class : worst case 
    # name/value-name : not unique but doable
    # tags

    # Note: if above doesnot work, we can use the 'string representation' of the entire HTML element

from selenium import webdriver
from selenium.webdriver.common.by import By     # to search by class, name, id & more
from selenium.webdriver.common.keys import Keys     # to input "key-stroke"

driver = webdriver.Firefox()    # firefox can be run without webdriver
# driver.get("https://www.techwithtim.net/") 
driver.get("https://www.amazon.com/") 

# search_field = driver.find_element(webdriver.common.by.By.ID, 'twotabsearchtextbox')
# search_field.send_keys("cheese" + webdriver.common.keys.Keys.RETURN)

""" 
    <input type="text" id="twotabsearchtextbox" value="" name="field-keywords" autocomplete="off" placeholder="Search Amazon" class="nav-input nav-progressive-attribute" dir="auto" tabindex="0" aria-label="Search Amazon" spellcheck="false"> 
"""

search_field = driver.find_element(By.ID, 'twotabsearchtextbox')
search_field.send_keys("cheese" + Keys.RETURN)

search_field_2 = driver.find_element(By.CSS_SELECTOR, '[aria-label="Search Amazon"]')
search_field_2.send_keys("tomato ketchup" + Keys.RETURN)

# --------clearing the search-field--------
search_field_2 = driver.find_element(By.CSS_SELECTOR, '[aria-label="Search Amazon"]')
search_field_2.clear()

search_field_3 = driver.find_element(By.CSS_SELECTOR, '[placeholder="Search Amazon"]')
search_field_3.send_keys("vanilla icecream")
search_field_3.send_keys(Keys.RETURN)




# ---------    Bring the search results    ---------
""" 
    <span class="a-size-base-plus a-color-base a-text-normal">Triple Scoop Ice Cream Mix Sampler | Vanilla &amp; Chocolate - 2:1 | Ice Cream Starter | Use with Home Ice Cream Maker | No artificial colors or flavors | Ready in under 30 mins (3/15oz Boxes)</span> 
"""

from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support	import expected_conditions as EC
import time

search_field_3 = driver.find_element(By.CSS_SELECTOR, '[placeholder="Search Amazon"]')
search_field_3.send_keys("vanilla icecream")
search_field_3.send_keys(Keys.RETURN)

# print(driver.page_source)
item_list = driver.find_elements(By.CSS_SELECTOR, '[class="a-size-base-plus a-color-base a-text-normal"]')

i = 0
for item in item_list:
    parent = item.find_element(By.XPATH, "./..")    # get to the parrent elemnent
    # grab the text inside
    print(f"item {i} : ", item.text)
    # get the link by using 'get_attribute'
    print(f"item {i} link : ", parent.get_attribute('href'))
    i+=1



driver.switch_to.new_window('tab')
driver.close()  # closes the tab
print(driver.title)
driver.quit()   # closes the window




# ---------    By.CLASS_NAME, By.CSS_SELECTOR, By.ID, By.TAG_NAME    --------- 

fruits = driver.find_element(By.ID, "fruits")
fruit = fruits.find_element(By.CLASS_NAME,"tomatoes")
driver.find_element(By.CSS_SELECTOR, '[name="q"]').send_keys("webElement")
fruit = driver.find_element(By.CSS_SELECTOR,"#fruits .tomatoes")
  



# -----    use try-except & wait    -----
try:
    element = WebDriverWait(driver, 10).until(
        EC.presence_of_element_located((By.ID, "myDynamicElement"))
        )
except:
    driver.quit()

main = driver.find_element_by_id("main")



