import { type Config } from "tailwindcss";
import d from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        app: {
          teal: "#357B73",
          "gray-accent-6": "#F8F8F8",
          "gray-accent-5": "#E7E7E7",
          "gray-accent-1": "#616161",
        },
      },
      fontFamily: {
        sans: ["var(--font-gilroy)", ...d.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
