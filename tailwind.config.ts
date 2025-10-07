import type { Config } from 'tailwindcss';
import daisyui from 'daisyui';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';

const config: Config = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      colors: {
        brand: {
          primary: '#D4FF3D',
          highlight: '#A0FF5D',
          dark: '#0B0D0F',
          surface: '#14171D',
          muted: '#1F232C'
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif']
      },
      boxShadow: {
        glow: '0 0 45px rgba(212, 255, 61, 0.35)'
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at top, rgba(212, 255, 61, 0.12), transparent 55%)'
      }
    }
  },
  daisyui: {
    themes: [
      {
        mkrshift: {
          primary: '#D4FF3D',
          'primary-content': '#0B0D0F',
          secondary: '#7CF4FF',
          'secondary-content': '#0B0D0F',
          accent: '#8D80FF',
          neutral: '#1F232C',
          'neutral-content': '#E7F2FF',
          'base-100': '#0B0D0F',
          'base-200': '#12161D',
          'base-300': '#1A1F29',
          info: '#38BDF8',
          success: '#5EEAD4',
          warning: '#FACC15',
          error: '#F87171'
        }
      }
    ],
    darkTheme: 'mkrshift'
  },
  plugins: [forms, typography, daisyui]
};

export default config;
