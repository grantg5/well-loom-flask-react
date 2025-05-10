import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./common/root";
import theme from "./common/theme.js";
import generateEntities from "./common/entites.js";
import { About } from "./core/about";
import { PracticeLibrary } from "./features/practice-library/practice-library.js";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Root />,
        // errorElement: <ErrorPage />
        children: [
            // { index: true, element: <Home/> },
            { index: true, element: <About /> },
            { 
                path: 'practice-library',
                element: <PracticeLibrary />,
                // loader: async(({ params }) => {
                //     // TODO: Call to fetch all practices for rendering
                // })
            }
        ]
    }
]);

const entities: [Record<string, any>] = generateEntities();

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ThemeProvider theme={theme}>
            <RouterProvider router={router} />
        </ThemeProvider>
    </React.StrictMode>
);