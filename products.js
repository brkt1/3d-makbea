const products = [
    {
        id: 1,
        name: "Geometric Desk Organizer",
        price: 45.99,
        image: "https://m.media-amazon.com/images/I/71j-EFmEzJL._AC_SL1500_.jpg",
        category: "home",
        description: "Minimalist 3D printed desk organizer with multiple compartments for pens, cards, and small items.",
        features: [
            "Multi-compartment design",
            "Sleek geometric shape",
            "Available in 5 colors"
        ],
        colors: ["White", "Black", "Gray", "Blue", "Green"],
        dimensions: "20x15x10 cm",
        weight: "0.5 kg",
        inStock: true,
        stockQuantity: 50
    },
    {
        id: 2,
        name: "Smartphone Charging Station",
        price: 59.99,
        image: "https://m.media-amazon.com/images/I/61tRIpIAMfL._AC_SL1500_.jpg",
        category: "tech",
        description: "Elegant wooden-style charging dock for multiple devices with cable management.",
        features: [
            "Supports smartphone and wireless earbuds",
            "Cable management system",
            "Compatible with most devices"
        ],
        compatibility: ["iPhone", "Android", "AirPods", "Samsung"],
        dimensions: "15x10x8 cm",
        weight: "0.3 kg",
        inStock: true,
        stockQuantity: 35
    },
    {
        id: 3,
        name: "Personalized Name Lamp",
        price: 79.99,
        image: "https://m.media-amazon.com/images/I/61lG0nA7-YL._AC_SL1001_.jpg",
        category: "gifts",
        description: "Custom 3D printed lamp with personalized name or text, perfect for bedrooms or home offices.",
        features: [
            "Customizable text",
            "Warm LED lighting",
            "Multiple font styles"
        ],
        customization: {
            maxLength: 15,
            fontStyles: ["Modern", "Script", "Blocky", "Elegant"]
        },
        dimensions: "25x15x15 cm",
        weight: "0.8 kg",
        inStock: true,
        stockQuantity: 25
    },
    {
        id: 4,
        name: "Minimalist Plant Pot",
        price: 34.99,
        image: "https://m.media-amazon.com/images/I/71ZikhbAQgL._AC_SL1500_.jpg",
        category: "home",
        description: "Modern geometric planter with drainage hole, perfect for succulents and small plants.",
        features: [
            "Geometric design",
            "Built-in drainage",
            "Multiple sizes available"
        ],
        sizes: ["Small", "Medium", "Large"],
        colors: ["White", "Terracotta", "Sage Green", "Charcoal"],
        dimensions: {
            small: "10x10x10 cm",
            medium: "15x15x15 cm",
            large: "20x20x20 cm"
        },
        weight: "0.4 kg",
        inStock: true,
        stockQuantity: 60
    },
    {
        id: 5,
        name: "Gaming Headset Stand",
        price: 49.99,
        image: "https://m.media-amazon.com/images/I/61-tMiHY5FL._AC_SL1500_.jpg",
        category: "tech",
        description: "Ergonomic headphone stand with additional USB charging ports.",
        features: [
            "USB charging hub",
            "Cable management",
            "Compatible with most headsets"
        ],
        compatibility: ["Gaming Headsets", "Studio Headphones"],
        usbPorts: 2,
        dimensions: "25x12x12 cm",
        weight: "0.6 kg",
        inStock: true,
        stockQuantity: 40
    },
    {
        id: 6,
        name: "Wedding Anniversary Figurine",
        price: 89.99,
        image: "https://m.media-amazon.com/images/I/61Zj0kftQBL._AC_SL1000_.jpg",
        category: "gifts",
        description: "Custom 3D printed couple figurine, perfect romantic gift for weddings or anniversaries.",
        features: [
            "Fully customizable",
            "Detailed sculpture",
            "Multiple pose options"
        ],
        customization: {
            poseOptions: ["Holding Hands", "Embracing", "Dancing", "First Kiss"],
            personalizedDetails: ["Names", "Date", "Clothing Style"]
        },
        dimensions: "20x10x10 cm",
        weight: "0.7 kg",
        inStock: true,
        stockQuantity: 20
    },
    {
        id: 7,
        name: "Modular Desk Shelf",
        price: 69.99,
        image: "https://m.media-amazon.com/images/I/71RzG0hLmEL._AC_SL1500_.jpg",
        category: "home",
        description: "Stackable desk shelving system for ultimate workspace organization.",
        features: [
            "Modular design",
            "Easy assembly",
            "Expandable configuration"
        ],
        modulesIncluded: 3,
        expandableUp: true,
        colors: ["Natural Wood", "White", "Black"],
        dimensions: "40x20x30 cm",
        weight: "1.2 kg",
        inStock: true,
        stockQuantity: 30
    },
    {
        id: 8,
        name: "Wireless Charger Dock",
        price: 54.99,
        image: "https://m.media-amazon.com/images/I/61qQP9hk6rL._AC_SL1500_.jpg",
        category: "tech",
        description: "Sleek wireless charging station with multiple device support.",
        features: [
            "Qi wireless charging",
            "Fast charging support",
            "Compact design"
        ],
        chargingStandards: ["Qi", "Fast Charge"],
        compatibility: ["iPhone", "Samsung", "Google Pixel"],
        dimensions: "15x10x5 cm",
        weight: "0.3 kg",
        inStock: true,
        stockQuantity: 45
    },
    {
        id: 9,
        name: "Personalized Pet Portrait",
        price: 99.99,
        image: "https://m.media-amazon.com/images/I/61ub9WKrAKL._AC_SL1000_.jpg",
        category: "gifts",
        description: "Custom 3D printed portrait of your beloved pet, a unique and memorable keepsake.",
        features: [
            "Fully customizable",
            "Detailed sculpture",
            "Multiple style options"
        ],
        customization: {
            petTypes: ["Dog", "Cat", "Bird", "Other"],
            styleOptions: ["Realistic", "Cartoon", "Minimalist"]
        },
        dimensions: "25x20x20 cm",
        weight: "0.9 kg",
        inStock: true,
        stockQuantity: 15
    },
    {
        id: 10,
        name: "Cable Management Clips",
        price: 19.99,
        image: "https://m.media-amazon.com/images/I/71uRJDg1NFL._AC_SL1500_.jpg",
        category: "tech",
        description: "Adhesive cable management clips to keep your workspace tidy and organized.",
        features: [
            "Strong adhesive backing",
            "Multiple cable sizes",
            "Minimalist design"
        ],
        cableTypes: ["USB", "HDMI", "Ethernet", "Power Cables"],
    }
];

export default products;
