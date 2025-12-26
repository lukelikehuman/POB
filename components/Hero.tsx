
import React from 'react';
import { ChevronRight, Sparkles } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <div className="relative pt-20 pb-16 overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/4 w-[600px] h-[600px] bg-orange-100/50 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/4 w-[400px] h-[400px] bg-red-100/40 rounded-full blur-3xl -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <div className="flex-1 text-center lg:text-left">
            <div className="inline-flex items-center space-x-2 bg-orange-100 px-4 py-1.5 rounded-full text-orange-700 font-bold text-sm mb-6 animate-bounce">
              <Sparkles className="w-4 h-4" />
              <span>全台最萌貓咪主題火鍋店</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-black text-gray-900 leading-tight mb-6">
              暖心 <span className="text-orange-500">貓廚</span><br />
              熬出這一味幸福
            </h1>
            <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              嚴選在地食材，每一口湯頭都是職人貓廚的堅持。從香麻川味到濃醇牛奶，讓可愛的氣息與美味的火鍋溫暖你的每一天。
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="w-full sm:w-auto px-8 py-4 bg-orange-500 text-white text-lg font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-xl shadow-orange-200 flex items-center justify-center group">
                探索美味菜單
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="w-full sm:w-auto px-8 py-4 bg-white text-orange-600 border-2 border-orange-100 text-lg font-bold rounded-2xl hover:border-orange-500 transition-all">
                尋找附近門市
              </button>
            </div>
          </div>

          {/* Hero Image */}
          <div className="flex-1 relative">
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
              <img 
                src="https://picsum.photos/id/493/800/600" 
                alt="Delicious Hotpot" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 z-20 bg-white p-6 rounded-2xl shadow-xl hidden sm:block animate-pulse">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 font-bold">10k+</span>
                </div>
                <div>
                  <div className="font-bold text-gray-900">好評回饋</div>
                  <div className="text-sm text-gray-500">全台饕客一致推薦</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
