/* ==========================================================================
   KEKS AMMAN - PREMIUM INTERACTIVE APPLICATION LOGIC
   Fully Bilingual (AR/EN), Shopping Cart, WhatsApp checkout,
   Custom Canvas Confetti & Timeline slider
   ========================================================================== */

// --------------------------------------------------------------------------
// 1. CONFIGURATION & CONSTANTS
// --------------------------------------------------------------------------
const CONFIG = {
    whatsappNumber: "962781124849", 
    currency: " JD",
    minOrderValue: 10.00, // Jordanian Dinars minimum for luxury delivery
    zainCashWallet: "0781124849", // Default Keks Amman Zain Cash wallet (0781124849 as updated!)
    cliqAlias: "KeksAmman",        // Default CliQ Alias
    cliqBankName: "البنك العربي (Arab Bank)", // Default Bank Name
};

// --------------------------------------------------------------------------
// 2. PRODUCT DATA DEFINITIONS
// --------------------------------------------------------------------------
const SIZE_NOTE = {
    ar: "الحجم الصغير 6 أشخاص · الوسط 10 أشخاص · الكبير 15 شخص",
    en: "Small serves 6 · Medium serves 10 · Large serves 15"
};

const PRODUCTS = [
    {
        id: "pistachio-cheesecake",
        category: "cakes",
        tag: "Best Seller | الأكثر مبيعاً 🔥",
        titleAr: "تشيز كيك الشوكولاتة والفستق الحلبي",
        titleEn: "Chocolate Pistachio Cheesecake",
        descAr: "تشيز كيك مخبوز محشو بخلطة الشوكولاتة والجبنة ومشبّع بكريمة البيستاشيو الفاخرة. تتوفر نكهات أخرى: بلوبيري، شوكولاتة، لوتس.",
        descEn: "Baked cheesecake filled with a chocolate and cream cheese blend, soaked in premium pistachio cream. Also available in blueberry, chocolate and Lotus.",
        noteAr: "يُفضّل إخراج الكيكة من الثلاجة قبل التقديم بساعة على الأقل حتى تلين عجينة الفستق.",
        noteEn: "Take the cake out of the fridge at least one hour before serving.",
        visualChar: "🍰",
        image: "images/pistachio-cheesecake.jpg",
        sizes: [
            { key: "small",  ar: "صغير · 6 أشخاص",  en: "Small · 6 people",  price: 18 },
            { key: "medium", ar: "وسط · 10 أشخاص",  en: "Medium · 10 people", price: 22 },
            { key: "large",  ar: "كبير · 15 شخص",   en: "Large · 15 people",  price: 26 }
        ]
    },
    {
        id: "profiterole-pistachio-tart",
        category: "tarts",
        tag: "Signature | إبداع كيكس ✨",
        titleAr: "فطيرة البروفيترول بالفستق الحلبي",
        titleEn: "Profiterole Pistachio Tart",
        descAr: "قاعدة تارت مقرمشة مع كريمة فستق غنية وكرات بروفيترول من عجينة الشو الفرنسية الهشّة، محشوّة بكريمة اللوز وصوص الرمان والكسترد.",
        descEn: "A crispy tart base with rich pistachio cream and French choux profiteroles filled with almond cream, pomegranate sauce and custard.",
        visualChar: "🥧",
        image: "images/profiterole-tart.jpg",
        sizes: [
            { key: "small",  ar: "صغير · 6 أشخاص",  en: "Small · 6 people",  price: 12 },
            { key: "medium", ar: "وسط · 10 أشخاص",  en: "Medium · 10 people", price: 15 },
            { key: "large",  ar: "كبير · 15 شخص",   en: "Large · 15 people",  price: 20 }
        ]
    },
    {
        id: "vanilla-berry-cake",
        category: "cakes",
        tag: "Fresh & Light | خفيفة ومنعشة 🫐",
        titleAr: "كيكة الفانيلا بالتوت",
        titleEn: "Vanilla Mix Berry Cake",
        descAr: "كيكة فانيلا خفيفة مع كريمة الفانيلا وحشوة التوت المشكّل الطازج، بطعم منعش ومتوازن.",
        descEn: "A light vanilla sponge with vanilla cream and a fresh mixed berry filling — refreshing and perfectly balanced.",
        visualChar: "🫐",
        image: "images/vanilla-berry.jpg",
        sizes: [
            { key: "small",  ar: "صغير · 6 أشخاص",  en: "Small · 6 people",  price: 15 },
            { key: "medium", ar: "وسط · 10 أشخاص",  en: "Medium · 10 people", price: 20 },
            { key: "large",  ar: "كبير · 15 شخص",   en: "Large · 15 people",  price: 23 }
        ]
    },
    {
        id: "cookie-box",
        category: "mini",
        tag: "Chef's Formula | وصفة الشيف 🍪",
        titleAr: "بوكس كوكيز كيكس",
        titleEn: "Keks Cookie Box",
        descAr: "كوكيز بطريقة كيكس الخاصة: بستاشيو (فستق حلبي)، دبل تشوكليت، شوكليت تشيب كلاسيك، وريد فيلفيت.",
        descEn: "Cookies made with the Keks secret formula: pistachio, double chocolate, classic chocolate chip and red velvet.",
        visualChar: "🍪",
        image: "images/cookie-box.jpg",
        sizes: [
            { key: "box6",  ar: "6 قطع",   en: "6 pieces",  price: 8 },
            { key: "box12", ar: "12 قطعة", en: "12 pieces", price: 15 },
            { key: "box20", ar: "20 قطعة", en: "20 pieces", price: 23 }
        ]
    },
    {
        id: "tiramisu-knafeh",
        category: "cakes",
        tag: "Keks Twist | لمسة كيكس ☕",
        titleAr: "تيراميسو بالكنافة",
        titleEn: "Tiramisu bel Knafeh",
        descAr: "قالب تيراميسو محشو بكريمة الجبنة وصوص الفستق الحلبي وطبقة شوكولاتة فاخرة، مغطّى بالكنافة المحمّصة المقرمشة. يكفي 6-8 أشخاص.",
        descEn: "A tiramisu tray filled with cream cheese, pistachio sauce and a rich chocolate layer, topped with crunchy roasted knafeh. Serves 6-8.",
        visualChar: "☕",
        image: "images/tiramisu-knafeh.jpg",
        sizes: [
            { key: "tray", ar: "قالب · 6-8 أشخاص", en: "Tray · 6-8 people", price: 20 }
        ]
    },
    {
        id: "love-package",
        category: "boxes",
        tag: "Gift Set | باقة إهداء 💝",
        titleAr: "باقة الحب",
        titleEn: "Love Package",
        descAr: "كيكة ريد فيلفيت بشكل قلب تكفي 4-5 أشخاص، مع 5 فطائر فواكه صغيرة.",
        descEn: "A heart-shaped red velvet cake for 4-5 people, served with 5 mini fruit tarts.",
        visualChar: "💝",
        image: "images/love-package.jpg",
        sizes: [
            { key: "set", ar: "الباقة كاملة", en: "Full package", price: 20 }
        ]
    },
    {
        id: "red-velvet-strawberry",
        category: "cakes",
        tag: "Classic | كلاسيك 🍓",
        titleAr: "كيكة الريد فيلفيت / الفراولة",
        titleEn: "Red Velvet or Strawberry Cake",
        descAr: "كيكة فانيلا طرية مع كريمة الفراولة وفراولة طازجة، بطعم منعش وخفيف.",
        descEn: "A soft vanilla cake with strawberry cream and fresh strawberries — light and refreshing.",
        visualChar: "🍓",
        image: "images/red-velvet.jpg",
        sizes: [
            { key: "small",  ar: "صغير · 6 أشخاص",  en: "Small · 6 people",  price: 15 },
            { key: "medium", ar: "وسط · 10 أشخاص",  en: "Medium · 10 people", price: 20 },
            { key: "large",  ar: "كبير · 15 شخص",   en: "Large · 15 people",  price: 23 }
        ]
    },
    {
        id: "coffee-mousse-tart",
        category: "tarts",
        tag: "Coffee Lovers | لعشاق القهوة ☕",
        titleAr: "فطيرة الموس بالقهوة",
        titleEn: "Coffee Mousse Tart",
        descAr: "قاعدة تارت مقرمشة من البسكويت والزبدة مع خلطة الكراميل وكريمة موس القهوة المميّزة.",
        descEn: "A crunchy biscuit and butter tart base with a caramel blend and signature coffee mousse cream.",
        visualChar: "☕",
        image: "images/coffee-mousse.jpg",
        sizes: [
            { key: "small",  ar: "صغير · 6 أشخاص",  en: "Small · 6 people",  price: 18 },
            { key: "medium", ar: "وسط · 10 أشخاص",  en: "Medium · 10 people", price: 23 },
            { key: "large",  ar: "كبير · 15 شخص",   en: "Large · 15 people",  price: 28 }
        ]
    },
    {
        id: "fruit-crumble-velvet",
        category: "cakes",
        tag: "Seasonal | موسمية 🌸",
        titleAr: "كيكة التوت المخملية",
        titleEn: "Fruit Crumble Velvet",
        descAr: "كيكة التوت المخملية بحشوة الفواكه الموسمية وطبقة فواكه طازجة، مزيّنة بكرامبل ذهبي مقرمش من الزبدة والسكر.",
        descEn: "Velvet berry cake with a seasonal fruit filling and a fresh fruit layer, crowned with a golden butter-sugar crumble.",
        noteAr: "متوفرة فقط في موسم التوت.",
        noteEn: "Available during berry season only.",
        visualChar: "🫐",
        image: "images/fruit-crumble.jpg",
        sizes: [
            { key: "small",  ar: "صغير · 6 أشخاص",  en: "Small · 6 people",  price: 18 },
            { key: "medium", ar: "وسط · 10 أشخاص",  en: "Medium · 10 people", price: 22 },
            { key: "large",  ar: "كبير · 15 شخص",   en: "Large · 15 people",  price: 25 }
        ]
    },
    {
        id: "matilda-cake",
        category: "cakes",
        tag: "Rich Chocolate | شوكولاتة غنية 🍫",
        titleAr: "كيكة الماتيلدا",
        titleEn: "Matilda Cake",
        descAr: "طبقات كيك الشوكولاتة الغنية بكريمة الشوكولاتة الفاخرة — كيكة الشوكولاتة الأشهى على الإطلاق.",
        descEn: "Layers of rich chocolate sponge with premium chocolate cream — the ultimate chocolate cake.",
        visualChar: "🍫",
        image: "images/matilda.jpg",
        sizes: [
            { key: "small",  ar: "صغير · 6 أشخاص",  en: "Small · 6 people",  price: 18 },
            { key: "medium", ar: "وسط · 10 أشخاص",  en: "Medium · 10 people", price: 22 },
            { key: "large",  ar: "كبير · 15 شخص",   en: "Large · 15 people",  price: 25 }
        ]
    },
    {
        id: "double-chocolate-cheesecake",
        category: "cakes",
        tag: "For Chocoholics | للمدمنين 🍫",
        titleAr: "دبل تشوكليت تشيز كيك",
        titleEn: "Double Chocolate Cheesecake",
        descAr: "تشيز كيك مخبوز بحشوة وغطاء غني بالشوكولاتة الفاخرة.",
        descEn: "Baked cheesecake with a rich premium chocolate filling and topping.",
        visualChar: "🍫",
        image: "images/double-chocolate.jpg",
        sizes: [
            { key: "small",  ar: "صغير · 6 أشخاص",  en: "Small · 6 people",  price: 15 },
            { key: "medium", ar: "وسط · 10 أشخاص",  en: "Medium · 10 people", price: 20 },
            { key: "large",  ar: "كبير · 15 شخص",   en: "Large · 15 people",  price: 25 }
        ]
    },
    {
        id: "london-cake",
        category: "cakes",
        tag: "Keks Classic | كلاسيك كيكس 🍰",
        titleAr: "لندن كيك",
        titleEn: "London Cake",
        descAr: "كيكة لندن الغنية بطبقاتها المميزة وطعمها المتوازن، من كلاسيكيات كيكس المحبوبة.",
        descEn: "The rich, beautifully layered London Cake — one of the most loved Keks classics.",
        visualChar: "🍰",
        image: "images/london-cake.jpg",
        sizes: [
            { key: "small",  ar: "صغير · 6 أشخاص",  en: "Small · 6 people",  price: 16 },
            { key: "medium", ar: "وسط · 10 أشخاص",  en: "Medium · 10 people", price: 20 },
            { key: "large",  ar: "كبير · 15 شخص",   en: "Large · 15 people",  price: 24 }
        ]
    },
    {
        id: "apple-pie",
        category: "tarts",
        tag: "Home Style | دفا البيت 🍎",
        titleAr: "تارت أبل باي",
        titleEn: "Apple Pie Tart",
        descAr: "تارت أبل باي بالتفاح والقرفة على قاعدة عجينة ذهبية مقرمشة، تُقدّم دافئة.",
        descEn: "Apple and cinnamon pie on a golden, crisp pastry base — best served warm.",
        visualChar: "🍎",
        image: "images/apple-pie.jpg",
        sizes: [
            { key: "small",  ar: "صغير · 4 أشخاص",    en: "Small · 4 people",    price: 10 },
            { key: "medium", ar: "وسط · 7-8 أشخاص",   en: "Medium · 7-8 people", price: 13 },
            { key: "large",  ar: "كبير · 10-11 شخص",  en: "Large · 10-11 people", price: 17 }
        ]
    },
    {
        id: "strawberry-tart",
        category: "mini",
        tag: "Mini Dessert | حلى صغير 🍓",
        titleAr: "فطيرة الفراولة",
        titleEn: "Strawberry Tart",
        descAr: "فطائر فراولة صغيرة بقاعدة مقرمشة وكريمة ناعمة وفراولة طازجة لامعة — مثالية للضيافة.",
        descEn: "Mini strawberry tarts with a crisp base, smooth cream and glossy fresh strawberries — perfect for hosting.",
        visualChar: "🍓",
        image: "images/strawberry-tart.jpg",
        sizes: [
            { key: "box6",  ar: "6 قطع",   en: "6 pieces",  price: 8 },
            { key: "box12", ar: "12 قطعة", en: "12 pieces", price: 15 },
            { key: "box20", ar: "20 قطعة", en: "20 pieces", price: 23 }
        ]
    },
    {
        id: "dessert-cups",
        category: "mini",
        tag: "Party Favourite | نجمة الحفلات 🍮",
        titleAr: "كاسات الحلى",
        titleEn: "Dessert Cups",
        descAr: "كاسات تيراميسو، تشيز كيك، بلوبيري، ستروبيري، بيستاشيو، ونوتيلا — تشكيلة مثالية للحفلات والضيافة.",
        descEn: "Tiramisu, cheesecake, blueberry, strawberry, pistachio and Nutella cups — the perfect party selection.",
        noteAr: "أقل طلب 5 كاسات · رسوم توصيل الكاسات 3 دنانير.",
        noteEn: "Minimum order 5 cups · Delivery fee for cups is 3 JD.",
        visualChar: "🍮",
        image: "images/dessert-cups.jpg",
        sizes: [
            { key: "cup5",  ar: "5 كاسات",  en: "5 cups",  price: 5 },
            { key: "cup25", ar: "25 كاسة",  en: "25 cups", price: 23 },
            { key: "cup50", ar: "50 كاسة",  en: "50 cups", price: 40 }
        ]
    },
    {
        id: "eid-package",
        category: "boxes",
        tag: "Eid Gifting | ضيافة العيد 🎁",
        titleAr: "باكيج العيد",
        titleEn: "Eid Package",
        descAr: "كوكيز الريد فيلفيت، كوكيز دبل شوكليت، تمر مجهول فاخر مع الشوكولاتة البلجيكية، وتمر مع شوكولاتة الفستق الحلبي — مغلّف بباكيج جميل مناسب للضيافة.",
        descEn: "Red velvet cookies, double chocolate cookies, premium Medjool dates with Belgian chocolate and dates with pistachio chocolate — in an elegant hosting package.",
        visualChar: "🎁",
        image: "images/eid-box.jpg",
        sizes: [
            { key: "box16", ar: "بوكس وسط · 16 قطعة", en: "Medium box · 16 pcs", price: 14 },
            { key: "box24", ar: "بوكس كبير · 24 قطعة", en: "Large box · 24 pcs", price: 16 }
        ]
    },
    {
        id: "birthday-cakes",
        category: "boxes",
        custom: true,
        tag: "Custom Order | حسب الطلب 🎂",
        titleAr: "كيكات المناسبات و Bride to be",
        titleEn: "Birthday & Bride to be Cakes",
        descAr: "كيكات أعياد الميلاد والخطوبة والمناسبات، تُصمَّم بالكامل حسب طلب الزبون — الشكل، النكهة، والتزيين.",
        descEn: "Birthday, engagement and occasion cakes designed fully to order — shape, flavour and decoration.",
        visualChar: "🎂",
        image: "images/birthday-cake.jpg",
        sizes: []
    },
    {
        id: "events-catering",
        category: "boxes",
        custom: true,
        tag: "Events | حفلات ومناسبات 🎉",
        titleAr: "ضيافة الحفلات والمناسبات",
        titleEn: "Parties & Events Catering",
        descAr: "تشكيلات ضيافة كاملة للحفلات والمناسبات. السعر حسب عدد الأشخاص والمنتجات المطلوبة.",
        descEn: "Full dessert catering selections for parties and events. Pricing depends on guest count and the items requested.",
        visualChar: "🎉",
        image: "images/events-platter.jpg",
        sizes: []
    }
];


