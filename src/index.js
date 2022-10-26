import react from "react"
import reactDOM from "react-dom"
import {RouterProvider, createBrowserRouter} from "react-router-dom"
import Error from "./error"
import Header from "./Homepage"
import Tester from "./tester"
import Home from "./titlePage"

const router = createBrowserRouter([
    {
        path: "/",
        element: <Header/>,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/tester",
                element: <Tester />
            }
    ]
        
    }
])




reactDOM.render(<RouterProvider router = {router}/>, document.getElementById("app"))