/**
 * NPM PACKAGES
 */
const express = require('express')
var app = express();
const path = require('path');
var avenue = require('./routes/index')
var fileUpload = require('express-fileupload')
var http = require("http").Server(app);
const cors = require('cors');

/**
 * FILE UPLOAD
 */
app.use(fileUpload({
    useTempFiles: false,
}));

/**
 * FILE READER PATH
 */
app.use(express.static('./public/upload'));
app.use(express.static(path.join(__dirname, './public')));
/**
 * ROUTING PATH
 */
var users = avenue.users

require('dotenv').config();
const PORT = process.env.port || 8080

/**
 * CORS
 */
app.use(cors())

// Add headers before the routes are defined
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
/**
 * BODY PARSER
 */
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

/**
 * END-POINT
 */
app.use('/api/v1/users', users);

/**
 * APPLICATION LISTEN
 */
http.listen(PORT, () => {
    console.log(`Express server is running on port ${PORT}`);
})