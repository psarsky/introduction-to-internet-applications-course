import express from "express";
import Book from "../models/book.js";

const router = express.Router();

router.get("/", async (_, res) => {
    const books = await Book.findAll();
    res.status(200).json(books);
});

router.get("/:id", async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) res.status(404).send("Book not found");
    else res.status(200).json(book);
});

router.post("/", async (req, res) => {
    const book = await Book.create(req.body);
    res.status(201).json({ id: book.id });
});

router.delete("/:id", async (req, res) => {
    const book = await Book.findByPk(req.params.id);
    if (!book) res.status(404).send("Book not found");
    else {
        await book.destroy();
        res.status(200).send("Book deleted");
    }
});

export default router;