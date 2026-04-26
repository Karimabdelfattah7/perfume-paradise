/**
 * PERFUME PARADISE — Product Data
 * 40+ products for men, women, and unisex with real imagery.
 */

const PRODUCTS = [

  // ══════════════════════════════════════════════════════
  //  WOMEN'S FRAGRANCES
  // ══════════════════════════════════════════════════════

  {
    id: "ysl-black-opium-edp",
    sku: "ULTA-2292759",
    name: "Black Opium",
    brand: "Yves Saint Laurent",
    price: 172.00,
    salePrice: null,
    concentration: "EDP",
    description: "A rock-'n'-roll femininity. Black Opium opens with a shocking coffee accord, softened by floral white flowers and deepened by a warm, addictive base of vanilla. Daring, seductive, and unforgettable.",
    shortDescription: "Coffee, white flowers & addictive vanilla",
    category: "women",
    scentFamily: "oriental",
    notes: { top: "Pink Pepper, Orange Blossom", middle: "Coffee, White Flowers, Jasmine", base: "Vanilla, Patchouli, Cedarwood" },
    sizes: [
      { size: "1 oz", price: 74.00, sku: "ULTA-2292759-1oz" },
      { size: "1.6 oz", price: 108.00, sku: "ULTA-2292759-16oz" },
      { size: "3 oz", price: 172.00, sku: "ULTA-2292759-3oz" }
    ],
    inStock: true, stockQuantity: 10,
    image: "https://media.ultainc.com/i/ulta/2292759",
    featured: true, isNew: false, isBestseller: true,
    rating: 4.7, reviewCount: 2841,
    tags: ["coffee", "vanilla", "oriental", "evening", "bold", "floral"]
  },

  {
    id: "chanel-coco-mademoiselle-edp",
    sku: "ULTA-2055113",
    name: "Coco Mademoiselle",
    brand: "Chanel",
    price: 185.00,
    salePrice: null,
    concentration: "EDP",
    description: "A bold, sensual femininity. Bright orange top notes give way to a luminous heart of jasmine and rose, resting on a deep base of patchouli and vetiver. Timeless Chanel elegance for the modern woman.",
    shortDescription: "Bright orange, jasmine & vetiver",
    category: "women",
    scentFamily: "oriental",
    notes: { top: "Orange, Bergamot, Grapefruit", middle: "Jasmine, Rose, Mimosa", base: "Patchouli, Vetiver, White Musk, Vanilla" },
    sizes: [
      { size: "1.7 oz", price: 154.00, sku: "ULTA-2055113-17oz" },
      { size: "3.4 oz", price: 185.00, sku: "ULTA-2055113-34oz" }
    ],
    inStock: true, stockQuantity: 8,
    image: "https://media.ultainc.com/i/ulta/2055113",
    featured: true, isNew: false, isBestseller: true,
    rating: 4.8, reviewCount: 3912,
    tags: ["chanel", "oriental", "floral", "elegant", "classic", "evening"]
  },

  {
    id: "gucci-bloom-edp",
    sku: "ULTA-2515591",
    name: "Bloom",
    brand: "Gucci",
    price: 138.00,
    salePrice: null,
    concentration: "EDP",
    description: "An opulent white floral inspired by a garden in full bloom. Rangoon Creeper, an unusual flower that changes color as it blooms, sits at the heart alongside tuberose and jasmine bud — rich, vibrant, alive.",
    shortDescription: "Rangoon creeper, tuberose & jasmine",
    category: "women",
    scentFamily: "floral",
    notes: { top: "Rangoon Creeper", middle: "Tuberose, Jasmine Bud", base: "Sandalwood, Musk" },
    sizes: [
      { size: "1 oz", price: 89.00, sku: "ULTA-2515591-1oz" },
      { size: "3.3 oz", price: 138.00, sku: "ULTA-2515591-33oz" }
    ],
    inStock: true, stockQuantity: 12,
    image: "https://media.ultainc.com/i/ulta/2515591",
    featured: true, isNew: false, isBestseller: false,
    rating: 4.5, reviewCount: 1234,
    tags: ["gucci", "floral", "white flowers", "feminine", "tuberose", "jasmine"]
  },

  {
    id: "viktor-rolf-flowerbomb-edp",
    sku: "ULTA-2216988",
    name: "Flowerbomb",
    brand: "Viktor&Rolf",
    price: 182.00,
    salePrice: null,
    concentration: "EDP",
    description: "An explosion of flowers — a floral overdose that revolutionized feminine perfumery. Orchid, freesia, and rose cascade over a heart of jasmine and osmanthus, finishing on a dreamy base of patchouli and vanilla. Pure joy.",
    shortDescription: "Orchid, rose, jasmine & vanilla",
    category: "women",
    scentFamily: "floral",
    notes: { top: "Orchid, Freesia, Rose", middle: "Jasmine, Osmanthus, Cattleya Orchid", base: "Patchouli, Vanilla, Musk" },
    sizes: [
      { size: "1 oz", price: 98.00, sku: "ULTA-2216988-1oz" },
      { size: "1.7 oz", price: 132.00, sku: "ULTA-2216988-17oz" },
      { size: "3.4 oz", price: 182.00, sku: "ULTA-2216988-34oz" }
    ],
    inStock: true, stockQuantity: 9,
    image: "https://media.ultainc.com/i/ulta/2216988",
    featured: false, isNew: false, isBestseller: true,
    rating: 4.6, reviewCount: 2107,
    tags: ["floral", "feminine", "vanilla", "rose", "jasmine", "romantic"]
  },

  {
    id: "lancome-la-vie-est-belle-edp",
    sku: "ULTA-2290178",
    name: "La Vie Est Belle",
    brand: "Lancôme",
    price: 147.00,
    salePrice: null,
    concentration: "EDP",
    description: "Life is beautiful. An iris gourmand fragrance that embodies the happiness of choosing your own path. Luxurious iris and patchouli envelop a praline and vanilla heart for a gloriously sweet, feminine finish.",
    shortDescription: "Iris, praline & vanilla gourmand",
    category: "women",
    scentFamily: "oriental",
    notes: { top: "Blackcurrant, Pear", middle: "Iris, Jasmine, Orange Blossom", base: "Praline, Vanilla, Patchouli, Sandalwood" },
    sizes: [
      { size: "1.7 oz", price: 107.00, sku: "ULTA-2290178-17oz" },
      { size: "3.4 oz", price: 147.00, sku: "ULTA-2290178-34oz" }
    ],
    inStock: true, stockQuantity: 15,
    image: "https://media.ultainc.com/i/ulta/2250012",
    featured: true, isNew: false, isBestseller: true,
    rating: 4.7, reviewCount: 3201,
    tags: ["lancome", "iris", "praline", "sweet", "oriental", "feminine"]
  },

  {
    id: "dior-miss-dior-edp",
    sku: "ULTA-2303521",
    name: "Miss Dior",
    brand: "Dior",
    price: 170.00,
    salePrice: null,
    concentration: "EDP",
    description: "A romantic chypre floral — radiant, spirited, and modern. Grasse rose absolute unfolds at the heart over a clean musk and patchouli base, while blooming peony sets a joyous opening. The scent of a woman in love.",
    shortDescription: "Rose absolute, peony & white musk",
    category: "women",
    scentFamily: "floral",
    notes: { top: "Calabrian Bergamot, Peony", middle: "Grasse Rose Absolute, Lily of the Valley", base: "White Musk, Patchouli" },
    sizes: [
      { size: "1 oz", price: 97.00, sku: "ULTA-2303521-1oz" },
      { size: "1.7 oz", price: 130.00, sku: "ULTA-2303521-17oz" },
      { size: "3.4 oz", price: 170.00, sku: "ULTA-2303521-34oz" }
    ],
    inStock: true, stockQuantity: 11,
    image: "https://media.ultainc.com/i/ulta/2585910",
    featured: true, isNew: false, isBestseller: true,
    rating: 4.8, reviewCount: 2654,
    tags: ["dior", "rose", "floral", "feminine", "romantic", "chypre"]
  },

  {
    id: "marc-jacobs-daisy-edt",
    sku: "ULTA-2003649",
    name: "Daisy",
    brand: "Marc Jacobs",
    price: 140.00,
    salePrice: null,
    concentration: "EDT",
    description: "Fresh, feminine, and fun — just like a daisy. Violet leaves and wild berries lead into a soft heart of jasmine and gardenia before a warm sandalwood and vanilla base makes this one of the most beloved light florals ever created.",
    shortDescription: "Violet leaf, jasmine & gardenia",
    category: "women",
    scentFamily: "floral",
    notes: { top: "Strawberry, Violet Leaves, Grapefruit", middle: "Jasmine, Gardenia, Violet", base: "Sandalwood, Vanilla, Musk, White Woods" },
    sizes: [
      { size: "1 oz", price: 75.00, sku: "ULTA-2003649-1oz" },
      { size: "1.7 oz", price: 107.00, sku: "ULTA-2003649-17oz" },
      { size: "3.4 oz", price: 140.00, sku: "ULTA-2003649-34oz" }
    ],
    inStock: true, stockQuantity: 14,
    image: "https://media.ultainc.com/i/ulta/2151611",
    featured: false, isNew: false, isBestseller: true,
    rating: 4.6, reviewCount: 4102,
    tags: ["marc jacobs", "daisy", "fresh floral", "feminine", "light", "casual"]
  },

  {
    id: "chanel-chance-edp",
    sku: "ULTA-2009397",
    name: "Chance",
    brand: "Chanel",
    price: 185.00,
    salePrice: null,
    concentration: "EDP",
    description: "An unexpected floral in the round. Take a chance! Chanel's playful circular floral is a blend of fresh citrus, powdery iris, and radiant jasmine over a creamy base of white musk and patchouli — vibrant and carefree.",
    shortDescription: "Pink pepper, iris & white musk",
    category: "women",
    scentFamily: "floral",
    notes: { top: "Citrus, Pink Pepper", middle: "Iris, Jasmine, Hyacinth", base: "White Musk, Amber, Patchouli, Vetiver" },
    sizes: [
      { size: "1.7 oz", price: 154.00, sku: "ULTA-2009397-17oz" },
      { size: "3.4 oz", price: 185.00, sku: "ULTA-2009397-34oz" }
    ],
    inStock: true, stockQuantity: 9,
    image: "https://media.ultainc.com/i/ulta/2009397",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.5, reviewCount: 1876,
    tags: ["chanel", "chance", "floral", "fresh", "iconic", "feminine"]
  },

  {
    id: "armani-si-edp",
    sku: "ULTA-2565082",
    name: "Sì",
    brand: "Giorgio Armani",
    price: 161.00,
    salePrice: null,
    concentration: "EDP",
    description: "Say yes — to freedom, to love, to elegance. Sì opens with the rare blackcurrant nectar before a floral heart of rose and freesia gives way to a warm, woody amber base. Luxurious and deeply seductive.",
    shortDescription: "Blackcurrant nectar, rose & amber",
    category: "women",
    scentFamily: "oriental",
    notes: { top: "Blackcurrant Nectar, Bergamot", middle: "Rose, Freesia, Neroli", base: "Ambroxan, Patchouli, Vanilla" },
    sizes: [
      { size: "1 oz", price: 88.00, sku: "ULTA-2565082-1oz" },
      { size: "1.7 oz", price: 125.00, sku: "ULTA-2565082-17oz" },
      { size: "3.4 oz", price: 161.00, sku: "ULTA-2565082-34oz" }
    ],
    inStock: true, stockQuantity: 7,
    image: "https://media.ultainc.com/i/ulta/2277385",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.4, reviewCount: 987,
    tags: ["armani", "si", "blackcurrant", "oriental", "sophisticated", "feminine"]
  },

  {
    id: "carolina-herrera-good-girl-edp",
    sku: "ULTA-2430025",
    name: "Good Girl",
    brand: "Carolina Herrera",
    price: 152.00,
    salePrice: null,
    concentration: "EDP",
    description: "The duality of the modern woman. Housed in an iconic stiletto bottle, Good Girl blends the brightness of jasmine and the darkness of tonka bean and cocoa — bold, confident, and irresistibly complex.",
    shortDescription: "Jasmine, cocoa & tonka bean",
    category: "women",
    scentFamily: "oriental",
    notes: { top: "Coffee, Almond", middle: "Jasmine Sambac, Tuberose", base: "Tonka Bean, Cocoa, Sandalwood, Vetiver" },
    sizes: [
      { size: "1 oz", price: 83.00, sku: "ULTA-2430025-1oz" },
      { size: "1.7 oz", price: 117.00, sku: "ULTA-2430025-17oz" },
      { size: "2.7 oz", price: 152.00, sku: "ULTA-2430025-27oz" }
    ],
    inStock: true, stockQuantity: 13,
    image: "https://media.ultainc.com/i/ulta/2515348",
    featured: true, isNew: false, isBestseller: true,
    rating: 4.7, reviewCount: 2398,
    tags: ["carolina herrera", "good girl", "jasmine", "gourmand", "bold", "evening"]
  },

  {
    id: "dg-light-blue-women-edt",
    sku: "ULTA-2055150",
    name: "Light Blue",
    brand: "Dolce & Gabbana",
    price: 120.00,
    salePrice: null,
    concentration: "EDT",
    description: "The sensuality of the Mediterranean. A sheer, sensual, intensely blue perfume — crisp Sicilian lemon and crispy apple over a heart of white rose and bamboo, resting on an airy cedar and white musk base.",
    shortDescription: "Sicilian lemon, apple & white rose",
    category: "women",
    scentFamily: "fresh",
    notes: { top: "Sicilian Lemon, Apple, Cedar", middle: "Bamboo, Jasmine, White Rose", base: "Cedar, Musk, Amber" },
    sizes: [
      { size: "1 oz", price: 65.00, sku: "ULTA-2055150-1oz" },
      { size: "1.7 oz", price: 90.00, sku: "ULTA-2055150-17oz" },
      { size: "3.3 oz", price: 120.00, sku: "ULTA-2055150-33oz" }
    ],
    inStock: true, stockQuantity: 19,
    image: "https://media.ultainc.com/i/ulta/2636289",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.3, reviewCount: 1543,
    tags: ["dg", "light blue", "fresh", "citrus", "summer", "casual", "aquatic"]
  },

  {
    id: "prada-candy-edp",
    sku: "ULTA-2267765",
    name: "Candy",
    brand: "Prada",
    price: 130.00,
    salePrice: null,
    concentration: "EDP",
    description: "Sweet and irresistible. Prada Candy is a hyper-feminine gourmand scent that layers caramel musk with powdery benzoin and a touch of white musk — dangerously addictive, unapologetically indulgent.",
    shortDescription: "Caramel, benzoin & white musk",
    category: "women",
    scentFamily: "oriental",
    notes: { top: "Caramel", middle: "Benzoin, White Musk", base: "Musks, Vanilla" },
    sizes: [
      { size: "1 oz", price: 70.00, sku: "ULTA-2267765-1oz" },
      { size: "1.7 oz", price: 100.00, sku: "ULTA-2267765-17oz" },
      { size: "2.7 oz", price: 130.00, sku: "ULTA-2267765-27oz" }
    ],
    inStock: true, stockQuantity: 10,
    image: "https://media.ultainc.com/i/ulta/2292683",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.4, reviewCount: 989,
    tags: ["prada", "candy", "gourmand", "sweet", "musk", "caramel"]
  },

  {
    id: "mugler-angel-edp",
    sku: "ULTA-2216993",
    name: "Angel",
    brand: "Mugler",
    price: 155.00,
    salePrice: null,
    concentration: "EDP",
    description: "The original gourmand fragrance. Mugler Angel shattered conventions with its intoxicating blend of sweet patchouli, chocolate, and vanilla — a revolutionary scent that defined an era of bold, opulent femininity.",
    shortDescription: "Chocolate, patchouli & vanilla",
    category: "women",
    scentFamily: "oriental",
    notes: { top: "Bergamot, Helional, Cassia", middle: "Ethyl Maltol, Honey, Jasmine", base: "Patchouli, Vanilla, Chocolate, Caramel" },
    sizes: [
      { size: "0.8 oz", price: 79.00, sku: "ULTA-2216993-08oz" },
      { size: "1.7 oz", price: 120.00, sku: "ULTA-2216993-17oz" },
      { size: "3.4 oz", price: 155.00, sku: "ULTA-2216993-34oz" }
    ],
    inStock: true, stockQuantity: 8,
    image: "https://media.ultainc.com/i/ulta/2602835",
    featured: false, isNew: false, isBestseller: true,
    rating: 4.5, reviewCount: 2876,
    tags: ["mugler", "angel", "patchouli", "gourmand", "chocolate", "iconic", "bold"]
  },

  {
    id: "narciso-rodriguez-for-her-edp",
    sku: "ULTA-2009543",
    name: "For Her",
    brand: "Narciso Rodriguez",
    price: 155.00,
    salePrice: null,
    concentration: "EDP",
    description: "A seductive skin scent — one of the most complimented fragrances ever made. Musk is the heart and soul of For Her, layered with rose, amber, and vetiver for an intimate, skin-close warmth that lasts all day.",
    shortDescription: "Musk, rose & amber",
    category: "women",
    scentFamily: "floral",
    notes: { top: "Rose, Peach, Osmanthus", middle: "Musk, Magnolia, Jasmine", base: "Amber, Vetiver, Sandalwood" },
    sizes: [
      { size: "1 oz", price: 85.00, sku: "ULTA-2009543-1oz" },
      { size: "1.7 oz", price: 120.00, sku: "ULTA-2009543-17oz" },
      { size: "3.4 oz", price: 155.00, sku: "ULTA-2009543-34oz" }
    ],
    inStock: true, stockQuantity: 6,
    image: "https://media.ultainc.com/i/ulta/2009543",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.6, reviewCount: 1732,
    tags: ["narciso rodriguez", "musk", "skin scent", "romantic", "feminine", "sensual"]
  },

  {
    id: "versace-bright-crystal-edt",
    sku: "ULTA-2265443",
    name: "Bright Crystal",
    brand: "Versace",
    price: 88.00,
    salePrice: null,
    concentration: "EDT",
    description: "A luminous, fresh floral that evokes the sparkle of clear water and delicate crystal. Pomegranate and yuzu give a bright opening over a lotus and peony heart, finishing on a sensual amber and musk base.",
    shortDescription: "Pomegranate, lotus & magnolia",
    category: "women",
    scentFamily: "floral",
    notes: { top: "Pomegranate, Yuzu, Frost Accord", middle: "Peony, Magnolia, Lotus", base: "Amber, Musk, Mahogany" },
    sizes: [
      { size: "1 oz", price: 52.00, sku: "ULTA-2265443-1oz" },
      { size: "1.7 oz", price: 68.00, sku: "ULTA-2265443-17oz" },
      { size: "3 oz", price: 88.00, sku: "ULTA-2265443-3oz" }
    ],
    inStock: true, stockQuantity: 20,
    image: "https://media.ultainc.com/i/ulta/2232873",
    featured: false, isNew: true, isBestseller: false,
    rating: 4.3, reviewCount: 876,
    tags: ["versace", "bright crystal", "fresh floral", "light", "daytime", "feminine"]
  },

  {
    id: "burberry-her-edp",
    sku: "ULTA-2561166",
    name: "Her",
    brand: "Burberry",
    price: 128.00,
    salePrice: null,
    concentration: "EDP",
    description: "Inspired by the energy of London, Her is a fruity floral fragrance with a contemporary edge. Vibrant, youthful, and irresistible — red berries dance over jasmine and amber for an effortlessly cool femininity.",
    shortDescription: "Dried berries, jasmine & amber",
    category: "women",
    scentFamily: "floral",
    notes: { top: "Dried Berries", middle: "Jasmine, Violet", base: "Amber, Musk, Woody Notes" },
    sizes: [
      { size: "1 oz", price: 70.00, sku: "ULTA-2561166-1oz" },
      { size: "1.7 oz", price: 98.00, sku: "ULTA-2561166-17oz" },
      { size: "3.3 oz", price: 128.00, sku: "ULTA-2561166-33oz" }
    ],
    inStock: true, stockQuantity: 11,
    image: "https://media.ultainc.com/i/ulta/2534517",
    featured: false, isNew: true, isBestseller: false,
    rating: 4.4, reviewCount: 743,
    tags: ["burberry", "her", "fruity floral", "modern", "london", "feminine"]
  },

  {
    id: "valentino-donna-born-in-roma-edp",
    sku: "ULTA-2597111",
    name: "Donna Born in Roma",
    brand: "Valentino",
    price: 165.00,
    salePrice: null,
    concentration: "EDP",
    description: "The original. Fierce, free, forever Roman. Jasmine absolute and vanilla bourbon intertwine with juniper berries in a fragrance that's as timeless and dramatic as the Eternal City itself.",
    shortDescription: "Jasmine absolute, vanilla bourbon & juniper",
    category: "women",
    scentFamily: "floral",
    notes: { top: "Juniper Berries, Bergamot", middle: "Jasmine Absolute, Black Orchid", base: "Vanilla Bourbon, Gray Woods" },
    sizes: [
      { size: "1.7 oz", price: 124.00, sku: "ULTA-2597111-17oz" },
      { size: "3.4 oz", price: 165.00, sku: "ULTA-2597111-34oz" }
    ],
    inStock: true, stockQuantity: 7,
    image: "https://media.ultainc.com/i/ulta/2568843",
    featured: false, isNew: true, isBestseller: false,
    rating: 4.6, reviewCount: 512,
    tags: ["valentino", "born in roma", "jasmine", "vanilla", "roman", "sophisticated"]
  },

  // ══════════════════════════════════════════════════════
  //  MEN'S FRAGRANCES
  // ══════════════════════════════════════════════════════

  {
    id: "dior-sauvage-edp",
    sku: "ULTA-2525854",
    name: "Sauvage",
    brand: "Dior",
    price: 165.00,
    salePrice: null,
    concentration: "EDP",
    description: "Raw and noble. A radically fresh composition inspired by wide open spaces. Bergamot from Calabria bursts at the opening, while Sichuan pepper adds spice before a powerfully mineral base of Ambroxan and patchouli finishes with vanilla warmth.",
    shortDescription: "Bergamot, Ambroxan & patchouli",
    category: "men",
    scentFamily: "fresh",
    notes: { top: "Calabrian Bergamot, Sichuan Pepper", middle: "Lavender, Pink Pepper, Vetiver", base: "Ambroxan, Patchouli, Vanilla" },
    sizes: [
      { size: "2 oz", price: 120.00, sku: "ULTA-2525854-2oz" },
      { size: "3.4 oz", price: 165.00, sku: "ULTA-2525854-34oz" }
    ],
    inStock: true, stockQuantity: 14,
    image: "https://media.ultainc.com/i/ulta/2525854",
    featured: true, isNew: false, isBestseller: true,
    rating: 4.9, reviewCount: 6201,
    tags: ["dior", "fresh", "woody", "masculine", "bergamot", "modern"]
  },

  {
    id: "bleu-de-chanel-edp",
    sku: "ULTA-2286831",
    name: "Bleu de Chanel",
    brand: "Chanel",
    price: 173.00,
    salePrice: null,
    concentration: "EDP",
    description: "A sophisticated woody aromatic that defines the Chanel man. Fresh citrus opens on the skin before cedar and amber express a timeless elegance. The base of New Caledonian sandalwood, tonka bean, and vanilla gives greater depth and sensuality.",
    shortDescription: "Fresh citrus, amber cedar & sandalwood",
    category: "men",
    scentFamily: "woody",
    notes: { top: "Citrus Accord, Grapefruit, Mint", middle: "Amber Cedar, Labdanum, Ginger", base: "Sandalwood, Tonka Bean, Vanilla" },
    sizes: [
      { size: "1.7 oz", price: 130.00, sku: "ULTA-2286831-17oz" },
      { size: "3.4 oz", price: 173.00, sku: "ULTA-2286831-34oz" }
    ],
    inStock: true, stockQuantity: 11,
    image: "https://media.ultainc.com/i/ulta/2286831",
    featured: true, isNew: false, isBestseller: true,
    rating: 4.8, reviewCount: 4512,
    tags: ["chanel", "woody", "citrus", "elegant", "masculine", "classic"]
  },

  {
    id: "versace-eros-edt",
    sku: "ULTA-2265447",
    name: "Eros",
    brand: "Versace",
    price: 94.00,
    salePrice: null,
    concentration: "EDT",
    description: "Named after the Greek god of love, Eros is a powerful, sensual fragrance for men. Fresh mint and green apple collide with lemon zest before warming into a tonka bean and geranium heart. The base of vanilla, vetiver, oakmoss, and cedar is beautifully lasting.",
    shortDescription: "Mint, green apple & tonka bean",
    category: "men",
    scentFamily: "fresh",
    notes: { top: "Fresh Mint, Green Apple, Lemon Zest", middle: "Tonka Bean, Ambroxan, Geranium", base: "Vanilla, Vetiver, Oakmoss, Cedar" },
    sizes: [
      { size: "1.7 oz", price: 68.00, sku: "ULTA-2265447-17oz" },
      { size: "3.4 oz", price: 94.00, sku: "ULTA-2265447-34oz" }
    ],
    inStock: true, stockQuantity: 16,
    image: "https://media.ultainc.com/i/ulta/2265447",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.6, reviewCount: 2341,
    tags: ["versace", "fresh", "mint", "masculine", "sensual", "evening"]
  },

  {
    id: "armani-acqua-di-gio-edt",
    sku: "ULTA-2023509",
    name: "Acqua di Giò",
    brand: "Giorgio Armani",
    price: 130.00,
    salePrice: null,
    concentration: "EDT",
    description: "The spirit of the Mediterranean. The original aquatic fragrance for men — still unmatched decades later. Sea water, bergamot, and neroli evoke a sun-drenched coastline before a fresh marine heart dries down to cedar and musk.",
    shortDescription: "Marine, bergamot & cedarwood",
    category: "men",
    scentFamily: "aquatic",
    notes: { top: "Bergamot, Neroli, Marine Accord", middle: "Jasmine, Rosemary, Calone", base: "Cedarwood, White Musk, Oakmoss" },
    sizes: [
      { size: "1 oz", price: 72.00, sku: "ULTA-2023509-1oz" },
      { size: "1.7 oz", price: 90.00, sku: "ULTA-2023509-17oz" },
      { size: "3.3 oz", price: 130.00, sku: "ULTA-2023509-33oz" }
    ],
    inStock: true, stockQuantity: 18,
    image: "https://media.ultainc.com/i/ulta/2023509",
    featured: false, isNew: false, isBestseller: true,
    rating: 4.7, reviewCount: 3987,
    tags: ["armani", "aquatic", "fresh", "marine", "daytime", "masculine"]
  },

  {
    id: "paco-rabanne-1-million-edt",
    sku: "ULTA-2276633",
    name: "1 Million",
    brand: "Paco Rabanne",
    price: 94.00,
    salePrice: null,
    concentration: "EDT",
    description: "Daring and provocative. A bold men's fragrance shaped like a gold bar, 1 Million fuses juicy blood mandarin and fresh peppermint with warm cinnamon and rose absolute, finishing on a powerfully seductive leather and amber base.",
    shortDescription: "Blood mandarin, cinnamon & leather",
    category: "men",
    scentFamily: "oriental",
    notes: { top: "Blood Mandarin, Peppermint, Grapefruit", middle: "Rose Absolute, Cinnamon, Spices", base: "Leather Accord, Amber, White Wood" },
    sizes: [
      { size: "1.7 oz", price: 68.00, sku: "ULTA-2276633-17oz" },
      { size: "3.4 oz", price: 94.00, sku: "ULTA-2276633-34oz" }
    ],
    inStock: true, stockQuantity: 13,
    image: "https://media.ultainc.com/i/ulta/2276633",
    featured: true, isNew: false, isBestseller: true,
    rating: 4.7, reviewCount: 3102,
    tags: ["paco rabanne", "oriental", "leather", "spicy", "bold", "evening"]
  },

  {
    id: "ysl-y-edp",
    sku: "ULTA-2430030",
    name: "Y",
    brand: "Yves Saint Laurent",
    price: 135.00,
    salePrice: null,
    concentration: "EDP",
    description: "A fresh, aromatic woody fragrance that captures masculine confidence. Bergamot and ginger open brightly before sage and geranium add herbal depth, all anchored by a bold fir balsam and amber base.",
    shortDescription: "Bergamot, ginger & fir balsam",
    category: "men",
    scentFamily: "woody",
    notes: { top: "Bergamot, Ginger, Apple", middle: "Sage, Geranium, Juniper", base: "Fir Balsam, Amber, Tonka Bean" },
    sizes: [
      { size: "2 oz", price: 98.00, sku: "ULTA-2430030-2oz" },
      { size: "3.4 oz", price: 135.00, sku: "ULTA-2430030-34oz" }
    ],
    inStock: true, stockQuantity: 12,
    image: "https://media.ultainc.com/i/ulta/2534072",
    featured: true, isNew: false, isBestseller: false,
    rating: 4.5, reviewCount: 1087,
    tags: ["ysl", "y", "woody aromatic", "fresh", "masculine", "confident"]
  },

  {
    id: "paco-invictus-edt",
    sku: "ULTA-2276640",
    name: "Invictus",
    brand: "Paco Rabanne",
    price: 110.00,
    salePrice: null,
    concentration: "EDT",
    description: "Victory is yours. Invictus captures the thrill of conquest with an explosive opening of marine grapefruit and sea notes. A mossy green heart leads to a warm, sensual base of ambergris, oakmoss, and guaiac wood.",
    shortDescription: "Grapefruit, marine & guaiac wood",
    category: "men",
    scentFamily: "aquatic",
    notes: { top: "Grapefruit, Marine Accord, Mandarin", middle: "Bay Laurel, Hedione, Jasmine", base: "Guaiac Wood, Oakmoss, Ambergris" },
    sizes: [
      { size: "1.7 oz", price: 78.00, sku: "ULTA-2276640-17oz" },
      { size: "3.4 oz", price: 110.00, sku: "ULTA-2276640-34oz" }
    ],
    inStock: true, stockQuantity: 17,
    image: "https://media.ultainc.com/i/ulta/2279388",
    featured: false, isNew: false, isBestseller: true,
    rating: 4.6, reviewCount: 2654,
    tags: ["paco rabanne", "invictus", "aquatic", "fresh", "sporty", "masculine"]
  },

  {
    id: "ralph-lauren-polo-blue-edt",
    sku: "ULTA-2003724",
    name: "Polo Blue",
    brand: "Ralph Lauren",
    price: 120.00,
    salePrice: null,
    concentration: "EDT",
    description: "The sky's the limit. Polo Blue captures the freedom of open skies with a fresh fusion of melon and cucumber, anchored by suede, musk, and sage — clean, masculine, and perfectly effortless.",
    shortDescription: "Melon, cucumber & suede",
    category: "men",
    scentFamily: "aquatic",
    notes: { top: "Melon, Cucumber, Tangerine", middle: "Sage, Verbena, Basil", base: "Suede, Musk, Patchouli" },
    sizes: [
      { size: "1.36 oz", price: 68.00, sku: "ULTA-2003724-136oz" },
      { size: "2.5 oz", price: 90.00, sku: "ULTA-2003724-25oz" },
      { size: "4.2 oz", price: 120.00, sku: "ULTA-2003724-42oz" }
    ],
    inStock: true, stockQuantity: 15,
    image: "https://media.ultainc.com/i/ulta/2078357",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.4, reviewCount: 1298,
    tags: ["ralph lauren", "polo blue", "aquatic", "fresh", "sporty", "casual"]
  },

  {
    id: "dg-the-one-edt",
    sku: "ULTA-2055176",
    name: "The One",
    brand: "Dolce & Gabbana",
    price: 125.00,
    salePrice: null,
    concentration: "EDT",
    description: "The one and only. An oriental woody fragrance of timeless elegance — grapefruit and coriander open boldly before a sophisticated heart of ginger and orange blossom deepens into a rich tobacco and amber base.",
    shortDescription: "Grapefruit, tobacco & amber",
    category: "men",
    scentFamily: "oriental",
    notes: { top: "Grapefruit, Coriander, Basil", middle: "Cardamom, Ginger, Orange Blossom", base: "Tobacco, Amber, Cedar, Musk" },
    sizes: [
      { size: "1.6 oz", price: 75.00, sku: "ULTA-2055176-16oz" },
      { size: "3.3 oz", price: 125.00, sku: "ULTA-2055176-33oz" }
    ],
    inStock: true, stockQuantity: 10,
    image: "https://media.ultainc.com/i/ulta/2608562",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.5, reviewCount: 1098,
    tags: ["dg", "the one", "oriental", "tobacco", "sophisticated", "evening"]
  },

  {
    id: "montblanc-legend-edt",
    sku: "ULTA-2292765",
    name: "Legend",
    brand: "Montblanc",
    price: 75.00,
    salePrice: null,
    concentration: "EDT",
    description: "A legendary fresh aromatic with masculine elegance. Bergamot and lavender open the scent with clarity before a heart of rosemary and coumarin adds a refined aromatic charm, finishing on warm sandalwood and musk.",
    shortDescription: "Lavender, rosemary & sandalwood",
    category: "men",
    scentFamily: "fresh",
    notes: { top: "Bergamot, Lavender, Pineapple", middle: "Rose, Geranium, Rosemary, Coumarin", base: "Sandalwood, Oakmoss, Vetiver, Evernyl" },
    sizes: [
      { size: "1.7 oz", price: 50.00, sku: "ULTA-2292765-17oz" },
      { size: "3.3 oz", price: 75.00, sku: "ULTA-2292765-33oz" }
    ],
    inStock: true, stockQuantity: 22,
    image: "https://media.ultainc.com/i/ulta/2243983",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.4, reviewCount: 987,
    tags: ["montblanc", "legend", "fresh aromatic", "lavender", "masculine", "everyday"]
  },

  {
    id: "hugo-boss-bottled-edt",
    sku: "ULTA-2003693",
    name: "Bottled",
    brand: "Hugo Boss",
    price: 95.00,
    salePrice: null,
    concentration: "EDT",
    description: "The boss within. Hugo Boss Bottled is a classic woody spicy fragrance that has stood the test of time. Apple and bergamot over cinnamon and cloves lead to a warm, rich base of sandalwood and vetiver.",
    shortDescription: "Apple, cinnamon & sandalwood",
    category: "men",
    scentFamily: "woody",
    notes: { top: "Apple, Bergamot, Lemon Verbena", middle: "Cinnamon, Cloves, Mahogany", base: "Sandalwood, Vetiver, Olive Wood" },
    sizes: [
      { size: "1.7 oz", price: 68.00, sku: "ULTA-2003693-17oz" },
      { size: "3.3 oz", price: 95.00, sku: "ULTA-2003693-33oz" }
    ],
    inStock: true, stockQuantity: 20,
    image: "https://media.ultainc.com/i/ulta/2056402",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.3, reviewCount: 876,
    tags: ["hugo boss", "bottled", "woody spicy", "office", "classic", "masculine"]
  },

  {
    id: "gucci-guilty-edt-men",
    sku: "ULTA-2430117",
    name: "Guilty Pour Homme",
    brand: "Gucci",
    price: 113.00,
    salePrice: null,
    concentration: "EDT",
    description: "Live without regrets. Gucci Guilty Pour Homme is a bold, provocative fragrance — pink pepper and Italian lemon open sharply before a cedarwood and amber heart adds depth, anchored by an earthy patchouli base.",
    shortDescription: "Pink pepper, cedarwood & patchouli",
    category: "men",
    scentFamily: "woody",
    notes: { top: "Italian Lemon, Pink Pepper", middle: "Cedar, Neroli", base: "Patchouli, Amber" },
    sizes: [
      { size: "1.6 oz", price: 75.00, sku: "ULTA-2430117-16oz" },
      { size: "3 oz", price: 113.00, sku: "ULTA-2430117-3oz" }
    ],
    inStock: true, stockQuantity: 9,
    image: "https://media.ultainc.com/i/ulta/2566631",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.4, reviewCount: 743,
    tags: ["gucci", "guilty", "woody", "spicy", "bold", "masculine"]
  },

  {
    id: "ck-eternity-edt",
    sku: "ULTA-2009442",
    name: "Eternity",
    brand: "Calvin Klein",
    price: 85.00,
    salePrice: null,
    description: "A classic that endures. CK Eternity captures the beauty of nature and lasting love — fresh green notes and citrus open brightly before lavender and sage add an aromatic depth, all resting on a warm amber and sandalwood base.",
    shortDescription: "Citrus, lavender & sandalwood",
    concentration: "EDT",
    category: "men",
    scentFamily: "fresh",
    notes: { top: "Cucumber, Tagetes, Bergamot", middle: "Lavender, Jasmine, Sage", base: "Sandalwood, Amber, Rosewood" },
    sizes: [
      { size: "1.7 oz", price: 55.00, sku: "ULTA-2009442-17oz" },
      { size: "3.4 oz", price: 85.00, sku: "ULTA-2009442-34oz" }
    ],
    inStock: true, stockQuantity: 14,
    image: "https://media.ultainc.com/i/ulta/2021575",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.2, reviewCount: 654,
    tags: ["calvin klein", "eternity", "classic", "fresh", "lavender", "timeless"]
  },

  {
    id: "jpgaultier-le-male-edt",
    sku: "ULTA-2055192",
    name: "Le Mâle",
    brand: "Jean Paul Gaultier",
    price: 100.00,
    salePrice: null,
    concentration: "EDT",
    description: "An iconic masterpiece. Le Mâle is an instantly recognizable fougère classic — fresh lavender and mint at the top give way to an unusual accord of vanilla and amber musk that is at once bold and tender. Utterly unique.",
    shortDescription: "Lavender, mint & vanilla musk",
    category: "men",
    scentFamily: "oriental",
    notes: { top: "Lavender, Mint, Bergamot", middle: "Cumin, Cinnamon, Orange Blossom", base: "Vanilla, Amber, Musk, Sandalwood" },
    sizes: [
      { size: "1.4 oz", price: 58.00, sku: "ULTA-2055192-14oz" },
      { size: "2.5 oz", price: 78.00, sku: "ULTA-2055192-25oz" },
      { size: "4.2 oz", price: 100.00, sku: "ULTA-2055192-42oz" }
    ],
    inStock: true, stockQuantity: 11,
    image: "https://media.ultainc.com/i/ulta/2082116",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.5, reviewCount: 1543,
    tags: ["jean paul gaultier", "le male", "fougere", "lavender", "vanilla", "iconic"]
  },

  {
    id: "burberry-touch-edt",
    sku: "ULTA-2003701",
    name: "Touch for Men",
    brand: "Burberry",
    price: 75.00,
    salePrice: null,
    concentration: "EDT",
    description: "Modern and refined. Burberry Touch is a cool, contemporary fragrance that combines fresh juniper and tangerine with a heart of white pepper and cedarwood, finishing on a clean sandalwood and amber foundation.",
    shortDescription: "Juniper, white pepper & cedarwood",
    category: "men",
    scentFamily: "woody",
    notes: { top: "Absinthe, Juniper, Tangerine", middle: "White Pepper, Geranium", base: "Sandalwood, Amber" },
    sizes: [
      { size: "1.7 oz", price: 50.00, sku: "ULTA-2003701-17oz" },
      { size: "3.3 oz", price: 75.00, sku: "ULTA-2003701-33oz" }
    ],
    inStock: true, stockQuantity: 8,
    image: "https://media.ultainc.com/i/ulta/2090680",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.1, reviewCount: 432,
    tags: ["burberry", "touch", "woody", "fresh", "everyday", "masculine"]
  },

  {
    id: "creed-aventus-edp",
    sku: "CREED-AVENTUS",
    name: "Aventus",
    brand: "Creed",
    price: 445.00,
    salePrice: null,
    concentration: "EDP",
    description: "A triumph of perfumery. Aventus is an iconic scent celebrating strength, power, success, and heritage. Pineapple, bergamot, and blackcurrant open magnificently before a birch and patchouli heart leads to an oakmoss and ambergris base. The most iconic men's fragrance of the modern era.",
    shortDescription: "Pineapple, birch & ambergris",
    category: "men",
    scentFamily: "woody",
    notes: { top: "Pineapple, Bergamot, Blackcurrant, Apple", middle: "Birch, Patchouli, Moroccan Jasmine, Roses", base: "Musk, Oakmoss, Ambergris, Vetiver" },
    sizes: [
      { size: "1.7 oz", price: 285.00, sku: "CREED-AVENTUS-17oz" },
      { size: "3.3 oz", price: 445.00, sku: "CREED-AVENTUS-33oz" }
    ],
    inStock: true, stockQuantity: 4,
    image: "https://cdn.shopify.com/s/files/1/0402/0210/9079/files/Creedclassics_aventuspdp1.png?v=1748825021",
    featured: true, isNew: false, isBestseller: true,
    rating: 4.9, reviewCount: 8901,
    tags: ["creed", "aventus", "luxury", "pineapple", "birch", "iconic", "premium"]
  },

  {
    id: "tom-ford-noir-extreme-edp",
    sku: "ULTA-2430081",
    name: "Noir Extreme",
    brand: "Tom Ford",
    price: 195.00,
    salePrice: null,
    concentration: "EDP",
    description: "A seductive, ultra-rich oriental. Noir Extreme's core of precious woods is illuminated by a blend of Madurai jasmine, orange blossom, and neroli before sinking into notes of amber, sandalwood, and vanilla. Exquisitely sophisticated.",
    shortDescription: "Jasmine, precious woods & amber",
    category: "men",
    scentFamily: "oriental",
    notes: { top: "Lemon, Mandarin, Cardamom", middle: "Madurai Jasmine, Orange Blossom, Néroli", base: "Amber, Sandalwood, Vanilla, Musk" },
    sizes: [
      { size: "1.7 oz", price: 145.00, sku: "ULTA-2430081-17oz" },
      { size: "3.4 oz", price: 195.00, sku: "ULTA-2430081-34oz" }
    ],
    inStock: true, stockQuantity: 5,
    image: "https://media.ultainc.com/i/ulta/2554072",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.7, reviewCount: 1234,
    tags: ["tom ford", "noir extreme", "oriental", "luxury", "amber", "sophisticated"]
  },

  {
    id: "lacoste-lhomme-edt",
    sku: "ULTA-2430100",
    name: "L'Homme",
    brand: "Lacoste",
    price: 75.00,
    salePrice: null,
    concentration: "EDT",
    description: "The essence of confident, active masculinity. Lacoste L'Homme is a crisp woody fragrance — fresh pink pepper and bergamot open over warm cedarwood and iris for a polished, effortlessly cool finish.",
    shortDescription: "Pink pepper, bergamot & cedarwood",
    category: "men",
    scentFamily: "woody",
    notes: { top: "Bergamot, Citrus, Pink Pepper", middle: "Iris, Cedar", base: "Woody Notes" },
    sizes: [
      { size: "1.7 oz", price: 50.00, sku: "ULTA-2430100-17oz" },
      { size: "3.3 oz", price: 75.00, sku: "ULTA-2430100-33oz" }
    ],
    inStock: true, stockQuantity: 16,
    image: "https://media.ultainc.com/i/ulta/2430100",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.2, reviewCount: 487,
    tags: ["lacoste", "l'homme", "woody", "fresh", "casual", "everyday"]
  },

  {
    id: "armani-acqua-di-gio-profumo",
    sku: "ULTA-2565090",
    name: "Acqua di Giò Profumo",
    brand: "Giorgio Armani",
    price: 165.00,
    salePrice: null,
    concentration: "Parfum",
    description: "The elevated evolution of a legend. Profumo takes the iconic marine freshness of Acqua di Giò and intensifies it with incense and mineral smoke, creating a scent with extraordinary depth and lasting power.",
    shortDescription: "Mineral, incense & marine accord",
    category: "men",
    scentFamily: "aquatic",
    notes: { top: "Bergamot, Green Tangerine, Sea Notes", middle: "Labdanum, Geranium", base: "Incense, Patchouli, Mineral" },
    sizes: [
      { size: "2.5 oz", price: 130.00, sku: "ULTA-2565090-25oz" },
      { size: "4.2 oz", price: 165.00, sku: "ULTA-2565090-42oz" }
    ],
    inStock: true, stockQuantity: 8,
    image: "https://media.ultainc.com/i/ulta/2626772",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.8, reviewCount: 1987,
    tags: ["armani", "acqua di gio profumo", "marine", "incense", "premium", "masculine"]
  },

  // ══════════════════════════════════════════════════════
  //  UNISEX FRAGRANCES
  // ══════════════════════════════════════════════════════

  {
    id: "tom-ford-black-orchid-edp",
    sku: "ULTA-2558791",
    name: "Black Orchid",
    brand: "Tom Ford",
    price: 215.00,
    salePrice: null,
    concentration: "EDP",
    description: "A luxurious and sensual fragrance of rare darkness and light. Black Orchid is a sumptuous blend of black truffle and ylang ylang, with dark chocolate and lotus wood at the base — mysterious, dramatic, unforgettable.",
    shortDescription: "Black truffle, dark chocolate & ylang ylang",
    category: "unisex",
    scentFamily: "oriental",
    notes: { top: "Truffle, Bergamot, Black Currant, Ylang Ylang", middle: "Orchid, Spices, Gardenia, Fruity Notes", base: "Dark Chocolate, Patchouli, Vanilla, Incense" },
    sizes: [
      { size: "1 oz", price: 120.00, sku: "ULTA-2558791-1oz" },
      { size: "1.7 oz", price: 165.00, sku: "ULTA-2558791-17oz" },
      { size: "3.4 oz", price: 215.00, sku: "ULTA-2558791-34oz" }
    ],
    inStock: true, stockQuantity: 6,
    image: "https://media.ultainc.com/i/ulta/2554092",
    featured: true, isNew: false, isBestseller: false,
    rating: 4.7, reviewCount: 1876,
    tags: ["tom ford", "black orchid", "dark", "luxurious", "oriental", "unisex"]
  },

  {
    id: "jo-malone-peony-blush-suede",
    sku: "ULTA-2430190",
    name: "Peony & Blush Suede",
    brand: "Jo Malone London",
    price: 175.00,
    salePrice: null,
    concentration: "Cologne",
    description: "A fresh, romantic floral with irresistible character. Soft peony blooms are enriched with red apple and jasmine before settling on a lush suede base. Delicate yet striking, this is modern femininity distilled.",
    shortDescription: "Peony, red apple & suede",
    category: "unisex",
    scentFamily: "floral",
    notes: { top: "Red Apple", middle: "Peony, Jasmine, Gillyflower", base: "Suede, Plum, Vegetal Woody Notes" },
    sizes: [
      { size: "1 oz", price: 85.00, sku: "ULTA-2430190-1oz" },
      { size: "3.4 oz", price: 175.00, sku: "ULTA-2430190-34oz" }
    ],
    inStock: true, stockQuantity: 7,
    image: "https://media.ultainc.com/i/ulta/2430190",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.6, reviewCount: 912,
    tags: ["jo malone", "peony", "suede", "floral", "romantic", "unisex"]
  },

  {
    id: "maison-margiela-replica-beach-walk",
    sku: "ULTA-2597100",
    name: "Replica Beach Walk",
    brand: "Maison Margiela",
    price: 175.00,
    salePrice: null,
    concentration: "EDT",
    description: "A walk on the beach, captured in a bottle. Bergamot and pink pepper open on a warm coconut milk and ylang ylang heart that evokes sun-warmed skin, finishing on a soft driftwood base. Effortless, joyful, transportive.",
    shortDescription: "Coconut milk, ylang ylang & driftwood",
    category: "unisex",
    scentFamily: "aquatic",
    notes: { top: "Bergamot, Pink Pepper, Lemon", middle: "Coconut Milk, Ylang Ylang", base: "Driftwood, White Musk" },
    sizes: [
      { size: "1.1 oz", price: 105.00, sku: "ULTA-2597100-11oz" },
      { size: "3.4 oz", price: 175.00, sku: "ULTA-2597100-34oz" }
    ],
    inStock: true, stockQuantity: 8,
    image: "https://media.ultainc.com/i/ulta/2597100",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.6, reviewCount: 1102,
    tags: ["maison margiela", "replica", "beach", "coconut", "summer", "unisex"]
  },

  {
    id: "dior-homme-intense-edp",
    sku: "ULTA-2561182",
    name: "Homme Intense",
    brand: "Dior",
    price: 175.00,
    salePrice: null,
    concentration: "EDP",
    description: "An intensified interpretation of Dior Homme — a more opulent, sensual iris. The powdery iris absolute is deepened with warm vetiver and patchouli, making this one of the most complimented masculine fragrances ever created.",
    shortDescription: "Iris absolute, vetiver & patchouli",
    category: "unisex",
    scentFamily: "woody",
    notes: { top: "Lavender, Bergamot", middle: "Iris, Ambrette", base: "Virginia Cedar, Patchouli, Vetiver" },
    sizes: [
      { size: "1.7 oz", price: 128.00, sku: "ULTA-2561182-17oz" },
      { size: "3.4 oz", price: 175.00, sku: "ULTA-2561182-34oz" }
    ],
    inStock: true, stockQuantity: 6,
    image: "https://media.ultainc.com/i/ulta/2561182",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.7, reviewCount: 1543,
    tags: ["dior", "homme intense", "iris", "powdery", "sophisticated", "unisex"]
  },

  {
    id: "jo-malone-wood-sage-sea-salt",
    sku: "ULTA-2430195",
    name: "Wood Sage & Sea Salt",
    brand: "Jo Malone London",
    price: 165.00,
    salePrice: null,
    concentration: "Cologne",
    description: "An escape to the wild coastline. Ambrette seeds mingle with sage under luminous sea salt air — a windswept, elemental fragrance of pure freedom. Breathtaking in its simplicity, extraordinary in its effect.",
    shortDescription: "Sea salt, sage & ambrette seeds",
    category: "unisex",
    scentFamily: "aquatic",
    notes: { top: "Sea Salt, Grapefruit", middle: "Sage, Ambrette Seeds", base: "Mineral, Musk" },
    sizes: [
      { size: "1 oz", price: 85.00, sku: "ULTA-2430195-1oz" },
      { size: "3.4 oz", price: 165.00, sku: "ULTA-2430195-34oz" }
    ],
    inStock: true, stockQuantity: 5,
    image: "https://media.ultainc.com/i/ulta/2430195",
    featured: false, isNew: false, isBestseller: false,
    rating: 4.5, reviewCount: 765,
    tags: ["jo malone", "wood sage", "sea salt", "aquatic", "coastal", "unisex"]
  },

  {
    id: "gucci-flora-gorgeous-gardenia-edt",
    sku: "ULTA-2565100",
    name: "Flora Gorgeous Gardenia",
    brand: "Gucci",
    price: 122.00,
    salePrice: null,
    concentration: "EDT",
    description: "A vibrant, feminine floral — gorgeous and modern. Gardenia and pear combine with brown sugar and amber to create a rich, joyful scent that feels like a warm embrace. Fresh yet sensual, youthful yet refined.",
    shortDescription: "Gardenia, pear & brown sugar",
    category: "women",
    scentFamily: "floral",
    notes: { top: "Mandarin, Pear", middle: "Gardenia, Frangipani, Peach", base: "Brown Sugar, Musk, Patchouli Amber" },
    sizes: [
      { size: "1 oz", price: 72.00, sku: "ULTA-2565100-1oz" },
      { size: "1.7 oz", price: 95.00, sku: "ULTA-2565100-17oz" },
      { size: "3.3 oz", price: 122.00, sku: "ULTA-2565100-33oz" }
    ],
    inStock: true, stockQuantity: 11,
    image: "https://media.ultainc.com/i/ulta/2586738",
    featured: false, isNew: true, isBestseller: false,
    rating: 4.4, reviewCount: 654,
    tags: ["gucci", "flora", "gardenia", "floral", "fresh", "feminine"]
  },

  {
    id: "ysl-libre-edp",
    sku: "ULTA-2565110",
    name: "Libre",
    brand: "Yves Saint Laurent",
    price: 145.00,
    salePrice: null,
    concentration: "EDP",
    description: "A declaration of freedom. Libre captures the provocative spirit of a woman who makes her own rules — lavender from Provence meets Moroccan orange blossom in an unexpected, powerful pairing anchored by vanilla and musk.",
    shortDescription: "Lavender, orange blossom & vanilla",
    category: "women",
    scentFamily: "oriental",
    notes: { top: "Lavender Essence, Mandarin, Petitgrain", middle: "Orange Blossom Absolute, Jasmine", base: "Musk, Cedar, Vanilla" },
    sizes: [
      { size: "1 oz", price: 85.00, sku: "ULTA-2565110-1oz" },
      { size: "1.7 oz", price: 115.00, sku: "ULTA-2565110-17oz" },
      { size: "3 oz", price: 145.00, sku: "ULTA-2565110-3oz" }
    ],
    inStock: true, stockQuantity: 10,
    image: "https://media.ultainc.com/i/ulta/2553366",
    featured: true, isNew: false, isBestseller: true,
    rating: 4.7, reviewCount: 2109,
    tags: ["ysl", "libre", "lavender", "orange blossom", "bold", "feminine", "modern"]
  }
];

