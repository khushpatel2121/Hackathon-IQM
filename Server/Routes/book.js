import express from 'express';
import { verifyAdmin } from '../utils/varifytoken.js';
import { createBook, deleteBook, getBook , getBookByGenre, search, updateBook} from '../Controllers/book.js';

const router = express.Router();

router.post("/",verifyAdmin,createBook);

router.delete("/:id" ,verifyAdmin,deleteBook);

router.put("/:id",verifyAdmin,updateBook);

router.get("/",getBook);

router.get("/search",search);

router.get("/genre",getBookByGenre);

router.get("/find/:id");

export default router;