import { GoogleGenAI, Type } from "@google/genai";
import { Recommendation } from "../types";

// 明確宣告 process 以解決 TS2580 錯誤，Vite 會在構建時替換 process.env.API_KEY
declare const process: {
  env: {
    API_KEY: string;
  };
};

export async function getAIFlavorRecommendation(userInput: string): Promise<Recommendation> {
  // 遵循指導方針，在調用前初始化實例
  const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
  
  const response = await ai.models.generateContent({
    model: "gemini-3-flash-preview",
    contents: `根據使用者的心情或偏好：「${userInput}」，請從「貓廚小火鍋」的菜單（原味、麻辣、牛奶起司、酸菜白肉）中推薦一款鍋物。
    請務必以繁體中文回答。`,
    config: {
      responseMimeType: "application/json",
      responseSchema: {
        type: Type.OBJECT,
        properties: {
          dishName: { type: Type.STRING, description: "推薦的鍋物名稱" },
          reason: { type: Type.STRING, description: "為什麼推薦這款的原因（溫暖人心、俏皮）" },
          pairing: { type: Type.STRING, description: "建議搭配的副食或飲品" }
        },
        required: ["dishName", "reason", "pairing"],
        propertyOrdering: ["dishName", "reason", "pairing"]
      }
    }
  });

  // 確保 text 不是 undefined 以符合 TS 嚴格檢查
  const text = response.text || "";
  try {
    return JSON.parse(text.trim()) as Recommendation;
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    return {
      dishName: "招牌原味貓廚鍋",
      reason: "因為這款最經典，無論什麼心情都很適合！",
      pairing: "手工貓爪蝦滑"
    };
  }
}