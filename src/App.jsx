import { Routes, Route, Link } from "react-router-dom";
import HomePage from "./pages/HomePage"; 
import AboutPage from "./pages/AboutPage"; 

const App = () => {
    return (
        <div className="container">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>
            </nav>

            <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/about" element={<AboutPage />} />
            </Routes>
        </div>
    );
};

export default App;
