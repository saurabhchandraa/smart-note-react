import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./components/Home";
import { Layout } from "./components/Layout";
import Login from "./components/Login/Login";
import SignUp from "./components/Login/SignUp";
import { NavigationBar } from "./components/NavBar/NavigationBar";
import UserProfile from "./components/UserProfile/UserProfile";
import AuthContext from "./context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const storedUserLoggedInInformation = localStorage.getItem("isLoggedIn");
    if (storedUserLoggedInInformation === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const logoutHandler = () => {
    localStorage.clear();
  };

  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        onLogout: logoutHandler,
      }}
    >
      <NavigationBar />
      <Layout>
        <Router basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route path={process.env.PUBLIC_URL + '/'} element={<Home/>} />
            <Route path={process.env.PUBLIC_URL + '/login'} element={<Login></Login>} />
            <Route path={process.env.PUBLIC_URL + '/signup'} element={<SignUp></SignUp>} />
            <Route path={process.env.PUBLIC_URL + '/user'} element={<UserProfile></UserProfile>} />
          </Routes>
        </Router>
      </Layout>
    </AuthContext.Provider>
  );
}

export default App;
