const { response } = require("express");

const handleServerError = (res= response, error) => {

    return res.status(500).json({
        message: 'Something went wrong',
        error: process.env.ENV === 'development' ? error: undefined
    })

}

module.exports = handleServerError;