import React from 'react';

const Navbar = () => {
    return (
        <header className="bg-black text-white py-2">
            <div className="container mx-auto">
                <nav className="flex items-center justify-between">
                    <div className="text-2xl font-bold">OnlineProduct</div>
                    <ul className="flex items-center gap-8 list-none text-lg">
                        <li className="hover:text-gray-400 cursor-pointer">Home</li>
                        <li className="hover:text-gray-400 cursor-pointer">Products</li>
                        <li className="hover:text-gray-400 cursor-pointer">Contact</li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Navbar;
