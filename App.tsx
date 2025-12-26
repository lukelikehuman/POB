
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MenuSection from './components/MenuSection';
import AIVisor from './components/AIVisor';
import Footer from './components/Footer';

const App: React.FC = () => {
  return (
    <div className="min-h-screen bg-orange-50 selection:bg-orange-200 selection:text-orange-900 custom-scroll">
      <Navbar />
      <main>
        <Hero />
        
        {/* Quality Banner */}
        <div className="bg-orange-600 py-12">
          <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-around gap-8 text-white">
            <div className="text-center">
              <div className="text-4xl font-black mb-2">100%</div>
              <div className="text-orange-100 font-bold">嚴選新鮮食材</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">8hr</div>
              <div className="text-orange-100 font-bold">職人慢火熬湯</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-black mb-2">24h</div>
              <div className="text-orange-100 font-bold">線上即時訂位</div>
            </div>
          </div>
        </div>

        <MenuSection />
        <AIVisor />

        {/* About Section */}
        <section id="about" className="py-24 bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center gap-16">
              <div className="flex-1">
                <img 
                  src="https://picsum.photos/id/652/600/600" 
                  alt="Our Story" 
                  className="rounded-[3rem] shadow-2xl"
                />
              </div>
              <div className="flex-1 space-y-8">
                <h2 className="text-4xl font-black text-gray-900">為什麼是貓廚？</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                  貓廚的由來，是因為創辦人收養的第一隻流浪貓。在那段創業最艱辛的時光，是那份安靜的陪伴與呼嚕聲給了創辦人溫暖。
                </p>
                <p className="text-lg text-gray-600 leading-relaxed">
                  我們希望每一位走進貓廚的客人，不僅能享用到最頂級、天然的火鍋，更能感受到那份如家一般的放鬆與療癒。這不僅是一頓飯，更是一場關於味覺與心靈的饗宴。
                </p>
                <div className="pt-4">
                  <button className="px-10 py-4 bg-orange-500 text-white font-bold rounded-2xl hover:bg-orange-600 transition-all shadow-lg shadow-orange-100">
                    了解更多品牌故事
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="max-w-5xl mx-auto bg-orange-600 rounded-[3rem] p-12 text-center text-white relative overflow-hidden">
            <div className="relative z-10">
              <h2 className="text-4xl md:text-5xl font-black mb-6">準備好與貓廚約會了嗎？</h2>
              <p className="text-xl text-orange-100 mb-10 max-w-2xl mx-auto">
                立即線上預約，享受溫暖人心的個人火鍋時光。
              </p>
              <button className="bg-white text-orange-600 px-12 py-5 rounded-2xl font-black text-xl hover:bg-orange-50 transition-all shadow-2xl">
                立即前往預約
              </button>
            </div>
            {/* Background pattern */}
            <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                    <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#grid)" />
              </svg>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default App;
