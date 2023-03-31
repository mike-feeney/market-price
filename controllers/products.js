const Product = require("../models/Product");

module.exports = {
    getProduct: async (req, res) => {
        try {
          const product = await Product.find(req.params.upc);
          res.render("product.ejs", { product: product});
        } catch (err) {
          console.log(err);
        }
    },
    createProduct: async (req, res) => {
      try {
        await Product.create({
          // title: req.body.title,
          // image: result.secure_url,
          // cloudinaryId: result.public_id,
          // caption: req.body.caption,
          // likes: 0,
          // user: req.user.id,
        });
        console.log("Product has been added!");
        res.redirect("/profile");
      } catch (err) {
        console.log(err);
      }
    },
    deletePost: async (req, res) => {
      try {
        // Find product by UPC
        let product = await Product.find({ upc: req.params.upc });
        // Delete post from db
        await Post.remove({ upc: req.params.upc });
        console.log("Deleted Post");
        res.redirect("/profile");
      } catch (err) {
        res.redirect("/profile");
      }
    },
};
