
import { Link } from 'react-router-dom';
import Particles from '../asset/background.jsx';
import { motion } from "framer-motion";
import { useState } from 'react';
import axios from 'axios';

function Signup() {
  const [usernameReg, setUsernameReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [firstnameReg, setFirstnameReg] = useState('')
  const [lastnameReg, setLastnameReg] = useState('')

  const [emailReg, setEmailReg] = useState('')



  const handleRegister = async (e) => {
    e.preventDefault();





    const userData = {
      username: usernameReg,
      password: passwordReg,
      firstname: firstnameReg,
      lastname: lastnameReg,
      email: emailReg
    };




    try {

      const response = await axios.post('http://localhost:5000/register', userData);  /* will be replaced by the backend URL*/

      console.log("Success:", response.data);
      alert("Account created successfully!");

    }
    catch (error) {
      console.error("Error signing up:", error.response?.data || error.message);
      alert("Registration failed.");
    }
  };






  return (
    <div className="flex h-screen w-full bg-white overflow-hidden">

      {/* LEFT SIDE */}
      <div className="hidden lg:block lg:w-[50%] h-full relative overflow-hidden bg-slate-950 simple-curve shadow-2xl">
        <div className="absolute inset-0 z-0">
          <Particles
            particleColors={["#ffffff"]}
            particleCount={200}
            particleSpread={10}
            speed={0.1}
            particleBaseSize={200}
            moveParticlesOnHover
            alphaParticles
            disableRotation={false}
            pixelRatio={1}
          />
          
        </div>
         
        <div className="relative z-10 h-full w-full flex flex-col justify-end p-16 bg-gradient-to-t from-black/60 via-transparent to-transparent">
          <div className="max-w-md">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1.2, ease: 'easeOut' }}
            >
              <p className="text-white text-3xl font-medium italic leading-relaxed drop-shadow-2xl">
                "Start collaborating with your team in minutes."
              </p>
            </motion.div>
          </div>
        </div>
      </div>

      {/* RIGHT SIDE*/}
      <div className="w-full lg:w-[50%] h-full bg-white flex justify-center overflow-y-auto px-8 sm:px-12 py-5">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="w-full max-w-sm py-12"
        >
          {/* Header Section */}
          <div className="mb-3 text-center lg:text-left ">
            <h1 className="text-4xl font-bold text-gray-900 tracking-tight">
              Create account
            </h1>
            <p className="text-purple-900 mt-2 text-lg font-medium">
              Join our collaboration platform today.
            </p>
          </div>

          {/* Form with Smaller Inputs */}
          <form className="space-y-4" onSubmit={handleRegister}>

            {/* First Name */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600 ml-1">First Name</label>
              <input
                type="text"
                onChange={(e) => { setFirstnameReg(e.target.value) }}

                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-sm placeholder:text-gray-400"
              />
            </div>

            {/* Last Name */}


            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600 ml-1">Last Name</label>
              <input
                type="text"
                onChange={(e) => { setLastnameReg(e.target.value) }}

                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-sm placeholder:text-gray-400"
              />
            </div>


            {/*username */}

            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600 ml-1">Username</label>
              <input
                type="text"
                onChange={(e) => { setUsernameReg(e.target.value) }}

                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-sm placeholder:text-gray-400"
              />
            </div>
            {/* Email */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600 ml-1">Email Address</label>
              <input
                type="email"
                onChange={(e) => { setEmailReg(e.target.value) }}


                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-sm placeholder:text-gray-400"
              />
            </div>

            {/* Password */}
            <div className="flex flex-col gap-1.5">
              <label className="text-sm font-semibold text-gray-600 ml-1">Password</label>
              <input
                type="password"
                onChange={(e) => { setPasswordReg(e.target.value) }}

                className="w-full px-4 py-2 rounded-lg border border-gray-200 focus:border-indigo-500 focus:ring-4 focus:ring-indigo-500/10 outline-none transition-all text-sm placeholder:text-gray-400"
              />
            </div>

            {/* Terms */}
            <div className="flex items-start gap-3 px-1 py-1">
              <input
                type="checkbox"
                id="terms"
                className="w-4 h-4 mt-0.5 accent-purple-900 cursor-pointer"
              />
              <label htmlFor="terms" className="text-xs text-gray-500 leading-normal">
                By creating an account, I agree to the <span className="text-purple-900 font-bold hover:underline cursor-pointer">Terms</span> and <span className="text-purple-900 font-bold hover:underline cursor-pointer">Privacy</span>.
              </label>
            </div>

            {/* Buttons (Compact py-2) */}
            <button className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2.5 rounded-lg shadow-lg shadow-indigo-100 transition-all transform active:scale-[0.98] text-sm">
              Create Account
            </button>

            <div className="relative flex py-2 items-center">
              <div className="flex-grow border-t border-gray-100"></div>
              <span className="flex-shrink mx-4 text-gray-400 text-[10px] font-bold uppercase tracking-widest">or</span>
              <div className="flex-grow border-t border-gray-100"></div>
            </div>

            <button className="w-full bg-white border border-gray-200 text-gray-700 font-semibold py-2 rounded-lg flex items-center justify-center gap-2 hover:bg-gray-50 transition-all text-sm">
              <img src="https://www.svgrepo.com/show/355037/google.svg" className="w-4 h-4" alt="Google" />
              Sign up with Google
            </button>
          </form>

          <p className="text-center mt-8 text-gray-600 text-sm py-5">
            Already have an account? {' '}
            <Link to="/" className="text-purple-900 font-bold hover:text-purple-600 transition-colors ">
              Log in
            </Link>
          </p>
        </motion.div>
      </div>
    </div>
  );
}

export default Signup;