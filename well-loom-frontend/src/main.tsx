import { Root } from "./common/root";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { About } from "./core/about";
import { Home } from "./core/home";
import { PracticeSearch } from "./modules/practice-search/practice-search";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        // errorElement: <ErrorPage />
        children: [
            { index: true, element: <Home/> },
            { path: 'about', element: <About /> },
            { 
                path: 'practice-search',
                element: <PracticeSearch />,
                // loader: async(({ params }) => {
                //     // TODO: Call to fetch all practices for rendering
                // })
            }
        ]
    }
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);