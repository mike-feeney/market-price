const Product = require("../models/Product");

module.exports = {
    getIndex: (req, res) => {
        res.render("index.ejs");
    },
    getProfile: async (req, res) => {
        // console.log(req.user)
        try {
            //Since we have a session each request (req) contains the logged-in users info: req.user
            //console.log(req.user) to see everything
            //Grabbing just the posts of the logged-in user
            const products = await Product.find({ user: req.user.id }); 
            //Sending post data from mongodb and user data to ejs template
            console.log(req.user)
            res.render("profile.ejs", { products: products, user: req.user });
        } catch (err) {
            console.log(err);
        }
    },
};
