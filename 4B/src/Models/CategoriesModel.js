const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dumbways", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const categories = sequelize.define(
  "categories",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = categories;
