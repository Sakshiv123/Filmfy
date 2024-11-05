import mongoose from "mongoose";

const connectDB = async () => {
          try {
                    // await mongoose.connect(process.env.MONGO_URI);
                    await mongoose.connect("mongodb://127.0.0.1:27017/filmyfy");
                    console.log(`Successfully connected to MongoDB 👍`);
          } catch (error) {
                    console.error(`Error: ${error.message}`);
                    process.exit(1);
          }
};

export default connectDB;
