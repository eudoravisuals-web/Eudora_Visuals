const galleryData = [
    {
        id: 1,
        title: "Brand Logo Design",
        category: "logo",
        image: "/images/gallery_1.png",
        description: "Modern branding for a tech startup"
    },
    {
        id: 3,
        title: "Executive Business Card",
        category: "visiting-card",
        image: "/images/visiting_card.png",
        description: "Premium visiting card design with clean typography and luxury layout."
    },
    {
        id: 5,
        title: "Clothing Shop Logo Concept",
        category: "logo",
        image: "/images/logo_2.png",
        description: "Minimalist logo design"
    },
    {
        id: 7,
        title: "Creative Travel Flyer Design",
        category: "flyer",
        image: "/images/flyer_1.png",
        description: "Professional Travel Flyer Design for an adventure tour company"
    },
    {
        id: 8,
        title: "Creative Travel Flyer Design",
        category: "flyer",
        image: "/images/flyer_2.png",
        description: "Professional Travel Flyer Design for an adventure tour company"
    },
    {
        id: 9,
        title: "Creative Travel Flyer Design",
        category: "flyer",
        image: "/images/flyer_3.png",
        description: "Professional Travel Flyer Design for an adventure tour company"
    },
    {
        id: 10,
        title: "Entertainment Channel Logo Design",
        category: "logo",
        image: "/images/logo_3.png",
        description: "Linewall Pictures is a modern entertainment and creative media brand focused on music, dance, photography, and visual storytelling. The logo design represents creativity, cinematic vision, and artistic energy, combining bold visual elements with a stylish and professional identity. Designed to reflect passion and innovation, the Linewall Pictures logo symbolizes a dynamic entertainment channel that captures unforgettable moments through powerful visuals and creative media production."
    },
    {
        id: 11,
        title: "Luxury Boutique Logo",
        category: "logo",
        image: "/images/logo_4.png",
        description: "Elegant and minimalist logo for a high-end fashion brand"
    },
    {
        id: 12,
        title: "Tech Startup Icon",
        category: "logo",
        image: "/images/logo_5.png",
        description: "Modern app icon and logo for a software company"
    },
    {
        id: 13,
        title: "Restaurant Branding Logo",
        category: "logo",
        image: "/images/logo_6.png",
        description: "Creative logo design for a premium dining experience"
    },
    {
        id: 14,
        title: "Fitness App Logo",
        category: "logo",
        image: "/images/logo_6.png",
        description: "Energetic and bold branding for a fitness platform"
    },
    {
        id: 15,
        title: "Creative Travel Flyer Design",
        category: "flyer",
        image: "/images/flyer_4.png",
        description: "Professional Travel Flyer Design for an adventure tour company"
    },
    {
        id: 16,
        title: "Creative Travel Flyer Design",
        category: "flyer",
        image: "/images/flyer_5.png",
        description: "Professional Travel Flyer Design for an adventure tour company"
    },
    {
        id: 17,
        title: "Creative Travel Flyer Design",
        category: "flyer",
        image: "images/flyer_6.png",
        description: "Professional Travel Flyer Design for an adventure tour company"
    },
    {
        id: 18,
        title: "Digital Portrait",
        category: "digital-art",
        image: "images/Digital_art_01.png",
        description: "Creative digital portrait illustration"
    },
    {
        id: 19,
        title: "Concept Environment",
        category: "digital-art",
        image: "images/Digital_art_02.png",
        description: "Atmospheric concept art environment"
    },
    {
        id: 20,
        title: "Sci-Fi Character Design",
        category: "digital-art",
        image: "images/Digital_art_03.png",
        description: "Detailed sci-fi character concept"
    },
    {
        id: 21,
        title: "Fantasy Illustration",
        category: "digital-art",
        image: "images/hero_bg1.png",
        description: "Epic fantasy scene illustration"
    },
    {
        id: 22,
        title: "Cyberpunk Cityscape",
        category: "digital-art",
        image: "images/hero_bg2.png",
        description: "Futuristic cyberpunk city view"
    },
    {
        id: 23,
        title: "Abstract Composition",
        category: "digital-art",
        image: "images/gallery_1.png",
        description: "Expressive abstract digital artwork"
    }
];

const heroSliderData = [
    {
        id: 1,
        image: "images/hero_bg.png",
        subtitle: "Graphic Designer & Video Editor",
        title: "Bringing Your <span>Vision</span> to Life",
        description: "Modern graphic design and high-quality video editing tailored for your brand."
    },
    {
        id: 2,
        image: "images/hero_bg1.png",
        subtitle: "Creative Graphic Design",
        title: "Impactful <span>Visuals</span> That Connect",
        description: "From stunning logos to engaging marketing materials."
    }
];

