import React, { useState } from "react";

const SlideNav = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    };

    // console.log(isOpen)

    return (
        <div className="overflow-hidden">
            {/* Sidebar Navbar */}
            <div
                className={`fixed top-0 left-0 h-full bg-dark text-white p-6 transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"
                    }`}
                style={{ width: "250px" }}
            >
                <button
                    className="text-xl mb-4 self-end hover:text-gray-300"
                    onClick={toggleNavbar}
                >
                    &times;
                </button>
                <nav className="flex flex-col space-y-4">
                    <a href="#home" className="text-lg hover:text-gray-300">
                        Home
                    </a>
                    <a href="#about" className="text-lg hover:text-gray-300">
                        About
                    </a>
                    <a href="#services" className="text-lg hover:text-gray-300">
                        Services
                    </a>
                    <a href="#contact" className="text-lg hover:text-gray-300">
                        Contact
                    </a>
                </nav>
            </div>

            {/* Open Button */}


            {!isOpen ? (<button
                className="fixed top-4 left-4 bg-dark text-white p-2 rounded-lg shadow hover:bg-gray-700"
                onClick={toggleNavbar}
            >
                Menu
            </button>) : ''}

        </div>
    );
};

export default SlideNav;
