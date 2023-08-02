import express from 'express';
import { verifyAdmin, verifyUser } from '../utils/varifytoken.js';
import { createCart, getCart , deleteCart , getAllCart , updateCart , getCartByUserId} from '../Controllers/cart';

const router = express.Router();

router.post("/",verifyUser,createCart);

router.get("/:id",verifyUser, getCart);

router.put("/:id",verifyUser,updateCart);

router.delete("/:id",verifyUser,verifyAdmin,deleteCart);

router.get("/cartUser",verifyAdmin , getCartByUserId);

router.get("/",verifyAdmin , getAllCart);
