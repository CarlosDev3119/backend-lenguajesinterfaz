const { User, Role } = require("../../models/DB");
const encryptPass = require("../encrypt");

const dbAccessGetUsers = async () => {
    try{

        const users = await User.findAll({include: Role, attributes: { exclude: ['pass', 'estatus', 'id_role'] }});
        
        return {
            message: 'Users loaded successfully',
            data: users
        }

    }catch(error) {
        return {
            message: 'Something went wrong',
            error
        }
    }
}

const dbAccessCreateUser = async (name_user, pass, email, id_role) => {
    try{

        const newUser = User.build( {name_user, pass, email, id_role} );
        newUser.pass = encryptPass(pass);
        await newUser.save();

        const userWithRole = await User.findOne({
            where: { id_user: newUser.id_user },
            include: Role, attributes: { exclude: ['pass', 'estatus', 'id_role'] }
        });

        return {
            message: 'User created successfully',
            data: userWithRole
        }

    }catch(error) {
        return {
            message: 'Something went wrong',
            error
        }
    }
}

module.exports = {
    dbAccessCreateUser,
    dbAccessGetUsers,
}