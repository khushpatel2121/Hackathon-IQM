import Cart from "../Model/Cart";
import router from "./book";

export const createCart = async (req, res, next) => {
    const newCart = new Cart(req.body);
    try {
        const savedCart = await newCart.save();
        res.status(200).json(savedCart);
    } catch (err) {
        next(err);
    }
    }

export const updateCart = async (req, res, next) => {
    try {
        const updateCart = await Cart.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            { new: true }
        );
        res.status(200).json(updateCart);
    } catch (err) {
        next(err);
    }
}

export const deleteCart = async (req, res, next) => {
    try {
        await Cart.findByIdAndDelete(req.params.id);
        res.status(200).json("Cart Deleted")
    } catch {
        next(err)
    }
}

export const getCart = async (req, res, next) => {
    try {
        const cart = await Cart.findById(req.params.id)
        res.status(200).json(cart)
    } catch {
        next(err)
    }
}

export const getAllCart = async (req, res, next) => {
    try {
        const cart = await Cart.find();
        res.status(200).json(cart);
    } catch {
        next(err)
    }
}

export const getCartByUserId = async (req, res, next) => {
    try {
        const cart = await Cart.find({ userId: req.params.userId })
        res.status(200).json(cart)
    } catch {
        next(err)
    }
}

export default router;