import { type Config } from "tailwindcss";
import d from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-teal": "#357B73",
        "label-gray": "#616161",
      },
      fontFamily: {
        sans: ["var(--font-gilroy)", ...d.fontFamily.sans],
      },
    },
  },
  plugins: [],
} satisfies Config;
