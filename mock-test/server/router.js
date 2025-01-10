import express from "express";

const router = express.Router();

router.get("/", async (_, res) => {
	res.status(200).json({ color: "#0000FF" });
});

export default router;
