module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      boxShadow: {
        navBar: "0px 1px 0px #E2E2E2, 0px 0px 4px rgba(0, 0, 0, 0.05)",
        teamCard:"0px 0px 4px rgba(0, 0, 0, 0.05), 0px 0px 30px rgba(0, 0, 0, 0.1)"
      },
    },
  },
  plugins: [],
};
