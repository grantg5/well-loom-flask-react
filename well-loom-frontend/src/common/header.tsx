import  { NavLink } from "react-router-dom";
import { Leaf } from 'lucide-react';

export default function Header() {
    return (
      <header>
        <nav className="bg-green-50/90 backdrop-blur-sm sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-6">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-2">
                <Leaf className="text-green-700" size={20} />
                <NavLink to="/" className="no-underline">
                  <h1 className="text-xl font-bold text-green-900">
                    Well Loom
                  </h1>
                </NavLink>
              </div>
              <button className="px-6 py-2 border border-green-700 text-green-800 rounded-full hover:bg-green-100 transition-all font-medium">
                Sign In
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
}