
import React, { useState } from 'react';
import { Menu, X, Utensils, Heart, Info, MapPin } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: '美味菜單', href: '#menu', icon: Utensils },
    { name: 'AI 推薦', href: '#ai-advisor', icon: Heart },
    { name: '關於貓廚', href: '#about', icon: Info },
    { name: '門市資訊', href: '#locations', icon: MapPin },
  ];

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-orange-100 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20 items-center">
          <div className="flex items-center space-x-2">
            <div className="bg-orange-500 p-2 rounded-xl">
              <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                <path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6.06C10.97,6.06 10.13,6.9 10.13,7.94C10.13,8.97 10.97,9.81 12,9.81C13.03,9.81 13.87,8.97 13.87,7.94C13.87,6.9 13.03,6.06 12,6.06Z" />
              </svg>
            </div>
            <span className="text-2xl font-black text-orange-600 tracking-tighter">貓廚小火鍋</span>
          </div>

          {/* Desktop Nav */}
          <div className="hidden md:flex space-x-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-gray-600 hover:text-orange-500 font-medium transition-colors duration-200"
              >
                {link.name}
              </a>
            ))}
            <button className="bg-orange-500 text-white px-6 py-2 rounded-full font-bold hover:bg-orange-600 transition-all shadow-lg hover:shadow-orange-200">
              立即訂位
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-500 hover:text-orange-500">
              {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-orange-50 animate-in fade-in slide-in-from-top duration-300">
          <div className="px-4 pt-2 pb-6 space-y-1">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="flex items-center space-x-3 px-3 py-4 text-base font-medium text-gray-700 hover:bg-orange-50 hover:text-orange-600 rounded-lg transition-all"
              >
                <link.icon className="w-5 h-5" />
                <span>{link.name}</span>
              </a>
            ))}
            <div className="pt-4">
              <button className="w-full bg-orange-500 text-white px-6 py-4 rounded-xl font-bold">
                立即訂位
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
