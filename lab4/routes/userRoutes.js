import express from "express";
import User from "../models/user.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const router = express.Router();

router.post("/register", async (req, res) => {
	const { name, email, password } = req.body;
	const hashedPassword = await bcrypt.hash(password, 10);
	const user = await User.create({ name, email, password: hashedPassword });
	res.status(201).json({ id: user.userID });
});

router.post("/login", async (req, res) => {
	const { email, password } = req.body;
	const user = await User.findOne({ where: { email } });
	if (!user || !(await bcrypt.compare(password, user.password))) {
		return res.status(401).send("Invalid email or password");
	}
	
	const token = jwt.sign({ id: user.userID }, process.env.TOKEN_SECRET, { expiresIn: "1h" });
	res.status(200).json({ token });
});

export default router;
