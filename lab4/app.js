import express from "express";
import bodyParser from "body-parser";
import database from "./config/database.js";
import bookRoutes from "./routes/bookRoutes.js";

const app = express();

app.use(bodyParser.json());
app.use("/api/books", bookRoutes);

database.sync().then(() => {
	app.listen(3000, () => {
		console.log("Server running on port 3000");
	});
});
