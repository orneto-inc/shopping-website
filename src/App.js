import React, { useEffect } from "react";
import Header from "./Header";
import Home from "./Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Checkout from "./Checkout";
import Login from "./Login";
import { auth } from "./firebase";
import { useStateValue } from "./StateProvider";
import Payment from './Payment';

function App() {
        // Dispatching the User in/out
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
        // SignIn component runs only when change happens & also chnages Logged In User Name
    auth.onAuthStateChanged((authUser) => {
      console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // Authorise New/Existing User to Log In  

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // Sign Out the User
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
      // Router which helps in navigating/switching between different pages
    <Router>
      <div className="app">
        <Switch>
          <Route path="/orders">
            <Header />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Payment />
          </Route>
          <Route path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
