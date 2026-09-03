import { MenuCategory, MenuItem } from '../types/menu';

// Image assets
import balochiChickenImg from '../assets/images/balochi_chicken_1788206620585.jpg';
import chickenMandiImg from '../assets/images/chicken_mandi_1788206640555.jpg';
import iraniChaiImg from '../assets/images/irani_chai_1788206661386.jpg';
import kebabsImg from '../assets/images/kebabs_tandoor_1788206678122.jpg';

export const SIGNATURE_DISHES: MenuItem[] = [
  {
    id: 'sig-balochi-chicken',
    name: 'Balochi Chicken',
    description: 'Fresh succulent chicken infused with cracked coriander seeds, roasted cumin, ginger juliennes, slit green chillies, and freshly squeezed lemon.',
    pricing: {
      half: 250,
      full: 500,
    },
    image: balochiChickenImg,
  },
  {
    id: 'sig-chicken-mandi',
    name: 'Chicken Mandi',
    description: 'Fragrant golden long-grain basmati rice slow-cooked with aromatic Arabian spices, topped with tender roasted chicken and garnished with fried onions & toasted nuts.',
    pricing: {
      half: 160,
      full: 300,
    },
    image: chickenMandiImg,
  },
];

export const MENU_CATEGORIES: MenuCategory[] = [
  {
    id: 'signature-dishes',
    slug: 'signature-dishes',
    title: 'SIGNATURE DISHES',
    shortTitle: 'Signature',
    description: 'Distinctive culinary traditions prepared with authentic ingredients',
    items: SIGNATURE_DISHES,
  },
  {
    id: 'irani-chai',
    slug: 'irani-chai',
    title: 'IRANI CHAI',
    shortTitle: 'Irani Chai',
    description: 'Authentic slow-dum brewed rich Hyderabadi chai',
    image: iraniChaiImg,
    items: [
      {
        id: 'ic-irani-chai',
        name: 'Irani Chai',
        pricing: { half: 15, full: 25 },
        isVeg: true,
      },
    ],
  },
  {
    id: 'kebabs-tandoor',
    slug: 'kebabs-tandoor',
    title: 'KEBABS & TANDOOR',
    shortTitle: 'Kebabs & Tandoor',
    description: 'Charcoal clay oven specialties marinated in spices and roasted to perfection',
    image: kebabsImg,
    items: [
      {
        id: 'kt-chicken-seekh-kebab',
        name: 'Chicken Seekh Kebab',
        pricing: { single: 120 },
      },
      {
        id: 'kt-malai-kebab',
        name: 'Malai Kebab',
        pricing: { single: 180 },
      },
      {
        id: 'kt-chicken-tikka',
        name: 'Chicken Tikka',
        pricing: { single: 180 },
      },
      {
        id: 'kt-chicken-haryali-kebab',
        name: 'Chicken Haryali Kebab',
        pricing: { single: 180 },
      },
      {
        id: 'kt-chicken-tangdi',
        name: 'Chicken Tangdi',
        pricing: { single: 120 },
      },
      {
        id: 'kt-chicken-wings',
        name: 'Chicken Wings',
        pricing: { single: 150 },
      },
      {
        id: 'kt-tandoori-chicken',
        name: 'Tandoori Chicken',
        pricing: { half: 200, full: 400 },
      },
      {
        id: 'kt-chicken-al-faham',
        name: 'Chicken Al Faham',
        pricing: { half: 200, full: 400 },
      },
    ],
  },
  {
    id: 'chicken-starters',
    slug: 'chicken-starters',
    title: 'CHICKEN STARTERS',
    shortTitle: 'Chicken Starters',
    description: 'Tossed and spiced chicken appetisers',
    items: [
      {
        id: 'cs-chicken-65',
        name: 'Chicken 65',
        pricing: { half: 150, full: 300 },
      },
      {
        id: 'cs-chicken-manchuria',
        name: 'Chicken Manchuria',
        pricing: { half: 150, full: 300 },
      },
      {
        id: 'cs-chilli-chicken',
        name: 'Chilli Chicken',
        pricing: { half: 150, full: 300 },
      },
      {
        id: 'cs-chicken-majestic',
        name: 'Chicken Majestic',
        pricing: { half: 180, full: 320 },
      },
      {
        id: 'cs-pepper-chicken',
        name: 'Pepper Chicken',
        pricing: { half: 180, full: 320 },
      },
      {
        id: 'cs-lemon-chicken',
        name: 'Lemon Chicken',
        pricing: { half: 150, full: 300 },
      },
      {
        id: 'cs-chicken-fry',
        name: 'Chicken Fry',
        pricing: { half: 150, full: 300 },
      },
      {
        id: 'cs-chicken-lollipop',
        name: 'Chicken Lollipop',
        pricing: { half: 160, full: 300 },
      },
      {
        id: 'cs-chicken-drumstick',
        name: 'Chicken Drumstick',
        pricing: { half: 200, full: 400 },
      },
    ],
  },
  {
    id: 'chicken-curries',
    slug: 'chicken-curries',
    title: 'CHICKEN CURRIES',
    shortTitle: 'Chicken Curries',
    description: 'Authentic rich and slow-simmered chicken gravies',
    items: [
      {
        id: 'cc-chicken-masala',
        name: 'Chicken Masala',
        pricing: { half: 150, full: 300 },
      },
      {
        id: 'cc-butter-chicken',
        name: 'Butter Chicken',
        pricing: { half: 200, full: 400 },
      },
      {
        id: 'cc-chicken-afghani',
        name: 'Chicken Afghani',
        pricing: { half: 150, full: 320 },
      },
      {
        id: 'cc-chicken-moghlai',
        name: 'Chicken Moghlai',
        pricing: { half: 150, full: 320 },
      },
      {
        id: 'cc-chicken-chatpata',
        name: 'Chicken Chatpata',
        pricing: { half: 150, full: 320 },
      },
      {
        id: 'cc-hyderabadi-chicken',
        name: 'Hyderabadi Chicken',
        pricing: { half: 150, full: 320 },
      },
      {
        id: 'cc-kolhapuri-chicken',
        name: 'Kolhapuri Chicken',
        pricing: { half: 150, full: 320 },
      },
      {
        id: 'cc-punjabi-chicken',
        name: 'Punjabi Chicken',
        pricing: { half: 150, full: 320 },
      },
      {
        id: 'cc-andhra-chicken',
        name: 'Andhra Chicken',
        pricing: { half: 150, full: 320 },
      },
      {
        id: 'cc-telangana-chicken',
        name: 'Telangana Chicken',
        pricing: { half: 150, full: 320 },
      },
      {
        id: 'cc-kadai-chicken',
        name: 'Kadai Chicken',
        pricing: { half: 150, full: 320 },
      },
      {
        id: 'cc-haryali-chicken',
        name: 'Haryali Chicken',
        pricing: { half: 150, full: 320 },
      },
    ],
  },
  {
    id: 'biryani-rice',
    slug: 'biryani-rice',
    title: 'BIRYANI & RICE',
    shortTitle: 'Biryani & Rice',
    description: 'Authentic Chicken Dum Biryani and seasoned rice selections',
    items: [
      {
        id: 'br-chicken-dum-biryani',
        name: 'Chicken Dum Biryani',
        pricing: { single: 130 },
      },
      {
        id: 'br-chicken-fried-rice',
        name: 'Chicken Fried Rice',
        pricing: { half: 100, full: 180 },
      },
      {
        id: 'br-egg-fried-rice',
        name: 'Egg Fried Rice',
        pricing: { half: 80, full: 160 },
      },
      {
        id: 'br-veg-fried-rice',
        name: 'Veg Fried Rice',
        pricing: { half: 80, full: 160 },
        isVeg: true,
      },
      {
        id: 'br-schezwan-chicken-fried-rice',
        name: 'Schezwan Chicken Fried Rice',
        pricing: { half: 120, full: 200 },
      },
      {
        id: 'br-schezwan-egg-fried-rice',
        name: 'Schezwan Egg Fried Rice',
        pricing: { half: 90, full: 180 },
      },
      {
        id: 'br-schezwan-veg-fried-rice',
        name: 'Schezwan Veg Fried Rice',
        pricing: { half: 90, full: 180 },
        isVeg: true,
      },
      {
        id: 'br-mixed-fried-rice',
        name: 'Mixed Fried Rice',
        pricing: { single: 180 },
      },
      {
        id: 'br-zeera-rice',
        name: 'Zeera Rice',
        pricing: { half: 70, full: 140 },
        isVeg: true,
      },
      {
        id: 'br-lemon-rice',
        name: 'Lemon Rice',
        pricing: { half: 70, full: 140 },
        isVeg: true,
      },
    ],
  },
  {
    id: 'noodles',
    slug: 'noodles',
    title: 'NOODLES',
    shortTitle: 'Noodles',
    description: 'Wok-tossed noodles and Manchurian delicacies',
    items: [
      {
        id: 'nd-chicken-noodles',
        name: 'Chicken Noodles',
        pricing: { half: 100, full: 180 },
      },
      {
        id: 'nd-schezwan-chicken-noodles',
        name: 'Schezwan Chicken Noodles',
        pricing: { half: 120, full: 200 },
      },
      {
        id: 'nd-egg-noodles',
        name: 'Egg Noodles',
        pricing: { half: 80, full: 160 },
      },
      {
        id: 'nd-veg-noodles',
        name: 'Veg Noodles',
        pricing: { half: 80, full: 160 },
        isVeg: true,
      },
      {
        id: 'nd-schezwan-egg-noodles',
        name: 'Schezwan Egg Noodles',
        pricing: { half: 90, full: 180 },
      },
      {
        id: 'nd-schezwan-veg-noodles',
        name: 'Schezwan Veg Noodles',
        pricing: { half: 90, full: 180 },
        isVeg: true,
      },
      {
        id: 'nd-veg-manchuria-noodles',
        name: 'Veg Manchuria Noodles',
        pricing: { half: 100, full: 180 },
        isVeg: true,
      },
      {
        id: 'nd-mixed-noodles',
        name: 'Mixed Noodles',
        pricing: { single: 180 },
      },
      {
        id: 'nd-veg-manchuria',
        name: 'Veg Manchuria',
        pricing: { half: 90, full: 180 },
        isVeg: true,
      },
    ],
  },
  {
    id: 'paneer-specials',
    slug: 'paneer-specials',
    title: 'PANEER SPECIALS',
    shortTitle: 'Paneer Specials',
    description: 'Fresh cottage cheese curries and dry appetisers',
    items: [
      {
        id: 'pn-paneer-65',
        name: 'Paneer 65',
        pricing: { half: 130, full: 260 },
        isVeg: true,
      },
      {
        id: 'pn-chilli-paneer',
        name: 'Chilli Paneer',
        pricing: { half: 130, full: 260 },
        isVeg: true,
      },
      {
        id: 'pn-paneer-manchuria',
        name: 'Paneer Manchuria',
        pricing: { half: 130, full: 260 },
        isVeg: true,
      },
      {
        id: 'pn-paneer-masala',
        name: 'Paneer Masala',
        pricing: { single: 150 },
        isVeg: true,
      },
      {
        id: 'pn-butter-paneer-masala',
        name: 'Butter Paneer Masala',
        pricing: { single: 180 },
        isVeg: true,
      },
      {
        id: 'pn-kadai-paneer',
        name: 'Kadai Paneer',
        pricing: { single: 150 },
        isVeg: true,
      },
      {
        id: 'pn-shahi-paneer',
        name: 'Shahi Paneer',
        pricing: { single: 170 },
        isVeg: true,
      },
      {
        id: 'pn-kaju-paneer',
        name: 'Kaju Paneer',
        pricing: { single: 170 },
        isVeg: true,
      },
      {
        id: 'pn-paneer-chatpata',
        name: 'Paneer Chatpata',
        pricing: { single: 180 },
        isVeg: true,
      },
    ],
  },
  {
    id: 'fish-prawns',
    slug: 'fish-prawns',
    title: 'FISH & PRAWNS',
    shortTitle: 'Fish & Prawns',
    description: 'Seafood preparations seasoned with regional coastal spices',
    items: [
      {
        id: 'fp-apollo-fish',
        name: 'Apollo Fish',
        pricing: { single: 250 },
      },
      {
        id: 'fp-fish-pomfret',
        name: 'Fish Pomfret',
        pricing: { single: 80 },
      },
      {
        id: 'fp-fish-tandoori',
        name: 'Fish Tandoori',
        pricing: { single: 100 },
      },
      {
        id: 'fp-roasted-fish',
        name: 'Roasted Fish',
        pricing: { single: 400 },
      },
      {
        id: 'fp-prawns',
        name: 'Prawns',
        pricing: {},
      },
      {
        id: 'fp-tandoori-prawns',
        name: 'Tandoori Prawns',
        pricing: {},
      },
      {
        id: 'fp-roasted-prawns',
        name: 'Roasted Prawns',
        pricing: { single: 400 },
      },
    ],
  },
  {
    id: 'dal-items',
    slug: 'dal-items',
    title: 'DAL ITEMS',
    shortTitle: 'Dal Items',
    description: 'Homestyle lentils and egg bhurji',
    items: [
      {
        id: 'dl-dal-fry',
        name: 'Dal Fry',
        pricing: { single: 90 },
        isVeg: true,
      },
      {
        id: 'dl-dal-tadka',
        name: 'Dal Tadka',
        pricing: { single: 90 },
        isVeg: true,
      },
      {
        id: 'dl-egg-bhurji',
        name: 'Egg Bhurji',
        pricing: { single: 80 },
      },
    ],
  },
  {
    id: 'roti-naan',
    slug: 'roti-naan',
    title: 'ROTI & NAAN',
    shortTitle: 'Roti & Naan',
    description: 'Fresh tandoor and tawa baked breads',
    items: [
      {
        id: 'rn-rumali-roti',
        name: 'Rumali Roti',
        pricing: { single: 15 },
        isVeg: true,
      },
      {
        id: 'rn-tandoori-roti',
        name: 'Tandoori Roti',
        pricing: { single: 20 },
        isVeg: true,
      },
      {
        id: 'rn-butter-naan',
        name: 'Butter Naan',
        pricing: { single: 30 },
        isVeg: true,
      },
    ],
  },
  {
    id: 'veg-thali',
    slug: 'veg-thali',
    title: 'VEG THALI',
    shortTitle: 'Veg Thali',
    description: 'Traditional wholesome vegetarian platter',
    items: [
      {
        id: 'vt-veg-thali',
        name: 'Veg Thali',
        pricing: { single: 80 },
        isVeg: true,
      },
    ],
  },
];
