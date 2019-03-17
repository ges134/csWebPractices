import express from "express";
import bodyParser from "body-parser";
import { config } from "./config";
import { apiRouter } from "./routes";

const app = express();

// Enabling CORS as we want to communicate with the server.
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Methods",
        "GET, PUT, POST, DELETE, OPTIONS"
    );
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Authorization, Content-Type, Accept"
    );
    next();
});

// Parsing all request bodies into json.
app.use(bodyParser.json());

app.use(function(req, res, next) {
    console.log(JSON.stringify(req.body));
    next();
});

// Routing all queries to the api route.
app.use("/api", apiRouter());

const PORT = config.port;
app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// Parsing arguments passed to this program
// TODO: Fake data when --fake args is given.
console.log(process.argv);
