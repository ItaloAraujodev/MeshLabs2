/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        navBar: '#070707',
        'background-tes': '#0F111B',
        'line-linear-azul': '#498CF1',
        'line-linear-red': '#EC2158',
        'line-linear-azul-1': '#3B53A9',
        'saturation-azul-claro': '#4461C6',
        'saturation-azul-escuro': '#283563',
        'saturation-preto': '#02081A',
        'saturation-red': '#E82134',
        'saturation-green': '#44F26B',
        'lights-azul-400': '#657AC2',
        'lights-azul-300': '#90AAF7',
        'lights-red-claro': '#F04F5F',
        'lights-green': '#A5F7B7',
        'azul-claro': '#181B2D',
        'azul-escuro': '#11141F',
      },
      fontSize: {
        'display-large': '4.5rem',
        'display-medium': '3.6rem',
        'display-small': '3rem',
      },

      lineHeight: {
        'custom-leading': '5rem',
      },

      fontFamily: {
        'russo-one': ['Russo One', 'sans-serif'],
      },
      backgroundImage: {
        planejamento: "url('/src/assets/Trabalhamos/planejamento.svg')",
      },
    },
    screens: {
      // Mobile
      360: { min: '360px', max: '640px' },
      // '360-1': { 'min': '360px', 'raw': '(max-height: 760px)' },
      414: { min: '414px', max: '896px' },
      375: { min: '375px', max: '667px' },
      '360-2': { min: '360px', max: '780px' },
      // Desktop
      sm: { min: '640px', max: '767px' },
      md: { min: '768px', max: '1023px' },
      lg: { min: '1024px', max: '1279px' },
      xl: { min: '1280px', max: '1439px' },
      1440: { min: '1440px', max: '1535px' },
      '2xl': { min: '1536px', max: '1919px' },
      full: '1920px',
    },
  },
  plugins: [],
}
