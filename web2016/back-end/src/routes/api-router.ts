import express from "express";
import { addItemRoute } from "./add-item";
import { EndpointFactory } from "../core";
import { getItemsRoute } from "./get-items";

// This is the manager for the routers of the main server.
//
// Basically, the server is there to render the pages and the api is there to
// get data from the database.
//
// The API is not separated onto an other server because the scale of the
// project is small. The time required to securize the API would not worth the benefits.
export function apiRouter() {
    const router = express.Router();

    router.use(function(req, res, next) {
        res.setHeader("Content-Type", "application/json");
        next();
    });

    // Creating the routes
    router.get("/items", getItemsRoute);
    router.post("/item", EndpointFactory.post(addItemRoute));
    /*
    router.route('/recipes/:id').get(getSpecificRecipe(recipesCollection, imagesFolderLocation))
                                .post(imageManager.middleware, updateRecipe(recipesCollection))
                                .delete(removeRecipe(recipesCollection));*/

    // Got to return the router for it to be used later on.
    return router;
}
