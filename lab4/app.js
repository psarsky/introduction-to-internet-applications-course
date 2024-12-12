import express from "express";
import database from "./models/database.js";
import bookRoutes from "./routes/bookRoutes.js";
import orderRoutes from "./routes/orderRoutes.js";
import userRoutes from "./routes/userRoutes.js";

const app = express();

app.use(express.json());
app.use("/api/books", bookRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api", userRoutes);

database.sync().then(() => {
	app.listen(3000, () => {
		console.log("Server running on port 3000");
	});
});
