import { DataTypes } from "sequelize";
import database from "./database.js";

const Order = database.define("Order", {
	userID: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	bookID: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
	quantity: {
		type: DataTypes.INTEGER,
		allowNull: false,
	},
});

export default Order;
