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
Payments are done via the Stripe API and written in Node.js.

How it works:
1. When a user tries to create an alert beyond the max limit, currently set at 3, a prompt will appear stating the user has reached the max limit and needs to sign up for a premium plan, and then takes the user to the **Billing** page
2. On the Billing page a `Stripe` component with pricing text and a call to action button is displayed
3. Clicking the `Stripe` button displays a `Stripe` input form
4. Upon filling out the form and clicking the pay button, the `Stripe` component makes a call to the server, which reaches out with the inputted form data to the `Stripe` API
5. Once successfullly paid a popup is displayed with a success message, a call is made to the database to update the user's subscriptions status from 'free' to 'premium', the app's state is updated with the new subscription status, and the user is taken to the **Create Alert** page with unlimited alerts unlocked :)

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
