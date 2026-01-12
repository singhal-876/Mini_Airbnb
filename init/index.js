const mongoose = require("mongoose");
const initData = require("./data.js");
const Listing = require("../models/listing.js");
require("dotenv").config({ path: "../.env" });

const dbUrl = process.env.ATLASDB_URL;


if (!dbUrl) {
  console.error("ERROR: ATLASDB_URL is not defined in .env file");
  process.exit(1);
}

main()
  .then((res) => {
    console.log("Mongoose Connection Successful!!!");
  })
  .catch((err) => {
    console.log("Connection Error:", err);
  });

async function main() {
  await mongoose.connect(dbUrl);
}

const initDB = async () => {
  await Listing.deleteMany({});
  initData.data = initData.data.map((obj) => ({
    ...obj,
    owner: "696511323dfd377f55c5033b",
  }));
  await Listing.insertMany(initData.data);
  console.log("Data has been initialized.");
};

initDB();
