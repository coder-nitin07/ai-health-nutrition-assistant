import { Link } from "react-router-dom";

const Footer = ()=>{
    return (
        <footer className="bg-[#0F0F0F] text-[#F0F0F0] py-8 px-4 sm:px-8">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">

                
                <div className="text-xl font-bold text-[#00C896]">
                NutriAI
                </div>

                
                <div>
                    <a 
                        href="https://www.linkedin.com/in/nitin-gharwal-5b4651249" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="text-sm text-[#F0F0F0] hover:text-[#00E0A1] transition"
                    >
                        Connect with me on LinkedIn
                    </a>
                </div>

                
                <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} NutriAI. All rights reserved.
                </p>
            </div>
        </footer>
    )
};

export default Footer;