export const projects = [
  {
    name: 'CollegeGuide', category: 'AI-powered admissions platform', stack: 'TypeScript / JavaScript / Authentication / Databases',
    description: 'Founded and engineered a nonprofit AI-powered platform designed to make college admissions more accessible to high school students. Led development from frontend experience to backend functionality, integrating personalized guidance, college tracking, database management, and authentication. Refined the early product with feedback from 5+ beta testers among friends and family, translating a complex planning process into a more approachable digital experience.',
    image: '/images/collegeguide-symbol.png', symbol: '/images/collegeguide-symbol.png',
    href: 'https://collegeguide.tech', code: 'https://github.com/Coded-To-The-Max/CollegeGuide',
  },
  {
    name: 'HabitFlow', category: 'Chrome extension', stack: 'JavaScript',
    description: 'Designed and developed a Chrome extension that brings habit tracking, progress visualization, and reminders into the browser. Combined streak tracking with AI-powered insights to help users reflect on their routines and adjust their goals. Focused on a straightforward interface that makes daily progress easier to understand and encourages consistent engagement without adding unnecessary complexity.',
    image: '/images/habitflow-symbol.png', symbol: '/images/habitflow-symbol.png',
    href: 'https://github.com/Coded-To-The-Max/HabitFlow', code: 'https://github.com/Coded-To-The-Max/HabitFlow',
  },
  {
    name: 'DesGen', category: 'Creative coding', stack: 'JavaScript / Desmos',
    description: 'Built a JavaScript browser extension that transforms uploaded images into graph-based artwork in Desmos. Engineered the image-processing and equation-generation pipeline, using edge detection to identify visual contours and translate them into mathematical expressions that are automatically entered into the graphing calculator. Designed adjustable controls to make mathematical visualization more accessible while giving users room to experiment with the output.',
    image: '/images/desgen-symbol.png', symbol: '/images/desgen-symbol.png',
    href: 'https://github.com/Coded-To-The-Max/DesGen', code: 'https://github.com/Coded-To-The-Max/DesGen',
  },
  {
    name: 'Stock Screener', category: 'Sub-$10 equity research', stack: 'Python / Yahoo Finance / SEC EDGAR',
    description: 'Developed a Python research tool for screening sub-$10 equities using financial statements, insider transactions, and liquidity metrics. Integrated Yahoo Finance and SEC EDGAR data with asynchronous processing, rate limiting, retry logic, and caching to support reliable full-universe screening. Built financial risk analytics, automated reports, and forward performance evaluation, with 87 automated tests validating the implementation.',
    image: '/images/stock-screener-symbol.png', symbol: '/images/stock-screener-symbol.png', href: 'https://github.com/Coded-To-The-Max/StockScreener', code: 'https://github.com/Coded-To-The-Max/StockScreener',
  },
];

export const gallery = projects.map(project => ({
  image: project.symbol, title: project.name, detail: project.category,
}));
