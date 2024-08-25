import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        accent1: 'hsl(300, 70%, 60%)', // --accent-1
        accent2: 'hsl(300, 70%, 48%)', // --accent-2
        accent3: 'hsl(300, 70%, 42%)', // --accent-3
        accent4: 'hsl(300, 70%, 36%)', // --accent-4
        accent5: 'hsl(300, 70%, 30%)', // --accent-5
        mention: 'hsla(300, 80%, 52%, 0.1)', // --mention
        mentionHover: 'hsla(300, 80%, 52%, 0.05)', // --mention-hover

        text1: 'white', // --text-0
        text2: 'hsl(220, 25%, 70%)', // --text-2
        text3: 'hsl(220, 15%, 60%)', // --text-3
        text4: 'hsl(220, 15%, 40%)', // --text-4
        text5: 'hsl(220, 15%, 25%)', // --text-5

        bg1: 'hsl(220, 15%, 20%)', // --bg-1
        bg2: 'hsl(220, 15%, 16%)', // --bg-2
        bg3: 'hsl(220, 15%, 13%)', // --bg-3
        bg4: 'hsl(220, 15%, 10%)', // --bg-4
        hover: 'hsla(230, 20%, 40%, 0.1)', // --hover
        active: 'hsla(220, 20%, 40%, 0.2)', // --active
        messageHover: 'hsla(220, 0%, 0%, 0.1)', // --message-hover
      },
      spacing: {
        spacing: '12px', // --spacing
      },
      borderRadius: {
        xl: '22px', // --roundness-xl
        l: '20px', // --roundness-l
        m: '16px', // --roundness-m
        s: '12px', // --roundness-s
        xs: '10px', // --roundness-xs
        xxs: '8px', // --roundness-xxs
      },
      transitionDuration: {
        listItem: '200ms', // --list-item-transition duration
        unreadBar: '200ms', // --unread-bar-transition duration
        moonSpin: '400ms', // --moon-spin-transition duration
        iconSpin: '1000ms', // --icon-spin-transition duration
      },
      transitionTimingFunction: {
        default: 'ease', // Common timing function for all transitions
      },
    }
  },
  plugins: [],
};
export default config;
