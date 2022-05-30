import express from "express";
import bodyParser from "body-parser";

// Error on login: TypeError: Cannot destructure property email of "undefined" or "null"
// https://github.com/techiediaries/fake-api-jwt-json-server/issues/1
// 2.connect the mysql, then run the output console

const app = express();
app.use(bodyParser.json());
import Authentication from "./routes/auth/user.js";
import GoodsRouter from "./routes/goods/goods.js";
// Router Section
// signUp
app.post("/register", Authentication.register); //api routes
// signIn
app.post("/login", Authentication.login); //api routes

app.use("/api/goods", GoodsRouter); //api routes

// app listening port
app.listen(8800, () => console.log("App is listening at http//localhost:8800"));
