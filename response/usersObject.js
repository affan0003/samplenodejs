var fs = require('fs')
var helpers = require('../helpers/helpers')
// var check = require('../public/upload/profile')
/**
 * USER RESPONSE FUNCTION
 * @param {Object} data 
 * @param {String} token 
 * @returns Object
 */
async function usersObjectRes(data, token) {
    var encryptFunc = await helpers.encryptData(data.id)
    var path = process.env.userProfilePath + data.profile
    userData = {
        token: token,
        firstName: data.firstName,
        lastName: data.lastName,
        id: encryptFunc,
        username: data.username,
        email: data.email,
        phone: data.phone ? data.phone + '' : '',
        countryCode: data.countryCode ? data.countryCode + '' : '',
        dateOfBirth: data.dateOfBirth != "0000-00-00" ? data.dateOfBirth : "",
        address: data.address,
        loginType: parseInt(data.loginType),
        latitude: data.latitude,
        longitude: data.longitude,
        isNotification: data.isNotification,
        isBlock: data.isBlock,
        googleId: data.googleId,
        facebookId: data.facebookId,
        appleId: data.appleId,
        socketId: data.socketId,
        createdAt: data.createdAt,
        updatedAt: data.updatedAt
    }
    var imageArray = data.profile.split(',')
    var returnImage = [];
    for (let i = 0; i < imageArray.length; i++) {
        if (imageArray[i] != "") {
            returnImage.push(process.env.imagePathUser + imageArray[i])
        } else {
            returnImage.push(imageArray[i])
        }
        var checkImg = fs.existsSync(path)
        if (checkImg == false) {
            returnImage.push("")
        }
    }
    userData.profile = returnImage;
    return (userData)
}

module.exports = {
    usersObjectRes
}