# KSL Alerts

## About

KSL.com is Utah's #1 source for News, Sports, Weather and Classifieds. The Classifieds section in particular is widely used to find used items for sale locally.

KSL Alerts is a tool designed to facilitate the use of the Classifieds section. It allows users to keep track of various searches, all up-to-date and in one place.

## Features

### Web scraping
Web scraping of KSL Classifieds is done via the Cheerio.js library, http request via the request library, and custom server side code to scrape and gather the data we need from the body of the classified pages.

How it works:
1. Upon hitting *Create Alert* button an http call is made to the server at our api's web scraper route
5. The web scraper route makes an http **request** call to the specific url passed in and loads up Cheerio.js
6. Cheerio.js and custom code parses the html body into an array of elements to navigate to and extract the data needed
7. The server returns the response of found and filtered data back to the frontend
8. Frontend React components update their state with the data (or listings) found and render the listings in beautifully designed card components

### Payments


## Technology
This application uses the MERN (MongoDB, Express, React, Node) stack.
Web scraping is done with the Cheerio.js library.
Payments are done through the Stripe API.

## Contributers
This project was developed by a group of Lambda School students for their capstone project.

Engineering Team:

* Ja Navey
* Max Washington
* Tramane Hall
* Tyson Williams

Project Manager:
* Nikhil Kamineni

### KSL Alerts Website:
[KSL Alerts](https://www.classified-alert.com/)
