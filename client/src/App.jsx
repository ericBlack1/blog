import { createBrowserRouter, RouterProvider, Route, Outlet } from "react-router-dom";
import Write from "./pages/Write"
import Home from "./pages/Home"
import Single from "./pages/Single"
import Navbar from "./Components/Navbar"
import Footer from "./Components/Footer"
import "./style.scss"

const Layout = () => {
    return (
        <>
            <Navbar/>
            <Outlet/>
            <Footer/>
        </>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <Home/>
            },
            {
                path: "/post/:id",
                element: <Single/>
            },
            {
                path: "/write",
                element: <Write/>
            }
        ]
    }
]);

function App() {
    return (
        <div className="app">
            <div className="container">
                <RouterProvider router={router}/>
            </div>
        </div>
    );
}

export default App;