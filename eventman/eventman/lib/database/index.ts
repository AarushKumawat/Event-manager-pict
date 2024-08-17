import mongoose from 'mongoose';

const MONGODB_URI = process.env.MONGODB_URI

let cached = (global as any).mongoose || {conn: null, promise: null};
//if we dont have a mongoose cached connection, we are going to set it to an empty object

export const connectToDatabase = async () => {
    if (cached.conn) return cached.conn;

    if(!MONGODB_URI) throw new Error("MONGODB_URI is missing");

}