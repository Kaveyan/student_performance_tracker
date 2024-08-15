const express = require('express');
const Router = express.Router();
const {
    uploadachivement,
    uploadcertificate,
    uploadclanguage,
    uploadlanguage,
    uploadproject,
    uploadps
} = require('../controller/uploadcontroller');

Router.post('/achivement', uploadachivement);
Router.post('/certificate', uploadcertificate);
Router.post('/clanguage', uploadclanguage);
Router.post('/language', uploadlanguage);
Router.post('/project', uploadproject);
Router.post('/ps', uploadps);

module.exports = Router;
