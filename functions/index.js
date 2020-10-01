const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");

// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions
//
// exports.helloWorld = functions.https.onRequest((request, response) => {
//   functions.logger.info("Hello logs!", {structuredData: true});
//   response.send("Hello from Firebase!");
// });

//building an express app on a cloud function

const stripe = require("stripe")(
  "sk_test_51HWl3vJUtk7eI7olz87mGn0V9TU23J6FUcVWxRCgCaoxZj42GJzSpewhiI6jrYFmfHTwe3hV5DivmNesMM5IdVop008F1RBYrL"
);

// Setup API

//-APP config
const app = express();

//Middleware
app.use(cors({ origin: true }));
app.use(express.json()); //send data and pass in json format

//api routes
app.get("/", (request, response) => response.status(200).send("hello world"));
app.post("/payments/create", async (request, response) => {
  const total = request.query.total; //could also use request.params

  console.log("payment received BOOM", total);

  const paymentIntent = await stripe.paymentIntents.create({
    amount: total, //subunits of the currency
    currency: "usd",
  });

  //ok - Created
  response.status(201).send({
    clientSecret: paymentIntent.client_secret,
  });
});

//listen command

exports.api = functions.https.onRequest(app);

//secure functions
