const Navbar = () => {
    return (
        <nav className="flex justify-between px-20 py-10 items-center bg-white">
            <h1 className="text-xl text-gray-800 font-bold">Dylan Smith</h1>
            <div className="flex items-center">
                <ul className="flex items-center space-x-6">
                    <li className="font-semibold text-gray-700">Home</li>
                    <li className="font-semibold text-gray-700">Projects</li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;
