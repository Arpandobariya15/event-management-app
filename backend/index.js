const express = require ("express");
const app = express();
const cors = require('cors');
const dotenv= require("dotenv").config()
const connectDb=require("./config/connectDb")

const PORT = process.env.PORT || 3000;
connectDb();

app.use(express.json());
app.use(cors());

app.use("/api/event", require ("./routes/event"))

app.listen(PORT, (err)=>{
    console.log(`app is running on ${PORT}`);
    
})
