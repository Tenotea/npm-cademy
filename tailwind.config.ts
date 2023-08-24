import { type Config } from "tailwindcss";

export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "app-teal": "#357B73",
      },
    },
  },
  plugins: [],
} satisfies Config;
