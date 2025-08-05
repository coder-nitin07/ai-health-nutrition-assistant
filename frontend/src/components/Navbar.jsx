import { useEffect, useRef, useState } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { motion } from 'framer-motion';
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const [menuOpen, setMenuOpen] = useState(false);
    const [isVisible, setIsVisible] = useState(true);
    const lastScrollY = useRef(0);

    const isHomePage = location.pathname === "/home";

    const handleLogout = () => {
        localStorage.clear();
        navigate('/login');
    };

    const toggleMenu = () => {
        setMenuOpen((prev) => !prev);
    };

    const handleLogoClick = () => {
        navigate('/home');
    };

    useEffect(() => {
        const handleScroll = () => {
            if (menuOpen) setMenuOpen(false);

            const currentScrollY = window.scrollY;

            if (currentScrollY <= 10) {
                setIsVisible(true);
            } else if (currentScrollY > lastScrollY.current) {
                setIsVisible(false);
            } else {
                setIsVisible(true);
            }

            lastScrollY.current = currentScrollY;
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [menuOpen]);

    return (
        <motion.nav
            variants={{
                visible: { y: 0 },
                hidden: { y: "-100%" },
            }}
            initial="hidden"
            animate={isVisible ? "visible" : "hidden"}
            transition={{ duration: 0.35, ease: "easeInOut" }}
            className="fixed top-0 left-0 w-full z-50 bg-[#0F0F0F]"
        >
            <div className="flex items-center justify-between px-6 py-4 max-w-7xl mx-auto">

                {/* Logo - navigates to /home */}
                <div
                    className="text-2xl font-bold text-[#00C896] cursor-pointer"
                    onClick={handleLogoClick}
                >
                    NutriAI
                </div>

                {/* Desktop Menu */}
                <div className="hidden md:flex space-x-6 text-[#F0F0F0] font-medium">
                    {isHomePage && (
                        <>
                            <a href="#about" className="hover:text-[#00C896] transition">About</a>
                            <a href="#docs" className="hover:text-[#00C896] transition">Docs</a>
                        </>
                    )}

                    <a
                        onClick={() => navigate('/logs')}
                        className="cursor-pointer hover:text-[#00C896] transition"
                        >
                        Logs
                    </a>

                    <a
                        onClick={() => navigate('/plans')}
                        className="cursor-pointer hover:text-[#00C896] transition"
                        >
                        Plans
                    </a>


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
            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <motion.div
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="absolute top-full right-4 w-48 bg-[#121212] text-[#F0F0F0] rounded-lg shadow-lg py-4 px-6 flex flex-col space-y-3 md:hidden"
                >
                    {isHomePage && (
                        <>
                            <a href="#about" onClick={toggleMenu} className="hover:text-[#00C896] transition">About</a>
                            <a href="#docs" onClick={toggleMenu} className="hover:text-[#00C896] transition">Docs</a>
                        </>
                    )}

                    <a
                        onClick={() => {
                            toggleMenu();
                            navigate('/logs');
                        }}
                        className="cursor-pointer hover:text-[#00C896] transition"
                        >
                        Logs
                    </a>

                    <a
                        onClick={() => {
                            toggleMenu();
                            navigate('/plans')}
                        }
                        className="cursor-pointer hover:text-[#00C896] transition"
                        >
                        Plans
                    </a>

                    <span
                        onClick={() => {
                            toggleMenu();
                            handleLogout();
                        }}
                        className="cursor-pointer hover:text-[#00C896] transition"
                    >
                        Logout
                    </span>
                </motion.div>
            )}
        </motion.nav>
    );
};

export default Navbar;