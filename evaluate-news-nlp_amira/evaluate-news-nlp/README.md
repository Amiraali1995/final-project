## Utilizing Natural Language Processing for News Article Analysis
The aim of this project is to develop a web application that empowers users to apply Natural Language Processing (NLP) techniques to articles or blog posts sourced from various websites. Upon submitting a URL pointing to an article, the application promptly performs sentiment analysis using the MeaningCloud API, extracting valuable insights from the article's content.

## Technology Stack
HTML
CSS (with Scss)
JavaScript
Node.js
Express.js
Webpack
MeaningCloud API
Jest
Workbox

## Setup Instructions
Ensure Node.js and npm are installed on your system by running the following commands in your terminal:
node -v
npm -v
cd <project directory>
git clone <repo>
npm install

## Select appropriate installations based on your development environment:
npm i -D @babel/core @babel/preset-env babel-loader
npm i -D style-loader node-sass css-loader sass-loader
npm i -D clean-webpack-plugin
npm i -D html-webpack-plugin
npm i -D mini-css-extract-plugin
npm i -D optimize-css-assets-webpack-plugin terser-webpack-plugin

## Install the dotenv package:
npm install dotenv

## Sign up to obtain the API key at meaningcloud.com.

Create a new .env file in the root directory of your project and populate it with your API key: API_KEY=**************************

## Initializing the Project
npm run build-prod
npm run build-dev
npm run start