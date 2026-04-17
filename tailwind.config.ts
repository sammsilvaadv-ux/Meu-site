import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary:  '#1A2E4A',
        'primary-deep': '#0F1E30',
        gold:     '#B8972E',
        'gold-light': '#D4AF5A',
        'text-main': '#2D2D2D',
        muted:    '#6B6B6B',
        bg:       '#F8F8F6',
        surface:  '#F2F0EC',
        border:   '#E0DAD2',
        accent:   '#E8E2D9',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Georgia', 'serif'],
        body:    ['var(--font-dm-sans)', 'system-ui', 'sans-serif'],
      },
      fontSize: {
        'hero':  ['clamp(2rem,5vw,3rem)', { lineHeight: '1.15', fontWeight: '700' }],
        'h2':    ['clamp(1.5rem,3vw,2.25rem)', { lineHeight: '1.25', fontWeight: '600' }],
        'h3':    ['clamp(1.125rem,2vw,1.5rem)', { lineHeight: '1.35', fontWeight: '600' }],
      },
      boxShadow: {
        card:   '0 2px 16px rgba(0,0,0,0.07)',
        'card-hover': '0 6px 24px rgba(0,0,0,0.12)',
        header: '0 1px 12px rgba(0,0,0,0.06)',
      },
      borderRadius: {
        sm: '4px',
        DEFAULT: '4px',
        md: '6px',
        lg: '8px',
      },
      maxWidth: {
        site: '1200px',
      },
      spacing: {
        section: '5rem',
        'section-sm': '3rem',
      },
    },
  },
  plugins: [],
}

export default config
