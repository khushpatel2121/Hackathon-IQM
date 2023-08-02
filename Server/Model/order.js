import mongoose from "mongoose";

const OrderSchema = new mongoose.Schema({
    userId:{
        type:String,
        require:true,
    },
    products:{
        type:Array,
        require:true,
    },
    amount:{
        type:Number,
        require:true,
    },
    address:{
        type:Object,
        require:true,
    },
    status:{
        type:String,
        default:"pending",
    }
},{timestamps:true});

export default mongoose.model("Order",OrderSchema);