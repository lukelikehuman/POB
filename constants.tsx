
import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: '招牌原味貓廚鍋',
    description: '慢火熬煮8小時的黃金湯頭，搭配新鮮時蔬與嚴選肉片。',
    price: 298,
    category: 'soup',
    image: 'https://picsum.photos/id/488/600/400'
  },
  {
    id: '2',
    name: '川味麻辣肥牛鍋',
    description: '正宗四川花椒與多種中藥材調製，麻而不辣，香氣撲鼻。',
    price: 358,
    category: 'soup',
    image: 'https://picsum.photos/id/493/600/400',
    isSpicy: true
  },
  {
    id: '3',
    name: '香濃牛奶起司鍋',
    description: '濃醇鮮乳搭配整片起司，湯頭滑順如絲綢般迷人。',
    price: 328,
    category: 'soup',
    image: 'https://picsum.photos/id/674/600/400'
  },
  {
    id: '4',
    name: '酸菜白肉招牌鍋',
    description: '自家發酵酸菜，微酸開胃，完美鎖住白肉油脂香氣。',
    price: 318,
    category: 'soup',
    image: 'https://picsum.photos/id/835/600/400'
  },
  {
    id: '5',
    name: '手打貓爪蝦滑',
    description: 'Q彈鮮蝦純手工製作，可愛貓爪造型，視覺味覺雙重享受。',
    price: 158,
    category: 'specialty',
    image: 'https://picsum.photos/id/1080/600/400'
  }
];

export const APP_THEME = {
  primary: '#f97316', // orange-500
  secondary: '#ef4444', // red-500
  accent: '#fbbf24', // amber-400
  background: '#fff7ed', // orange-50
};
