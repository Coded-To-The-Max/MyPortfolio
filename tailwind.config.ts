import type {Config} from 'tailwindcss';

export default {
  darkMode: ['class'],
  content: ['./src/pages/**/*.{js,ts,jsx,tsx,mdx}', './src/components/**/*.{js,ts,jsx,tsx,mdx}', './src/app/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: { body: ['var(--font-body)'], headline: ['var(--font-display)'], code: ['var(--font-mono)'] },
      colors: {
        background: 'var(--color-paper)', foreground: 'var(--color-ink)', border: 'var(--color-rule)', input: 'var(--color-rule)', ring: 'var(--color-focus)',
        card: { DEFAULT: 'var(--color-paper)', foreground: 'var(--color-ink)' }, popover: { DEFAULT: 'var(--color-paper)', foreground: 'var(--color-ink)' },
        primary: { DEFAULT: 'var(--color-accent)', foreground: 'var(--color-accent-ink)' }, secondary: { DEFAULT: 'var(--color-paper-2)', foreground: 'var(--color-ink)' },
        muted: { DEFAULT: 'var(--color-paper-2)', foreground: 'var(--color-muted)' }, accent: { DEFAULT: 'var(--color-paper-2)', foreground: 'var(--color-ink)' }, destructive: { DEFAULT: 'var(--color-error)', foreground: 'var(--color-accent-ink)' },
      },
      borderRadius: { lg: 'var(--radius-md)', md: 'var(--radius-sm)', sm: 'var(--radius-sm)' },
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config;
