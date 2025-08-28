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
        black: '#191919',
        charleston: '#2C2C2C',
        gold: '#A56B37',
        apricot: '#F2D3AF',
        chinese: '#E0E0E0',
        offwhite: '#F2F2F2',
      },
      boxShadow: {
        soft: '0 8px 24px rgba(0,0,0,0.2)',
      },
      fontFamily: {
        sans: ['Inter', 'Helvetica Neue', 'system-ui', '-apple-system', 'Segoe UI', 'Roboto', 'Arial', 'sans-serif'],
        arabic: ['Amiri', 'Adobe Arabic', 'Helvetica Neue', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
export default config
