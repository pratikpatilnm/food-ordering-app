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

module.exports = {
    createResult,
    createError,
    createSuccess
}