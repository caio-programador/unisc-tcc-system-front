import {
  createSystem,
  defaultConfig,
  type SystemConfig,
} from "@chakra-ui/react";

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
          1000: "#020e13ff",
        },
        gray: {
          150: "#bcbcbc",
          900: "#9b9b9bff",
        },
        red: {
          500: "#ff0000",
        },
        waterGreen: {
          100: "#0d9488",
        },
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
        textWithGray: { value: "{colors.gray.150}" },
        info: { value: "{colors.darkBlue.500}" },
        placeholder: { value: "{colors.gray.150}" },
        skeleton: { value: "{colors.darkBlue.1000}" },
      },
    },
    cssVarsRoot: ":host, :root",
  },
  globalCss: {
    "html, body": {
      margin: 0,
      padding: 0,
      backgroundColor: "background",
      color: "textPrimary",
    },
    // Estilos para placeholders do Chakra UI
    ".chakra-input::placeholder, .chakra-textarea::placeholder": {
      color: "textPrimary !important",
      opacity: "0.8 !important",
    },
    ".meeting-input::placeholder": {
      color: "placeholder !important",
      opacity: "0.8 !important",
      "accentColor": "placeholder !important",
    },
    ".meeting-input::-webkit-datetime-edit": {
      color: "background !important",
    },
    ".meeting-input:focus": {
      borderColor: "#e4e4e7 !important",
      outline: "none !important",
    },
    // Estilos para borda do input quando focado
    // Estilos para Select.ItemText - sempre darkBlue
    ".chakra-select__itemText": {
      color: "darkBlue.900 !important",
    },
    // Estilos para o valor do select - cor do texto
    ".chakra-select__valueText": {
      color: "textPrimary !important",
    },
    // Estilos para a setinha do select - cor da borda
    ".chakra-select__indicator": {
      color: "textPrimary !important",
    },
    "[data-part='indicator']": {
      color: "textPrimary !important",
    },
    // Estilos para ícone do calendário - cor da borda
    "input[type='date']::-webkit-calendar-picker-indicator": {
      filter: "invert(1) brightness(0.8)",
    },
    "input[type='date']::-webkit-calendar-picker-indicator:hover": {
      filter: "invert(1) brightness(1)",
    },
    ".chakra-button:hover": {
      backgroundColor: "gray.900 !important",
      transition: "0.5s !important",
    },
    ".css-k68odi": {
      stroke: "textPrimary !important",
    },
    ".remove-file-button:hover": {
      color: "textPrimary !important",
      backgroundColor: "red.700 !important",
    },
    ".download-file-button:hover": {
      backgroundColor: "#125a54 !important",
    },
    ".cancel-button:hover": {
      backgroundColor: "red.700 !important",
      color: "textPrimary !important",
    },
    ".selection-meeting-not-active": {
      color: "placeholder !important",
    },
    ".selection-meeting-active": {
      color: "background !important",
    },
    ".tcc-details-step div": {
      color: "background !important",
    }
  },
};

const system = createSystem(
  defaultConfig,
  customConfig as unknown as SystemConfig
);

export default system;
