// import React from 'react'
// import { useState,useEffect } from 'react'
// import { useNavigate } from 'react-router-dom'
// import { nanoid } from 'nanoid'
// import { useAuth } from '../context/AuthContext'

// export default function LandingPage() {
//     const [roomInput, setRoomInput] = useState('')
//     const navigate = useNavigate();

// const { user, loading } = useAuth();

// useEffect(() => {
//   if (!loading && !user) {
//     navigate("/login");
//   }
// }, [user, loading]);

//     const handleCreateRoom = () => {
//         const newRoomId = nanoid(6)
//         navigate(`/room/${newRoomId}`)
//     }

//     const handleJoinRoom = () => {
//         let roomId = roomInput.trim()

//         if(roomId.includes('/room/')){
//             const parts = roomId.split('/room/')
//             roomId = parts[1];
//         }

//         if(roomId){
//             navigate(`/room/${roomId}`)
//         }
//         else{
//             alert('Please enter a valid Room ID or link')
//         }
//     }

//     return (
//         <div style={styles.container}>
//             <h1>WebRTC Video Chat</h1>
//             <div style={styles.buttonContainer}>
//                 <button style={styles.button} onClick={handleCreateRoom}>Create New Room</button>
//             </div>
//             <div style={styles.joinContainer}>
//                 <input
//                     style={styles.input}
//                     type="text"
//                     value={roomInput}
//                     onChange={(e)=>setRoomInput(e.target.value)}
//                     placeholder='Enter Room ID or Room Link'
//                 />
//                 <button style={styles.button} onClick={handleJoinRoom}>Join Room</button>
//             </div>
//         </div>
//     )
// }

// const styles = {
//     container: {
//         textAlign: 'center',
//         maxWidth: '500px',
//         margin: '0 auto',
//         padding: '2rem'
//     },
//     buttonContainer: {
//         margin: '2rem 0'
//     },
//     joinContainer: {
//         display: 'flex',
//         flexDirection: 'column',
//         gap: '1rem'
//     },
//     input: {
//         padding: '0.5rem',
//         borderRadius: '4px',
//         border: '1px solid #ccc',
//         fontSize: '1rem'
//     },
//     button: {
//         padding: '0.5rem 1rem',
//         cursor: 'pointer',
//         borderRadius: '4px'
//     }
// }

// import React, { useState, useEffect } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { nanoid } from 'nanoid';
// import { useAuth } from '../context/AuthContext';

// export default function LandingPage() {
//   const [roomInput, setRoomInput] = useState('');
//   const navigate = useNavigate();
//   const { user, loading } = useAuth();

//   useEffect(() => {
//     if (loading) return; // wait for loading to finish
//     if (!user) navigate('/login');
//   }, [user, loading]);

//   const handleCreateRoom = () => {
//     const newRoomId = nanoid(6);
//     navigate(`/room/${newRoomId}`);
//   };

//   const handleJoinRoom = () => {
//     let roomId = roomInput.trim();
//     if (roomId.includes('/room/')) {
//       const parts = roomId.split('/room/');
//       roomId = parts[1];
//     }
//     if (roomId) {
//       navigate(`/room/${roomId}`);
//     } else {
//       alert('Please enter a valid Room ID or link');
//     }
//   };

//   if (loading) return <div>Loading...</div>; // optional loading screen

//   return (
//     <div style={styles.container}>
//       <h1>WebRTC Video Chat</h1>
//       <div style={styles.buttonContainer}>
//         <button style={styles.button} onClick={handleCreateRoom}>Create New Room</button>
//       </div>
//       <div style={styles.joinContainer}>
//         <input
//           style={styles.input}
//           type="text"
//           value={roomInput}
//           onChange={(e) => setRoomInput(e.target.value)}
//           placeholder="Enter Room ID or Room Link"
//         />
//         <button style={styles.button} onClick={handleJoinRoom}>Join Room</button>
//       </div>
//     </div>
//   );
// }

