## facticee.github.io

A simple and customizable Home Server Dashboard for managing and organizing your Docker services in one place.

Features

* Overview of all your Docker containers
* Quick access to services via custom links
* Display service names, ports, and URLs
* Easy to customize and deploy

Setup

1. Download the html and css files and Open the index.html file.
2. Locate the data-url attribute inside each dashboard card.
3. Replace the default URL with your own server address and port.

Example:

a href="http://localhost:9900"

Change it to:

a href="http://YOUR_SERVER_IP:PORT"


Important ‼️

If you test the dashboard directly on facticee.github.io, the service cards will not redirect you to your Docker services. This is intentional.

The dashboard is only a template and cannot know the IP addresses, domains, or ports of your personal Home Server.


⸻

Created as a lightweight dashboard template for Home Server and Docker enthusiasts.
