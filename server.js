import express from "express";



// 2.connect the mysql, then run the output console
const app = express();

import Authentication from "./routes/auth/user.js";
import GoodsRouter from "./routes/goods/goods.js";
// Router Section
// signUp
app.post("/signup", Authentication.signup); //api routes
// signIn
app.post("/signin", Authentication.signin); //api routes

app.use("/api/goods",GoodsRouter); //api routes

// app listening port
app.listen(8800,() => console.log("App is listening at http//localhost:8800"));
