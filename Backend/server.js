import express from "express";
import cors from "cors";
import dotenv from "dotenv"
import path from 'path'

const app = express();


const __dirname = path.resolve();

dotenv.config()

const PORT = process.env.PORT || 2000;

app.use(express.json())
app.use(cors());





app.use(express.static(path.join(__dirname, "/frontend/dist")));


app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "frontend", "dist", "index.html"))
})


app.listen(PORT, () => {
    console.log(`connect server : ${PORT}`)
})




