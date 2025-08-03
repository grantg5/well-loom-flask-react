import { ThemeProvider } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Root } from "./common/root";
import theme from "./common/theme.js";
import { About } from "./core/about";
import { PracticeLibrary } from "./features/practice-library/practice_library.js";
import { QueryClient } from "@tanstack/react-query";
import { areasService } from "./services/entity_crud_services/areas_service.js";

const allAreasLoader =
    (queryClient: QueryClient) =>
        async () => {
            const allAreasQuery = ({
                queryKey: ['allAreas'],
                queryFn: areasService.getAll,
                staleTime: Infinity
            });
            return (
                queryClient.getQueryData(allAreasQuery.queryKey) ??
                (await queryClient.fetchQuery(allAreasQuery))
            );
        }

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
                loader: allAreasLoader(new QueryClient())
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