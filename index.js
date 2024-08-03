import connection from "./connection.js";
import { Product } from "./models/Product.js";
import { User } from "./models/User.js";

const user = new User({
  name: "Juan",
  email: "juan@gmail.com",
  password: "123456",
});

async function createProduct() {
  const product = new Product({
    name: "Product 1",
    price: 100,
    description: "Product 1 description",
    user: user,
  });
  try {
    const result = await product.save();
    console.log("Product saved", result);
  } catch (error) {
    console.log("Error saving product", error);
  }
  // product.save().then((result) => {
  //   console.log("Product saved", result);
  // });
}

async function findProducts() {
  try {
    const products = await Product.find({ price: 100 });
    console.log("All products", products);
  } catch (error) {
    console.log("Error finding products", error);
  }
}
// delete all products
async function clearProducts() {
  try {
    const result = await Product.deleteMany({});
    console.log("All products deleted", result);
  } catch (error) {
    console.log("Error clearing products", error);
  }
}

async function createUser() {
  try {
    const result = await user.save();
    console.log("User saved", result);
  } catch (error) {
    console.log("Error saving user", error);
  }
}
async function findUser(email) {
  try {
    const user = await User.findOne({ email: email });
    console.log("User found", user);
  } catch (error) {
    console.log("Error finding user", error);
  }
}

async function findOneUserAndUpdate(email, changeName) {
  try {
    const user = await User.findOneAndUpdate(
      { email: email },
      { name: changeName },
      { new: true },
    );
    console.log("User updated", user);
  } catch (error) {
    console.log("Error finding user", error);
  }
}
// createUser();
// clearProducts();
// createProduct();
findUser("juan@gmail.com");
findOneUserAndUpdate("juan@gmail.com", "easdasdasd");
findProducts();
