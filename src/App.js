// src/App.js
// src/App.js
import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import ProfileDetails from './pages/ProfileDetails';
import Admin from './pages/Admin';
import Navbar from './components/Navbar/Navbar';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary';
import { auth } from './firebase';
import './App.css';

function App() {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setUser(user);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  return (
    <ErrorBoundary>
      <Router>
        <div className="app">
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/profile/:id" element={<ProfileDetails />} />
            <Route path="/login" element={user ? <Navigate to="/admin" /> : <Login />} />
            <Route path="/register" element={user ? <Navigate to="/admin" /> : <Register />} />
            <Route path="/admin" element={user ? <Admin /> : <Navigate to="/login" />} />
            {/* Add a catch-all route for 404 pages if desired */}
            <Route path="*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </Router>
    </ErrorBoundary>
  );
}

export default App;