// --------------------------------------------------------------------------
// 3. DICTIONARY TRANSLATIONS FOR BILINGUAL SUPPORT (AR / EN)
// --------------------------------------------------------------------------
const TRANSLATIONS = {
    ar: {
        "nav-home": "الرئيسية",
        "nav-story": "قصة كيكس",
        "nav-menu": "قائمة الحلويات",
        "nav-oven": "مطبخنا الفاخر",
        "nav-instagram": "تابعنا",
        "hero-mini-tag": "👑 كيكات وتشيزكيك وتارت فاخر في عمّان",
        "hero-main-title": `إبداعات الحلويات الفاخرة <br><span class="text-gradient">صُنعت بكل حب وإتقان!</span>`,
        "hero-desc": "مرحباً بكم في كيكس! نقدم لكم تشكيلة ملكية فاخرة من تمور المجهول المحشوة، وترافلز الشوكولاتة البلجيكية الغنية، والبيتيفور المبتكر المصنوع يدوياً بأجود المكونات الطبيعية في عمّان. نخبز ونحضر كل قطعة بكل شغف لتسعد حواسكم في كل مناسبة وجمع عائلية دافئة.",
        "hero-cta-order": "اطلب الآن <i class='fa-solid fa-cookie'></i>",
        "hero-cta-story": "اكتشف قصتنا <i class='fa-solid fa-arrow-left'></i>",
        "hero-stat-age": "شغف بالتميز",
        "hero-stat-love": "مكونات طبيعية 100%",
        "hero-stat-flavors": "إبداعات ملكية",
        "badge-spin": "اضغط ودوّرني! ✨",
        "story-subtitle": "رحلتنا في عالم الحلويات الفاخرة",
        "story-title": "قصة الإبداع والتميز في كيكس 🌴🍫",
        "story-description": "قصة شغف بدأت في عمّان لصنع أرقى إبداعات الحلويات التي تمزج عراقة تمور المجهول والنمورة والبيتيفور بفخامة الشوكولاتة البلجيكية المبتكرة.",
        "menu-subtitle": "منيو كيكس · محدّث ومعتمد",
        "menu-title": "قائمة كيكس المعتمدة 🎂🍫",
        "menu-description": "قائمة كيكس المعتمدة بالكامل: كيكات، تشيزكيك، تارت، كوكيز، وكاسات حلى. اختر الحجم المناسب لعدد ضيوفك وأضفه لسلتك مباشرة.",
        "menu-sizes-note": "الحجم الصغير 6 أشخاص · الوسط 10 أشخاص · الكبير 15 شخص · جميع الأسعار شاملة التوصيل داخل عمّان",
        "filter-all": "الكل 🍽️",
        "filter-cakes": "الكيكات والتشيزكيك 🎂",
        "filter-tarts": "التارت والفطائر 🥧",
        "filter-mini": "الحلويات الصغيرة والكاسات 🍪",
        "filter-boxes": "البوكسات والمناسبات 🎁",
        "oven-tag": "✨ إتقان وحرفية عالية في الصنع",
        "oven-title": "مطبخ كيكس الفاخر: جودة بلا تنازل! 👩‍🍳🏡",
        "oven-desc": "نحن في كيكس نؤمن بأن الفخامة تكمن في التفاصيل. لا نستخدم مواد حافظة ولا نكهات صناعية. نختار حبات تمر المجهول الفاخرة واحدة تلو الأخرى، ونستخدم أجود أنواع الشوكولاتة البلجيكية، والفستق الحلبي المقرمش، وبتلات الورد الجوري الطبيعي المجفف، لنحضر لكم تحفة فنية تأسر القلوب وتذوب في الفم.",
        "notice-title": "معلومات التوصيل والطلب بالأردن 🇯🇴",
        "notice-desc": "الحد الأدنى للطلب للتوصيل هو <strong>10 دنانير أردنية</strong>. نصلكم طازجاً وبأسرع وقت بسيارات توصيل مخصصة ومجهزة للحفاظ على جودة وشكل علب التغليف الفاخرة.",
        "insta-subtitle": "تابعوا إبداعاتنا وصورنا الحية",
        "insta-title": "عائلتنا على انستغرام 📸✨",
        "insta-description": "تابعوا حسابنا الرسمي لمشاهدة فيديوهات التحضير الفاخرة، وآراء زبائننا، والطلب المباشر Direct Message لعروضنا الحصرية!",
        "cart-title": "سلة طلباتك الفاخرة",
        "cart-empty-title": "سلتك فارغة حالياً",
        "cart-empty-desc": "تصفّح قائمة كيكس وأضف الكيكات والتارت والكوكيز والكاسات لبدء تحضير طلبك!",
        "cart-subtotal": "المجموع الفرعي",
        "btn-checkout": "تأكيد الطلب وإرساله للواتساب",
        "checkout-title": "تفاصيل التوصيل والطلب الفاخر",
        "form-name": "الاسم الكامل *",
        "form-phone": "رقم الهاتف *",
        "form-address": "عنوان التوصيل بالتفصيل *",
        "form-time": "وقت التوصيل المفضل",
        "form-notes": "ملاحظات إضافية أو كتابة عبارة إهداء على البوكس",
        "opt-evening": "الفترة المسائية (4 عصراً - 9 مساءً) - الأفضل للتوصيل للمنزل",
        "opt-noon": "الفترة الصباحية والظهر (11 ظهراً - 4 عصراً)",
        "opt-custom": "تنسيق خاص لاحقاً عبر الواتساب",
        "summary-title": "ملخص طلبك النهائي:",
        "summary-total": "المجموع الإجمالي:",
        "foot-links": "روابط سريعة",
        "foot-contact": "معلومات الاتصال بالبوتيك",
        "foot-loc": "عمان، المملكة الأردنية الهاشمية 🇯🇴",
        "foot-deliv": "توصيل سريع لكافة مناطق عمان الكبرى",
        "foot-hours": "الطلبات متاحة 24/7 والتوصيل يومي",
        "btn-add-cart": "إضافة للسلة",
        "lbl-size": "اختر الحجم:",
        "lbl-custom-price": "حسب الطلب",
        "btn-custom-order": "اطلب حسب الطلب عبر واتساب",
        "lbl-quantity": "الكمية:",
        "alert-min-order": "متبقي <strong>{amount} JD</strong> للوصول للحد الأدنى للتوصيل (10 د.أ)",
        "alert-min-reached": "🎉 لقد وصلت للحد الأدنى للتوصيل! جاهز للطلب الفاخر الآن",
        "original-polaroid-caption": "منيو كيكس الرسمي المعتمد بكامل الأصناف والأسعار 📋",
        "original-polaroid-caption-2": "العروض الخاصة وبوكسات التقديم والضيافة المميزة 🎁✨",
        "foot-about": "مشروع حلويات وبوتيك تمر فاخر في عمان، الأردن. نتميز بدمج التراث المحلي كتمور المجهول الفاخرة والنمورة بلمسات فريدة من الشوكولاتة البلجيكية الراقية وترافلز الورد لتناسب كافة أوقاتكم ومناسباتكم السعيدة.",
        "map-label": "<i class=\"fa-solid fa-map-location-dot\"></i> حدد موقع التوصيل على الخريطة *",
        "map-help": "اسحب الدبوس 📍 أو انقر على الخريطة لتحديد موقع التوصيل بدقة."
    },
    en: {
        "nav-home": "Home",
        "nav-story": "Keks Story",
        "nav-menu": "Our Menu",
        "nav-oven": "Luxury Kitchen",
        "nav-instagram": "Follow Us",
        "hero-mini-tag": "👑 Premium Cakes, Cheesecakes & Tarts in Amman",
        "hero-main-title": `Artisan Dessert Creations <br><span class="text-gradient">Handcrafted with Passion!</span>`,
        "hero-desc": "Welcome to Keks! We present a royal selection of premium stuffed Medjool dates, rich Belgian chocolate truffles, and innovative artisan petit fours handcrafted in Amman, Jordan. We prepare every single piece with passion to sweeten your gatherings and special events.",
        "hero-cta-order": "Order Now <i class='fa-solid fa-cookie'></i>",
        "hero-cta-story": "Our Story <i class='fa-solid fa-arrow-left'></i>",
        "hero-stat-age": "Artisan Excellence",
        "hero-stat-love": "100% Pure Ingredients",
        "hero-stat-flavors": "Royal Formulations",
        "badge-spin": "Spin & Taste! ✨",
        "story-subtitle": "A Journey of Elegant Sweets",
        "story-title": "The Craftsmanship & Passion of Keks 🌴🍫",
        "story-description": "A story of passion that started in Amman to elevate traditional Middle Eastern desserts like stuffed dates, namoura, and petit fours into luxurious chocolate art.",
        "menu-subtitle": "Keks Menu · Updated & Official",
        "menu-title": "The Official Keks Menu 🎂🍫",
        "menu-description": "The full approved Keks menu: cakes, cheesecakes, tarts, cookies and dessert cups. Pick the size that fits your guests and add it straight to your cart.",
        "menu-sizes-note": "Small serves 6 · Medium serves 10 · Large serves 15 · All prices include delivery inside Amman",
        "filter-all": "All 🍽️",
        "filter-cakes": "Cakes & Cheesecakes 🎂",
        "filter-tarts": "Tarts & Pies 🥧",
        "filter-mini": "Cookies & Cups 🍪",
        "filter-boxes": "Boxes & Occasions 🎁",
        "oven-tag": "✨ Premium Quality & Unmatched Craftsmanship",
        "oven-title": "Keks Boutique Kitchen: Quality without Compromise! 👩‍🍳🏡",
        "oven-desc": "At Keks, we believe luxury lies in details. We use no preservatives or artificial flavors. We handpick each premium Medjool date, and combine it with the finest Belgian chocolate, crunchy local pistachios, and organic dried Damascus rose petals to deliver a masterpiece that melts in your mouth.",
        "notice-title": "Delivery & Orders in Jordan 🇯🇴",
        "notice-desc": "The minimum order value for delivery is <strong>10.00 JD</strong>. We deliver in custom-equipped vehicles to preserve the exquisite presentation and freshness of your luxury gift boxes.",
        "insta-subtitle": "Follow our visual updates and events",
        "insta-title": "Keks Amman on Instagram 📸✨",
        "insta-description": "Follow our official account to watch our luxury preparations, delightful customer stories, and direct messaging for exclusive collections!",
        "cart-title": "Your Premium Cart",
        "cart-empty-title": "Your Cart is Empty",
        "cart-empty-desc": "Browse the Keks menu and add cakes, tarts, cookies and dessert cups to start your order!",
        "cart-subtotal": "Subtotal",
        "btn-checkout": "Confirm & Send Order via WhatsApp",
        "checkout-title": "Luxury Delivery & Order Details",
        "form-name": "Full Name *",
        "form-phone": "Phone Number *",
        "form-address": "Detailed Delivery Address *",
        "form-time": "Preferred Delivery Time",
        "form-notes": "Additional Notes or Custom Gift Card Inscription",
        "opt-evening": "Evening slot (4 PM - 9 PM) - Best for home delivery",
        "opt-noon": "Morning & Afternoon slot (11 AM - 4 PM)",
        "opt-custom": "Special timing coordination via WhatsApp",
        "summary-title": "Your Final Order Summary:",
        "summary-total": "Grand Total:",
        "foot-links": "Quick Links",
        "foot-contact": "Boutique Contact",
        "foot-loc": "Amman, Hashemite Kingdom of Jordan 🇯🇴",
        "foot-deliv": "Express delivery across Greater Amman",
        "foot-hours": "Orders accepted 24/7, daily delivery",
        "btn-add-cart": "Add to Cart",
        "lbl-size": "Choose size:",
        "lbl-custom-price": "Custom order",
        "btn-custom-order": "Order custom via WhatsApp",
        "lbl-quantity": "Quantity:",
        "alert-min-order": "<strong>{amount} JD</strong> remaining to reach the minimum order (10 JD)",
        "alert-min-reached": "🎉 Minimum order reached! Ready to checkout",
        "original-polaroid-caption": "The official approved Keks menu with all items and prices 📋",
        "original-polaroid-caption-2": "Special Offers, Presentation & Hospitality Boxes 🎁✨",
        "foot-about": "A luxury dessert boutique in Amman, Jordan, specializing in blending rich local heritage like Medjool dates and Namoura with fine Belgian chocolate, dried rose truffles, and artisan petit fours to elevate your gatherings and special events.",
        "map-label": "<i class=\"fa-solid fa-map-location-dot\"></i> Pin your delivery location on map *",
        "map-help": "Drag the pin 📍 or click on the map to accurately set your location."
    }
};

