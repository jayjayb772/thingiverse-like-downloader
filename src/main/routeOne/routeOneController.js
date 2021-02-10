const express = require('express');
const {debuglog} = require("../util/debugCommands");
const routeOneController = express.Router()

/**
 * @swagger
 *
 * /routeOneController/:
 *   get:
 *     description: Get
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Okay
 */
routeOneController.get('/', (req, res) => {
    debuglog("routeOneController home")
    res.send("routeOneController home");
})


module.exports = routeOneController;
