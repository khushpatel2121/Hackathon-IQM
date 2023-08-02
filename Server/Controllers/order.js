import Order from "../Model/Order.js";

export const createOrder = async(req,res,next) =>{
    const newOrder = new Order(req.body);
    try{
        const savedOrder = await newOrder.save();
        res.status(200).json(savedOrder);
    }catch(err){
        next(err);
    }
}

export const updateOrder = async(req,res,next) =>{
    try{
        const updateOrder = await Order.findByIdAndUpdate(
            req.params.id,
            {
                $set: req.body,
            },
            {new:true}
        );
        res.status(200).json(updateOrder);
    }catch(err){
        next(err);
    }
}

export const deleteOrder = async(req,res,next) =>{
    try{
        await Order.findByIdAndDelete(req.params.id);
        res.status(200).json("Order Deleted")
    }catch{
        next(err)
    }
}

export const getOrder = async(req,res,next) =>{
    try{
        const order = await Order.findById(req.params.id)
        res.status(200).json(order)
    }catch{
        next(err)
    }
}

export const getAllOrder = async(req,res,next) =>{
    try{
        const order = await Order.find();
        res.status(200).json(order);
    }catch{
        next(err)
    }
}

export const getOrderByUserId = async(req,res,next) =>{
    try{
        const order = await Order.find({userId: req.params.userId})
        res.status(200).json(order)
    }catch{
        next(err)
    }
}

export const getOrderByBookId = async(req,res,next) =>{
    try{
        const order = await Order.find({bookId: req.params.bookId})
        res.status(200).json(order)
    }catch{
        next(err)
    }
}