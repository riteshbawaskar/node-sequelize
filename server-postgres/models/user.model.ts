import { Model, Sequelize, DataTypes } from 'sequelize';


export default class User extends Model {
  public id?: number;
  firstName: String;
  lastName: String;
  userId:  String;
  email: String;
  password: String;

}

export const UserMap = (sequelize: Sequelize) => {
  User.init({
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    firstName: {
      type: DataTypes.STRING(255)
    },
    lastName: {
      type: DataTypes.STRING(255)
    },
    userId: {
      type: DataTypes.STRING(255),
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING(100),
      allowNull: true
    },
    password: {
      type: DataTypes.STRING(100),
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'users',
    timestamps: false
  });
  User.sync();
}