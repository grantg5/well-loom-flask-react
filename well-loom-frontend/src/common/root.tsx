import { Outlet } from "react-router-dom";
import Header from "./header";

export function Root() {
    return (
      <div className="app-container">
        <Header />
        <main>
          {}
          <Outlet />
        </main>
      </div>
    );
}