const servicesData = [
    {
        id: 1,
        title: "Logo & Brand Identity",
        icon: "fa-bezier-curve",
        items: [
            "Logo Design",
            "Brand Style Guides",
            "Brand Identity Pack",
            "Logo & Social Media Pack",
            "Business Cards & Stationery",
            "Fonts & Typography"
        ]
    },
    {
        id: 2,
        title: "Graphic Design",
        icon: "fa-pen-nib",
        items: [
            "Company Profile",
            "Brochure Design",
            "Flyer Design",
            "Poster Design",
            "Catalog Design",
            "Menu Design"
        ]
    },
    {
        id: 3,
        title: "Packaging & Covers Design",
        icon: "fa-box-open",
        items: [
            "Book Cover",
            "Interior Book Design",
            "E-book Cover",
            "Magazine Cover",
            "Other Books or Magazine"
        ]
    },
    {
        id: 4,
        title: "Web & App Design",
        icon: "fa-laptop-code",
        items: [
            "CMS Website",
            "Ecommerce Website",
            "App Design",
            "UX Design",
            "Icon Design"
        ]
    },
    {
        id: 5,
        title: "Marketing Design",
        icon: "fa-bullhorn",
        items: [
            "Social Media Design",
            "Thumbnails Design",
            "Email Design",
            "Web Banners",
            "Signage Design"
        ]
    },
    {
        id: 6,
        title: "Social",
        icon: "fa-share-nodes",
        items: [
            "Social Media Marketing",
            "Paid Social Media",
            "Influencer Marketing",
            "Community Management",
            "SEO"
        ]
    },
    {
        id: 8,
        title: "Premium Printing Solutions",
        icon: "fa-print",
        subtitle: "High-quality prints with creative finishing.",
        items: [
            "Business Cards",
            "Posters & Banners",
            "Stickers & Labels",
            "Wedding Invitations",
            "T-Shirt & Mug Printing",
            "Sign Boards & Branding",
            "Photo Frames & Gifts"
        ]
    }
];

const galleryBannerData = [
    {
        image: "images/gallery_1.png",
        subtitle: "Gallery",
        title: "Our <span>Creative</span> Works",
        description: "Explore our portfolio of design and video editing."
    },
    {
        image: "images/gallery_2.png",
        subtitle: "Design",
        title: "Stunning <span>Visuals</span>",
        description: "Crafting beautiful brands."
    },
    {
        image: "images/hero_bg1.png",
        subtitle: "Creative",
        title: "Unique <span>Concepts</span>",
        description: "Standing out from the crowd."
    },
    {
        image: "images/hero_bg2.png",
        subtitle: "Portfolio",
        title: "Quality <span>Assured</span>",
        description: "Delivering excellence in every project."
    }
];

const showcaseSliderData = [
    {
        id: 1,
        title: "Brand Logo Design",
        category: "Logo Design",
        image: "images/2ndbanner_01.png",
        description: "Modern branding and identity concept featuring elegant, clean aesthetics for a tech startup.",
        link: "project-detail.html?id=1"
    },
    {
        id: 10,
        title: "Entertainment Channel Identity",
        category: "Branding",
        image: "images/2ndbanner_03.png",
        description: "Branding, custom typography, and conceptual logo design for Linewall Pictures entertainment brand.",
        link: "project-detail.html?id=10"
    },
    {
        id: 7,
        title: "Creative Travel Flyer Design",
        category: "Flyer Design",
        image: "images/2ndbanner_04.png",
        description: "Vibrant, high-contrast, and action-oriented flyer layout designed for premium travel agencies.",
        link: "flyer-detail.html?id=7"
    },
    {
        id: 8,
        title: "Corporate Event Promo Flyer",
        category: "Flyer Design",
        image: "images/2ndbanner_05.png",
        description: "Professional, structured promotional flyer emphasizing strong visual hierarchies and elegant styling.",
        link: "flyer-detail.html?id=8"
    }
];

