const crypto = require('crypto-js')

function createResult(error, data){
    if (error) {
        // sending error response
        return createError(error)
    } else {
        // sending success response
        return createSuccess(data)
    }
}

function createError(error){
    return {
        status: 'error', error
    }
}

function createSuccess(data){
    return {
        status: 'success', data
    }
}

function encryptedPassword(password){
    return String(crypto.SHA256(password))
}

module.exports = {
    createResult,
    createError,
    createSuccess,
    encryptedPassword
}