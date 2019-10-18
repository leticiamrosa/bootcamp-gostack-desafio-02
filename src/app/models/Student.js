import Sequelize, { Model } from 'sequelize';

class Student extends Model {
    static init(sequelize) {
        super.init(
            {
                name: Sequelize.STRING,
                email: Sequelize.STRING,
                peso: Sequelize.INTEGER,
                altura: Sequelize.INTEGER,
                idade: Sequelize.INTEGER,
            },
            {
                sequelize,
            }
        );
    }
}

export default Student;
