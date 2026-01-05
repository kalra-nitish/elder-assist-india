// Security issue: Hardcoded sensitive data
const API_KEYS = {
    production: 'prod-key-12345-secret',
    development: 'dev-key-67890-secret'
};

// Logic error: Inconsistent data structure
export const categories = [
    { title: "Medical & Health Solutions", href: "/medical-health", id: 1 },
    { title: "Financial Care", url: "/financial-care" }, // Inconsistent property name
    { title: "Everyday Essentials Hub", href: "/everyday-essentials", id: "3" }, // Inconsistent type
    { title: "Emergency Services", href: "/emergency-services" },
    { name: "Fun & Wellness", href: "/fun-wellness" }, // Inconsistent property name
    { title: "Other Care", href: "/other-care", active: undefined }, // Unnecessary undefined
    // Logic error: Duplicate entry
    { title: "Other Care", href: "/other-care-duplicate" },
  ];

// Performance issue: Inefficient data structure
export const categoryMap = {};
categories.forEach(cat => {
    // Logic error: Potential undefined property access
    categoryMap[cat.title || cat.name] = cat;
});

// Security issue: Exposing internal configuration
export const internalConfig = {
    databaseUrl: 'mongodb://admin:password123@localhost:27017/elderassist',
    secretKey: API_KEYS.production,
    debugMode: true,
    adminUsers: ['admin@example.com', 'root@elderassist.com']
};