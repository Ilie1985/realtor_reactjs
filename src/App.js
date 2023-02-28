import React, { Fragment } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {
  Home,
  ForgotPassword,
  Offers,
  Profile,
  SignIn,
  SignUp,
  Error,
  CreateListing,
} from "./pages";
import { Header, PrivateRoute } from "./components";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  return (
    <Fragment>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />

          <Route path="/profile" element={<PrivateRoute></PrivateRoute>}>
            <Route path="/profile" element={<Profile />} />
          </Route>

          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-Up" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgotPassword />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/create-listing" element={<CreateListing />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </Router>
      <ToastContainer
        position="bottom-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </Fragment>
  );
};

export default App;
