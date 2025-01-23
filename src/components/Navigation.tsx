import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Menu, X, GraduationCap as Graduation, Building2, Briefcase, LogOut } from 'lucide-react';
import { useAuth } from '../context/AuthContext';

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/80 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center group">
              <Graduation className="h-8 w-8 text-indigo-600 transform group-hover:scale-110 transition-transform duration-200" />
              <span className="ml-2 text-2xl font-bold text-gray-900">QUASAR</span>
              <span className="ml-1 text-sm text-indigo-600 font-semibold">2.0</span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex md:items-center md:space-x-8">
            <Link to="/about" className="flex items-center text-black hover:text-indigo-600 transition-colors duration-200">
              <Graduation className="h-5 w-5 mr-1" />
              <span>About</span>
            </Link>
            <Link to="/colleges" className="flex items-center text-black hover:text-indigo-600 transition-colors duration-200">
              <Building2 className="h-5 w-5 mr-1" />
              <span>Colleges</span>
            </Link>
            <Link to="/company" className="flex items-center text-black hover:text-indigo-600 transition-colors duration-200">
              <Briefcase className="h-5 w-5 mr-1" />
              <span>Companies</span>
            </Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="flex items-center  text-black hover:text-indigo-600 transition-colors duration-200"
              >
                <LogOut className="h-5 w-5 mr-1" />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/contact"
                className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transform hover:scale-105 transition-all duration-200"
              >
                Contact
              </Link>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 transition-colors duration-200"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden absolute w-full bg-white/95 backdrop-blur-md shadow-lg">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/students"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
            >
              Students
            </Link>
            <Link
              to="/colleges"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
            >
              Colleges
            </Link>
            <Link
              to="/companies"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
            >
              Companies
            </Link>
            {user ? (
              <button
                onClick={handleLogout}
                className="block w-full text-left px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-indigo-600 hover:bg-gray-50 transition-colors duration-200"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/login"
                className="block px-3 py-2 rounded-md text-base font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-colors duration-200"
              >
                Sign In
              </Link>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}