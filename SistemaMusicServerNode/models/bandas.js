const Sequelize = require('sequelize');
const db = require('../config/database');

const Banda = db.define('banda', {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nomeBanda: {
        type: Sequelize.STRING,
        allowNull: false
    },
    nacionalidade: {
        type: Sequelize.STRING,
        allowNull: false
    },
    dataCriacao: {
        type: Sequelize.STRING,
        allowNull: false
    },
    createdAt: {
        type: Sequelize.DATE
    },
    updatedAt: {
        type: Sequelize.DATE
    }
});

module.exports = Banda;