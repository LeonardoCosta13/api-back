import mongoose from "mongoose";

async function connectDataBase(){

   await mongoose.connect("mongodb+srv://leosousa1306:Valdenia13@cluster0.qznlcef.mongodb.net/?retryWrites=true&w=majority")

}
 
export default connectDataBase;