// const styles = {
//   container: {
//     textAlign: 'center',
//     maxWidth: '500px',
//     margin: '0 auto',
//     padding: '2rem',
//   },
//   buttonContainer: {
//     margin: '2rem 0',
//   },
//   joinContainer: {
//     display: 'flex',
//     flexDirection: 'column',
//     gap: '1rem',
//   },
//   input: {
//     padding: '0.5rem',
//     borderRadius: '4px',
//     border: '1px solid #ccc',
//     fontSize: '1rem',
//   },
//   button: {
//     padding: '0.5rem 1rem',
//     cursor: 'pointer',
//     borderRadius: '4px',
//   },
// };

import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { nanoid } from "nanoid";
import { useAuth } from "../context/AuthContext";
import { ReactTyped } from "react-typed";
import HeroSectionImage from "../assets/herosectionImage.png";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Loader from "../components/Loader";
import { toast } from "react-toastify";

export default function LandingPage() {
  const [roomInput, setRoomInput] = useState("");
  const navigate = useNavigate();
  const { user, loading } = useAuth();

  useEffect(() => {
    if (loading) return;
    if (!user) navigate("/login");
  }, [user, loading]);

  const handleCreateRoom = () => {
    const newRoomId = nanoid(6);
    navigate(`/room/${newRoomId}`);
  };

  const handleJoinRoom = () => {
    let roomId = roomInput.trim();
    if (roomId.includes("/room/")) {
      const parts = roomId.split("/room/");
      roomId = parts[1];
    }
    if (roomId) {
      navigate(`/room/${roomId}`);
    } else {
      // alert("Please enter a valid Room ID or link");
      toast.warn("Please enter a valid Room ID or link");
    }
  };

  if (loading) return <Loader />;

  return (
    <>
      <Navbar />
      <div className="bg-gray-900 pt-10 md:pt-0 text-white min-h-screen flex flex-col md:flex-row justify-center items-center px-6 sm:px-8 md:px-12">
        {/* Left Side - Text + Actions */}
        <div className="md:w-3/6 text-center md:text-left px-4 sm:px-8">
          <h1 className="text-3xl sm:text-4xl md:text-6xl font-extrabold leading-tight">
            Where
            <br />
            Every Ping
            <br />
            Matters...
          </h1>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4 text-gray-300">
            <ReactTyped
              strings={[
                "Seamless Virtual Meetings",
                "Secure & Reliable Connection",
                "Effortless Team Collaboration",
              ]}
              typeSpeed={50}
              backSpeed={50}
              loop
            />
          </h2>

          {/* CTA Buttons */}
          <div className="mt-6 flex flex-col sm:flex-row md:flex-row items-center space-y-4 sm:space-y-0 md:space-y-0 md:space-x-4">
            <button
              onClick={handleCreateRoom}
              className="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition duration-300 w-full sm:w-auto"
            >
              Create a Meeting
            </button>
          </div>

          {/* Join Room Input */}
          <div className="mt-4">
            <input
              type="text"
              value={roomInput}
              onChange={(e) => setRoomInput(e.target.value)}
              placeholder="Enter Room ID or Room Link and Click on Join a Meeting"
              className="w-full sm:w-3/4 px-4 py-2 bg-gray-800 text-white border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
            />

            <button
              onClick={handleJoinRoom}
              className="mt-5 md:mt-4 sm:ml-3 px-6 py-2 bg-green-800 hover:bg-green-700 text-white font-semibold rounded-lg transition duration-300"
            >
              Join a Meeting
            </button>
          </div>
        </div>

        {/* Right Side - Hero Image */}
        <div className="md:w-2/6 flex justify-center mt-8 md:mt-0">
          <img
            src={HeroSectionImage}
            alt="Meeting Illustration"
            className="w-3/4 sm:w-2/3 md:w-full max-w-lg"
          />
        </div>
      </div>

      <Footer />
    </>
  );
}
