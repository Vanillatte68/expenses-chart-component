/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "soft-red": "var(--soft-red)",
        "cyan-color": "var(--cyan)",
        "dark-brown": "var(--dark-brown)",
        "medium-brown": "var(--medium-brown)",
        "pale-orange": "var(--pale-orange)",
      },
    },
  },
  plugins: [],
};
