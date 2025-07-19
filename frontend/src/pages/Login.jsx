import { motion } from 'framer-motion';
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Lottie from 'lottie-react';
import fitnessAnimation from '../assets/Stress Management.json';

const Login = () => {
  const [ formData, setFormData ] = useState({ email: '', password: '' });
  const [ error, setError ] = useState('');
  const navigate = useNavigate();

  const handleChange = (e)=>{
    setFormData({ ...formData, [ e.target.name ]: e.target.value });
  };

  const handleSubmit = async (e)=>{
    e.preventDefault();

    if(!formData.email || !formData.password){
      setError('Please fill in all fields');
      return;
    }

    try {
      // Call the Backend route
      const res = await axios.post('http://localhost:3000/auth/login', formData);

      localStorage.setItem('token', res.data.token);

      navigate('/home');
    } catch (err) {
      setError(err.response?.data?.message || 'Login Failed');
    }
  };

  return (
    <motion.div 
      className='min-h-screen screen flex bg-[#121212] text-[#F0F0F0] overflow-hidden'
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
        
        {/* Left Side Panel we hide for small screens */}
        <motion.div 
          className='hidden md:flex w-1/2 items-center justify-center bg-dark bg-[#1E1E1E] p-8'
          initial={{ x:-10, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className='text-center'>

            {/* Lottie image */}
            <Lottie
              animationData={fitnessAnimation}
              loop={true}
              className="w-[60%] mx-auto mb-1"
            />

            <h1 className='text-3xl  font-semibold mb-4'>Welcome Back!</h1>
            <p className='text-[#B0B0B0]'>Your health assistant awaits.</p>
          </div>
        </motion.div>

        {/* Right Side - Login Form */}
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
              <h2 className='text-2xl font-bold text-center'>Login</h2>

              <div>
                <label className='block text-sm mb-2'>Email</label>
                <input 
                    type="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    required 
                    className="w-full bg-[#121212] border border-[#2C2C2C] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C896]"
                />
              </div>

              <div>
                <label className='block text-sm mb-2'>Password</label>
                <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    required
                    className="w-full bg-[#121212] border border-[#2C2C2C] p-3 rounded-md focus:outline-none focus:ring-2 focus:ring-[#00C896]"
                />

                { error && (
                  <p className='text-[#FF4C4C] text-sm text-center'>{ error }</p>
                )}
              </div>

              <motion.button 
                  type='submit'
                  className="w-full bg-[#00E0A1] hover:bg-[#00C896] text-black font-medium py-3 rounded-md transition duration-200"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
              >
                  Sign In
              </motion.button>

              <p className='text-center text-sm text-[#B0B0B0]'>
                Don't have an account?{' '} 
                <a href="/signup" className='text-[#00E0A1] hover:underline'>Sign up</a>
              </p>
          </motion.form>
        </motion.div>
    </motion.div>
  )
}

export default Login