const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const Port = process.env.PORT || 9000;

const app = express();
const UserCollection = require("./models/user");

app.use(express.json());
app.use(cors());

mongoose
  .connect("mongodb://localhost:27017/Electia", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connection Successfill");
  })
  .catch((err) => {
    console.log(err);
  });



app.post("/user/signup", (req, resp) => {
  const { Name, Gmail, Password } = req.body;

  UserCollection.findOne({ Gmail: Gmail })
    .then((user) => {
      if (user) {
        resp.status(400).send("User Already Exists! Go to login.");
      } else {
        const newUser = new UserCollection({
          Name: Name,
          Gmail: Gmail,
          Password: Password,
        });

        newUser
          .save()
          .then(() => {
            resp
              .status(200)
              .send("Congratulations, your account has been created!");
          })
          .catch((err) => {
            resp.status(500).send("Error creating account: " + err.message);
          });
      }
    })
    .catch((err) => {
      resp.status(500).send("Database error: " + err.message);
    });
});



app.get("/user/:Gamil/user/:Password", (req, resp) => {
  const { Gmail, Password } = req.params;
  UserCollection.findOne({
    Gamil: Gmail,
  })
    .then((user) => {
      if (user) {
        if (user.Password === Password) {
          resp.json(user);
        } else {
          resp.send("Wrong password");
        }
      } else {
        resp.status(404).json({ message: "User not found" });
      }
    })
    .catch((err) => resp.status(500).json({ error: err.message }));
});


app.post("/users/address/:id", async (req, res) => {
  const userId = req.params.id;
  const { Street, City, State, ZipCode } = req.body;

  try {
    const userCart = await UserCollection.findById(userId);

    if (!userCart) {
      return res.status(404).json({ error: "User not found" });
    }

    userCart.Address.push({ Street, City, State, ZipCode });

    await userCart.save();

    res.json(userCart);
  } catch (error) {
    console.error("Error adding address:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});




app.post("/users/order/:id", async (req, res) => {
  const userId = req.params.id;
  const { Product, Image, Price } = req.body;

  try {
    const userCart = await UserCollection.findById(userId);

    if (!userCart) {
      return res.status(404).json({ error: "User not found" });
    }

    userCart.OrderHistory.push({ Product, Image, Price });

    await userCart.save();

    res.json(userCart);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});


app.post("/users/:id/cart", async (req, res) => {
  const userId = req.params.id;
  const { Product, Image, Price } = req.body;

  try {
    const userCart = await UserCollection.findById(userId);

    if (!userCart) {
      return res.status(404).json({ error: "User not found" });
    }

    userCart.Cart.push({ Product, Image, Price });

    await userCart.save();

    res.json(userCart);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.get("/users/cart/:id", async (req, res) => {
  const userId = req.params.id;

  try {
    const userCart = await UserCollection.findById(userId);

    if (!userCart) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(userCart.Cart);
  } catch (error) {
    console.error("Error adding item to cart:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});



app.delete("/users/cart/:itemId", async (req, res) => {
  const itemId = req.params.itemId;

  try {
    // Use $pull to remove the item with the specified _id from the Cart array
    const result = await UserCollection.updateOne(
      { "Cart._id": itemId }, // Locate the user containing the cart item
      { $pull: { Cart: { _id: itemId } } } // Remove the specific cart item
    );

    // Check if any document was modified (i.e., if the item was found and deleted)
    if (result.modifiedCount === 0) {
      return res.status(404).json({ error: "Cart item not found" });
    }

    // Fetch the updated user data to send in the response
    const updatedUserCart = await UserCollection.findOne({
      "Cart._id": { $ne: itemId },
    });
    res.json(updatedUserCart);
  } catch (error) {
    console.error("Error deleting cart item:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

// PUT endpoint to update user data
app.get("/users/:id", async (req, res) => {
  const userId = req.params.id;
  const updatedData = req.body; // Assume it contains the updated user details

  try {
    // Find user by ID and update with new data
    const updatedUser = await UserCollection.findByIdAndUpdate(
      userId,
      updatedData,
      { new: true }
    );

    // Check if the user was found and updated
    if (!updatedUser) {
      return res.status(404).json({ error: "User not found" });
    }

    res.json(updatedUser);
  } catch (error) {
    console.error("Error updating user data:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

app.listen(Port, () => {
  console.log(`server running on ${Port}`);
});
