
import React, { useState } from 'react';
import { MENU_ITEMS } from '../constants';
import { Flame, Star, Award } from 'lucide-react';

const MenuSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<'all' | 'soup' | 'specialty'>('all');

  const filteredItems = activeCategory === 'all' 
    ? MENU_ITEMS 
    : MENU_ITEMS.filter(item => item.category === activeCategory);

  return (
    <section id="menu" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-black text-gray-900 mb-4">貓廚精選菜單</h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            每一道鍋物都是我們的精心傑作，保證讓你一口接著一口，愛不釋手。
          </p>
          
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            {['all', 'soup', 'specialty'].map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat as any)}
                className={`px-8 py-2 rounded-full font-bold transition-all border-2 ${
                  activeCategory === cat 
                  ? 'bg-orange-500 border-orange-500 text-white shadow-lg' 
                  : 'bg-white border-gray-100 text-gray-500 hover:border-orange-200'
                }`}
              >
                {cat === 'all' ? '全部餐點' : cat === 'soup' ? '經典鍋底' : '特色單點'}
              </button>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredItems.map((item) => (
            <div key={item.id} className="group bg-orange-50/30 rounded-3xl overflow-hidden hover:bg-white hover:shadow-2xl transition-all duration-300 border border-transparent hover:border-orange-100">
              <div className="relative h-64 overflow-hidden">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                {item.isSpicy && (
                  <div className="absolute top-4 right-4 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Flame className="w-3 h-3 mr-1" />
                    辛辣限定
                  </div>
                )}
                {item.id === '1' && (
                  <div className="absolute top-4 left-4 bg-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold flex items-center">
                    <Star className="w-3 h-3 mr-1" />
                    人氣必點
                  </div>
                )}
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-xl font-bold text-gray-900">{item.name}</h3>
                  <span className="text-orange-600 font-black text-lg">${item.price}</span>
                </div>
                <p className="text-gray-500 text-sm leading-relaxed mb-6">
                  {item.description}
                </p>
                <button className="w-full py-3 bg-white border-2 border-orange-100 rounded-xl text-orange-600 font-bold group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500 transition-all">
                  查看詳情
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
