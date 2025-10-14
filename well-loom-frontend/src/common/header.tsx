import  { NavLink } from "react-router-dom";
import { Leaf } from 'lucide-react';

export default function Header() {
    return (
      <header>
        <nav className="bg-white/70 backdrop-blur-md border-b border-green-200/50 sticky top-0 z-50">
          <div className="max-w-6xl mx-auto px-4">
            <div className="flex justify-between items-center py-4">
              <div className="flex items-center gap-2">
                <Leaf className="text-green-700" size={28} />
                <NavLink to="/" className="no-underline">
                  <h1 className="text-2xl font-bold" style={{
                    background: 'linear-gradient(to right, #166534, #047857)',
                    WebkitBackgroundClip: 'text',
                    WebkitTextFillColor: 'transparent',
                    backgroundClip: 'text',
                    color: 'transparent'
                  }}>
                    Well Loom
                  </h1>
                </NavLink>
              </div>
              <button className="px-6 py-2 border-2 border-green-700 text-green-800 rounded-full hover:bg-green-50 transition-all font-medium shadow-sm hover:shadow-md">
                Sign In
              </button>
            </div>
          </div>
        </nav>
      </header>
    );
}