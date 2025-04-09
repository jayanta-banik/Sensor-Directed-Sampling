from selenium import webdriver
from selenium.webdriver.common.by import By
from time import sleep
import os
import subprocess
from app import app

options = webdriver.ChromeOptions()
# options.add_argument("--headless")
options.add_argument("--no-sandbox")
options.add_argument("--start-maximized")
options.add_argument("--no-sandbox")  # Required for some environments
options.add_argument("--disable-gpu")  # Disable GPU acceleration
options.add_argument("--disable-infobars")  # Disable the info bar
options.add_argument("--disable-extensions")  # Disable extensions
options.add_argument("--disable-notifications")  # Disable notifications
options.add_argument("--start-maximized")  # Start maximized for better visibility
# Popup-specific configurations
options.add_argument("window-size=800,900")  # Set window size for the popup
options.add_argument("--app=http://127.0.0.1:5092/")  # Open the browser in app mode (popup)
options.add_experimental_option("excludeSwitches", ["enable-automation"])
options.add_experimental_option("useAutomationExtension", False)


driver = webdriver.Chrome(options=options)
# driver.get('http://127.0.0.1:5092/')
driver.implicitly_wait(3)
# process = subprocess.Popen(["python", "app.py"])
print("Flask app is running in the background.")
app.run(debug=True, port=5092, host='127.0.0.1', use_reloader=False)

try:
    print('App running...')
except Exception as e:
    print(f"Error occurred: {e}")
finally:
    print("Cleaning up...")
    driver.quit()
    # process.terminate()