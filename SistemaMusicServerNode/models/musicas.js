const Sequelize = require('sequelize');
const db = require('../config/database');

const Musica = db.define('musica', {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    nome_musica: {
        type: Sequelize.STRING,
        allowNull: false
    },
    album: {
        type: Sequelize.STRING,
        allowNull: false
    },
    duracao: {
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

module.exports = Musica;