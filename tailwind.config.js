/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
    darkMode: ['class'],
    content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
  	fontFamily: {
  		sans: [
  			'Neue Haas Grotesk',
  			'Helvetica',
  			'sans-serif'
  		],
  		serif: [
  			'Garamond',
  			'serif'
  		],
  		mono: [
  			'Courier New',
  			'monospace'
  		]
  	},
  	screens: {
  		xs: '480px',
            ...defaultTheme.screens
  	},
  	extend: {
  		colors: {
  			black: '#010101',
  			black2: '#15171a',
  			white: '#ffffff',
  			gray: {
  				'150': '#EBEDF0',
  				'250': '#404040',
  				'350': '#6B6B6B',
                    ...defaultTheme.colors.gray
  			},
  			blue: {
  				'50': '#E6EDF9',
  				'100': '#CDDCF4',
  				'200': '#A7C2EC',
  				'300': '#82A8E4',
  				'400': '#5385D2',
  				'500': '#2362C0',
  				'600': '#1D4685',
  				'700': '#162A4A',
  				'800': '#11213B',
  				'900': '#0D192C'
  			},
  			red: {
  				'100': '#EBBAB8',
  				'200': '#DF8D8A',
  				'300': '#D25F5B',
  				'400': '#C5312C',
  				'500': '#BF1B15',
  				'600': '#AB1812',
  				'700': '#85120E',
  				'800': '#5F0D0A',
  				'900': '#390806'
  			},
  			green: {
  				'50': '#D3E3DB',
  				'100': '#BED5C9',
  				'200': '#93BAA6',
  				'300': '#679F82',
  				'400': '#3C835E',
  				'500': '#27764d',
  				'600': '#236A45',
  				'700': '#1F5E3D',
  				'800': '#17462E',
  				'900': '#0F2F1E'
  			},
  			pink: {
  				'50': '#FAEAF8',
  				'100': '#F2C1EA',
  				'200': '#EA98DC',
  				'300': '#E26ECE',
  				'400': '#DA45C0',
  				'500': '#D631B9',
  				'600': '#C02CA6',
  				'700': '#952281',
  				'800': '#6B185C',
  				'900': '#400E37'
  			},
  			mint: {
  				'50': '#e5faf4',
  				'100': '#b3f1e0',
  				'200': '#88e9ce',
  				'300': '#5ce1bc',
  				'400': '#47ddb3',
  				'500': '#31D99C',
  				'600': '#25cb9d',
  				'700': '#21b68c',
  				'800': '#1ea07b'
  			},
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		fontSize: {
  			md: '0.95rem',
  			thin: '0.625rem'
  		},
  		spacing: {
  			'88': '22rem',
  			'100': '26rem',
  			'112': '28rem',
  			'128': '32rem',
  			'144': '36rem'
  		},
  		borderRadius: {
  			none: '0',
  			sm: 'calc(var(--radius) - 4px)',
  			DEFAULT: '0.35rem',
  			md: 'calc(var(--radius) - 2px)',
  			lg: 'var(--radius)',
  			full: '9999px'
  		},
  		blur: {
  			xs: '3px'
  		},
  		animation: {
  			'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite;',
  			orbit: 'orbit calc(var(--duration)*1s) linear infinite'
  		},
  		transitionProperty: {
  			height: 'height, max-height',
  			spacing: 'margin, padding'
  		},
  		maxWidth: {
  			'xl-1': '39.5rem'
  		},
  		keyframes: {
  			orbit: {
  				'0%': {
  					transform: 'rotate(calc(var(--angle) * 1deg)) translateY(calc(var(--radius) * 1px)) rotate(calc(var(--angle) * -1deg))'
  				},
  				'100%': {
  					transform: 'rotate(calc(var(--angle) * 1deg + 360deg)) translateY(calc(var(--radius) * 1px)) rotate(calc((var(--angle) * -1deg) - 360deg))'
  				}
  			}
  		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
