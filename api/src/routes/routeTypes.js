const { Router } = require('express');
const  handleType  = require("../handlers/handleType")

const tRoute = Router();


tRoute.get('/', handleType);

module.exports = tRoute
