import mongoose from "mongoose";

const BookSchema = new mongoose.Schema({
    title:{
        type:String,
        require:true,
        unique:true,
    },
    author:{
        type:String,
        require:true,
    },
    description:{
        type:String,
        require:true,
    },
    image:{
        type:String,
        require:true,
    },
    genre:{
        type:String,
        require:true,
    },
    price:{
        type:String,
        require:true,
    },
    rating:{
        type:Number,
    
    },
    reviews:{
        type:Array,
    
    },
    
    },{timestamps:true});

    export default mongoose.model("Book",BookSchema);