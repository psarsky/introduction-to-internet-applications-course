import express from "express";
import cors from "cors";
const app = express();

app.use(cors());

app.get("/", (_, res) => {
	return res.json({ color: "blue" });
});

app.listen(3000, () => {
	console.log("Server listening on port 3000");
});
