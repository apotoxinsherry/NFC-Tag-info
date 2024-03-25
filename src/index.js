import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";

app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({extended: true})); 

const app = express();

const port=3000; 

app.get("/", function(req, res) {
    res.send("Hello there");
});


app.listen(port, function() {
    console.log(`Server started on port ${port}`);
});