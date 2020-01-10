const pg = require('../server/node_modules/pg');
const Sequelize = require('../server/node_modules/sequelize');

const connection = new Sequelize('fec', 'postgres', 'postgres', {
  host: 'localhost',
  dialect: 'postgres'
})

connection.authenticate()
  .then( () => console.log('****** postgresql is up and running ^.~ ******'))
  .catch(err => console.error(err))

module.exports = connection;