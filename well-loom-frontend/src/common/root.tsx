import { AppBar, Toolbar } from "@mui/material";
import { NavLink, Outlet } from "react-router-dom";

export function Root() {
    return (
      <div className="app-container">
        <header>
          <AppBar position="static">
            <Toolbar>
              <NavLink to="/">Home</NavLink>
              <NavLink to="/about">About</NavLink>
              <NavLink to="/practice-search">Practice Search</NavLink>
            </Toolbar>
          </AppBar>
        </header>
        
        <main>
          {}
          <Outlet />
        </main>
      </div>
    );
}