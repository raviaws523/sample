'use strict';
module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable('Users', {
            id: {
                allowNull: false,
                autoIncrement: true,
                primaryKey: true,
                type: Sequelize.INTEGER
            },
            firstName: {
                type: Sequelize.STRING,
                allowNull: false
            },

            lastName: {
                type: Sequelize.STRING,
                allowNull: false
            },

            email: {
                type: Sequelize.STRING,
                unique: true,
                allowNull: false
            },

            //contact number
            phone: {
                type: Sequelize.STRING(15),
                allowNull: false
            },

            // gender
            gender: {
                type: Sequelize.CHAR(1),
                allowNull: false
            },

            //whatsapp number
            whatsapp: {
                type: Sequelize.STRING(15),
                allowNull: true
            },

            //location
            location: {
                type: Sequelize.STRING,
                allowNull: false
            },

            // Date of Birth 
            dob: {
                type: Sequelize.DATEONLY,
                allowNull: false
            },

            //current salary
            curSalPA: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: true
            },

            //expected salary
            expSalPA: {
                type: Sequelize.FLOAT(10, 2),
                allowNull: false
            },

            //work experience
            workExpInMonths: Sequelize.INTEGER(2),
            workExpInYears: Sequelize.INTEGER(2),

            //previous organization
            previousOrganisation: Sequelize.STRING,

            //current organization
            currentOrganisation: Sequelize.STRING,

            //available time
            noticePeriodInMonths: Sequelize.INTEGER(2),
            noticePeriodInDays: Sequelize.INTEGER(2),

            //marrital status
            marritalStatus: {
                type: Sequelize.CHAR(1),
                allowNull: false
            },

            //number of child
            noOfChild: {
                type: Sequelize.INTEGER,
                allowNull: true

            },

            //passport
            passportName: Sequelize.STRING(),
            passportNumber: Sequelize.STRING(15), //passport number
            passportExpiry: Sequelize.DATEONLY, //passport expiry
            passportIssue: Sequelize.DATEONLY, //passport issue


            //work permit
            workPermit: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },

            //can relocate
            canRelocate: {
                type: Sequelize.BOOLEAN,
                allowNull: false
            },

            updatedBy: {
                type: Sequelize.STRING,
                allowNull: false
            },

            createdAt: {
                allowNull: false,
                type: Sequelize.DATE
            },
            updatedAt: {
                allowNull: false,
                type: Sequelize.DATE
            }
        });

        //Creating Associations

        await queryInterface.addColumn(
            'Qualifications', // name of Target model
            'UserId', // name of the key we're adding
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users', // name of Source model
                    key: 'id' // key in Source model that we're referencing
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }
        );

        await queryInterface.addColumn(
            'Experiences', // name of Target model
            'UserId', // name of the key we're adding
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users', // name of Source model
                    key: 'id'
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }
        );

        await queryInterface.addColumn(
            'Skills', // name of Target model
            'UserId', // name of the key we're adding
            {
                type: Sequelize.INTEGER,
                references: {
                    model: 'Users', // name of Source model
                    key: 'id',
                },
                onUpdate: 'CASCADE',
                onDelete: 'CASCADE'
            }
        );
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable('Users');

        // Deleteing Associations Columns
        await queryInterface.removeColumn(
            'Qualifications', // name of the Target model
            'UserId' // key we want to remove
        );
        await queryInterface.removeColumn(
            'Experiences', // name of the Target model
            'UserId' // key we want to remove
        );
        await queryInterface.removeColumn(
            'Skills', // name of the Target model
            'UserId' // key we want to remove
        )
    }
};