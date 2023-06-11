const jwt = require( 'jsonwebtoken' );




const createJWT = async(user) =>{

    try {
        const payload = {
            id: user.id_user,
            user_name: user.name_user
        }
        const token = jwt.sign(payload, process.env.SECRETORPRIVATEKEY || 'secret', { expiresIn: '2h'});
        return {
            message: 'Token created successfully',
            data: token
        };
    } catch (error) {
        return {
            message: 'Something went wrong',
            error
        }
    }
}

const verifyJWT = async(token) => {
    try {
        let decoded = jwt.verify(token, process.env.SECRETORPRIVATEKEY || 'secret');
        
        return {
            message: 'Token verified successfully',
            data: decoded
        };
    } catch (error) {
        return {
            message: 'Invalid token',
            error
        }
    }
};

module.exports = {
    createJWT,
    verifyJWT
}