module.exports = {
  mode: "jit",
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      keyframes: {
        "blur-out": {
          "0%": {
            transform: "scale(0.90)",
            filter: "blur(50px)",
          },
          "100%": {
            transform: "scale(1)",
            filter: "blur(0px)",
          },
        },
      },
      animation: {
        "blur-out": "blur-out 3s ease-in-out",
      },
    },
  },
  plugins: [],
};
