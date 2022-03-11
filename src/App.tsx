import React from 'react';
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import {Home} from './components/Home'
import {Layout} from './components/Layout';
import Login from './components/Login/Login';
import SignUp from './components/Login/SignUp';
import {NavigationBar} from './components/NavBar/NavigationBar';

function App() {
  return (
    <React.Fragment>
      <NavigationBar/>
      <Layout>
      <Router>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login></Login>} />
          <Route path="/signup" element={<SignUp></SignUp>} />
        </Routes>
      </Router>
      </Layout>
    </React.Fragment>
  );
}

export default App;     
