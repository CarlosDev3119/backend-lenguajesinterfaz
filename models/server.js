const express      = require('express');
const cors         = require('cors');
const mysql        = require('mysql2');
const myConnection = require('express-myconnection');
const dbOptions    = require('../database/dbConfig');
const {dbConnection} = require('../database/dbConfig');

class Server {

    constructor(){
        this.app  = express();
        this.port = 8080;

        this.paths = {
            users: '/api/users',
            roles: '/api/roles',
        }

        this.middlewares();

        this.routes();

        this.dbConnect();
    }

    async dbConnect(){
        await dbConnection();
    }

    middlewares(){
        
        //lectura y parseo del body
        this.app.use( express.json() );

        //Directorio Publico
        this.app.use( express.static('public') );

        //cors
        this.app.use( cors() );

        //conexion bd
        this.app.use( myConnection( mysql, dbOptions, 'request') );

    }

    routes() {
        this.app.use( this.paths.users, require('../routes/user.routes') );
        this.app.use( this.paths.roles, require('../routes/role.routes') );
    }

    listen(){

        this.app.listen( this.port, () => {
            console.info('Servidor corriendo en puerto', this.port);
        });
        
    }

}

module.exports = Server;