import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./common/root";
import theme from "./common/theme.js";
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
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);