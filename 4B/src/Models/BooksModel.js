const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("dumbways", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const books = sequelize.define(
  "books",
  {
    id: {
      type: Sequelize.DataTypes.INTEGER,
      primaryKey: true,
    },
    name: {
      type: Sequelize.DataTypes.STRING,
    },
    stok: {
      type: Sequelize.DataTypes.INTEGER,
    },
    image: {
      type: Sequelize.DataTypes.STRING,
    },
    deskripsi: {
      type: Sequelize.DataTypes.STRING,
    },
    category_id: {
      type: Sequelize.DataTypes.STRING,
    },
  },
  {
    timestamps: false,
  }
);

module.exports = books;
