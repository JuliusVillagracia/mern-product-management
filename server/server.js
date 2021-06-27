const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");

const app = express();
const menuRoutes = express.Router();
const PORT = 3001;

let Menu = require("./models/menu.model");

app.use(cors());
app.use(bodyParser.json());

mongoose
	// .connect("mongodb+srv://mpm:mpm@alphacluster.tkymc.mongodb.net/menu?retryWrites=true&w=majority", {
	.connect("mongodb://127.0.0.1:27017/menu", {
		useUnifiedTopology: true,
		useCreateIndex: true,
		useNewUrlParser: true,
		useFindAndModify: false,
	})
	.catch(console.error);

const connection = mongoose.connection;
connection.once("open", function () {
	console.log("MongoDB database connection established successfully!");
});

menuRoutes.route("/")
	.get(function (req, res) {
		Menu.find(function (err, menu) {
			if (err) {
				console.log(err);
			} else {
				res.json(menu);
			}
		});
	})
	.post(function (req, res) {
		Menu.create(req.body)
			.then((menu) => {
				console.log('Menu Item Created ', menu);
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(menu);
			})
	});

menuRoutes.route("/:id")
	.get(function (req, res) {
		let id = req.params.id;
		Menu.findById(id, function (err, product) {
			res.json(product);
		});
	})
	.delete(function (req, res) {
		Menu.findByIdAndRemove(req.params.id)
			.then((menu) => {
				console.log('Menu Item Removed ', menu);
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(menu);
			})
	})
	.put(function (req, res) {
		if (!req.body.product_price) {
			price = 0
		} else {
			price = req.body.product_price
		}
		Menu.findByIdAndUpdate(req.params.id, {
			$set: {
				"product_image": req.body.product_image,
				"product_name": req.body.product_name,
				"product_description": req.body.product_description,
				"product_price": price
			}
		})
			.then((menu) => {
				console.log('Menu Item Edited Into', req.body);
				res.statusCode = 200;
				res.setHeader('Content-Type', 'application/json');
				res.json(req.body);
			})
	});

app.use("/menu", menuRoutes);
app.use("/manage", menuRoutes);

app.listen(PORT, function () {
	console.log("Server is running on Port: " + PORT);
});
