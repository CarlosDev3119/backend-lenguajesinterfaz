const { request, response } = require("express");
const handleServerError = require("../utils/response");
const { dbAccessCreateUser, dbAccessGetUsers } = require("../helpers/database/dbAccessUsers");
const { createJWT } = require("../helpers/jwt/generateJWT");



const createUser = async (req = request, res = response) => {

    const { name_user, pass, email, id_role } = req.body;
    try{    

        const user = await dbAccessCreateUser( name_user, pass, email, id_role );

        const token = await createJWT(user);

        return res.status(200).json({
            user,
            token
        })

    }catch(error){
        return handleServerError(res, error);
    }
}

const getUsers = async (req = request, res = response) => {

    try{    

        const user = await dbAccessGetUsers();
        
        return res.status(200).json(user)

    }catch(error){
        return handleServerError(res, error);
    }
}

module.exports = {
    createUser,
    getUsers,

}