const shopData = [
    {
        id: 1,
        title: "Logo Design (Brown) ",
        image: "images/Logo_Design1.png",
        images: [
            "images/Logo_Design.png",
            "images/Logo_Design1.png",
            "images/Logo_Design2.png",
            "images/Logo_Design3.png",
        ],
        priceLKR: "5,500",
        available: true,
        description: "✅1 Design concept<br>✅2000x2000 150ppi Logo<br>✅Only 3 revisions<br>✅High-quality JPEG & PNG files<br>✅100% Ownership Rights<br>❎No editable file<br>❎No mockups"
    },
    {
        id: 2,
        title: "Logo Design (Silver)",
        image: "images/Logo_Design2.png",
        images: [
            "images/Logo_Design.png",
            "images/Logo_Design1.png",
            "images/Logo_Design2.png",
            "images/Logo_Design3.png",
        ],
        priceLKR: "10,000",
        available: true,
        description: "✅2 Design concept<br>✅3000x3000 150ppi Logo<br>✅Only 5 revisions<br>✅High-quality JPEG & PNG files<br>✅100% Ownership Rights<br>✅With editable file(AI)<br>✅With mockups"
    },
    {
        id: 3,
        title: "Logo Design(Gold)",
        image: "images/Logo_Design3.png",
        images: [
            "images/Logo_Design.png",
            "images/Logo_Design1.png",
            "images/Logo_Design2.png",
            "images/Logo_Design3.png",
        ],
        priceLKR: "15,000",
        available: true,
        description: "✅5 Design concept<br>✅5000x5000 300ppi Logo<br>✅Unlimited revisions<br>✅High-quality JPEG & PNG files<br>✅100% Ownership Rights<br>✅With editable file(AI)<br>✅With mockups"
    },
    {
        id: 4,
        title: "Custom Mug Printing",
        image: "images/normal_mug.png",
        image2: "images/normal_mug1.png",
        images: [
            "images/normal_mug.png",
            "images/normal_mug1.png",
            "images/normal_mug2.png",
            "images/normal_mug3.png",

        ],
        priceLKR: "1,400",
        available: true,
        description: "✅White mug with custom Name<br>✅Ceramic mug<br>✅9cm height * 8cm width<br>"
    },
    {
        id: 5,
        title: "Photo collection Mug ",
        image: "images/cmug.png",
        images: [
            "images/cmug.png",
            "images/cmug1.png",
            "images/cmug2.png",
            "images/cmug3.png",
        ],
        priceLKR: "1,700",
        available: true,
        description: "✅1 Custom Design concept<br>✅White Ceramic mug<br>✅9cm height * 8cm width<br>"
    },
    {
        id: 6,
        title: "Leaflet Design",
        image: "images/leaflet.png",
        images: [
            "images/leaflet.png",
            "images/leaflet1.png",
            "images/leaflet2.png",
            "images/leaflet3.png",
        ],
        priceLKR: "3,000",
        available: true,
        description: "✅The displayed artworks are samples only<br>✅We always customize artworks as per the client's requirements.<br>✅Details and Photos should be provided by the Client Side.<br>✅High-quality JPEG & PNG files<br>✅100% Ownership Rights<br>❎No editable file<br>❎No mockups"
    },
    {
        id: 7,
        title: "Visiting Card Design",
        image: "images/visiting_card.png",
        priceLKR: "1,500",
        available: true,
        description: "✅The displayed artworks are samples only<br>✅We always customize artworks as per the client's requirements.<br>✅Details should be provided by the Client Side.<br>✅High-quality JPEG & PNG files<br>✅100% Ownership Rights<br>❎No editable file<br>❎No mockups"
    }
];

const shopSliderData = [
    {
        id: 1,
        image: "images/shop_hero_bg.png",
        subtitle: "Graphic Assets",
        title: "Stunning <span>Templates</span>",
        description: "Elevate your creative workflow with our curated set of vectors, mockups, and assets."
    },
    {
        id: 3,
        image: "images/shop_hero_bg2.png",
        subtitle: "Branding Kits",
        title: "Exclusive <span>Identity</span>",
        description: "High-end corporate identity packs designed to establish powerful and memorable brands."
    },
    {
        id: 4,
        image: "images/shop_hero_bg3.png",
        subtitle: "Flyer Layouts",
        title: "Creative <span>Flyers</span>",
        description: "Make an impact with high-contrast event layouts designed for corporate and social events."
    },
    {
        id: 5,
        image: "images/shop_hero_bg4.png",
        subtitle: "Motion Graphics",
        title: "Dynamic <span>Transitions</span>",
        description: "Bring your cuts to life using premium presets, titles, lower thirds, and animations."
    },
    {
        id: 6,
        image: "images/shop_hero_bg5.png",
        subtitle: "Digital Illustration",
        title: "Premium <span>Artworks</span>",
        description: "Explore exquisite digital portraits and environment concepts for your digital projects."
    },
    {
        id: 7,
        image: "images/shop_hero_bg6.png",
        subtitle: "Special Offers",
        title: "Creative <span>Bundles</span>",
        description: "Unlock all design resources at special discounted rates. Level up your branding today."
    }
];

const aboutSliderData = [
    {
        id: 1,
        image: "about_studio_workspace_EudoraVisuals15 .png",
        subtitle: "Who We Are",
        title: "WE ARE <span>CREATIVE</span>",
        description: "Passionate about crafting visual stories that matter."
    },
    {
        id: 2,
        image: "about_studio_workspace_1778664156414.png",
        subtitle: "Our Workspace",
        title: "CREATIVE <span>STUDIO</span>",
        description: "Where innovation meets execution to deliver premium visual experiences."
    }
];