// --------------------------------------------------------------------------
// 4. APPLICATION STATE VARIABLES
// --------------------------------------------------------------------------
let currentLanguage = "ar";
let cart = [];
let activeStorySlide = 1;
const totalStorySlides = 6;
let storyAutoPlayTimer = null;

// --------------------------------------------------------------------------
// 5. APPLICATION INITIALIZATION & CORE EVENTS
// --------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded", () => {
    // 1. Language Init (which also renders products & triggers scroll reveals)
    setLanguage(currentLanguage);

    // 2. Bind Core UI Event Listeners
    setupEventListeners();

    // 3. Timeline comic slider autoplay init
    startStoryAutoplay();
});

// --------------------------------------------------------------------------
// 6. UI EVENT LISTENERS BINDING
// --------------------------------------------------------------------------
function setupEventListeners() {
    // Scroll header effect
    window.addEventListener("scroll", () => {
        const header = document.getElementById("main-header");
        if (window.scrollY > 50) {
            header.classList.add("scrolled");
        } else {
            header.classList.remove("scrolled");
        }
    });

    // Language Toggle
    const langBtn = document.getElementById("lang-toggle-btn");
    langBtn.addEventListener("click", () => {
        const nextLang = currentLanguage === "ar" ? "en" : "ar";
        setLanguage(nextLang);
    });

    // Mobile Navigation Toggle
    const mobileToggle = document.getElementById("mobile-nav-toggle");
    const navMenu = document.getElementById("nav-menu");
    mobileToggle.addEventListener("click", () => {
        mobileToggle.classList.toggle("open");
        navMenu.classList.toggle("open");
    });

    // Close mobile menu on clicking links
    document.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
            mobileToggle.classList.remove("open");
            navMenu.classList.remove("open");
            
            // Set active class
            document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
            link.classList.add("active");
        });
    });

    // Cart Drawer Toggle
    const cartTrigger = document.getElementById("cart-trigger-btn");
    const cartClose = document.getElementById("cart-close-btn");
    const cartBackdrop = document.getElementById("cart-drawer-backdrop");
    const emptyShopBtn = document.getElementById("empty-shop-btn");

    const openCart = () => {
        document.getElementById("cart-drawer").classList.add("open");
        cartBackdrop.classList.add("open");
    };

    const closeCart = () => {
        document.getElementById("cart-drawer").classList.remove("open");
        cartBackdrop.classList.remove("open");
    };

    cartTrigger.addEventListener("click", openCart);
    cartClose.addEventListener("click", closeCart);
    cartBackdrop.addEventListener("click", closeCart);
    emptyShopBtn.addEventListener("click", closeCart);

    // Timeline steps clicking in Story section
    document.querySelectorAll(".timeline-step").forEach(step => {
        step.addEventListener("click", () => {
            const slideNum = parseInt(step.getAttribute("data-slide"));
            goToStorySlide(slideNum, true);
            stopStoryAutoplay(); // Stop autoplay on manual interaction
        });
    });

    // Story Navigation arrows
    document.getElementById("story-prev-btn").addEventListener("click", () => {
        let prevSlide = activeStorySlide - 1;
        if (prevSlide < 1) prevSlide = totalStorySlides;
        goToStorySlide(prevSlide, true);
        stopStoryAutoplay();
    });

    document.getElementById("story-next-btn").addEventListener("click", () => {
        let nextSlide = activeStorySlide + 1;
        if (nextSlide > totalStorySlides) nextSlide = 1;
        goToStorySlide(nextSlide, true);
        stopStoryAutoplay();
    });

    // Menu category filters clicking
    document.querySelectorAll(".filter-btn").forEach(btn => {
        btn.addEventListener("click", () => {
            document.querySelectorAll(".filter-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            const filterVal = btn.getAttribute("data-filter");
            renderProducts(filterVal);
        });
    });

    // Checkout modal trigger & closes
    const checkoutBtn = document.getElementById("cart-checkout-btn");
    const checkoutModal = document.getElementById("checkout-modal");
    const checkoutBackdrop = document.getElementById("checkout-modal-backdrop");
    const checkoutClose = document.getElementById("checkout-close-btn");

    checkoutBtn.addEventListener("click", () => {
        if (getCartTotal() >= CONFIG.minOrderValue) {
            closeCart();
            openCheckoutModal();
        }
    });

    const closeCheckoutModal = () => {
        checkoutModal.classList.remove("open");
        checkoutBackdrop.classList.remove("open");
    };

    checkoutClose.addEventListener("click", closeCheckoutModal);
    checkoutBackdrop.addEventListener("click", closeCheckoutModal);

    // Form Submission for WhatsApp order placement
    const checkoutForm = document.getElementById("checkout-form");
    checkoutForm.addEventListener("submit", (e) => {
        e.preventDefault();
        sendOrderToWhatsApp();
    });

    // Zain Cash / CliQ Payment Method Selection change listener
    const paymentSelect = document.getElementById("payment-method");
    if (paymentSelect) {
        paymentSelect.addEventListener("change", () => {
            handlePaymentMethodChange(paymentSelect.value);
        });
    }

    // Clipboard copying event listeners
    const copyZainCashBtn = document.getElementById("copy-zaincash-btn");
    if (copyZainCashBtn) {
        copyZainCashBtn.addEventListener("click", () => {
            copyTextToClipboard(CONFIG.zainCashWallet, "zaincash-copy-feedback");
        });
    }

    const copyCliqBtn = document.getElementById("copy-cliq-btn");
    if (copyCliqBtn) {
        copyCliqBtn.addEventListener("click", () => {
            copyTextToClipboard(CONFIG.cliqAlias, "cliq-copy-feedback");
        });
    }

    // Screenshot upload preview listener
    const receiptInput = document.getElementById("transfer-receipt");
    if (receiptInput) {
        receiptInput.addEventListener("change", (e) => {
            handleReceiptUpload(e);
        });
    }
}

