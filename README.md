## facticee.github.io

A simple and customizable Home Server Dashboard for managing and organizing your Docker services in one place. (Can also be used as a library for your favourite Websites)

### Features

* Overview of all your Docker containers (or just have a library with your favourites websites)
* Quick access to services via custom links
* Display service names, ports, and URLs
* Easy to customize and deploy

## Setup
**For all Features:**
1. Download the html and css files and run them on your sever (for example with nginx)
2. To add your own card locate the button "+ Add Service" at the top and click it.
    -Set a Name, URL and optional a description. Note that the URL must start with http:// or https://
3. To delete cards, just double click the X on the bottom right when hovering over the card


## Important ‼️

### Testing online (facticee.github.io)
You can fully use and test this dashboard directly online via **facticee.github.io** because your card data is saved in the browser. **However**, please note how the live status checks behave when hosted online:

* 🔴 **Status Indicators:** If you add a local service (like `localhost:9000` or a local IP with a port), the status dot will show up as offline (red). This happens because the public website running on GitHub **cannot** access your private home network. (The button to redirect you to the local website will still work.. just te status indicator not). If the website is public (like https://github.com) the Status Indicator should alway work
  
* **Full Local Access:** If you want the status dots to turn green and work automatically, simply download the HTML/CSS files and host the dashboard locally on your own home server (e.g., via Nginx). **Like i have already explained in "Stepup"!**
