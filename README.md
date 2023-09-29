# Companion Planting

## Description
Companion Planting is a full-stack application that uses Express.js in a Node.js environment. A site for gardeners to connect with other gardeners who are growing in similar plant hardiness zones. 

[Click Here for app deployed through Heroku.](https://companion-planting-ecec108bfc1e.herokuapp.com/login)

[Click Here for link to our GitHub repo.](https://github.com/aceiln/GardnersSpot)

## Table of Contents
- [Installation](#installation)
- [Tech Used](#tech-used)
- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [Preview](#preview)
- [Resources](#resources)
- [License](#license)

## Installation
To use this command-line application, follow these steps:
1. Make sure you have Node.js and mySQL installed on your system.
2. Clone the repository or download the source code.
3. Navigate to the project directory in your terminal.
4. After installing the dependencies and creating a .env on your local machine, you can invoke the application using `node index.js` or `npm start`
5. Check out our application in your browser using your local host..
​
## Tech Used
Node.js for the runtime environment. 
Express.js for the framework. 
Handlebars.js as the template engine.
MySQL and the sequelize ORM for the database.
We have included normalize.css untouched and built upon it, overriding the defaults in our style.css

## User Story
As a gardener, I want to connect with other gardners according to plant hardiness zones in order to create a place/forum to troubleshoot with others who share similar climate issues, so that we can grow and expand successful gardens.

## Acceptance Criteria 

WHEN the page loads, 

THEN I am presented with a login page where I can either login or create an account.

WHEN I am logged in, 

THEN I am redirected to the homepage where I can see a plant hardiness map and identify which zone I am growing in. 

WHEN I select click the zone button I belong to,

THEN I am directed to a blog-style forum where I can join and contribute to conversations with people growing in my same plant hardiness zone.

## Preview
![alt text](/public/assets/login_preview.png)

![alt text](/public/assets/preview_image.png)

![alt text](/public/assets/blog_preview.jpg)

## Resources:
[Widget code that enables user to enter their zipcode and find their hardiness zone came from here.](https://www.plantmaps.com/hardiness-zone-zipcode-search-widget.php)

[Text about each zone comes from this site.](https://gilmour.com/planting-zones-hardiness-map)

[Link to GitHub repo for normalize.css](https://github.com/necolas/normalize.css/blob/master/normalize.css)

## License:
![License](https://img.shields.io/badge/License-MIT%20License-brightgreen)  
[License](./LICENSE)
This application is covered under the [MIT License](./LICENSE) license.