// --------------------------------------------------------------------------
// 7. LANGUAGE SWITCHING CONTROLLER (AR / EN)
// --------------------------------------------------------------------------
function setLanguage(lang) {
    currentLanguage = lang;
    const isRtl = lang === "ar";
    
    // Update HTML attributes
    document.documentElement.setAttribute("lang", lang);
    document.documentElement.setAttribute("dir", isRtl ? "rtl" : "ltr");
    
    // Update header language button text
    const langBtnText = document.querySelector("#lang-toggle-btn .lang-text");
    langBtnText.textContent = isRtl ? "English" : "العربية";
    
    // Translate all standard elements containing [data-key] attributes
    document.querySelectorAll("[data-key]").forEach(elem => {
        const key = elem.getAttribute("data-key");
        if (TRANSLATIONS[lang] && TRANSLATIONS[lang][key]) {
            elem.innerHTML = TRANSLATIONS[lang][key];
        }
    });

    // Dynamically translate special elements manually
    translateSpecialUI();

    // Re-render menu products to reflect language changes
    const activeFilter = document.querySelector(".filter-btn.active")?.getAttribute("data-filter") || "all";
    renderProducts(activeFilter);

    // Re-render cart item titles to reflect selected language
    renderCart();
}

function translateSpecialUI() {
    const isRtl = currentLanguage === "ar";
    
    // 1. Title Meta
    document.title = isRtl ? "Keks Amman | كيكس عمّان - كيكات وتشيزكيك وتارت فاخر" : "Keks Amman | Premium Cakes, Cheesecakes & Tarts in Jordan";

    // 2. Hero titles
    document.getElementById("hero-main-title").innerHTML = TRANSLATIONS[currentLanguage]["hero-main-title"];
    document.getElementById("hero-desc").textContent = TRANSLATIONS[currentLanguage]["hero-desc"];
    document.getElementById("hero-mini-tag").innerHTML = TRANSLATIONS[currentLanguage]["hero-mini-tag"];

    // 3. Input placeholders translation
    const inputs = {
        "client-name": isRtl ? "مثال: أحمد محمد" : "e.g. John Doe",
        "client-phone": isRtl ? "مثال: 079XXXXXXXX" : "e.g. 079XXXXXXXX",
        "client-address": isRtl ? "مثال: عمان، شارع المدينة المنورة، بناء 12" : "e.g. Amman, Madina Street, Building 12",
        "client-notes": isRtl ? "مثال: يرجى كتابة عبارة 'عيد ميلاد سعيد' على العلبة" : "e.g. Write 'Happy Birthday' on the box",
        "map-search-input": isRtl ? "ابحث عن منطقتك أو موقعك في عمان..." : "Search for your area or location in Amman..."
    };

    for (let id in inputs) {
        const inputElem = document.getElementById(id);
        if (inputElem) inputElem.setAttribute("placeholder", inputs[id]);
    }

    // 3.5 Map labels translation
    const mapLabel = document.getElementById("map-label");
    const mapHelp = document.getElementById("map-help-text");
    if (mapLabel) mapLabel.innerHTML = TRANSLATIONS[currentLanguage]["map-label"];
    if (mapHelp) mapHelp.innerHTML = TRANSLATIONS[currentLanguage]["map-help"];

    // 4. Delivery static notes text
    document.getElementById("delivery-notes-text").innerHTML = TRANSLATIONS[currentLanguage]["notice-desc"];
    document.getElementById("footer-about-text").innerHTML = TRANSLATIONS[currentLanguage]["foot-about"];

    // 5. Polaroids captions
    const polaroidCaptions = document.querySelectorAll(".original-polaroid .polaroid-caption");
    if (polaroidCaptions.length > 0) {
        polaroidCaptions[0].innerHTML = TRANSLATIONS[currentLanguage]["original-polaroid-caption"];
    }
    if (polaroidCaptions.length > 1) {
        polaroidCaptions[1].innerHTML = TRANSLATIONS[currentLanguage]["original-polaroid-caption-2"];
    }
}

