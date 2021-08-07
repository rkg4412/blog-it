const express = require("express");
const app = express();
const mongoose = require('mongoose');
const dotenv = require("dotenv")
const cookieParser = require("cookie-parser")
const { authRouth } = require("./middleware/routeprotect")



const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const categoryRoute = require("./routes/categories");
const postRoute = require("./routes/posts");



dotenv.config();
const db =
    app.use(express.json());            //This will allow to send any json abject
app.use(cookieParser())


mongoose.connect(db,
    {
        useNewUrlParser: true,
        useCreateIndex: true,

        useFindAndModify: false,
        useUnifiedTopology: true,
    }).then(console.log("DB Connected")).catch(err => { console.log(err) });


//All the routes

app.use("/api/auth", authRoute);
app.use("/api/user", authRouth, userRoute);
app.use("/api/categories", authRouth, categoryRoute);
app.use("/api/posts", authRouth, postRoute);



app.listen(5000, () => {
    console.log("Server is running");
})