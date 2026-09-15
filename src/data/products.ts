import { Product } from '../types';

// Authentic Generated Assets
import heroFashionImg from '../assets/images/hero_fashion_model_1789504672859.jpg';
import lawnCollectionImg from '../assets/images/lawn_collection_model_1789504693126.jpg';
import festiveEditImg from '../assets/images/festive_edit_model_1789504707495.jpg';
import readyWearImg from '../assets/images/ready_wear_model_1789504742188.jpg';
import fabricDetailImg from '../assets/images/fabric_embroidery_detail_1789504759693.jpg';
import promoBannerImg from '../assets/images/promo_banner_model_1789504724662.jpg';

export { heroFashionImg, lawnCollectionImg, festiveEditImg, readyWearImg, fabricDetailImg, promoBannerImg };

export const PRODUCTS: Product[] = [
  {
    id: 'p-1',
    name: 'Rosé Garden Lawn Set',
    slug: 'rose-garden-lawn-set',
    category: 'lawn',
    categoryLabel: 'Luxury Lawn 3-Piece',
    description: 'A delicate expression of spring romance. Featuring an intricate botanical embroidered neckline on soft blush pink lawn, paired with dyed cambric trousers and a lightweight digital printed pure silk chiffon dupatta.',
    fabricCare: '100% Fine Combed Lawn. Dry clean recommended or gentle hand wash in cold water. Do not bleach or tumble dry.',
    deliveryInfo: 'Dispatched within 24-48 hours. Standard delivery 3-5 business days across Pakistan. International shipping available.',
    price: 5490,
    compareAtPrice: 6200,
    colors: [
      { name: 'Blush Rose', hex: '#E9B7BD', bgClass: 'bg-[#E9B7BD]' },
      { name: 'Warm Ivory', hex: '#FBF7F2', bgClass: 'bg-[#FBF7F2]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Unstitched'],
    images: [
      heroFashionImg,
      fabricDetailImg,
      'https://images.unsplash.com/photo-1583391733956-3750e0ff4e8b?q=80&w=1000&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewCount: 42,
    badge: 'NEW SEASON',
    featured: true,
    newArrival: true,
    bestseller: false,
    moodColor: 'Blush Rose',
    details: [
      'Embroidered lawn front: 1.15 meters',
      'Digital printed lawn back & sleeves: 1.85 meters',
      'Embroidered organza neckline patti: 1 meter',
      'Dyed cambric trouser: 2.5 meters',
      'Printed silk chiffon dupatta: 2.5 meters'
    ]
  },
  {
    id: 'p-2',
    name: 'Ivory Bloom Ensemble',
    slug: 'ivory-bloom-ensemble',
    category: 'lawn',
    categoryLabel: 'Embroidered Lawn 3-Piece',
    description: 'An ethereal creation woven in crisp pearl ivory. Intricately rendered floral resham motifs grace the shirt panels, complemented by an ornate laser-cut hemline and a gossamer organza jacquard dupatta.',
    fabricCare: 'Pure Lawn & Organza Jacquard. Dry clean only. Iron on reverse side on low to medium heat.',
    deliveryInfo: 'Fast dispatch across all major cities of Pakistan including Lahore, Karachi, and Islamabad.',
    price: 6250,
    compareAtPrice: 7000,
    colors: [
      { name: 'Ivory', hex: '#FFFDFC', bgClass: 'bg-[#FFFDFC]' },
      { name: 'Champagne Gold', hex: '#B9965B', bgClass: 'bg-[#B9965B]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Unstitched'],
    images: [
      lawnCollectionImg,
      fabricDetailImg,
      'https://images.unsplash.com/photo-1610030469983-98e550d6193c?q=80&w=1000&auto=format&fit=crop'
    ],
    rating: 5.0,
    reviewCount: 38,
    badge: 'POPULAR',
    featured: true,
    newArrival: true,
    bestseller: true,
    moodColor: 'Ivory',
    details: [
      'Schiffli embroidered lawn front: 1.25 meters',
      'Dyed lawn back: 1.25 meters',
      'Embroidered lawn sleeves: 0.65 meter',
      'Laser-cut embroidered daman patch',
      'Dyed cotton cambric trouser: 2.5 meters',
      'Organza jacquard woven dupatta: 2.5 meters'
    ]
  },
  {
    id: 'p-3',
    name: 'Blush Heritage Suit',
    slug: 'blush-heritage-suit',
    category: 'ready-to-wear',
    categoryLabel: 'Ready to Wear 2-Piece',
    description: 'Tailored to effortless modern perfection. This relaxed A-line silhouette features delicate cutwork lace cuffs, pearl button accents along the placket, and matching straight-cut cigarette pants.',
    fabricCare: 'Breathable Slub Cotton-Lawn. Machine wash cold with like colors. Hang dry in shade.',
    deliveryInfo: 'Ready for immediate dispatch. Delivered in our signature luxury presentation box.',
    price: 5990,
    colors: [
      { name: 'Dusty Rose', hex: '#C9687D', bgClass: 'bg-[#C9687D]' },
      { name: 'Soft Pink', hex: '#F5D9DC', bgClass: 'bg-[#F5D9DC]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      promoBannerImg,
      heroFashionImg,
      'https://images.unsplash.com/photo-1617627143750-d86bc21e42bb?q=80&w=1000&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewCount: 29,
    badge: 'BESTSELLER',
    featured: true,
    newArrival: true,
    bestseller: true,
    moodColor: 'Blush Rose',
    details: [
      'Stitched relaxed-fit shirt with laced cuffs',
      'Hand-attached faux pearl buttons',
      'Side pockets with subtle contrast piping',
      'Stitched cigarette trousers with side slit'
    ]
  },
  {
    id: 'p-4',
    name: 'Sage Serenity Lawn',
    slug: 'sage-serenity-lawn',
    category: 'ready-to-wear',
    categoryLabel: 'Ready to Wear Kurta Set',
    description: 'Cool and restorative tones of fresh sage meet refined craftsmanship. Accented with self-color thread embroidery along the sleeves and neckline, paired with tailored culottes.',
    fabricCare: 'Soft Textured Cotton-Lawn. Gentle cycle wash. Warm iron if needed.',
    deliveryInfo: 'Express delivery available for Karachi & Lahore (24-48 hours).',
    price: 5750,
    compareAtPrice: 6500,
    colors: [
      { name: 'Sage', hex: '#94A38E', bgClass: 'bg-[#94A38E]' },
      { name: 'Ivory', hex: '#FBF7F2', bgClass: 'bg-[#FBF7F2]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL'],
    images: [
      readyWearImg,
      fabricDetailImg,
      'https://images.unsplash.com/photo-1596755094514-f87e34085b2c?q=80&w=1000&auto=format&fit=crop'
    ],
    rating: 4.7,
    reviewCount: 19,
    badge: 'SALE',
    featured: true,
    newArrival: true,
    bestseller: false,
    moodColor: 'Sage',
    details: [
      'Contemporary straight silhouette kurta',
      'Subtle cross-stitch floral embroidery on neckline',
      'Breathable pre-shrunk lawn cotton fabric',
      'Stitched wide-leg culottes with elasticated waistband'
    ]
  },
  {
    id: 'p-5',
    name: 'Midnight Floral Edit',
    slug: 'midnight-floral-edit',
    category: 'festive',
    categoryLabel: 'Festive Pret 3-Piece',
    description: 'A striking statement piece designed for festive twilight soirees. Midnight navy blended raw silk with copper and antique gold tilla thread embroidery, framed by an ethereal printed organza dupatta.',
    fabricCare: 'Blended Raw Silk & Organza. Professional dry clean strictly advised.',
    deliveryInfo: 'Complimentary tracked shipping included across Pakistan.',
    price: 6490,
    compareAtPrice: 7500,
    colors: [
      { name: 'Midnight', hex: '#1E293B', bgClass: 'bg-[#1E293B]' },
      { name: 'Deep Plum', hex: '#42172F', bgClass: 'bg-[#42172F]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Unstitched'],
    images: [
      festiveEditImg,
      fabricDetailImg,
      'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewCount: 31,
    badge: 'FESTIVE EDIT',
    featured: true,
    newArrival: true,
    bestseller: true,
    moodColor: 'Midnight',
    details: [
      'Embroidered raw silk shirt front and back',
      'Tilla worked organza sleeve cuffs and neckline',
      'Dyed raw silk trouser with button closure',
      'Contrast gold foil printed organza dupatta'
    ]
  },
  {
    id: 'p-6',
    name: 'Pearl Mist Ensemble',
    slug: 'pearl-mist-ensemble',
    category: 'lawn',
    categoryLabel: 'Printed Lawn 3-Piece',
    description: 'A serene harmony of powder blue and pearlescent ivory. Detailed with painterly Mughal botanical motifs, paired with a soft voile dupatta that drapes effortlessly in the summer breeze.',
    fabricCare: '100% Superfine Swiss Lawn. Wash inside out with mild detergent.',
    deliveryInfo: 'Dispatched within 24 hours. Cash on Delivery available.',
    price: 6150,
    colors: [
      { name: 'Dusty Blue', hex: '#879EB2', bgClass: 'bg-[#879EB2]' },
      { name: 'Ivory', hex: '#FFFDFC', bgClass: 'bg-[#FFFDFC]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Unstitched'],
    images: [
      lawnCollectionImg,
      heroFashionImg,
      'https://images.unsplash.com/photo-1549439602-43ebca2327af?q=80&w=1000&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewCount: 22,
    badge: 'NEW',
    featured: false,
    newArrival: true,
    bestseller: false,
    moodColor: 'Dusty Blue',
    details: [
      'Digital printed lawn front, back and sleeves: 3 meters',
      'Hand-crafted embroidered organza neckline patch',
      'Dyed cambric trouser: 2.5 meters',
      'Fine woven lawn voile dupatta: 2.5 meters'
    ]
  },
  {
    id: 'p-7',
    name: 'Rosewood Embroidered Set',
    slug: 'rosewood-embroidered-set',
    category: 'festive',
    categoryLabel: 'Luxury Festive 3-Piece',
    description: 'Opulent deep burgundy rosewood adorned with fine zari threadwork and sequin embellishments. An heirloom ensemble crafted for weddings, eid celebrations, and memorable evenings.',
    fabricCare: 'Handcrafted Chiffon & Pure Silk. Strict dry clean only.',
    deliveryInfo: 'Packaged in a branded luxury keepsake box with garment dust bag.',
    price: 7250,
    compareAtPrice: 8500,
    colors: [
      { name: 'Burgundy', hex: '#6E2948', bgClass: 'bg-[#6E2948]' },
      { name: 'Deep Plum', hex: '#42172F', bgClass: 'bg-[#42172F]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Unstitched'],
    images: [
      festiveEditImg,
      fabricDetailImg,
      'https://images.unsplash.com/photo-1558769132-cb1aea458c5e?q=80&w=1000&auto=format&fit=crop'
    ],
    rating: 5.0,
    reviewCount: 47,
    badge: 'SIGNATURE',
    featured: true,
    newArrival: true,
    bestseller: true,
    moodColor: 'Burgundy',
    details: [
      'Heavy embroidered chiffon front bodice & panels',
      'Zari embroidered chiffon sleeves and back',
      'Embroidered border patti for daman',
      'Dyed silk inner slip and trouser: 4 meters',
      'Full embroidered net dupatta with 4-sided borders'
    ]
  },
  {
    id: 'p-8',
    name: 'Celeste Print Lawn',
    slug: 'celeste-print-lawn',
    category: 'lawn',
    categoryLabel: 'Summer Lawn 3-Piece',
    description: 'Refreshing sky tones enriched with miniature floral vines. An airy summer classic featuring a soft crinkle chiffon dupatta with scalloped lace borders.',
    fabricCare: '100% Cotton Lawn. Hand wash or gentle machine wash.',
    deliveryInfo: 'Fast nationwide shipping. Complimentary delivery on orders above PKR 5,000.',
    price: 5850,
    compareAtPrice: 6600,
    colors: [
      { name: 'Dusty Blue', hex: '#879EB2', bgClass: 'bg-[#879EB2]' },
      { name: 'Blush Rose', hex: '#E9B7BD', bgClass: 'bg-[#E9B7BD]' }
    ],
    sizes: ['XS', 'S', 'M', 'L', 'XL', 'Unstitched'],
    images: [
      readyWearImg,
      lawnCollectionImg,
      'https://images.unsplash.com/photo-1509631179647-0177331693ae?q=80&w=1000&auto=format&fit=crop'
    ],
    rating: 4.6,
    reviewCount: 16,
    badge: 'LIMITED',
    featured: false,
    newArrival: true,
    bestseller: false,
    moodColor: 'Dusty Blue',
    details: [
      'Digital printed lawn shirt: 3 meters',
      'Embroidered border patch for hemline',
      'Dyed solid trouser: 2.5 meters',
      'Digitally printed crinkle chiffon dupatta: 2.5 meters'
    ]
  },
  {
    id: 'p-9',
    name: 'Gul-e-Noor Velvet Shawl',
    slug: 'gul-e-noor-velvet-shawl',
    category: 'accessories',
    categoryLabel: 'Luxury Embroidered Shawl',
    description: 'Sumptuous plush micro-velvet shawl in midnight burgundy, framed with exquisite Kashmiri tilla embroidery along all four borders. The ultimate festive accessory.',
    fabricCare: 'Micro Velvet. Dry clean only. Store wrapped in muslin cloth.',
    deliveryInfo: 'Ships in bespoke keepsake collector box.',
    price: 4950,
    compareAtPrice: 5800,
    colors: [
      { name: 'Burgundy', hex: '#6E2948', bgClass: 'bg-[#6E2948]' },
      { name: 'Midnight', hex: '#1E293B', bgClass: 'bg-[#1E293B]' }
    ],
    sizes: ['Unstitched'],
    images: [
      fabricDetailImg,
      festiveEditImg,
      'https://images.unsplash.com/photo-1607344645866-009c320c5ab8?q=80&w=1000&auto=format&fit=crop'
    ],
    rating: 4.9,
    reviewCount: 35,
    badge: 'LUXURY',
    featured: false,
    newArrival: false,
    bestseller: true,
    moodColor: 'Burgundy',
    details: [
      'Dimensions: 2.75 yards length x 1.25 yards width',
      'Intricate gold zari resham embroidery',
      'Finished edges with delicate hanging fringe beads'
    ]
  },
  {
    id: 'p-10',
    name: 'Zari Organza Clutches',
    slug: 'zari-organza-clutches',
    category: 'accessories',
    categoryLabel: 'Handcrafted Festive Clutch',
    description: 'Handmade evening minaudière enveloped in rich brocade and resham embroidery with a vintage brushed gold clasp and detachable chain strap.',
    fabricCare: 'Spot clean with a soft dry cloth. Store in dust bag.',
    deliveryInfo: 'Dispatched in safe protective packaging.',
    price: 3250,
    colors: [
      { name: 'Champagne Gold', hex: '#B9965B', bgClass: 'bg-[#B9965B]' },
      { name: 'Blush Rose', hex: '#E9B7BD', bgClass: 'bg-[#E9B7BD]' }
    ],
    sizes: ['Unstitched'],
    images: [
      fabricDetailImg,
      'https://images.unsplash.com/photo-1544816155-12df9643f363?q=80&w=1000&auto=format&fit=crop'
    ],
    rating: 4.8,
    reviewCount: 14,
    badge: 'HANDCRAFTED',
    featured: false,
    newArrival: false,
    bestseller: false,
    moodColor: 'Blush Rose',
    details: [
      'Hard shell metal clutch casing with velvet lining',
      'Embroidered silk jacquard overlay',
      'Removable 48-inch gold-tone shoulder chain'
    ]
  }
];

export const CATEGORIES = [
  {
    id: 'lawn',
    name: 'Lawn Edit',
    tagline: 'Lightweight seasonal elegance',
    description: 'Breathable combed cotton lawn, artisan floral prints, and lightweight dupattas made for summer grace.',
    image: lawnCollectionImg,
    count: '24 Designs'
  },
  {
    id: 'ready-to-wear',
    name: 'Ready to Wear',
    tagline: 'Effortless everyday style',
    description: 'Tailored silhouettes, contemporary cuts, and thoughtful details made for immediate day-to-evening style.',
    image: readyWearImg,
    count: '18 Styles'
  },
  {
    id: 'festive',
    name: 'Festive Collection',
    tagline: 'Designed for celebrations',
    description: 'Rich silks, organza layers, and metallic tilla embroidery crafted to turn every celebration into a memory.',
    image: festiveEditImg,
    count: '16 Ensembles'
  },
  {
    id: 'accessories',
    name: 'Accessories',
    tagline: 'The finishing touch',
    description: 'Handcrafted clutches, velvet shawls, and jewelry accents created to complete your NOORÉA look.',
    image: fabricDetailImg,
    count: '12 Pieces'
  }
];

export const MOOD_COLORS = [
  { name: 'Blush Rose', hex: '#E9B7BD', borderClass: 'border-[#E9B7BD]', bgClass: 'bg-[#E9B7BD]', text: 'Gentle & Romantic' },
  { name: 'Ivory', hex: '#FFFDFC', borderClass: 'border-[#E2D8CC]', bgClass: 'bg-[#FFFDFC]', text: 'Timeless & Pure' },
  { name: 'Sage', hex: '#94A38E', borderClass: 'border-[#94A38E]', bgClass: 'bg-[#94A38E]', text: 'Calm & Fresh' },
  { name: 'Dusty Blue', hex: '#879EB2', borderClass: 'border-[#879EB2]', bgClass: 'bg-[#879EB2]', text: 'Serene & Modern' },
  { name: 'Burgundy', hex: '#6E2948', borderClass: 'border-[#6E2948]', bgClass: 'bg-[#6E2948]', text: 'Opulent & Bold' },
  { name: 'Midnight', hex: '#1E293B', borderClass: 'border-[#1E293B]', bgClass: 'bg-[#1E293B]', text: 'Dramatic & Regal' }
];

export const TESTIMONIALS = [
  {
    id: 't-1',
    quote: 'The fabric quality of the Rosé Garden set exceeded my expectations. The lawn is wonderfully soft, and the silk dupatta drapes like a dream.',
    author: 'Ayesha K.',
    city: 'Lahore, Pakistan',
    rating: 5,
    verified: true,
    outfit: 'Rosé Garden Lawn Set'
  },
  {
    id: 't-2',
    quote: 'Everything from the luxury packaging to the tailored fit felt so thoughtfully considered. Wore the Ivory Bloom for an Eid lunch and received endless compliments.',
    author: 'Sara M.',
    city: 'Karachi, Pakistan',
    rating: 5,
    verified: true,
    outfit: 'Ivory Bloom Ensemble'
  },
  {
    id: 't-3',
    quote: 'Perfect for both everyday elegance and intimate family gatherings. The color palette is so refined—nothing is loud, everything is tasteful.',
    author: 'Hira A.',
    city: 'Islamabad, Pakistan',
    rating: 5,
    verified: true,
    outfit: 'Blush Heritage Suit'
  },
  {
    id: 't-4',
    quote: 'Cash on delivery was fast and seamless to Faisalabad. The embroidery is neat, clean, and authentic. NOORÉA is now my go-to lawn brand.',
    author: 'Mahnoor T.',
    city: 'Faisalabad, Pakistan',
    rating: 5,
    verified: true,
    outfit: 'Rosewood Embroidered Set'
  }
];

export const FAQS = [
  {
    question: 'How do I place an order online?',
    answer: 'Simply browse our collections, select your desired ensemble, choose your size (or select Unstitched for 3-piece sets), and click "Add to Bag". When you are ready, open your shopping bag, proceed to checkout, enter your Pakistani shipping address, and choose your payment method (Cash on Delivery, Credit/Debit Card, or Direct Bank Transfer).'
  },
  {
    question: 'What payment methods are available in Pakistan?',
    answer: 'We offer convenient Cash on Delivery (COD) across all cities and towns in Pakistan. We also accept Visa, MasterCard, UnionPay cards, and direct online bank transfers via HBL, Meezan, Bank Alfalah, and Easypaisa/JazzCash.'
  },
  {
    question: 'How long does delivery take across Pakistan?',
    answer: 'Orders within Lahore, Karachi, and Islamabad are typically delivered in 2 to 3 business days. Deliveries to other cities across Pakistan take approximately 3 to 5 business days. You will receive an SMS and email notification with your tracking number as soon as your parcel is dispatched.'
  },
  {
    question: 'Is delivery complimentary?',
    answer: 'Yes! We offer complimentary standard shipping across Pakistan on all orders amounting to PKR 5,000 or more. For orders below PKR 5,000, a flat nominal delivery fee of PKR 250 applies.'
  },
  {
    question: 'What is your exchange and return policy?',
    answer: 'We want you to be completely delighted with your purchase. If you need to exchange an item for a different size or design, you may request an exchange within 7 days of delivery, provided the garment is unused, unwashed, with all original tags and packaging intact.'
  },
  {
    question: 'How do I select the right size for Ready to Wear?',
    answer: 'We offer an interactive Size Guide with detailed measurements in inches for Chest, Waist, Hip, Shirt Length, and Trouser Length. You can click "Size Guide" on any product page to check exact dimensions before placing your order.'
  },
  {
    question: 'Can I cancel or modify my order?',
    answer: 'You may cancel or amend your order within 4 hours of placement by contacting our client care concierge via WhatsApp at +92 300 1234567 or emailing care@noorea.com.'
  },
  {
    question: 'How can I track my active order?',
    answer: 'Once dispatched, a tracking link from our courier partner (TCS, Leopard, or Call Courier) will be emailed and sent via SMS to your registered phone number. You can also enter your order ID directly in our concierge chat.'
  }
];