// --------------------------------------------------------------------------
// 8. RENDER SHOP COOKIES DYNAMICALLY
// --------------------------------------------------------------------------
function renderProducts(categoryFilter) {
    const grid = document.getElementById("products-grid");
    if (!grid) return;

    grid.innerHTML = "";
    const isRtl = currentLanguage === "ar";
    const L = TRANSLATIONS[currentLanguage];

    const filteredProducts = PRODUCTS.filter(prod => {
        if (categoryFilter === "all") return true;
        return prod.category === categoryFilter;
    });

    filteredProducts.forEach(prod => {
        const card = document.createElement("article");
        card.className = `product-card reveal-on-scroll ${prod.category}`;
        card.setAttribute("id", `product-card-${prod.id}`);

        let tagHtml = "";
        if (prod.tag) {
            const parts = prod.tag.split("|");
            const displayTag = isRtl ? (parts[1] || parts[0]).trim() : parts[0].trim();
            tagHtml = `<span class="product-tag font-arabic">${displayTag}</span>`;
        }

        const title = isRtl ? prod.titleAr : prod.titleEn;
        const desc = isRtl ? prod.descAr : prod.descEn;
        const note = isRtl ? prod.noteAr : prod.noteEn;
        const noteHtml = note ? `<p class="product-note font-arabic"><i class="fa-solid fa-circle-info"></i> ${note}</p>` : "";

        let optionsHtml = "";
        let priceHtml = "";
        let actionHtml = "";

        if (prod.custom || !prod.sizes || prod.sizes.length === 0) {
            priceHtml = `<span class="price-custom font-arabic" id="price-display-${prod.id}">${L["lbl-custom-price"]}</span>`;
            actionHtml = `<a class="add-cart-btn custom-order-btn" href="https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent((isRtl ? "مرحباً كيكس، بحب استفسر عن: " : "Hello Keks, I would like to ask about: ") + title)}" target="_blank" rel="noopener" aria-label="${L["btn-custom-order"]}"><i class="fa-brands fa-whatsapp"></i></a>`;
        } else {
            const defaultSize = prod.sizes[0];
            const btns = prod.sizes.map((s, i) => {
                const raw = isRtl ? s.ar : s.en;
                const parts = raw.split(" \u00b7 ");
                const inner = parts.length > 1
                    ? `<span class="size-main">${parts[0]}</span><span class="size-sub">${parts.slice(1).join(" \u00b7 ")}</span>`
                    : `<span class="size-main">${raw}</span>`;
                return `
                        <button type="button" class="size-btn${i === 0 ? " active" : ""}" data-size="${s.key}" data-price="${s.price}" data-label-ar="${s.ar}" data-label-en="${s.en}">${inner}</button>`;
            }).join("");
            optionsHtml = `
                <div class="product-options-row">
                    <div class="options-label font-arabic">${L["lbl-size"]}</div>
                    <div class="size-selectors" data-product-id="${prod.id}">${btns}
                    </div>
                </div>`;
            priceHtml = `<span class="price-amount font-english" id="price-display-${prod.id}">${defaultSize.price.toFixed(2)}${CONFIG.currency}</span>`;
            actionHtml = `<button type="button" class="add-cart-btn" data-product-id="${prod.id}" aria-label="${L["btn-add-cart"]}"><i class="fa-solid fa-cart-plus"></i></button>`;
        }

        card.innerHTML = `
            ${tagHtml}
            <div class="product-image-container">
                <img src="${prod.image}" alt="${title}" class="product-real-img" loading="lazy" decoding="async" width="900" height="900">
            </div>

            <div class="product-body">
                <h3 class="product-title font-arabic">${title}</h3>
                <p class="product-desc font-arabic">${desc}</p>
                ${noteHtml}
                ${optionsHtml}

                <div class="product-footer">
                    <div class="product-price-wrapper">${priceHtml}</div>
                    ${actionHtml}
                </div>
            </div>
        `;

        grid.appendChild(card);
    });

    bindProductCardEvents();
    setupScrollReveal();
}

function bindProductCardEvents() {
    document.querySelectorAll(".size-selectors button").forEach(btn => {
        btn.addEventListener("click", () => {
            const selectorsRow = btn.parentElement;
            const productId = selectorsRow.getAttribute("data-product-id");

            selectorsRow.querySelectorAll("button").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");

            const price = parseFloat(btn.getAttribute("data-price"));
            const priceEl = document.getElementById(`price-display-${productId}`);
            if (priceEl) priceEl.textContent = price.toFixed(2) + CONFIG.currency;
        });
    });

    document.querySelectorAll(".add-cart-btn[data-product-id]").forEach(btn => {
        btn.addEventListener("click", (e) => {
            const productId = btn.getAttribute("data-product-id");
            const product = PRODUCTS.find(p => p.id === productId);
            if (!product) return;

            const activeSizeBtn = document.querySelector(`.size-selectors[data-product-id="${productId}"] button.active`);
            if (!activeSizeBtn) return;

            addToCart(product, {
                key: activeSizeBtn.getAttribute("data-size"),
                ar: activeSizeBtn.getAttribute("data-label-ar"),
                en: activeSizeBtn.getAttribute("data-label-en"),
                price: parseFloat(activeSizeBtn.getAttribute("data-price"))
            }, e);
        });
    });
}

