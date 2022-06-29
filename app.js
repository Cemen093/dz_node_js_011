const express = require("express");
const app = express();
const hostname = '127.0.0.1';
const port = 3000;
const apiRouter = require("./routes/apiRouter");
const homeRouter = require("./routes/homeRouter");

/*Прошлое дз разбить на MVC*/

app.set("view engine", "hbs");
app.use(express.urlencoded({ extended: false }));

app.use("/api", apiRouter);
app.use("/", homeRouter);

app.use(function (req, res, next) {
    res.status(404).send("Not Found")
});

app.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});