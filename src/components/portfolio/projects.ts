export const projects = [
  {
    name: 'CollegeGuide', category: 'Web application', stack: 'TypeScript / React',
    description: 'A clearer path through college applications. AI-powered advising, college tracking, and personalized guidance in one place.',
    image: '/images/collegeguide-cover.png', symbol: '/images/collegeguide-symbol.png',
    href: 'https://collegeguide.tech', code: 'https://github.com/Coded-To-The-Max/CollegeGuide',
  },
  {
    name: 'HabitFlow', category: 'Chrome extension', stack: 'JavaScript',
    description: 'Small habits, made visible. Track routines, see your progress, and find a rhythm that lasts.',
    image: '/images/habitflow-cover.png', symbol: '/images/habitflow-symbol.png',
    href: 'https://github.com/Coded-To-The-Max/HabitFlow', code: 'https://github.com/Coded-To-The-Max/HabitFlow',
  },
  {
    name: 'DesGen', category: 'Creative coding', stack: 'JavaScript / Desmos',
    description: 'From pixels to equations. An experiment in translating images into mathematical sketches for Desmos.',
    image: '/images/desgen-cover.png', symbol: '/images/desgen-symbol.png',
    href: 'https://github.com/Coded-To-The-Max/DesGen', code: 'https://github.com/Coded-To-The-Max/DesGen',
  },
  {
    name: 'Stock Screener', category: 'Financial tooling', stack: 'Python / SEC EDGAR',
    description: 'Research beyond the ticker. A Python screening pipeline for financial statements, insider transactions, and liquidity metrics.',
    image: '/images/stock-screener-cover.png', symbol: '/images/stock-screener-symbol.png', href: '#screener-details', code: null,
  },
];

export const gallery = projects.map(project => ({
  image: project.symbol, title: project.name, detail: project.category,
}));
