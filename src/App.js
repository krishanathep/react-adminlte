import React from "react";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

// Layout Component
import WithOutNavbar from "./components/layouts/WithOutNavbar";
import WithNavbar from "./components/layouts/WithNavbar";

// Auth Component
import SignIn from "./components/auth/SignIn";
import SignUp from "./components/auth/SignUp";

// Pages
import Home from "./pages/Home";
import Blank from "./pages/Blank";

function App() {
  return (
    <div className="wrapper">
      <Router>
        <Routes>
          <Route element={<WithOutNavbar />}>
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
          </Route>
          <Route element={<WithNavbar />}>
            <Route path="/" element={<Home />} />
            <Route path="/blank" element={<Blank />} />
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
