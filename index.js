const express = require("express");
const dotenv = require("dotenv");
const { default: mongoose } = require("mongoose");
const path = require("path");
const usersRoutes = require("./Routes/usersRoutes");
const advertisementRoutes = require("./Routes/advertismentsRoutes");
const wishlistRoutes = require("./Routes/wishlistRoutes");

const app = express();
dotenv.config();

const PORT = process.env.PORT || 5001;
app.use(express.static(path.join(__dirname, "public")));

app.use(express.json());
app.use("/api", usersRoutes);
app.use("/api", advertisementRoutes);
app.use("/api", wishlistRoutes);

const connectDb = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("Server is connected to the database");
  } catch (error) {
    console.error(
      "Error occurred while connecting to the database:",
      error.message
    );
  }
};
connectDb();
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
