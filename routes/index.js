import express from "express";
import { getUsers, Register, Login, Logout } from "../controllers/Users.js"
import { verifyToken } from "../middleware/VerifyToken.js";
import { refreshToken } from "../controllers/RefreshToken.js";
import { AddBook, createBookData, deleteBookData, getBookById, getBooks, updateBookData } from "../controllers/BooksController.js";

const router = express.Router();

router.get('/users', verifyToken, getUsers);
router.post('/users', Register);
router.post('/login', Login);
router.get('/token', refreshToken);
router.delete('/logout', Logout);

//books
router.get('/books', verifyToken, getBooks)
router.get('/books/:id', verifyToken, getBookById)
router.post('/books', AddBook)
router.put('/books/:id', updateBookData)
router.delete('/books/:id', verifyToken, deleteBookData)


export default router;
