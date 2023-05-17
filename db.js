const Sequelize = require ('sequelize');

const dotenv = require ('dotenv');

const config = require('./config');

const ModeloPelicula= require('./models/films');

const ModeloUsuario = require('./models/users');

const sequelize = new Sequelize('peliculas',process.env.USER, process.env.PASSWORD, {
    host: 'localhost',
    dialect: 'mysql'
});

const Peli= ModeloPelicula(sequelize, Sequelize);

const Usuario = ModeloUsuario(sequelize, Sequelize);

sequelize.sync({force: false}) 
    .then(()=>{
        console.log('tablas sincronizadas');
    })

module.exports= {
    Peli,
    Usuario
}