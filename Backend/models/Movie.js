import { mongoose } from "mongoose";
const ObjectId = mongoose.Schema;

const reviewschema = mongoose.Schema(
  {
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    comment: { type: String, required: true },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
      ref: "User",
    },
  },
  { timestamps: true }
)

const movieschema = mongoose.Schema(
  {
    name: { type: String, required: true },
    name: { type: String, required: true },
    image: { type: String },
    year: { type: Number, required: true },
    genre: { type: mongoose.Schema.Types.ObjectId, ref: "Genre", required: true },
    detail: { type: String, required: true },
    cast: [{ type: String }],
    reviews: [reviewschema],
    numReviews: { type: Number, required: true, default: 0 },
    createdAt: { type: Date, default: Date.now },
    url: { type: String, required: true },


  },
  { timestamps: true }
)

const model = mongoose.model("movie", movieschema);
export default model;

