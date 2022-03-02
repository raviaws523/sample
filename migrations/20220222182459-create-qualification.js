'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Qualifications', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            name: {
                type: Sequelize.STRING,
                allowNull: false
            },
            type: {
                type: Sequelize.STRING,
            },
            institution: {
                type: Sequelize.STRING,
            },
            session_date: {
                type: Sequelize.INTEGER,
            }
        });
    },
    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Qualifications');
    }
};