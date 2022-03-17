import React, { useState, useEffect } from "react";
import { HashRouter, Route, Switch } from "react-router-dom"
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
      <HashRouter basename='/'>
      <Switch>
          <Route exact path={'/'} component={Home} />
          <Route exact path={'/login'} component={Login} />
          <Route exact path={'/signup'} component={SignUp} />
          <Route exact path={'/profile'} component={UserProfile} />
      </Switch>
      </HashRouter>
        {/* <Router>
          <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/login" element={<Login></Login>} />
            <Route path="/signup" element={<SignUp></SignUp>} />
            <Route path="/profile" element={<UserProfile></UserProfile>} />
          </Routes>
        </Router> */}
      </Layout>
    </AuthContext.Provider>
  );
}

export default App;
