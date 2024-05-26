import { type Config } from "tailwindcss";
import { fontFamily } from "tailwindcss/defaultTheme";

export default {
  content: ["./src/**/*.tsx"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-geist-sans)", ...fontFamily.sans],
      },
      colors: {
        blue: "#0071e3",
        gray: {
          DEFAULT: "#86868b",
          100: "#94928d",
          200: "#afafaf",
          300: "#333335",
          400: "#37373a",
          500: "#1d1d1f",
          border: "#424245",
        },
        zinc: "#101010",
      },
    },
  },
  plugins: [],
} satisfies Config;
