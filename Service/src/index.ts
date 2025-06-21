import express from "express";
import { connection } from "./utils/connection";
import { hobbyRouter } from "./routes/hobby";
const port = 8000;
const app = express();

app.use(express.json());

app.use("/hobby", hobbyRouter);

app.get("/", (req, res) => {
    res.send("Hello World")
})
const connectDb = async () => {
    try{
      await connection()
    }catch(err){
      console.error(err)
    }
  }
  connectDb()
app.listen(port, async() => {
  console.log(`Server is running on port ${port}`)
})
