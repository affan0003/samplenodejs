const usersController = require('./userController')
const adminController = require('./adminController')
const notificationController = require('./notificationController')
const stripeController = require('./stripeController')
const postController = require('./feedsController')
const commentController = require('./commentController')
const versionController = require('./versionController')
const authenticationController = require('./authenticationController')
module.exports = {
    usersController,
    adminController,
    notificationController,
    stripeController,
    postController,
    commentController,
    versionController,
    authenticationController
}