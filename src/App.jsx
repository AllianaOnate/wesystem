import { Link, Outlet } from "react-router-dom";

const App = () => {
    return (
        <div 
            className="w-screen h-screen flex flex-col bg-cover bg-center" 
            style={{ backgroundImage: "url('src/images/background.jpg')" }}
        >
            <nav className="w-full bg-gray-100 p-4 bg-opacity-100">
                <div className="flex justify-end space-x-12 text-xl font-bold">
                    <Link to="/home" className="text-blue-500 hover:bg-[#69beff] px-2 py-1 rounded">
                        HOME
                    </Link>
                    <Link to="/about" className="text-blue-500 hover:bg-[#69beff] px-2 py-1 rounded">
                        ABOUT
                    </Link>
                </div>
            </nav>

            <div className="flex-grow flex items-center justify-center">
                <Outlet />  
            </div>
        </div>
    );
};

export default App;
