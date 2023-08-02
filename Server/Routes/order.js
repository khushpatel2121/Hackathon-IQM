import express from 'express';
import { verifyAdmin, verifyUser } from '../utils/varifytoken.js';
import { createOrder, updateOrder , deleteOrder, getOrder , getAllOrder, getOrderByUserId, getOrderByBookId} from '../Controllers/order.js';


const router = express.Router();

router.post("/",verifyUser,createOrder);

router.get("/:id",verifyUser, getOrder);

router.put("/:id",verifyUser,updateOrder);

router.delete("/:id",verifyUser,verifyAdmin,deleteOrder);    

router.get("/getAllOrder",verifyAdmin , getAllOrder);

router.get("/getOrderUser",verifyAdmin , getOrderByUserId);

router.get("/getOrderUser/:id",verifyAdmin , getOrderByBookId);


export default router;

