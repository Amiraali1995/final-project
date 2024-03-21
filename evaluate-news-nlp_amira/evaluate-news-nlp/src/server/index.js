// Import required modules and libraries. `body-parser` is used to parse incoming request bodies,
// `dotenv` for loading environment variables, `express` for the web server framework,
// and `cors` to enable CORS (Cross-Origin Resource Sharing) for the server.
const body_Parser = require('body-parser');
const dot_env = require('dotenv');
const express = require('express');
const cors = require('cors');
// Define the default port the server will listen on, either from the environment variable or default to 8080.
const PORTS = process.env.PORTS || 8080;
let user_Input = [];
dot_env.config();
port = 8080
// Create an Express application instance.
const app_express = express();
const key= process.env.API_KEY
app_express.use(cors());
app_express.use(body_Parser.urlencoded({ extended: false }));
app_express.use(body_Parser.json());
app_express.use(express.static('dist'));
console.log(__dirname);
const base_URL = 'https://api.meaningcloud.com/sentiment-2.1';
console.log(`The Key is ${process.env.API_KEY}`);

app_express.get('/', function(reqest, res) {
    res.sendFile(path.resolve('src/client/views/index.html'))
});

const mock_API_Response = require('./mockAPI.js');
app_express.get('/test', function(reqest, res) {
    res.send(mock_API_Response);
});

app_express.post('/api', async function(reqest, res) {
    user_Input = reqest.body.url;
    console.log(`You entered: ${user_Input}`);
    const api_URL = `${base_URL}key=${key}&url=${user_Input}&lang=en`;

    try {
         // Use `fetch` to make an API request (note: `fetch` is not available in Node.js by default,
        // so this would actually cause an error unless a polyfill or alternative library is used).
        const responses = await fetch(api_URL);
        const mc_Data = await responses.json();
        console.log(mc_Data);
        res.send(mc_Data);
    } catch (errors) {
        console.errors('Error fetch data:', errors);
        res.status(500).send({ errors: 'An error occurred' });
    }
});
// Start the server and listen on the defined PORT. Log a message to indicate success.
app_express.listen(PORTS, function() {
    console.log(` listening app  on port number ${PORTS}!`);
});