// import { useState } from 'react'
// import { useAuth } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom'

// const Login = () => {
//   const { login } = useAuth()
//   const navigate = useNavigate()

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = async (e) => {
//      e.preventDefault();
//     await login(email, password);
//     navigate('/landing'); // redirect after login
//   }

//   return (
//     <form onSubmit={handleSubmit} className="p-4">
//       <h2>Login</h2>
//       <input
//         type="email"
//         placeholder="Email"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         required
//       /><br/>
//       <input
//         type="password"
//         placeholder="Password"
//         value={password}
//         onChange={(e) => setPassword(e.target.value)}
//         required
//       /><br/>
//       <button type="submit">Login</button>
//     </form>
//   )
// }

// export default Login







// import { useState } from 'react'
// import { useAuth } from '../context/AuthContext'
// import { useNavigate } from 'react-router-dom'
// import { motion } from 'framer-motion'

// const Login = () => {
//   const { login } = useAuth()
//   const navigate = useNavigate()

//   const [email, setEmail] = useState('')
//   const [password, setPassword] = useState('')

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     await login(email, password)
//     navigate('/landing')
//   }

//   return (
//     <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
//       <motion.div
//         initial={{ opacity: 0, y: 20 }}
//         animate={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.6 }}
//         className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-zinc-900 border border-zinc-800"
//       >
//         <h2 className="text-3xl font-semibold text-white mb-6 text-center">Welcome Back</h2>
//         <form onSubmit={handleSubmit} className="space-y-5">
//           <div>
//             <label className="block text-sm text-zinc-400 mb-1">Email Address</label>
//             <input
//               type="email"
//               placeholder="you@example.com"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//               required
//               className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <div>
//             <label className="block text-sm text-zinc-400 mb-1">Password</label>
//             <input
//               type="password"
//               placeholder="••••••••"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//               required
//               className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
//             />
//           </div>
//           <button
//             type="submit"
//             className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition duration-200"
//           >
//             Sign In
//           </button>
//         </form>
//         <p className="mt-4 text-sm text-zinc-500 text-center">
//           Don’t have an account? <span className="text-indigo-400 underline cursor-pointer">Sign up</span>
//         </p>
//       </motion.div>
//     </div>
//   )
// }

// export default Login

import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import logo from '../assets/chat.png';

const Login = () => {
  const navigate = useNavigate()
  const { login } = useAuth()

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    await login(email, password)
    navigate('/landing')
  }

  return (
    <div className="min-h-screen bg-zinc-950 flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 rounded-2xl shadow-xl bg-zinc-900 border border-zinc-800">
    
    {/* 🔥 Logo + Ping side-by-side */}
    <div className="flex items-center justify-center mb-6 space-x-3">
      <img src={logo} alt="Ping Logo" className="w-10 h-10" />
      <h1 className="text-3xl font-bold text-indigo-500">Ping</h1>
    </div>


        <form onSubmit={handleSubmit} className="space-y-5">
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <div>
            <label className="block text-sm text-zinc-400 mb-1">Password</label>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="w-full px-4 py-2 rounded-lg bg-zinc-800 text-white border border-zinc-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            />
          </div>
          <button
            type="submit"
            className="w-full py-2 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white font-medium transition duration-200"
          >
            Log In
          </button>
        </form>

        <p className="mt-4 text-sm text-zinc-500 text-center">
          Don’t have an account?{' '}
          <span
            className="text-indigo-400 underline cursor-pointer"
            onClick={() => navigate('/signup')}
          >
            Sign up
          </span>
        </p>
      </div>
    </div>
  )
}

export default Login



