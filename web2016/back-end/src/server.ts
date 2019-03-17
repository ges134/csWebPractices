import express from "express";
import bodyParser from "body-parser";
import { config } from './config';
import { apiRouter } from './routes';

const app = express();

// Parsing all request bodies into json.
app.use(bodyParser.json());

const PORT = config.port;

// Routing all queries to the api route.
app.use('/api', apiRouter());

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
