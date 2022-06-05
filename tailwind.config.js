module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        heropic: "url('/public/hero.png')",
        loginpic: "url('/public/login.png')",
      },
    },
    plugins: [],
    mode: "jit",
  },
};
