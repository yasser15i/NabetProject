import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Leaf, Globe, BarChart3, Users } from 'lucide-react';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white shadow-lg border-b border-primary-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex items-center space-x-2 space-x-reverse">
              <div className="bg-primary-600 p-2 rounded-xl">
                <Leaf className="h-8 w-8 text-white" />
              </div>
              <div className="text-right">
                <h1 className="text-2xl font-bold text-primary-800">نابت</h1>
                <p className="text-xs text-gray-600">منصة تحليل الأراضي الذكية</p>
              </div>   
            </Link>
          </div>

          <nav className="hidden md:block">
            <div className="flex items-center space-x-8 space-x-reverse h-16">
              <Link to="/" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                الرئيسية
              </Link>
              <Link to="/analysis" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                تحليل الأراضي
              </Link>
              <Link to="/campaigns" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                حملات التطوع
              </Link>
              <Link to="/dashboard" className="text-gray-700 hover:text-primary-600 font-medium transition-colors duration-300">
                لوحة التحكم
              </Link>
              <Link to="/login" className="bg-primary-600 text-white px-6 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-300 font-medium">
                تسجيل الدخول
              </Link>
            </div>
          </nav>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-gray-700 hover:text-primary-600"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {isOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <Link to="/" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
                الرئيسية
              </Link>
              <Link to="/analysis" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
                تحليل الأراضي
              </Link>
              <Link to="/campaigns" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
                حملات التطوع
              </Link>
              <Link to="/dashboard" className="block px-3 py-2 text-gray-700 hover:text-primary-600 font-medium">
                لوحة التحكم
              </Link>
              <Link to="/login" className="w-full text-right bg-primary-600 text-white px-3 py-2 rounded-lg hover:bg-primary-700 transition-colors duration-300 font-medium">
                تسجيل الدخول
              </Link>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;