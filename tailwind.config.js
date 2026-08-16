/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0A0C',
        surface: '#141417',
        surface2: '#1C1C21',
        edge: 'rgba(255,255,255,0.08)',
        gold: {
          DEFAULT: '#F0B90B',
          dim: 'rgba(240,185,11,0.13)',
          light: '#FFCB2E'
        },
        success: {
          DEFAULT: '#16C784',
          dim: 'rgba(22,199,132,0.12)'
        },
        danger: {
          DEFAULT: '#EA3943',
          dim: 'rgba(234,57,67,0.12)'
        },
        ink2: '#F5F5F7',
        muted: '#8A8D98'
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
        mono: ['"IBM Plex Mono"', 'monospace']
      },
      boxShadow: {
        phone: '0 40px 90px -20px rgba(0,0,0,0.75), 0 0 0 1px rgba(255,255,255,0.06)',
        card: '0 20px 50px -20px rgba(0,0,0,0.5)'
      },
      borderRadius: {
        xl2: '1.75rem'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' }
        },
        appear: {
          from: { opacity: '0', transform: 'translateY(16px) scale(0.98)' },
          to: { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        'fade-up': {
          from: { opacity: '0', transform: 'translateY(10px)' },
          to: { opacity: '1', transform: 'translateY(0)' }
        }
      },
      animation: {
        float: 'float 6s ease-in-out infinite',
        appear: 'appear 0.85s cubic-bezier(0.16, 1, 0.3, 1) both',
        'fade-up': 'fade-up 0.35s ease both'
      }
    }
  },
  plugins: []
}
