const { Sequelize } = require("sequelize");

const db = new Sequelize('deliveryfood', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
});


const dbConnection = async () => {
    try{
        await db.authenticate();
        console.log('Connection has been established successfully.');
    }catch(error){
        console.error('Unable to connect to the database:', error);
    } 
}

module.exports = {
    dbConnection,
    db
};