// ──────────────────────────────────────────────────────────
//  Product utility service
// ──────────────────────────────────────────────────────────
const ProductService = {
  getAll() { return Promise.resolve([...PRODUCTS]); },

  getById(id) {
    return Promise.resolve(PRODUCTS.find(p => p.id === id) || null);
  },

  getFeatured(limit = 8) {
    return Promise.resolve(PRODUCTS.filter(p => p.featured).slice(0, limit));
  },

  getBestsellers(limit = 8) {
    return Promise.resolve(PRODUCTS.filter(p => p.isBestseller).slice(0, limit));
  },

  getByCategory(category, limit = 6) {
    return Promise.resolve(PRODUCTS.filter(p => p.category === category).slice(0, limit));
  },

  filter({ categories = [], scentFamilies = [], brands = [], concentrations = [], minPrice, maxPrice, inStockOnly = false, sortBy = 'default' } = {}) {
    let results = [...PRODUCTS];
    if (categories.length)     results = results.filter(p => categories.includes(p.category));
    if (scentFamilies.length)  results = results.filter(p => scentFamilies.includes(p.scentFamily));
    if (brands.length)         results = results.filter(p => brands.includes(p.brand));
    if (concentrations.length) results = results.filter(p => concentrations.includes(p.concentration));
    if (minPrice != null)      results = results.filter(p => p.price >= minPrice);
    if (maxPrice != null)      results = results.filter(p => p.price <= maxPrice);
    if (inStockOnly)           results = results.filter(p => p.inStock);
    switch (sortBy) {
      case 'price-asc':   results.sort((a, b) => a.price - b.price); break;
      case 'price-desc':  results.sort((a, b) => b.price - a.price); break;
      case 'name-asc':    results.sort((a, b) => a.name.localeCompare(b.name)); break;
      case 'rating-desc': results.sort((a, b) => (b.rating || 0) - (a.rating || 0)); break;
      case 'newest':      results = results.filter(p => p.isNew).concat(results.filter(p => !p.isNew)); break;
    }
    return Promise.resolve(results);
  },

  search(query) {
    const q = query.toLowerCase().trim();
    if (!q) return Promise.resolve([...PRODUCTS]);
    return Promise.resolve(PRODUCTS.filter(p =>
      p.name.toLowerCase().includes(q) ||
      p.brand.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      (p.tags || []).some(t => t.includes(q)) ||
      p.scentFamily.includes(q) ||
      p.category.includes(q) ||
      (p.concentration || '').toLowerCase().includes(q)
    ));
  },

  getUniqueBrands() {
    return [...new Set(PRODUCTS.map(p => p.brand))].sort();
  }
};

window.PRODUCTS = PRODUCTS;
window.ProductService = ProductService;
