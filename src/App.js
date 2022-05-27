import React, { useContext, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginPage from "./components/Login/LoginPage";
import Home from "./components/Home";
import LoginContext from "./components/Login/LoginContext";

const App = () => {
  const { token } = useContext(LoginContext);

  useEffect(() => {
    localStorage.clear();
  });

  return (
    <>
      {!token ? (
        <Router>
          <Routes>
            <Route path="/" element={<LoginPage />} />
          </Routes>
        </Router>
      ) : (
        <Router>
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        </Router>
      )}
    </>
  );
};

export default App;
