import express from 'express';
import Razorpay from "razorpay";

const router = express.Router();

router.post("/", async (req, res) => {
    try {
        const instance = new Razorpay({
            key_id: process.env.RAZORPAY_KEY_ID,
            key_secret: process.env.RAZORPAY_KEY_SECRET,
        });

        const options = {
            amount: req.body.amount * 100,
            currency: "INR",
            receipt: req.body.receipt,
            
        };

        const order = await instance.orders.create(options);
        res.json(order);
    } catch (err) {
        console.log(err);
    }
}
);

export default router;

