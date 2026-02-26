
import { Link } from 'react-router-dom';
import Particles from '../asset/background.jsx';
import { motion } from "framer-motion";
import { useState } from 'react';
import axios from 'axios';

function Login() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')



  const handleLogin = async (e) => {
    e.preventDefault();


    const userData = {

      password: password,
      email: email
    };



    try {

      const response = await axios.post('http://localhost:5000/login', userData);/* will be replaced by the backend URL*/

      console.log("Success:", response.data);
      alert("logged in successfully!");

    }
    catch (error) {
      console.error("Error logging in:", error.response?.data || error.message);
      alert("login failed.");
    }
  };







  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">

      {/* LEFT SIDE */}
      <div className="hidden lg:block lg:w-1/2 h-full relative overflow-hidden bg-slate-950 simple-curve  shadow-2xl">

        {/* The LightPillar Animation */}
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#ffffff"]}
            particleCount={400}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={100}
            moveParticlesOnHover
            alphaParticles
            disableRotation={false}
            pixelRatio={1}
          />
        </div>

        {/* Content Overlay  */}
        <div className="relative z-10 h-full w-full flex flex-col justify-end p-16 bg-gradient-to-t from-black/60 via-transparent to-transparent">


          <div className="max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <p className="text-white text-3xl font-medium italic leading-relaxed drop-shadow-2xl">
                "The best way to collaborate is to stay connected."
              </p>
            </motion.div>

          </div>
        </div>
      </div>

      {/* RIGHT SIDE*/}
      <div className="w-full lg:w-1/2 h-full bg-white flex items-center justify-center px-8 sm:px-12">
        <div className="w-full max-w-md">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: 'easeOut' }}
          >
            {/* Header */}
            <div className="mb-10 text-center lg:text-left">
              <h1 className="text-4xl font-bold text-gray-900 tracking-tight">Welcome back</h1>
              <p className="text-purple-900 mt-3 font-medium">Please enter your details to sign in</p>
            </div>

            {/* Form */}
            <form className="space-y-6" onSubmit={handleLogin}>

              {/* Email Input */}
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700 ml-1">Email Address</label>
                <input
                  type="email"
                  onChange={(e) => { setEmail(e.target.value) }}


                  className="w-full px-4 py-1.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Password Input */}
              <div className="flex flex-col gap-2">
                <div className="flex justify-between items-center px-1">
                  <label className="text-sm font-semibold text-gray-700">Password</label>
                  <a href="#" className="text-xs font-bold text-purple-900 hover:text-purple-600 transition-colors">Forgot password?</a>
                </div>
                <input
                  type="password"
                  onChange={(e) => { setPassword(e.target.value) }}

                  className="w-full px-4 py-1.5 rounded-xl border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all placeholder:text-gray-400"
                />
              </div>

              {/* Login Button */}
              <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 rounded-xl shadow-lg shadow-indigo-200 transition-all transform active:scale-[0.98]">
                Sign in
              </button>

              {/* Divider */}
              <div className="relative flex py-4 items-center">
                <div className="flex-grow border-t border-gray-100"></div>
                <span className="flex-shrink mx-4 text-gray-400 text-xs font-bold uppercase tracking-widest">or</span>
                <div className="flex-grow border-t border-gray-100"></div>
              </div>

              {/* Google Sign-in */}
              <button className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-3.5 rounded-xl flex items-center justify-center gap-3 hover:bg-gray-50 hover:border-gray-300 transition-all">
                <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-5 h-5" alt="Google" />
                Sign in with Google
              </button>
            </form>

            {/* Footer Link */}
            <p className="text-center mt-10 text-gray-600 text-sm">
              Don't have an account? {' '}
              <Link to="/signup" className="text-purple-900 font-bold hover:text-purple-600 transition-colors">
                Create an account
              </Link>
            </p>
          </motion.div>
        </div>

      </div>
    </div >
  );
}

export default Login;