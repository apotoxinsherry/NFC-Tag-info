import bodyParser from "body-parser";
import express from "express";
import morgan from "morgan";
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);


const app = express();
app.use("/static",express.static(__dirname + '/public'));


app.use(morgan("tiny"));
app.use(bodyParser.urlencoded({ extended: true }));

app.set('view engine', 'ejs');


const users = [
    {
        id: 1,
        name: "Aaron",
        age: 32,
        blood: "B+ve",
        allergies: ["Nuts", "Crabs"]
    },
];

const port = 3000;



app.get("/", function (req, res) {
    res.render(__dirname + '/public/index', {user: users[0]});
});

app.get("/users/:id", function (req, res) {
    const ID = parseInt(req.params['id']);
    const user = users.find(user => user.id == ID); 
    if (user) {
        res.render(__dirname + "/public/index", {user: user});
    }
    else {
        res.send("No user with the matching ID is found.");
    }
});

app.listen(port, function () {
    console.log(`Server started on port ${port}`);
});