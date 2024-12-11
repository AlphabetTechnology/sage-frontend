/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      fontFamily: {
        heading: ["Sans-serif", "ui-sans-serif", "system-ui"],
        description: ["Arial", "ui-sans-serif", "system-ui"],
      },
      fontSize: {
        h1: ["2rem", { lineHeight: "2.5rem" }], // Mobile
        "h1-lg": ["5rem", { lineHeight: "3.5rem" }], // Large screen
        h2: ["1.75rem", { lineHeight: "2.25rem", fontWeight: "600" }],
        "h2-lg": ["2.5rem", { lineHeight: "3rem" }],
        h3: ["1.5rem", { lineHeight: "2rem" }],
        "h3-lg": ["2rem", { lineHeight: "2.5rem" }],
        h4: ["1.25rem", { lineHeight: "1.75rem" }],
        "h4-lg": ["1.5rem", { lineHeight: "2rem" }],
        h5: ["1rem", { lineHeight: "1.5rem" }],
        "h5-lg": ["1.25rem", { lineHeight: "1.75rem" }],
        h6: ["0.875rem", { lineHeight: "1.25rem" }],
        "h6-lg": ["1rem", { lineHeight: "1.5rem" }],
        p: ["1rem", { lineHeight: "1.5rem" }],
        "p-lg": ["1.125rem", { lineHeight: "1.75rem" }],
      },
    },
  },
  plugins: [],
};
