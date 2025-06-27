import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./common/root";
import theme from "./common/theme.js";
import { About } from "./core/about";
import { PracticeLibrary } from "./features/practice-library/practice-library.js";
import { useAreas, useWellBeingComponents } from "@hooks/cached_entities.js";
import { useQuery } from "@tanstack/react-query";
import { areasService } from "services/entity_crud_services/areas_service.js";

// TODO: Work out another way to call the areas & wellBeingComponents services in the loader for practice library

// async function practiceLibraryPropsLoader() {
//     const allAreas = useQuery({
//         queryKey: ['allAreas'],
//         queryFn: areasService.getAll,
//         staleTime: Infinity
//     });
//     const allWellBeingComponents = useQuery({
//         queryKey: ['allWellBeingComponents'],
//         queryFn: wellBeingComponentsService.getAll,
//         staleTime: Infinity
//     });


// }

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
                // loader: 
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