// --------------------------------------------------------------------------
function addToCart(product, size, event) {
    const cartItemId = `${product.id}-${size.key}`;
    const existingItem = cart.find(item => item.cartItemId === cartItemId);

    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push({
            cartItemId: cartItemId,
            id: product.id,
            titleAr: product.titleAr,
            titleEn: product.titleEn,
            visualChar: product.visualChar,
            image: product.image,
            size: size.key,
            sizeAr: size.ar,
            sizeEn: size.en,
            unitPrice: size.price,
            quantity: 1,
            isBox: product.category === "boxes"
        });
    }

    // Interactive Confetti Burst Reward on adding to cart
    triggerConfetti(event);

    // Refresh UI
    renderCart();

    // Visual Bounce feedback on the shopping cart badge
    const badge = document.getElementById("cart-badge-count");
    badge.style.animation = "none";
    setTimeout(() => {
        badge.style.animation = "wobble 0.5s ease";
    }, 10);
}

function updateQuantity(cartItemId, newQty) {
    const itemIndex = cart.findIndex(item => item.cartItemId === cartItemId);
    if (itemIndex === -1) return;

    if (newQty <= 0) {
        cart.splice(itemIndex, 1);
    } else {
        cart[itemIndex].quantity = newQty;
    }

    renderCart();
}

function removeFromCart(cartItemId) {
    cart = cart.filter(item => item.cartItemId !== cartItemId);
    renderCart();
}

function getCartCount() {
    return cart.reduce((total, item) => total + item.quantity, 0);
}

function getCartTotal() {
    return cart.reduce((total, item) => total + (item.quantity * item.unitPrice), 0);
}

function renderCart() {
    const isRtl = currentLanguage === "ar";
    const totalCount = getCartCount();
    const totalAmount = getCartTotal();

    // 1. Update Floating Header Badges
    document.getElementById("cart-badge-count").textContent = totalCount;
    document.getElementById("cart-badge-total").textContent = totalAmount.toFixed(2) + CONFIG.currency;
    document.getElementById("cart-total-val").textContent = totalAmount.toFixed(2) + CONFIG.currency;

    // 2. Toggle Empty / Filled States
    const emptyState = document.getElementById("cart-empty-state");
    const itemsList = document.getElementById("cart-items-list");
    const checkoutBtn = document.getElementById("cart-checkout-btn");

    if (cart.length === 0) {
        emptyState.style.display = "flex";
        itemsList.style.display = "none";
        checkoutBtn.disabled = true;
    } else {
        emptyState.style.display = "none";
        itemsList.style.display = "flex";
        itemsList.innerHTML = "";

        // Loop and build cart item rows
        cart.forEach(item => {
            const title = isRtl ? item.titleAr : item.titleEn;
            const sizeLabel = (isRtl ? item.sizeAr : item.sizeEn) || item.size;
            const totalItemPrice = item.quantity * item.unitPrice;

            const row = document.createElement("div");
            row.className = "cart-item";
            row.innerHTML = `
                <div class="cart-item-visual">
                    <span>${item.visualChar}</span>
                </div>
                <div class="cart-item-details">
                    <h4 class="cart-item-title font-arabic">${title}</h4>
                    <div class="cart-item-meta font-arabic">
                        ${TRANSLATIONS[currentLanguage]["lbl-size"]} ${sizeLabel} | 
                        ${item.unitPrice.toFixed(2)}${CONFIG.currency}
                    </div>
                    <div class="cart-item-actions">
                        <div class="quantity-selector">
                            <button class="qty-btn" onclick="updateQuantity('${item.cartItemId}', ${item.quantity - 1})" aria-label="Decrease quantity">-</button>
                            <span class="qty-val font-english">${item.quantity}</span>
                            <button class="qty-btn" onclick="updateQuantity('${item.cartItemId}', ${item.quantity + 1})" aria-label="Increase quantity">+</button>
                        </div>
                        <button class="item-remove-btn font-arabic" onclick="removeFromCart('${item.cartItemId}')">
                            <i class="fa-solid fa-trash-can"></i>
                        </button>
                        <span class="cart-item-price font-english">${totalItemPrice.toFixed(2)}${CONFIG.currency}</span>
                    </div>
                </div>
            `;
            itemsList.appendChild(row);
        });
    }

    // 3. Minimum Order Business Limit Progress Updates
    const deliveryProgressContainer = document.getElementById("delivery-progress-container");
    const deliveryProgressText = document.getElementById("delivery-progress-text");
    const deliveryProgressBar = document.getElementById("delivery-progress-bar-fill");

    if (cart.length === 0) {
        deliveryProgressContainer.style.display = "none";
        checkoutBtn.disabled = true;
    } else {
        deliveryProgressContainer.style.display = "block";
        
        if (totalAmount < CONFIG.minOrderValue) {
            const remaining = CONFIG.minOrderValue - totalAmount;
            
            // Set alert text
            deliveryProgressText.innerHTML = TRANSLATIONS[currentLanguage]["alert-min-order"]
                .replace("{amount}", remaining.toFixed(2));
            
            // Set bar fill %
            const percent = (totalAmount / CONFIG.minOrderValue) * 100;
            deliveryProgressBar.style.width = `${percent}%`;
            deliveryProgressBar.style.backgroundColor = "var(--clr-pink-accent)";
            
            // Block Checkout button
            checkoutBtn.disabled = true;
        } else {
            // Reached delivery limit
            deliveryProgressText.innerHTML = TRANSLATIONS[currentLanguage]["alert-min-reached"];
            deliveryProgressBar.style.width = "100%";
            deliveryProgressBar.style.backgroundColor = "var(--clr-success)";
            
            // Allow checkout
            checkoutBtn.disabled = false;
        }
    }
}

// Attach cart methods to window to enable simple inline HTML onclick execution
window.updateQuantity = updateQuantity;
window.removeFromCart = removeFromCart;

// --------------------------------------------------------------------------
// 10. CHECKOUT DIALOG / MODAL ACTIONS
// --------------------------------------------------------------------------
function openCheckoutModal() {
    const isRtl = currentLanguage === "ar";
    const totalAmount = getCartTotal();

    // 1. Populate summary list inside modal
    const summaryList = document.getElementById("modal-order-summary-list");
    summaryList.innerHTML = "";

    cart.forEach(item => {
        const title = isRtl ? item.titleAr : item.titleEn;
        const sizeLabel = (isRtl ? item.sizeAr : item.sizeEn) || item.size;
        const itemTotal = item.quantity * item.unitPrice;

        const li = document.createElement("li");
        li.innerHTML = `
            <span>${item.quantity} × ${title} (${sizeLabel})</span>
            <strong class="font-english">${itemTotal.toFixed(2)}${CONFIG.currency}</strong>
        `;
        summaryList.appendChild(li);
    });

    // 2. Set grand total
    document.getElementById("modal-order-summary-total").textContent = totalAmount.toFixed(2) + CONFIG.currency;

    // 3. Open modal window
    document.getElementById("checkout-modal").classList.add("open");
    document.getElementById("checkout-modal-backdrop").classList.add("open");
    
    // 3.5 Populate Zain Cash and CliQ credentials dynamically from CONFIG
    const zainCashWalletNum = document.getElementById("zaincash-wallet-num");
    if (zainCashWalletNum) zainCashWalletNum.textContent = CONFIG.zainCashWallet;

    const cliqAliasVal = document.getElementById("cliq-alias-val");
    if (cliqAliasVal) cliqAliasVal.textContent = CONFIG.cliqAlias;

    const cliqBankName = document.getElementById("cliq-bank-name");
    if (cliqBankName) {
        cliqBankName.textContent = currentLanguage === "ar" ? CONFIG.cliqBankName : "Arab Bank (البنك العربي)";
    }

    // Reset payment method selector and details block
    const paymentSelect = document.getElementById("payment-method");
    if (paymentSelect) {
        paymentSelect.value = "cod";
        handlePaymentMethodChange("cod");
    }
    
    const receiptInput = document.getElementById("transfer-receipt");
    if (receiptInput) receiptInput.value = "";
    
    const uploadText = document.getElementById("file-upload-text");
    if (uploadText) {
        uploadText.textContent = currentLanguage === "ar" ? "اضغط هنا لرفع إشعار التحويل الجاري" : "Click here to upload payment receipt";
        uploadText.style.color = "";
    }
    
    const holder = document.getElementById("screenshot-preview-holder");
    if (holder) holder.style.display = "none";
    
    // 4. Initialize Google Maps
    initCheckoutMap();
}

