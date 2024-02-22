/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}",],
  theme: {
    extend: {
      colors: {
        "dark": "#141C24",
        "light": "#FFFFFF",
        "palette-pink": "#9E2896",
        "palette-blue": "#007BC0",
        "palette-sea-green": "#18837E",
        "palette-sea-greenDark": "#0E5B58",
        "palette-green": "#00884A",
        "palette-read": "#ED0007",
        "palette-gray": "#3E3E3E",
        "palette-grayDark": "#E1E1E1",
        "palette-menu": "#191919",
        "palette-dark-menu": "#1B2124",
        "palette-card": "#EEF4F3",
        "palette-font": "#5F5E61",
        "palette-line": "#CFD3D3",
        "palette-cancel": "#F4F4F4",
        "palette-404": "#DADADA",
        "palette-darkLight": "#414040",
        "lyricsDark": "#969696"
      }
    },
  },
  plugins: [],
}

