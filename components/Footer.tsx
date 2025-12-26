
import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-white pt-24 pb-12 border-t border-orange-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <div className="bg-orange-500 p-2 rounded-xl">
                <svg viewBox="0 0 24 24" className="w-6 h-6 text-white fill-current">
                  <path d="M12,2C15.31,2 18,4.66 18,7.95C18,12.41 12,19 12,19C12,19 6,12.41 6,7.95C6,4.66 8.69,2 12,2M12,6.06C10.97,6.06 10.13,6.9 10.13,7.94C10.13,8.97 10.97,9.81 12,9.81C13.03,9.81 13.87,8.97 13.87,7.94C13.87,6.9 13.03,6.06 12,6.06Z" />
                </svg>
              </div>
              <span className="text-2xl font-black text-orange-600">貓廚小火鍋</span>
            </div>
            <p className="text-gray-500 leading-relaxed">
              全台最萌的貓咪主題個人火鍋，致力於提供最溫馨的用餐環境與最高品質的食材。
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-orange-50 rounded-full flex items-center justify-center text-orange-500 hover:bg-orange-500 hover:text-white transition-all">
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">快速連結</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#menu" className="hover:text-orange-500 transition-colors">美味菜單</a></li>
              <li><a href="#about" className="hover:text-orange-500 transition-colors">關於我們</a></li>
              <li><a href="#locations" className="hover:text-orange-500 transition-colors">門市資訊</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">最新消息</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-gray-900 font-bold mb-6">服務條款</h4>
            <ul className="space-y-4 text-gray-500">
              <li><a href="#" className="hover:text-orange-500 transition-colors">隱私權政策</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">用餐規定</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">外帶外送</a></li>
              <li><a href="#" className="hover:text-orange-500 transition-colors">常見問題</a></li>
            </ul>
          </div>

          <div id="locations">
            <h4 className="text-gray-900 font-bold mb-6">聯絡我們</h4>
            <ul className="space-y-4 text-gray-500">
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-orange-400" />
                <span>02-2345-6789</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 text-orange-400" />
                <span>service@catcook.com</span>
              </li>
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-orange-400 mt-1" />
                <span>台北市信義區喵喵路 88 號</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-orange-50 pt-8 text-center text-gray-400 text-sm">
          <p>© 2024 貓廚小火鍋 Cat Cook Hotpot. 版權所有.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
