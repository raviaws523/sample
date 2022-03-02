'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class Qualification extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            this.belongsTo(models.User)
        }
    }
    Qualification.init({
        id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'Qualification',
    });
    return Qualification;
};