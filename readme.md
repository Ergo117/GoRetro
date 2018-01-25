# GoRetro #

GoRetro is a marketplace where you can buy and sell nostalgic, vintage, and old-school belongings!

## Greenfield Team 
* [Peter Wang - Software Engineer](https://github.com/Ergo117) :star2: 
* [Tejaswi Guvvala - Software Engineer](https://github.com/tguvvala) :star2: 
* [Daniel Kelly - Scrum Master](https://github.com/DanielJKelly) :star2: 
* [Steven Lee - Product Owner](https://github.com/zaySeoul) :star2: 

## Dependencies
    "aws-sdk": "^2.181.0",
    "body-parser": "^1.18.2",
    "cookie-parser": "^1.4.3",
    "express": "^4.16.2",
    "express-session": "^1.15.6",
    "jquery": "^3.2.1",
    "mongoose": "^4.13.9",
    "nodemailer": "^4.4.1",
    "passport": "^0.4.0",
    "passport-facebook": "^2.1.1",
    "react": "^16.2.0",
    "react-dom": "^16.2.0",
    "react-form-validator-core": "^0.3.0",
    "react-route-props": "^1.0.4",
    "react-router-dom": "^4.2.2",
    "request": "^2.83.0",
    "semantic-react": "^0.12.0",
    "semantic-ui-react": "^0.77.2",
    "stripe": "^5.4.0",
    "underscore": "^1.8.3"

## To run the app locally
1. In the root directory of your app run ```npm install```
2. Sign up for a SendGrid account and take note of the username and password that you used to login to the site.
3. Sign in to Amazon Web Services. Locate and take note of your (IAM) credentials (API key and secret).
4. Create a bucket on AWS S3 with public read access. Keep track of the bucket name. [Make sure you set up CORS permissions](https://devcenter.heroku.com/articles/s3-upload-node).
5. Create a Facebook API Access Token (https://developers.facebook.com/docs/facebook-login/access-tokens/)
6. In the root of your app change the name of config.example.js to config.js. You can update your local variables here.
7. Start the React server by running ```npm run react-server```
8. Start the node server by running ```npm run server-dev```

## To Deploy the app
1. In the root directory of your app run ```npm install```
2. Sign up for a SendGrid account and take note of the username and password that you used to login to the site.
3. Sign in to Amazon Web Services. Locate and take note of your (IAM) credentials (API key and secret).
4. Create a bucket on AWS S3 with public read access. Keep track of the bucket name. [Make sure you set up CORS permissions](https://devcenter.heroku.com/articles/s3-upload-node).
5. Sign up for a free Heroku account.
6. [Create an empty app on Heroku](https://devcenter.heroku.com/articles/deploying-nodejs).
7. [Add the mLab MongoDB add-on to Heroku](https://elements.heroku.com/addons/mongolab).
8. Create a Facebook API token (https://developers.facebook.com/docs/facebook-login/access-tokens/) 
9. In the root of your app change the name of config.example.js to config.js. You can update your local variables here.
10. Set Heroku environment variables (from the Heoku CLI) for the following variables:
- AWS_ACCESS_KEY_ID
- AWS_SECRET_ACCESS_KEY
- S3_BUCKET
- SENDGRID_PASSWORD
- SENDGRID_USER
- MONGODB_URI (this should've already been added by the mLab add-on).
- CLIENT_ID
- CLIENT_SECRET
11. (This is a hack) Run ```npm run react-server```. Stop the server by pressing Ctrl + C. This will create a bundle.js file.
12. [Commit and push your app code to Heroku](https://devcenter.heroku.com/articles/deploying-nodejs)

## Future considerations
* Dynamic searching using Elastic Search
* Page refresh capability
* Payment option
* Chat
* “Build” meetups

##  Acknowledgments
The team at HackBlocks for allowing us to expand upon their codebase. 