// --------------------------------------------------------------------------
// 10.25 INTERACTIVE WALLET PAYMENTS CONTROLLERS
// --------------------------------------------------------------------------
function handlePaymentMethodChange(method) {
    const zainCashBlock = document.getElementById("zaincash-details-block");
    const cliqBlock = document.getElementById("cliq-details-block");
    const uploadBlock = document.getElementById("screenshot-upload-block");

    // Hide all by default
    if (zainCashBlock) zainCashBlock.style.display = "none";
    if (cliqBlock) cliqBlock.style.display = "none";
    if (uploadBlock) uploadBlock.style.display = "none";

    // Reveal based on selection
    if (method === "zaincash") {
        if (zainCashBlock) zainCashBlock.style.display = "flex";
        if (uploadBlock) uploadBlock.style.display = "block";
    } else if (method === "cliq") {
        if (cliqBlock) cliqBlock.style.display = "flex";
        if (uploadBlock) uploadBlock.style.display = "block";
    }
}

function copyTextToClipboard(text, feedbackId) {
    navigator.clipboard.writeText(text).then(() => {
        const feedback = document.getElementById(feedbackId);
        if (feedback) {
            feedback.classList.add("show");
            setTimeout(() => {
                feedback.classList.remove("show");
            }, 2500);
        }
    }).catch(err => {
        console.error("Failed to copy credential: ", err);
    });
}

function handleReceiptUpload(event) {
    const file = event.target.files[0];
    const preview = document.getElementById("screenshot-preview");
    const holder = document.getElementById("screenshot-preview-holder");
    const uploadText = document.getElementById("file-upload-text");

    if (file) {
        if (uploadText) {
            const shortName = file.name.length > 25 ? file.name.substring(0, 22) + "..." : file.name;
            uploadText.textContent = `📁 ${shortName}`;
            uploadText.style.color = "var(--clr-gold)";
        }

        const reader = new FileReader();
        reader.onload = function(e) {
            if (preview) {
                preview.src = e.target.result;
                if (holder) holder.style.display = "block";
            }
        };
        reader.readAsDataURL(file);
    } else {
        if (uploadText) {
            uploadText.textContent = currentLanguage === "ar" ? "اضغط هنا لرفع إشعار التحويل الجاري" : "Click here to upload payment receipt";
            uploadText.style.color = "";
        }
        if (holder) holder.style.display = "none";
    }
}

// --------------------------------------------------------------------------
// 10.5 GOOGLE MAPS INTEGRATION ENGINE
// --------------------------------------------------------------------------
let checkoutMap = null;
let mapMarker = null;
let geocoder = null;
let selectedLatLng = { lat: 31.9539, lng: 35.9106 }; // Amman, Jordan by default
let googleMapsLink = "";

function initCheckoutMap() {
    if (typeof google === 'undefined' || !google.maps) {
        console.warn('Google Maps API not loaded yet.');
        return;
    }

    const mapElement = document.getElementById("checkout-map");
    if (!mapElement) return;

    // Initialize Map with custom luxury dark theme matching Keks Amman!
    checkoutMap = new google.maps.Map(mapElement, {
        center: selectedLatLng,
        zoom: 13,
        mapTypeControl: false,
        streetViewControl: false,
        fullscreenControl: false,
        styles: [
            { elementType: "geometry", stylers: [{ color: "#1C0C09" }] },
            { elementType: "labels.text.stroke", stylers: [{ color: "#120705" }] },
            { elementType: "labels.text.fill", stylers: [{ color: "#E2DDD8" }] },
            {
                featureType: "administrative.locality",
                elementType: "labels.text.fill",
                stylers: [{ color: "#D4AF37" }]
            },
            {
                featureType: "poi",
                elementType: "labels.text.fill",
                stylers: [{ color: "#D4AF37" }]
            },
            {
                featureType: "road",
                elementType: "geometry",
                stylers: [{ color: "#2c1a18" }]
            },
            {
                featureType: "road",
                elementType: "geometry.stroke",
                stylers: [{ color: "#120705" }]
            },
            {
                featureType: "road",
                elementType: "labels.text.fill",
                stylers: [{ color: "#C5B4B0" }]
            },
            {
                featureType: "road.highway",
                elementType: "geometry",
                stylers: [{ color: "#D4AF37", opacity: 0.15 }]
            },
            {
                featureType: "water",
                elementType: "geometry",
                stylers: [{ color: "#0c0403" }]
            }
        ]
    });

    geocoder = new google.maps.Geocoder();

    // Initialize Draggable Marker 📍
    mapMarker = new google.maps.Marker({
        position: selectedLatLng,
        map: checkoutMap,
        draggable: true,
        animation: google.maps.Animation.DROP,
        title: currentLanguage === "ar" ? "موقع التوصيل" : "Delivery Location"
    });

    // Initialize Places Search Box Autocomplete restricts to Jordan
    const searchInput = document.getElementById("map-search-input");
    if (searchInput) {
        // Reset input value when re-opening modal
        searchInput.value = "";
        
        const autocomplete = new google.maps.places.Autocomplete(searchInput, {
            componentRestrictions: { country: "jo" },
            fields: ["geometry", "formatted_address", "name"]
        });

        autocomplete.addListener("place_changed", () => {
            const place = autocomplete.getPlace();
            if (!place.geometry || !place.geometry.location) {
                return;
            }

            const location = place.geometry.location;
            checkoutMap.setCenter(location);
            checkoutMap.setZoom(16);
            mapMarker.setPosition(location);
            updateSelectedLocation(location.lat(), location.lng());
        });
    }

    // Map Click Event
    checkoutMap.addListener("click", (event) => {
        const clickedLocation = event.latLng;
        mapMarker.setPosition(clickedLocation);
        updateSelectedLocation(clickedLocation.lat(), clickedLocation.lng());
    });

    // Marker Drag Event
    mapMarker.addListener("dragend", () => {
        const draggedLocation = mapMarker.getPosition();
        updateSelectedLocation(draggedLocation.lat(), draggedLocation.lng());
    });

    // Force trigger map layout recalculation on display reveal
    setTimeout(() => {
        google.maps.event.trigger(checkoutMap, "resize");
        checkoutMap.setCenter(selectedLatLng);
    }, 300);
}

function updateSelectedLocation(lat, lng) {
    selectedLatLng = { lat: lat, lng: lng };
    googleMapsLink = `https://www.google.com/maps/?q=${lat.toFixed(6)},${lng.toFixed(6)}`;

    // Geocode coordinates back to human readable address
    if (geocoder) {
        geocoder.geocode({ location: selectedLatLng }, (results, status) => {
            if (status === "OK" && results[0]) {
                const formattedAddress = results[0].formatted_address;
                const addressInput = document.getElementById("client-address");
                if (addressInput) {
                    addressInput.value = formattedAddress;
                }
            }
        });
    }
}

