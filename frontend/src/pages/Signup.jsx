import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import axios from 'axios';
import Lottie from 'lottie-react';
import Yoga from '../assets/Yoga.json';
import { AiFillEye, AiFillEyeInvisible } from 'react-icons/ai';

const Signup = () => {
  const [ formData, setFormData ] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: ''
  });

  const [ error, setError ] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e)=>{
      setFormData({ ...formData, [ e.target.name ]: e.target.value });
  };

  const handleSubmit = async (e)=>{
      e.preventDefault();

      // Basic validations
      if (!formData.name || !formData.email || !formData.password || !formData.confirmPassword) {
        setError("Please fill in all fields");
        return;
      }

      if (formData.password.length < 8 || formData.password.length > 20) {
        setError("Password must be 8-20 characters");
        return;
      }

      if (formData.password !== formData.confirmPassword) {
        setError("Passwords do not match");
        return;
      }

      try {
          const res = await axios.post(`${import.meta.env.VITE_BACKEND_URL}/auth/register`, {
            name: formData.name,
            email: formData.email,
            password: formData.password
          });

          localStorage.setItem("token", res.data.token);
          navigate("/home");
      } catch (err) {
          setError(err.response?.data?.message || "Signup Failed");
      }
  };
  return (
    <motion.div
        className='min-h-screen screen flex bg-[#121212] text-[#F0F0F0] overflow-hidden'
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
    >
        {/* Left Side Animation */}
        <motion.div
            className='hidden md:flex w-1/2 items-center justify-center bg-[#1E1E1E] p-8'
            initial={{ x: -10, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
        > 
            <div className='text-center'>
              {/* Lottie Image */}
              <Lottie
                animationData={Yoga}
                loop={true}
                className="w-[50%] mx-auto mb-6"
              />


              <h1 className='text-3xl font-semibold mb-4'>Join the Journey!</h1>
              <p className='text-[#B0B0B0]'>Create your account today.</p>
            </div>
        </motion.div>

        {/* Right Side */}
        <motion.div
            className='w-full md:w-1/2 flex items-center justify-center p-6'
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
        >
          <motion.form 
              onSubmit={handleSubmit}
              className='w-full max-w-sm space-y-6 bg-[#1E1E1E] p-8 rounded-xl shadow-md border border-[#2C2C2C]'
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5, delay: 0.5 }}
          >
              <h2 className='text-2xl font-bold text-center'>Signup</h2>

              {/* Name */}
              <div>
                <label className='block mb-1'>Name</label>
                <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className='w-full px-4 py-2 rounded-xl bg-[#2C2C2C] text-white outline-none focus:ring-2 focus:ring-[#38ef7d] transition-all duration-200'
                    required
                />
              </div>

              {/* Email */}
              <div>
                <label className='block mb-1'>Email</label>
                <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className='w-full px-4 py-2 rounded-xl bg-[#2C2C2C] text-white outline-none focus:ring-2 focus:ring-[#38ef7d] transition-all duration-200'
                    required
                />
              </div>


              {/* Password */}
            <div className="relative">
                <label className="block mb-1">Password</label>
                <input
                  type={showPassword ? "text" : "password"}
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-[#2C2C2C] text-white outline-none focus:ring-2 focus:ring-[#38ef7d] pr-10"
                  required
                />
                <span 
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-[38px] cursor-pointer text-[#B0B0B0]"
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>



              {/* Confirm Password */}
             <div className="relative">
                <label className="block mb-1">Confirm Password</label>
                <input
                  type={showConfirmPassword ? "text" : "password"}
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="w-full px-4 py-2 rounded-xl bg-[#2C2C2C] text-white outline-none focus:ring-2 focus:ring-[#38ef7d] pr-10"
                  required
                />
                <span 
                  onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                  className="absolute right-3 top-[38px] cursor-pointer text-[#B0B0B0]"
                >
                  {showPassword ? <AiFillEyeInvisible /> : <AiFillEye />}
                </span>
              </div>

              {/* Error Message */}
              { error && <p className='text-red-400 text-sm text-center'>{error}</p> }

              {/* Submit button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-[#38ef7d] to-[#11998e] hover:opacity-90 transition-opacity py-2 rounded-xl text-white font-semibold mt-4"
              >
                  Signup
              </button>

              
              
              {/* Already have an account */}
              <p className="text-sm text-center mt-4">
                Already have an account?{" "}
                <Link to="/login" className="text-[#38ef7d] hover:underline">
                  Login
                </Link>
              </p>
          </motion.form>
        </motion.div>
    </motion.div>
  )
}

export default Signup