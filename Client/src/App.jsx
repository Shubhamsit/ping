




// App.jsx
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Room from './Pages/Room';
import Login from './Pages/Login';
import Signup from './Pages/Signup'

import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';


import { ToastContainer } from 'react-toastify';


function App() {
  const { user } = useAuth();

  return (

    <>

    <ToastContainer/>
    <Routes>
      <Route
        path="/"
        element={user ? <Navigate to="/landing" /> : <Navigate to="/login" />}
      />
      <Route
        path="/landing"
        element={
          <ProtectedRoute>
            <LandingPage />
          </ProtectedRoute>
        }
      />
      <Route
        path="/room/:roomId"
        element={
          <ProtectedRoute>
            <Room />
          </ProtectedRoute>
        }
      />
      <Route
        path="/login"
        element={user ? <Navigate to="/landing" /> : <Login />}
      />
    
      
      <Route
        path="/signup"
        element={user ? <Navigate to="/landing" /> : <Signup />}
      />
    </Routes>
    </>

  );
}

export default App;
