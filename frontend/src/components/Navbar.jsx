import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from 'framer-motion';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const navigate  = useNavigate();
    const [ menuOpen, setMenuOpen ] = useState(false);

    const handleLogout = () =>{
        localStorage.removeItem('token');
        navigate('/login');
    };

    const toggleMenu = () =>{
        setMenuOpen((prev)=> !prev);
    };

    return (
        <motion.nav 
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: 'easeOut' }}
            className="w-full px-6 py-4 bg-[#0F0F0F] text-[#F0F0F0] shadow-md flex justify-between items-center relative z-50"
        >

            {/* Logo */}
            <div className="text-2xl font-bold text-[#00C896]">NutriAI</div>

            
            
            {/* menu */}
            <div className="hidden md:flex space-x-6 text-[#F0F0F0] font-medium">
                <a href="#about" className="hover:text-[#00C896] transition">About</a>
                <a href="#docs" className="hover:text-[#00C896] transitio">Docs</a>
                <span
                    onClick={handleLogout}
                    className="cursor-pointer hover:text-[#00C896] transition"
                >
                    Logout
                </span>
            </div>




            {/* Hamburger Icon - Mobile */}
            <div className="md:hidden text-2xl cursor-pointer" onClick={toggleMenu}>
                {menuOpen ? <FiX /> : <FiMenu />}
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="absolute top-full right-4 mt-2 w-48 bg-[#121212] text-[#F0F0F0] rounded-lg shadow-lg py-4 px-6 flex flex-col space-y-3 md:hidden">
                <a href="#about" onClick={toggleMenu} className="hover:text-[#00C896] transition">About</a>
                <a href="#docs" onClick={toggleMenu} className="hover:text-[#00C896] transition">Docs</a>
                <span
                    onClick={() => {
                        toggleMenu();
                        handleLogout();
                    }}
                    className="cursor-pointer hover:text-[#00C896] transition"
                >
                    Logout
                </span>
                </div>
            )}
        </motion.nav>
    )
};

export default Navbar;