
import { GoogleGenAI, Type } from "@google/genai";
import { Recommendation } from "../types";

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export async function getAIFlavorRecommendation(userInput: string): Promise<Recommendation> {
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

  try {
    return JSON.parse(response.text.trim()) as Recommendation;
  } catch (error) {
    console.error("Failed to parse Gemini response", error);
    return {
      dishName: "招牌原味貓廚鍋",
      reason: "因為這款最經典，無論什麼心情都很適合！",
      pairing: "手工貓爪蝦滑"
    };
  }
}
