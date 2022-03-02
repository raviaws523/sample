'use strict';
const {
    Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
    class User extends Model {
        /**
         * Helper method for defining associations.
         * This method is not a part of Sequelize lifecycle.
         * The `models/index` file will call this method automatically.
         */
        static associate(models) {
            models.Qualification.belongsTo(this, { constraints: true, onDelete: 'CASCADE' });
            models.Experience.belongsTo(this, { constraints: true, onDelete: 'CASCADE' });
            models.Skill.belongsTo(this, { constraints: true, onDelete: 'CASCADE' });
            this.hasMany(models.Qualification);
            this.hasMany(models.Experience);
            this.hasMany(models.Skill);
        }
    }
    User.init({
        id: DataTypes.INTEGER
    }, {
        sequelize,
        modelName: 'User',
    });
    return User;
};