// --------------------------------------------------------------------------
// 11. GENERATE WHATSAPP ORDER RECEIPTS
// --------------------------------------------------------------------------
function sendOrderToWhatsApp() {
    const name = document.getElementById("client-name").value.trim();
    const phone = document.getElementById("client-phone").value.trim();
    const address = document.getElementById("client-address").value.trim();
    const deliveryTime = document.getElementById("client-time").value;
    const notes = document.getElementById("client-notes").value.trim();
    const paymentMethodVal = document.getElementById("payment-method").value;

    if (!name || !phone || !address) {
        alert(currentLanguage === "ar" ? "يرجى تعبئة كافة الحقول المطلوبة!" : "Please fill out all required fields!");
        return;
    }

    const totalAmount = getCartTotal();
    const isRtl = currentLanguage === "ar";

    // Format payment method text for receipt
    let paymentMethodText = "";
    if (paymentMethodVal === "cod") {
        paymentMethodText = isRtl ? "💵 الدفع عند الاستلام (Cash on Delivery)" : "💵 Cash on Delivery (COD)";
    } else if (paymentMethodVal === "zaincash") {
        paymentMethodText = isRtl ? `📱 محفظة زين كاش - Zain Cash (${CONFIG.zainCashWallet})` : `📱 Zain Cash Wallet (${CONFIG.zainCashWallet})`;
    } else if (paymentMethodVal === "cliq") {
        paymentMethodText = isRtl ? `⚡ نظام كليك الفوري - CliQ (الاسم المستعار: ${CONFIG.cliqAlias})` : `⚡ CliQ Instant Pay (Alias: ${CONFIG.cliqAlias})`;
    }

    // Build the beautiful, structured order receipt message
    let msg = "";
    
    if (isRtl) {
        msg += `👑 *طلب جديد من بوتيك كيكس عمّان!* 👑\n`;
        msg += `---------------------------------\n`;
        msg += `👤 *الاسم الكامل:* ${name}\n`;
        msg += `📞 *رقم الهاتف:* ${phone}\n`;
        msg += `💳 *طريقة الدفع:* ${paymentMethodText}\n`;
        if (paymentMethodVal !== "cod") {
            msg += `📎 *إشعار التحويل:* تم إرفاق لقطة شاشة عملية التحويل 📸\n`;
        }
        msg += `📍 *عنوان التوصيل:* ${address}\n`;
        if (googleMapsLink) {
            msg += `🗺️ *موقع التوصيل على الخريطة:* ${googleMapsLink}\n`;
        }
        msg += `🕒 *وقت التوصيل المفضل:* ${deliveryTime}\n`;
        msg += `---------------------------------\n`;
        msg += `📦 *تفاصيل سلة المشتريات الفاخرة:*\n`;
        
        cart.forEach(item => {
            const sizeLabel = item.sizeAr || item.size;
            msg += `- ${item.quantity} × ${item.titleAr} (${sizeLabel}) - ${(item.quantity * item.unitPrice).toFixed(2)} د.أ\n`;
        });
        
        msg += `---------------------------------\n`;
        if (notes) {
            msg += `💬 *ملاحظات وإهداء:* ${notes}\n`;
            msg += `---------------------------------\n`;
        }
        msg += `💰 *المجموع الإجمالي للطلب:* ${totalAmount.toFixed(2)} د.أ\n`;
        msg += `---------------------------------\n`;
        msg += `🌴🍫 *تم التحضير بكل حب وإتقان في مطبخ كيكس!* ✨👑`;
    } else {
        msg += `👑 *New Order from Keks Amman Boutique!* 👑\n`;
        msg += `---------------------------------\n`;
        msg += `👤 *Full Name:* ${name}\n`;
        msg += `📞 *Phone Number:* ${phone}\n`;
        msg += `💳 *Payment Method:* ${paymentMethodText}\n`;
        if (paymentMethodVal !== "cod") {
            msg += `📎 *Receipt Screenshot:* Attachment attached in chat 📸\n`;
        }
        msg += `📍 *Delivery Address:* ${address}\n`;
        if (googleMapsLink) {
            msg += `🗺️ *Delivery Location on Map:* ${googleMapsLink}\n`;
        }
        msg += `🕒 *Preferred Time:* ${deliveryTime}\n`;
        msg += `---------------------------------\n`;
        msg += `📦 *Luxury Cart Items Details:*\n`;
        
        cart.forEach(item => {
            const sizeLabel = item.sizeEn || item.size;
            msg += `- ${item.quantity} × ${item.titleEn} (${sizeLabel}) - ${(item.quantity * item.unitPrice).toFixed(2)} JD\n`;
        });
        
        msg += `---------------------------------\n`;
        if (notes) {
            msg += `💬 *Order Notes & Gift Inscription:* ${notes}\n`;
            msg += `---------------------------------\n`;
        }
        msg += `💰 *Grand Total Amount:* ${totalAmount.toFixed(2)} JD\n`;
        msg += `---------------------------------\n`;
        msg += `🌴🍫 *Handcrafted with Love & Passion by Keks Amman!* ✨👑`;
    }

    // URL Encode the final receipt text
    const encodedMessage = encodeURIComponent(msg);
    
    // WhatsApp endpoint URL builder
    let whatsappUrl = "";
    if (CONFIG.whatsappNumber) {
        whatsappUrl = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodedMessage}`;
    } else {
        // Uses standard WhatsApp share link so they can search/select who to send it to
        whatsappUrl = `https://wa.me/?text=${encodedMessage}`;
    }

    // Open WhatsApp in a new tab/application directly
    window.open(whatsappUrl, "_blank");

    // Clear cart and close modal
    cart = [];
    renderCart();
    
    document.getElementById("checkout-modal").classList.remove("open");
    document.getElementById("checkout-modal-backdrop").classList.remove("open");
    document.getElementById("checkout-form").reset();

    // Thank you notification with screenshot attachment warning
    let alertMsg = "";
    if (isRtl) {
        alertMsg = "تم توليد الفاتورة بنجاح! سيتم تحويلك الآن لتطبيق واتساب لإرسال تفاصيل طلبك مباشرة لبدء تحضيره الفاخر.";
        if (paymentMethodVal !== "cod") {
            alertMsg += "\n\n⚠️ يرجى تذكر إرفاق لقطة شاشة إشعار التحويل داخل محادثة الواتساب لتأكيد الدفع والطلب بسرعة! 📸";
        }
    } else {
        alertMsg = "Order receipt generated! You will be redirected to WhatsApp to send your details and start preparing your luxury desserts.";
        if (paymentMethodVal !== "cod") {
            alertMsg += "\n\n⚠️ Please remember to attach your transaction screenshot receipt in the WhatsApp chat to quickly confirm payment & order! 📸";
        }
    }
    alert(alertMsg);
}

// --------------------------------------------------------------------------
// 12. KEKS' CRAFTSMANSHIP JOURNEY TIMELINE STORY CONTROLLER
// --------------------------------------------------------------------------
function goToStorySlide(slideNum, isManual = false) {
    activeStorySlide = slideNum;

    // 1. Manage slide active visibility
    document.querySelectorAll(".story-comic-window .story-slide").forEach(slide => {
        slide.classList.remove("active");
    });
    document.getElementById(`story-slide-${slideNum}`).classList.add("active");

    // 2. Manage timeline step buttons
    document.querySelectorAll(".story-timeline-navigation .timeline-step").forEach(step => {
        step.classList.remove("active");
    });
    
    const currentStepBtn = document.querySelector(`.story-timeline-navigation .timeline-step[data-slide="${slideNum}"]`);
    if (currentStepBtn) {
        currentStepBtn.classList.add("active");
        
        // Auto scroll mobile step selectors to view (only on manual click to avoid page scroll hijacking)
        if (isManual) {
            currentStepBtn.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
        }
    }

    // 3. Manage progress dots
    const dots = document.querySelectorAll(".story-progress-indicator .dot");
    dots.forEach((dot, index) => {
        if (index === slideNum - 1) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function startStoryAutoplay() {
    stopStoryAutoplay();
    storyAutoPlayTimer = setInterval(() => {
        let nextSlide = activeStorySlide + 1;
        if (nextSlide > totalStorySlides) nextSlide = 1;
        goToStorySlide(nextSlide);
    }, 6500); // 6.5 seconds auto rotate slides
}

function stopStoryAutoplay() {
    if (storyAutoPlayTimer) {
        clearInterval(storyAutoPlayTimer);
        storyAutoPlayTimer = null;
    }
}

// --------------------------------------------------------------------------
// 13. HIGH-END INTERACTION: CANVAS CONFETTI EXPLOSIONS
// --------------------------------------------------------------------------
function triggerConfetti(event) {
    const canvas = document.getElementById("confetti-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    
    // Set canvas sizing
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    // Source coordinates from clicked button, or defaults to center
    let startX = window.innerWidth / 2;
    let startY = window.innerHeight / 2;

    if (event && event.clientX && event.clientY) {
        startX = event.clientX;
        startY = event.clientY;
    }

    // Confetti particles configuration
    const colors = ["#FF6F91", "#FF9671", "#FFD1DC", "#D4AF37", "#5D4037", "#F5B041"];
    const particles = [];
    const particleCount = 45;

    for (let i = 0; i < particleCount; i++) {
        particles.push({
            x: startX,
            y: startY,
            vx: (Math.random() - 0.5) * 12,
            vy: (Math.random() - 0.8) * 14 - 4, // upward momentum bias
            size: Math.random() * 8 + 6,
            color: colors[Math.floor(Math.random() * colors.length)],
            rotation: Math.random() * 360,
            rotationSpeed: (Math.random() - 0.5) * 10,
            alpha: 1,
            decay: Math.random() * 0.015 + 0.015
        });
    }

    let animationFrameId;

    function updateAndDraw() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        
        let activeParticlesCount = 0;

        particles.forEach(p => {
            if (p.alpha <= 0) return;
            
            activeParticlesCount++;

            // Apply gravity and physics
            p.x += p.vx;
            p.y += p.vy;
            p.vy += 0.35; // gravity pull
            p.vx *= 0.98; // air friction
            p.rotation += p.rotationSpeed;
            p.alpha -= p.decay;

            ctx.save();
            ctx.translate(p.x, p.y);
            ctx.rotate((p.rotation * Math.PI) / 180);
            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;

            // Draw clean geometric rectangles representing confetti
            ctx.fillRect(-p.size / 2, -p.size / 2, p.size, p.size / 1.5);
            ctx.restore();
        });

        if (activeParticlesCount > 0) {
            animationFrameId = requestAnimationFrame(updateAndDraw);
        } else {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            cancelAnimationFrame(animationFrameId);
        }
    }

    // Launch loop
    updateAndDraw();
}

// --------------------------------------------------------------------------
// 14. INTERSECTION OBSERVER SCROLL REVEALS
// --------------------------------------------------------------------------
function setupScrollReveal() {
    // Add scroll classes to elements that haven't been revealed yet
    const elementsToReveal = document.querySelectorAll(".reveal-on-scroll:not(.revealed)");
    
    const observerOptions = {
        root: null,
        rootMargin: "0px",
        threshold: 0.15 // trigger when 15% visible
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("revealed");
                // Stop observing once animation triggered
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    elementsToReveal.forEach(elem => {
        observer.observe(elem);
    });
}
