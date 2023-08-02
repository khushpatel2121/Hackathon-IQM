import express from 'express';
import { updateUsers, deleteUsers, getUsers, getAllUsers } from "../Controllers/user.js";
import { verifyAdmin, verifyToken, verifyUser } from "../utils/varifytoken.js";

const router = express.Router();

router.get("/checkauthentication" , verifyToken, (req,res,next )=>{
    res.send("User loggeed in")
});

router.get("/checkuser/:id" , verifyUser, (req,res,next)=>{
    res.send("hello user, you are logged in and delete your account")
});

router.get("/checkadmin/:id", verifyAdmin, (req,res,next)=>{
    res.send("admin verified you can delete any user ")
});


//update 
router.put("/:id", updateUsers)

//delete
router.delete("/:id" , deleteUsers)

//get
router.get("/:id", getUsers)

//getALL
router.get("/",verifyAdmin,  getAllUsers)

router.get("/",verifyAdmin);

export default router;