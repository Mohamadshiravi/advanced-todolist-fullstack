import mongoose, { mongo } from "mongoose";

export default async function ConnectTODB() {
  try {
    if (mongoose.connections[0].readyState) {
      return false;
    } else {
      await mongoose.connect("mongodb://localhost:27017/todolist");
    }
  } catch (e) {
    return false;
  }
}
