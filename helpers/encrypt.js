const bcryptjs = require( "bcryptjs" );

const encryptPass = ( password ) => bcryptjs.hashSync(password, bcryptjs.genSaltSync());

module.exports = encryptPass;
