const express = require('express');

const app = express();

const port = process.env.PORT || 5000

const morgan = require('morgan');

const env = require('dotenv');

app.use(morgan("dev"));

app.use(express.json());

env.config();

// end of all basic creation  || ends of require work 


const auth = require("./src/routes/auth/auth")

app.use("/auth", auth)




app.get("/", (req, res) => {

    res.send("server is running")

})



app.get("*", (req, res) => {
    res.send("404")
})


app.listen(port, () => {

    console.log(`server running on port ${port}`);
})
