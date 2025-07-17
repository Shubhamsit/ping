// import './App.css'
// import { Route, Routes } from 'react-router-dom'
// import LandingPage from './Pages/LandingPage'
// import Room from './Pages/Room'

// function App() {

//   return (
//     <>
//      <Routes>
//       <Route path='/' element={<LandingPage/>}/>
//       <Route path='/room/:roomId' element={<Room/>}/>
//      </Routes>

//     </>
//   )
// }

// export default App




// import './App.css'
// import { Route, Routes } from 'react-router-dom'
// import LandingPage from './Pages/LandingPage'
// import Room from './Pages/Room'
// import Login from './Pages/Login'
// import Signup from './Pages/SignUp'

// function App() {
//   return (
//     <Routes>
//       <Route path='/landing' element={<LandingPage />} />
//       <Route path='/room/:roomId' element={<Room />} />
//       <Route path='/login' element={<Login />} />
//       <Route path='/signup' element={<Signup />} />
//     </Routes>
//   )
// }

// export default App




// App.jsx
import { Route, Routes, Navigate } from 'react-router-dom';
import LandingPage from './Pages/LandingPage';
import Room from './Pages/Room';
import Login from './Pages/Login';
import Signup from './Pages/SignUp';
import ProtectedRoute from './components/ProtectedRoute';
import { useAuth } from './context/AuthContext';

import Home from './Pages/Home';
import Loader from './components/Loader';
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
      {/* <Route
        path="/logout"
        element={<Home/>}
      /> */}
      
      <Route
        path="/signup"
        element={user ? <Navigate to="/landing" /> : <Signup />}
      />
    </Routes>
    </>

  );
}

export default App;
