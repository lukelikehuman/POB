
import React, { useState } from 'react';
import { Sparkles, MessageCircle, Send, Cat, RotateCcw } from 'lucide-react';
import { getAIFlavorRecommendation } from '../services/geminiService';
import { Recommendation } from '../types';

const AIVisor: React.FC = () => {
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [recommendation, setRecommendation] = useState<Recommendation | null>(null);

  const handleRecommend = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim()) return;

    setLoading(true);
    try {
      const res = await getAIFlavorRecommendation(input);
      setRecommendation(res);
    } catch (err) {
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  const reset = () => {
    setRecommendation(null);
    setInput('');
  };

  return (
    <section id="ai-advisor" className="py-24 bg-orange-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-[3rem] shadow-2xl overflow-hidden border border-orange-100">
          <div className="p-8 md:p-12 text-center border-b border-orange-50 bg-gradient-to-r from-orange-50 to-white">
            <div className="inline-flex p-3 bg-orange-500 rounded-2xl text-white mb-6">
              <Cat className="w-8 h-8" />
            </div>
            <h2 className="text-3xl font-black text-gray-900 mb-2">AI 貓廚靈魂伴侶</h2>
            <p className="text-gray-500">
              選擇障礙嗎？告訴貓廚你今天的心情或天氣，讓我們為你推薦最適合的鍋物。
            </p>
          </div>

          <div className="p-8 md:p-12">
            {!recommendation ? (
              <form onSubmit={handleRecommend} className="space-y-6">
                <div className="relative">
                  <MessageCircle className="absolute left-4 top-4 text-orange-400 w-6 h-6" />
                  <textarea
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="例如：今天下雨好冷，想吃一點辣的暖暖身體..."
                    className="w-full bg-orange-50 border-2 border-transparent focus:border-orange-200 focus:bg-white rounded-3xl p-4 pl-12 h-32 text-gray-700 outline-none transition-all placeholder:text-orange-200"
                  />
                </div>
                <button
                  type="submit"
                  disabled={loading || !input.trim()}
                  className="w-full bg-orange-500 text-white font-bold py-5 rounded-3xl hover:bg-orange-600 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl shadow-orange-200 transition-all flex items-center justify-center space-x-2"
                >
                  {loading ? (
                    <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-white"></div>
                  ) : (
                    <>
                      <Send className="w-5 h-5" />
                      <span>讓 AI 貓廚為我挑選</span>
                    </>
                  )}
                </button>
              </form>
            ) : (
              <div className="animate-in fade-in zoom-in duration-500">
                <div className="bg-orange-50 rounded-3xl p-8 border-2 border-orange-200 relative overflow-hidden">
                  <div className="relative z-10">
                    <div className="flex items-center space-x-3 text-orange-600 font-bold mb-4">
                      <Sparkles className="w-5 h-5" />
                      <span>貓廚為您精選</span>
                    </div>
                    <h3 className="text-3xl font-black text-gray-900 mb-6">{recommendation.dishName}</h3>
                    <div className="space-y-4">
                      <div>
                        <div className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-1">推薦理由</div>
                        <p className="text-gray-700 leading-relaxed italic">「{recommendation.reason}」</p>
                      </div>
                      <div className="pt-4 border-t border-orange-200">
                        <div className="text-sm font-bold text-orange-400 uppercase tracking-widest mb-1">建議搭配</div>
                        <p className="text-gray-700 font-bold">{recommendation.pairing}</p>
                      </div>
                    </div>
                  </div>
                  {/* Decorative faint icon */}
                  <Cat className="absolute -bottom-10 -right-10 w-64 h-64 text-orange-100 -rotate-12 z-0 opacity-50" />
                </div>
                <button
                  onClick={reset}
                  className="mt-8 mx-auto flex items-center space-x-2 text-gray-500 hover:text-orange-500 font-medium transition-colors"
                >
                  <RotateCcw className="w-4 h-4" />
                  <span>重新測試</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIVisor;
