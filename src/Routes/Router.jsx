import { Outlet, createBrowserRouter } from "react-router-dom";
import Main from "../Layouts/Main";
import About from "../Pages/About/About";
import Category_News from "../Pages/Category_News/Category_News";
import Header from "../Pages/Header/Header";
const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Category_News />,
                loader: () => fetch(`https://front-page-news-server.vercel.app/category/01`)

            },
            {
                path: 'category/:id',
                element: <Category_News />,
                loader: ({params}) => fetch(`https://front-page-news-server.vercel.app/category/${params.id}`)
            }
        ]
    },
    {
        path: '/about',
        element: <div className="w-4/5 mx-auto space-y-10"><Header /> <Outlet /></div>,
        children: [
            {
                path: '/about',
                element: <About />
            }
        ]
    },
    {
        path: '*',
        element: <p>404|| Page Not Found</p>
    }
])

export default router;