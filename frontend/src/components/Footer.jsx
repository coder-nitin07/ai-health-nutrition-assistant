import { Link } from "react-router-dom";

const Footer = ()=>{
    return (
        <footer className="bg-[#0F0F0F] text-[#F0F0F0] py-8 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

                {/* Brand */}
                <div className="text-xl font-bold text-[#00C896]">
                    NutriAI
                </div>

                {/* Links */}
                <div className="flex gap-6 text-sm">
                    <Link to="/about" className="hover:text-[#00E0A1] transition">
                        About
                    </Link>
                    <Link to="/docs" className="hover:text-[#00E0A1] transition">
                        Docs
                    </Link>
                    <Link to="/contact" className="hover:text-[#00E0A1] transition">
                        Contact
                    </Link>
                </div>

                 {/* Copyright */}
                <p className="text-xs text-gray-400">
                    © {new Date().getFullYear()} NutriAI. All rights reserved.
                </p>
            </div>
        </footer>
    )
};

export default Footer;