import React, { useState, useEffect } from "react";
import "./Orders.css";
import { db } from "./firebase";
import { useStateValue } from "./StateProvider";
import Order from "./Order";

function Orders() {
  const [{ basket, user }, dispatch] = useStateValue();
  //Adding state to store all the orders
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    if (user) {
      //if the user is logged in
      //access the user collection
      //get specific user logged in adding to the collection
      // get the users order
      // order items based on date created in descending order
      //map through the orders and show all orders
      //get id of document
      // put inside of a data key
      db.collection("users")
        .doc(user?.uid)
        .collection("orders")
        .orderBy("created", "desc")

        .onSnapshot((snapshot) => {
          //realtime look at the database when something is added or deleted from the db
          setOrders(
            snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(), // this is what goes into the orders array. the image price description ect
            }))
          );
        });
    } else {
      setOrders([]);
    }
  }, [user]); //dependant on the user
  return (
    <div className="orders">
      <h1>Your Orders</h1>
      <div className="orders_order">
        {orders?.map((order) => (
          <Order order={order} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
