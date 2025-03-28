import { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import NavbarComponment from './components/NavbarComponent';
import HomeComponent from './components/HomeComponent';
import LoginComponent from './components/LoginComponent';
import './App.css';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState('');

  const handleLogin = (inputUsername) => {
    if (inputUsername === 'enghouse' || inputUsername === 'meera99') {
      setIsLoggedIn(true);
      setUsername(inputUsername);
      return true;
    }
    return false;
  };

  const handleLogout = () => {
    setIsLoggedIn(false);
    setUsername('');
  };

  return (
    <Router>
      <div className="App">
        <NavbarComponment isLoggedIn={isLoggedIn} username={username} onLogout={handleLogout} />
        <div className="container">
          <Routes>
            <Route 
              path="/" 
              element={isLoggedIn ? <HomeComponent username={username} /> : <LoginComponent onLogin={handleLogin} />} 
            />
          </Routes>
        </div>
      </div>
    </Router>
  );
}

export default App;