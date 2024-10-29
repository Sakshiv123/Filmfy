import Genre from "../models/Genre.js";
import asyncHandler from "../middleware/asynHandler.js";

const creategenre = asyncHandler(async (req, res) => {
          try {
                    const { name } = req.body;
          
                    if (!name) {
                              return res.json("Name is required");      
                    }
                    const existing = await Genre.findOne({name});
                    if (existing) {
                              return res.json("Genre already existed");        
                    }
                    const saved = await new Genre({ name }).save();
                    res.json(saved);
          }
          catch (error) {
                   return res.status(500).json(error);  
          }
})

const updategenre = asyncHandler(async (req, res) => {
          try {
                    const { name } = req.body;
                    const { id } = req.params;


                    const genre = await Genre.findOne({ _id: id });
                    if (!genre) {
                              return res.json("Genre not fount");
                    }
                   
                    genre.name = name;

                    const updatedGenre = await genre.save();
                    res.json(updatedGenre);
          }
          catch (error) {
                    return res.status(500).json(error);
          }
})

const deletegenre = asyncHandler(async (req, res) => {
          try {
                    const { id } = req.params;
                    const removed = await Genre.findByIdAndDelete(id);

                    if (!removed) {
                              res.json("Cannot find the genre");
                    }

                    res.json(removed);
          }
          catch (error) {
                    return res.status(500).json(error);
          }
})

const listgenre = asyncHandler(async (req, res) => {
          try {
                    const allGenre = await Genre.find();
                    res.json(allGenre);
          }
          catch (error) {
                    return res.status(500).json(error);
          }
})


const readgenre = asyncHandler(async (req, res) => {
          try {
                    const genre = await Genre.findOne({ _id: req.params.id });
                    res.json(genre);
          }
          catch (error) {
                    return res.status(500).json(error);
          }
})

export {
          creategenre,
          updategenre,
          deletegenre,
          listgenre,
          readgenre
}