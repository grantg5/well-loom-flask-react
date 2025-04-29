import { AppBar } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export function Root() {
    return (
      <div className="app-container">
        <header>
          <AppBar position="static">
            <nav className="justify-start">
              <NavLink to="/" className="inline-flex items-center py-10 text-sm font-medium">Home</NavLink>
              <NavLink to="/about" className="inline-flex items-center py-10 text-sm font-medium">About</NavLink>
              <NavLink to="/practice-search" className="inline-flex items-center py-10 text-sm font-medium">Practice Search</NavLink>
            </nav>
          </AppBar>
        </header>
        
        <main>
          {}
          <Outlet />
        </main>
      </div>
    );
}