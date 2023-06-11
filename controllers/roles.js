const { request, response } = require("express");
const { dbAccesscreateRoles, dbAccessGetRoles } = require("../helpers/database/dbAccessRoles");
const handleServerError = require("../utils/response");



const createRole = async (req = request, res = response) => {
    
    
    try{
        const role = await dbAccesscreateRoles(req.body)

        return res.status(200).json(role);

    }catch(error){
        return handleServerError(res, error);
    }
}

const getRoles = async (req = request, res = response) => {
    try{
        const roles = await dbAccessGetRoles();

        return res.status(200).json(roles);

    }catch(error){
        return handleServerError(res, error);
    }
}

module.exports = {
    createRole,
    getRoles
}