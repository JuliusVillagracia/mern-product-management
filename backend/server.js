const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const express = require("express");

const app = express();
const menuRoutes = express.Router();
const PORT = 3001;

let Menu = require("./menu.model");

app.use(cors());
app.use(bodyParser.json());

mongoose
	.connect("mongodb://127.0.0.1:27017/menu", {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.catch(console.error);

const connection = mongoose.connection;

connection.once("open", function () {
	console.log("MongoDB database connection established successfully!");

	// try {
	// 	const newMenu = new Menu({
	// 		product_image: '',
	// 		product_name: 'Chicken',
	// 		product_description: "It's a chicken leg",
	// 		product_price: 120,
	// 	});

	// 	newMenu.save()
	// 		.then(todo => {
	// 			console.log('menu: menu item added successfully');
	// 			Menu.find(function (err, data) {
	// 				console.log(data)
	// 			})
	// 		})
	// 		.catch(err => {
	// 			console.log('adding menu item failed!')
	// 		});
	// } catch (err) {
	// 	console.dir(err.message, { colors: true });
	// }

});

menuRoutes.route('/').get(function (req, res) {
	Menu.find(function (err, menu) {
		if (err) {
			console.log(err);
		} else {
			res.json(menu);
		}
	});
});

menuRoutes.route('/:id').get(function (req, res) {
	let id = req.params.id;
	Menu.findById(id, function (err, product) {
		res.json(product);
	});
});

app.use("/menu", menuRoutes);

app.listen(PORT, function () {
	console.log("Server is running on Port: " + PORT);
});
