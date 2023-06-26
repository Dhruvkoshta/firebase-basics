import React, { useState } from "react";
import { db } from "./firebase";
import {
  collection,
  addDoc,
  getDocs,
  onSnapshot,
  query,
  where,
} from "firebase/firestore";
import { storage } from "./firebase";

function Firestore() {
  const collectionRef = collection(db, "users");
  const [data, setData] = useState({});
  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setData({ ...data, ...newInput });
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();
    addDoc(collectionRef, data);
    setData({});
    getData();
  };
  // const getData = () => {
  //   getDocs(collectionRef).then((res) => {
  //     console.log(
  //       res.docs.map((item) => {
  //         return { ...item.data(), itemId: item.id };
  //       })
  //     );
  //   });
  // };
  //--------------onSnapshot------------------
  // const getData = () => {
  //   onSnapshot(collectionRef, (data) => {
  //     console.log(
  //       data.docs.map((item) => {
  //         return { ...item.data(), itemId: item.id };
  //       })
  //     );
  //   });
  // };
  //
  //-----------------query------------------
  const queryRef = query(collectionRef, where("name", "==", "dhruv"));
  const getData = () => {
    onSnapshot(queryRef, (data) => {
      console.log(
        data.docs.map((item) => {
          return { ...item.data(), itemId: item.id };
        })
      );
    });
  };
  return (
    <>
      <div>
        <input name="name" placeholder="name" onChange={handleChange} />
        <input name="city" placeholder="city" onChange={handleChange} />
        <br />
        <button onClick={handleFormSubmit}>Submit</button>
        <button onClick={getData}>getdata</button>
      </div>
    </>
  );
}

export default Firestore;
