const express = require("express");
const app = express();
const port = 3000;

app.use(express.json());

let books = [
    { id: 1, title: "Book 1", author: "Author 1" },
    { id: 2, title: "Book 2", author: "Author 2" },
];

app.get("/books", (req, res) => {
    res.json(books);
});

app.post("/books", (req, res) => {
    const book = {
        id: books.length + 1,
        title: req.body.title,
        author: req.body.author
      };
      books.push(book);
      console.log("Updated books array:", books);  // 添加这行
      res.status(201).json(book);
});

app.put ("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
        books[bookIndex] = {
            ...books[bookIndex],
            title: req.body.title,
            author: req.body.author
        };
        res.json(books[bookIndex]);
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

app.delete("/books/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const bookIndex = books.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
        books.splice(bookIndex, 1);
        res.json({ message: "Book deleted successfully" });
    } else {
        res.status(404).json({ error: "Book not found" });
    }
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});