#  Real-Time Video Conferencing App

A full-stack real-time video and audio communication platform built with modern web technologies. This app enables users to join virtual rooms, authenticate securely, and interact via high-quality peer-to-peer connections.



##  Key Features

- **Real-Time Video & Audio**: Powered by WebRTC for smooth, low-latency communication.
- **Room-Based Architecture**: Create or join rooms using unique IDs or direct links.
- **Authentication System**: Secure user authentication using JWT, cookies, and MongoDB.
- **Adaptive Video Layout**: Automatically adjusts the video grid to match the number of participants.
- **Media Controls**: Toggle microphone and camera at any time during the call.
- **Active Speaker Highlighting**: Visually identifies the person currently speaking.
- **Connection Indicators**: Displays real-time server connection status.
- **Responsive UI**: Fully optimized for both desktop and mobile screens.

---

## 🛠️ Tech Stack

### Frontend (React 19 + Vite)
- **Framework**: React
- **Routing**: React Router
- **Real-Time Engine**: Socket.IO Client
- **Icons**: Lucide React
- **Utilities**: UUID for unique room links

### Backend (Node.js + Express)
- **Runtime**: Node.js
- **Framework**: Express.js
- **WebSockets**: Socket.IO for real-time signaling
- **Database**: MongoDB for user data and persistence
- **Authentication**:
  - **JWT (JSON Web Tokens)** for stateless user sessions
  - **HTTP-Only Cookies** for secure token storage
- **Middleware & Utilities**:
  - `cors` for cross-origin support
  - `dotenv` for environment configuration
  - `bcryptjs` for password hashing
  - `cookie-parser` for cookie handling
  - `nodemon` for development auto-reloading

---


###  User Authentication Flow

1. **Sign Up / Log In**  
   Users register or log in using email and password. Passwords are hashed and stored in MongoDB.

2. **JWT + Cookies**  
   Upon login, a signed JWT is issued and stored in an HTTP-only cookie, ensuring protection against XSS attacks.

3. **Protected Routes**  
   The backend checks for valid JWT tokens on protected routes to allow access only to authenticated users.

---

## How It Works

The application leverages WebRTC for peer-to-peer media streaming, with a Node.js server acting as a **signaling server** to coordinate connections.

1.  **Joining a Room**: When a user joins a room, the client connects to the Socket.IO server and emits a `join-room` event.
2.  **Signaling**: The server adds the user to a room and notifies them of existing participants. For each existing participant, a new `RTCPeerConnection` is created.
3.  **Peer Connection**: The new user exchanges signaling messages (SDP offers/answers and ICE candidates) with other users in the room via the Socket.IO server. This process, known as the "handshake," establishes a direct peer-to-peer connection.
4.  **Media Streaming**: Once the connection is established, video and audio data are streamed directly between the users' browsers, minimizing latency and server load.
5.  **Disconnection**: When a user leaves, a `disconnect` event is fired, and the server notifies all other room participants to close the corresponding peer connection.

---

##  Deployment

- **Frontend**: Deployed on [Vercel](https://vercel.com/)
- **Backend**: Hosted on [Render](https://render.com)
- **Database**: MongoDB Atlas 

---


