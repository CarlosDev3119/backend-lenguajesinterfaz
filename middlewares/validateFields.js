const Ajv = require('ajv');
const addFormats = require( "ajv-formats" );
const { request, response } = require('express');


// validate schemas
const validateFields = (schema) => {

    return  (req= request, res = response, next) => {

        const ajv = new Ajv( schema );
        addFormats(ajv);

        let validate =  ajv.compile( schema );

        if( validate(req.body) ){
            next();
        }else{
            return res.status(400).json({errors: validate.errors?.map( ({params, instancePath, message}) => {return {param: params, location: instancePath, msg: message}})})
        }
    }
}

module.exports = {
    validateFields,
}