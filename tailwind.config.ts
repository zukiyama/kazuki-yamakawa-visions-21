import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				},
				/* Japanese design system colors */
				ink: {
					DEFAULT: 'hsl(var(--ink))',
					light: 'hsl(var(--ink-light))'
				},
				paper: 'hsl(var(--paper))',
				shadow: 'hsl(var(--shadow))',
				'sun-red': 'hsl(var(--sun-red))',
				mountain: 'hsl(var(--mountain))'
			},
			backgroundImage: {
				'gradient-ink': 'var(--gradient-ink)',
				'gradient-paper': 'var(--gradient-paper)',
				'gradient-sunset': 'var(--gradient-sunset)'
			},
			boxShadow: {
				'soft': 'var(--shadow-soft)',
				'ink': 'var(--shadow-ink)',
				'accent': 'var(--shadow-accent)'
			},
			transitionTimingFunction: {
				'zen': 'cubic-bezier(0.4, 0, 0.2, 1)',
				'brush': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)'
			},
			fontFamily: {
				'japanese': ['Inter', 'Noto Sans JP', 'system-ui', 'sans-serif'],
				'elegant': ['Playfair Display', 'serif'],
				'body': ['Crimson Text', 'serif']
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'float-gentle': {
					'0%, 100%': { transform: 'translateY(0px)' },
					'50%': { transform: 'translateY(-8px)' }
				},
				'sway': {
					'0%, 100%': { transform: 'translateX(0px) rotate(0deg)' },
					'50%': { transform: 'translateX(2px) rotate(1deg)' }
				},
				'drift': {
					'0%': { transform: 'translateX(-10px)' },
					'100%': { transform: 'translateX(10px)' }
				},
				'sparkle': {
					'0%, 100%': { opacity: '0', transform: 'scale(0.8)' },
					'50%': { opacity: '1', transform: 'scale(1.2)' }
				},
				'ripple': {
					'0%': { transform: 'scale(0.8)', opacity: '0.8' },
					'50%': { transform: 'scale(1.1)', opacity: '0.6' },
					'100%': { transform: 'scale(1.3)', opacity: '0' }
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'float-gentle': 'float-gentle 6s ease-in-out infinite',
				'sway': 'sway 8s ease-in-out infinite',
				'drift': 'drift 20s linear infinite',
				'sparkle': 'sparkle 3s ease-in-out infinite',
				'ripple': 'ripple 4s ease-out infinite'
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
