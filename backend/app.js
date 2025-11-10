// ===================================== CONNECT DB =========================================

const connectDB = require("./Config/db");
connectDB()

// ===================================== DOT ENV =========================================

const dotenv = require("dotenv")
dotenv.config()

// ===================================== EXPRESS =========================================

const express = require("express")
const app = express()
app.use(express.json({limit:"190mb"}))

// ===================================== CORS =========================================

// const cors = require("cors")
// app.use(cors())


const cors = require("cors");

const allowedOrigins = [
  "https://frontend-wgsm.onrender.com", // your frontend Render domain
                
];

app.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true,
}));



// ===================================== PRODUCT ROUTER REQUIRE =========================================

const ProductRouter = require("./Router/ProductRouter");
app.use("/product" , ProductRouter)

// ===================================== USER ROUTER REQUIRE =========================================

const UserRouter = require("./Router/UserRouter");
app.use("/user" , UserRouter)

// ===================================== PORT =========================================

app.listen(process.env.PORT,()=>{
    console.log("Server is running!")
})