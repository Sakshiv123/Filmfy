import mongoose from "mongoose";

const connectDB = async () => {
          try {
                    // await mongoose.connect(process.env.MONGO_URI);
                    await mongoose.connect("mongodb+srv://sv2394003:hello@cluster1.czae0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster1");
                    console.log(`Successfully connected to MongoDB 👍`);
          } catch (error) {
                    console.error(`Error: ${error.message}`);
                    process.exit(1);
          }
};

export default connectDB;
