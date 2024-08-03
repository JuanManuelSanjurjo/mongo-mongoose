import mongoose from "mongoose";

mongoose.connect("mongodb://localhost:27017/myStore");

// connection.on , son eventos que dan la opcion de realizar acciones en base a los eventos que ocurran en la conexion
mongoose.connection.on("open", () => {
  console.log("Connected to MongoDB");
});
mongoose.connection.on("error", (err) => {
  console.log("Error connecting to MongoDB", err);
});

export default mongoose;
