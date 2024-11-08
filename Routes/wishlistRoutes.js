const Router = require("express").Router();
const wishlistController = require("../Controller/wishlistController");

Router.post("/addtowishlist", wishlistController.addToWishList);
Router.get("/mywishlist/:userId", wishlistController.myWishList);

module.exports = Router;
