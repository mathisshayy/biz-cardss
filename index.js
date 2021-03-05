const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const PORT = process.env.PORT || 3001;

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password:"rootrooot",
    database: "card_db",
    port:3306,
    
});
app.engine(({ defaultLayout: "main" }));

const routes = require("../src/cards/cardUI")

app.use(routes)

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('api/get', (req,res) => {
    const sqlSelect =
    "SELECT * FROM `client`";
    db.query(sqlSelect, (err, result) => {
       res.send(result);
    });
})

app.post("api/insert", (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const title = req.body.titile;const company = req.body.company;
    const biz_address = req.body.biz_address;
    const biz_number = req.body.biz_number;
    
    const Color = req.body.Color;

    const sqlInsert = 
    "INSERT INTO `client` ( `name`, `email`, `title`, `company`, `biz_addess`, `biz_number`) VALUES (?,?,?,?,?,?) ";
    db.query(sqlInsert, [name, email, title, company, biz_address, biz_number], (err, result) => {
        console,log(err);
    });

})


app.listen(PORT, () => {
    console.log("running on port 3001");
});


