const express = require('express')
const router = express()

/**
 * IMPORT CONTROLLER 
 */
const {
    createUser,
} = require('../controller/userController/index')

/**
 * REGISTER USER
 */
router.get('/',
    async(req, res) => {
        try {
            var ctrlResponse = await createUser.create(req);
            res.send(ctrlResponse)
        } catch (err) {
            res.send(err)
        }
    })

module.exports = router