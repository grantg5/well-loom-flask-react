import { AppBar } from "@mui/material";
import  { NavLink } from "react-router-dom";

export default function Header() {
    return (
        <header>
          <AppBar position="static">
            <nav className="flex justify-between">
              <div className="flex">
                <NavLink to="/" className="inline-flex items-center py-10 text-sm font-medium">Home</NavLink>
                <NavLink to="/practice-library" className="inline-flex items-center py-10 text-sm font-medium">Practice Search</NavLink>
              </div>
              <div className="flex">
                <NavLink to="/admin/assets-search" className="inline-flex items-center py-10 text-sm font-medium">Assets Admin</NavLink>
              </div>
            </nav>
          </AppBar>
        </header>
    );
}