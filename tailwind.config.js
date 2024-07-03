/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // Dark/BG
      primary: '#141414',
      secondary: '#232324',
      tertiary: '#202021',
      modal: '#303030',
      accent: '#0047BB',
      success: '#2E7D32',
      error: '#D32F2F',
// Dark/Text
      'text-primary': '#E1E3E6',
      'text-secondary': '#B0B1B6',
      'text-tertiary': '#76787A',
      'text-accent': '#0047BB',
      'text-success': '#2E7D32',
      'text-error': '#D32F2F',
      'text-extra': '#D77556',
// Dark/Icons
      'icon-primary': '#E1E3E6',
      'icon-secondary': '#B0B1B6',
      'icon-tertiary': '#76787A',
      'icon-accent': '#0047BB',
      'icon-success': '#2E7D32',
      'icon-error': '#D32F2F',
// Dark/Border
      'border-primary': '#363738',
      'border-secondary': '#232324',
      'border-accent': '#0047BB',
      'border-success': '#2E7D32',
      'border-error': '#D32F2F',
// State
      'state-accent-disabled': '#424242',
      'state-blue-hover': '#003182',
      'state-blue-focused': '#4C7ECF',
      'state-transparent-blue-hover': '#0047BB',
      'state-transparent-blue-focused': '#0047BB',
      'error-hover': '#C62828',
      'error-focused': '#E06D6D',
      'state-error-hover': '#7a0000',
      'state-error-focused': '#ffa3a3',
      'state-transparent-error-hover': '#D32F2F',
      'state-transparent-error-focused': '#D32F2F',
      'state-success-hover': '#1B5E20',
      'state-success-focused': '#6CA46F',
      'state-transparent-success-hover': '#2E7D32',
      'state-transparent-success-focused': '#2E7D32',
      'state-transparent-contrast-hover': '#FFFFFF',
      'state-transparent-contrast-focused': '#FFFFFF',
// Brand
      'brand-blue': '#0047BB',
      'brand-dark-blue': '#001A72',
      'brand-orange': '#FA4616',
      'brand-white': '#FFFFFF',
      'brand-black': '#101820',
    },
    fontFamily: {
      sans: ["Poppins", 'sans-serif'],
    },
    fontSize: {
      'xxs': '0.75rem',   // 12px
      'xs': '0.875rem',  // 14px
      'sm': '1rem',    // 16px
      'base': '1.25rem',   // 20px
      'lg': '1.5rem',   // 24px
      'xl': '1.875rem', // 30px
      '2xl': '2,125rem', // 34px
      '3xl': '3rem',     // 48px
      '4xl': '3,75rem',  // 60px
      '5xl': '6rem',     // 96px
    },
    lineHeight: {
      'xxs': '1rem',    // 16px
      'xs': '1.25rem',  // 20px
      'sm': '1.5rem',   // 24px
      'md': '2rem',     // 32px
      'lg': '2.25rem',  // 36px
      'xl': '3.5rem',   // 56px
      '2xl': '4.5rem',  // 72px
      '3xl': '7rem',    // 112px
    },
    fontWeight: {
      'light':'300',
      'regular': '400',
      'medium': '500',
      'semibold': '600',
      'bold': '700'
    },
    extend: {

    },
  },
  plugins: [],
}

