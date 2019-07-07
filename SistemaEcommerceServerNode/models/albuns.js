const Sequelize = require('sequelize');
const db = require('../config/database');

const Album = db.define('album', {
    codigo: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    titulo: {
        type: Sequelize.STRING,
        allowNull: false
    },
    banda: {
        type: Sequelize.STRING,
        allowNull: false
    },
    gravadora: {
        type: Sequelize.STRING,
        allowNull: false
    },
    lancamento: {
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

module.exports = Album;