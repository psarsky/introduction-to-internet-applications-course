import { DataTypes } from "sequelize";
import database from "./database.js";

const Book = database.define("Book", {
	title: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	author: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	genre: {
		type: DataTypes.STRING,
		allowNull: false,
	},
	year: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});

export default Book;
