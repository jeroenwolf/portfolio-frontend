# My portfolio / personal website

I have created a personal / portfolio website about myself. Sort of an extension of my LinkedIn and resume. While I am mainly a back-end
Java developer I still wanted to create a personal website to tell more about myself as a developer. Even if I cannot really showcase anything 
like a front-end developer. 

I wanted to create the website as much as possible in plain HTML5, CSS3 and JavaScript (without the use of jQuery). 

## Responsive Web Design

The website is built with techniques for responsive web design such as CSS3 media queries and CSS Grid.

Instead of using float/clear or flex for the layout I used CSS Grid. Very easy to set up. Main advantage for me is that the layout can 
be configured differently for each media query.

### Warning

Because of CSS Grid and JavaScript ES6 the website won't properly work in IE 11 and below. I assume (;-)) that the people who want 
to look on my website are people that work at least with Chrome, Firefox and Edge.

## Front-end technologies / libraries used
Following techniques are used:

* HTML5
* CSS3
* JavaScript (ES6)
    * Adding click event listeners to links to show less/more information for the mobile views
        * I am using the standard toggle between display none and display block in CSS
    * The interaction on the circle below right side of the screen to go up quickly to the top 
* CSS Grid
* Media Queries
    * supports the default view of mobile and a media query for the desktop view
* Font Awesome v5.2.0 for the icons
* NPM
* Webpack
    * To bundle the JavaScript
    * To copy the front-end files to the 'dist' folder
* Lite-server
* ESLint
    * This will check the JavaScript for mistakes
* Postcss
    * Minify the CSS    

### Validating the website on markup 
I have validated the website on markup validity by using the W3C Markup Validation Service:  
https://validator.w3.org/

## Set up locally
The following command (by using ESLint) will to check the JavaScript code for mistakes.
```
npm run lint
```

Install the website locally in the 'dist' folder and minify the CSS:
```
npm run build
```

The following commands will run a lite server (on localhost:3000) and open the Chrome browser to run the website.
```
npm run start
```
or
```
npm run lite
```

## How to set up the Firebase Web Hosting configuration

I am using the Firebase Web Hosting platform for running my personal / portfolio website. You will get free HTTPS SSL as well.

### To connect your local machine to Firebase
Run the following command:
```
firebase login
```

### The Firebase init command creates a firebase.json configuration file in the root of your project directory.
Run the following command:
```
firebase init
```

For security reasons I have added the file **.firebaserc** to the **.gitignore**.

## How to deploy to Firebase Web Hosting

### To deploy your site to Firebase Web Hosting 
You can skip the two above commands when you already have set up the Firebase configuration files locally. It will deploy 
the front-end files from the 'dist' folder. The configuration for this is described in **firebase.json**.

The following command will deploy the front-end files from the 'dist' folder to the Firebase Web Hosting:
```
firebase deploy
```

## Useful websites to determine the speed of your own website
Optimize your own website:

* https://developers.google.com/speed/pagespeed/insights/
* https://www.thinkwithgoogle.com/intl/en-gb/feature/testmysite
* https://search.google.com/test/mobile-friendly
    * To test if your own website is mobile friendly

## Future implementations / To Do
Implementations that are on the to do list:

* Support English text so it can be read as well in Dutch or English
* Add unit test code for the JavaScript (yes I know :-( )
* Add an integration test
* Add a warning on the screen if the website is not working properly because of IE 11 and below
    * Because of CSS Grid and JavaScript ES6
* Give level of experience for each technology
* Rewrite the website to Angular or React or Vue.js
* Add a blog
    * I would like to implement this with Firebase Cloud Functions (maybe for adding comments and storing the comments in Firebase Cloud Firestore)

## Issues    
Issues that can be fixed:

* Fix issue missing header in section "areaPicture". According the W3C a header is mandatory within a section in HTML.
* Support favicons for different sizes
* Properly resize the image depending on the screen
    * Compress the images 