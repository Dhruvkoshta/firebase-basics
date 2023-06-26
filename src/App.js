import React, { useEffect, useState } from "react";
import {
  getAuth,
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
} from "firebase/auth";
import FireStore from "./Firestore";
const auth = getAuth();

function App() {
  const [user, setUser] = useState(null);
  const [formData, setFormData] = useState({});
  const handleChange = (e) => {
    const newInput = { [e.target.name]: e.target.value };
    setFormData({ ...formData, ...newInput });
  };
  function handleSubmit() {
    createUserWithEmailAndPassword(auth, formData.email, formData.password)
      .then((res) => {
        setUser(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  function signInWithGoogle() {
    const provider = new GoogleAuthProvider();
    signInWithPopup(auth, provider)
      .then((res) => {
        setUser(res.user);
      })
      .catch((error) => {
        console.log(error.message);
      });
  }
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log(user);
    });
  }, []);

  return (
    <>
      <div>
        <input name="email" placeholder="Email" onChange={handleChange} />
        <input name="password" placeholder="Password" onChange={handleChange} />
        <br />
        <button onClick={handleSubmit}>Submit</button>
        <br />
        <button onClick={signInWithGoogle}>SignIn With Google</button>
        <br />
        <br />
        <hr />
      </div>

      {user && <FireStore />}
    </>
  );
}

export default App;
