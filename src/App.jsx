import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";

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
                <Routes>
                    <Route path="/" element={
                        <div className="text-center bg-white bg-opacity-80 p-6 rounded-lg">
                            <h1 className="text-3xl font-bold text-gray-900">
                                Web System Technologies
                            </h1>
                            <p className="text-xl text-gray-900 mt-6">
                                IT223
                            </p>
                        </div>
                    } />
                    
                    <Route path="/home" element={<HomePage />} />
                    <Route path="/about" element={<AboutPage />} />
                </Routes>
            </div>
        </div>
    );
};

export default App;