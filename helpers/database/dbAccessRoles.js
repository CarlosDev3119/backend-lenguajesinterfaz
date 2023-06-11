const { Role } = require("../../models/DB");

const dbAccesscreateRoles = async ({name_role}) => {
    try{

        const newRole = Role.build({name_role});
        await newRole.save();

        return {
            message:'role created successfully',
            data: newRole
        }

    }catch(error){
        return {
            message: 'Something went wrong',
            error
        }
    }
}

const dbAccessGetRoles = async () => {
    try{

        const roles = await Role.findAll();

        return {
            message:'Get roles successfully',
            data: roles
        }

    }catch(error){
        return {
            message: 'Something went wrong',
            error
        }
    }
}

module.exports = {
    dbAccesscreateRoles,
    dbAccessGetRoles,
}