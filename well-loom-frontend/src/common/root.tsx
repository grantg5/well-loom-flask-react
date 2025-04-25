import { NavLink, Outlet } from "react-router-dom";

export function Root() {
    return (
      <div className="app-container">
        <header>
          <nav>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
              <li><NavLink to="/practice-search">Practice Search</NavLink></li>
            </ul>
          </nav>
        </header>
        
        <main>
          {}
          <Outlet />
        </main>
      </div>
    );
}