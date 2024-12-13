import express from "express";
import Order from "../models/order.js";
import Book from "../models/book.js";
import { authToken } from "../middleware/auth.js";

const router = express.Router();

router.get("/:userID", async (req, res) => {
	const orders = await Order.findAll({ where: { userID: req.params.userID } });
	if (!orders) res.status(404).send("No orders found for this user");
	else res.status(200).json(orders);
});

router.post("/", authToken, async (req, res) => {
    const { bookID, quantity } = req.body;
    const book = await Book.findByPk(bookID);
    if (!book) res.status(404).send("Book not found");
    else {
        const order = await Order.create({ userID: req.user.userID, bookID, quantity });
        res.status(201).json({ id: order.id });
    }
});

router.delete("/:id", authToken, async (req, res) => {
    const order = await Order.findByPk(req.params.id);
    if (!order) res.status(404).send("Order not found");
    else {
        await order.destroy();
        res.status(200).send("Order deleted");
    }
});

router.patch("/:id", authToken, async (req, res) => {
    const order = await Order.findByPk(req.params.id);
    if (!order) res.status(404).send("Order not found");
    else {
        await order.update(req.body);
        res.status(200).send("Order updated");
    }
});

export default router;
