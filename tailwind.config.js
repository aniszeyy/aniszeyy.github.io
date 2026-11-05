/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        paper: '#F5F1E8',
        'paper-2': '#EDE7D9',
        ink: '#15140F',
        'ink-soft': '#3F3C33',
        muted: '#6F6A5C',
        line: '#D8D2C3',
        accent: '#C03A0E',
        'accent-deep': '#8E2A08',
        signal: '#3F7D5C',
      },
      fontFamily: {
        display: ['Fraunces', 'Georgia', 'serif'],
        sans: ['"IBM Plex Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      maxWidth: {
        page: '1440px',
      },
      transitionTimingFunction: {
        'out-quart': 'cubic-bezier(0.165, 0.840, 0.440, 1)',
        'out-circ': 'cubic-bezier(0.075, 0.820, 0.165, 1)',
      },
    },
  },
  plugins: [],
};
