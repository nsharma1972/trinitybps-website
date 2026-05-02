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
        brand: {
          // 2026 refresh — deeper, more saturated values for stronger
          // contrast and a more modern feel. Each product still maps to
          // one color (blue=AI University, emerald=TDI Intel,
          // orange=AI Consulting, cyan=Trinity Yasha).
          blue:   '#2563EB',  // tailwind blue-600
          orange: '#F97316',  // tailwind orange-500 (warmer than rust)
          green:  '#10B981',  // tailwind emerald-500
          cyan:   '#06B6D4',  // tailwind cyan-500 (sharper)
          dark:   '#0F172A',  // tailwind slate-900
          muted:  '#64748B',  // unchanged — slate-500
          light:  '#F8FAFC',  // unchanged
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Georgia', 'serif'],
      },
    },
  },
  plugins: [require('@tailwindcss/typography')],
}
export default config
