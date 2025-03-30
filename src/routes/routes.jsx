import { createBrowserRouter } from "react-router-dom";
import HomePage from "../pages/HomePage";
import AboutPage from "../pages/AboutPage";
import App from "../App";

const DefaultPage = () => (
    <div className="text-center bg-white bg-opacity-80 p-6 rounded-lg">
        <h1 className="text-3xl font-bold text-gray-900">Web System Technologies</h1>
        <p className="text-xl text-gray-900 mt-6">IT223</p>
    </div>
);

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            { index: true, element: <DefaultPage /> }, // Default page
            { path: "home", element: <HomePage /> }, // Home page
            { path: "about", element: <AboutPage /> }, // About page
        ],
    },
]);

export default router;