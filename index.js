const express = require('express')
const mongoose = require('mongoose')
const cookieParser = require("cookie-parser");
require("dotenv").config();

const app = express();

//Import Router
const authRouter = require("./routes/auth");
const usersRouter = require("./routes/users");
const moviesRouter = require("./routes/movies");

// Import Auth middleware for check user login or not~
const { loginCheck } = require("./middleware/auth");


//Database Connection
mongoose
    .connect(process.env.DATABASE, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() =>
        console.log(
            "==============Mongodb Database Connected Successfully=============="
        )
    )
    .catch((err) => console.log(err));

//Middleware
app.use(express.static("public"));
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

//Routes

app.use("/api", authRouter);
app.use("/api/user", usersRouter);
app.use("/api/movies", moviesRouter);

// Run Server
const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
    res.send('Hello world from server')
})

app.listen(PORT, () => {
    console.log("Server is running on ", PORT);
});