import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

export default async function connectMongoDB() {
	try {
		await mongoose.connect(`${process.env.MONGO_URI}/${DB_NAME}`);
		console.log("MONGODB connected");
	} catch (error) {
		console.log("Error connecting to MongoDB: ", error.message);
	}
}