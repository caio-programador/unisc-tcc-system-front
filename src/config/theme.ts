import { createSystem, defaultConfig, type SystemConfig } from "@chakra-ui/react";


const customConfig = {
  theme: {
    tokens: {
      colors: {
        darkBlue: {
          50: "#E0F2F7",
          100: "#B3DCEB", 
          200: "#80C5DE",
          300: "#4DAECF",
          400: "#1A97C0",
          500: "#007BA7",
          600: "#006487",
          700: "#004D68",
          800: "#003649",
          900: "#001F2B",
        }
      },
      fonts: {
        body: "system-ui, sans-serif",
      },
    },
    semanticTokens: {
      colors: {
        primary: { value: "{colors.darkBlue.500}" },
        secondary: { value: "{colors.darkBlue.700}" },
        background: { value: "{colors.darkBlue.900}" },
        textPrimary: { value: "{colors.darkBlue.50}" },
        textSecondary: { value: "{colors.darkBlue.200}" },
        info: { value: "{colors.darkBlue.500}" },
      },
    },
  },
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      backgroundColor: "background",
      color: "textPrimary",
    },
    // Estilos para placeholders
    "input::placeholder, textarea::placeholder": {
      color: "textSecondary !important",
      opacity: "0.6",
    },
    ".chakra-input::placeholder, .chakra-textarea::placeholder": {
      color: "textSecondary !important",
      opacity: "0.6",
    },
  },
};


const system = createSystem(defaultConfig,
   customConfig as unknown as SystemConfig);

export default system;