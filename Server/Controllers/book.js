import Book from "../Model/Book.js";
import router from "../Routes/auth.js";
import { createError } from "../utils/error.js";

export const createBook = async (req,res,next)=>{
       const newBook = new Book(req.body);
    try{
      
        const savedBook = await newBook.save();
        res.status(200).json(savedBook);


    }catch(err){
        next(err)
    }
}

export const updateBook = async(req,res,next) =>{
   try{
    const updateHotel = await Book.findByIdAndUpdate(req.params.id,{
        $set: req.body
    },
    {new:true})
    res.status(200).json(updateHotel);
   }catch(err){
       next(err);
   }}

export const deleteBook = async(req,res,next) =>{
    try{
        const deleteBook = await Book.findByIdAndDelete(req.params.id);
        res.status(200).json("Book Deleted");
    }catch(err){
        next(err);
    }
}

export const getBook = async(req,res,next) =>{
    try{
        const book = await Book.find();
        res.status(200).json(book);
    }catch(err){
        next(err);
    }
}

export const search = async(req,res,next)=>{
    const search = req.query.q;
     try{
      const books = await Book.find({title: {$regex: search , $options: "i"}}).limit(40);
      res.status(200).json(books);
     }catch(err){
       next(err);
     }
   }



export const getBookById = async(req,res,next) =>{
    try{
        const book = await Book.findById(req.params.id);
        res.status(200).json(book);
    }catch(err){
        next(err);
    }
}

export const getBookByGenre = async(req,res,next) =>{
    const genre = req.query.genre;
    try{
        const book = await Book.find({genre:{$regex:genre,$options:"i"}}).limit(40);
        res.status(200).json(book);
    }catch(err){
        next(err);
    }
}

export default router;
