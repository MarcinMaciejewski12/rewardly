export interface GlobalTheme {
  theme: {
    colors: {
      primary: string;
      secondary: string;
      tertiary: string;
      quaternary: string;
    };
    paddings: {
      default: string;
    };
    fontsSizes: {
      small: string;
      medium: string;
      large: string;
    };
    gaps: {
      defaultGap: string;
    };
    dashboardLinks: {
      brightPink: string;
      brightYellow: string;
    };
  };
}

export const theme = {
  colors: {
    primary: '#FAF3F0',
    secondary: '#D4E2D4',
    tertiary: '#FFCACC',
    quaternary: '#A888B5',
  },
  paddings: {
    default: '10px',
  },
  fontsSizes: {
    small: '12px',
    medium: '16px',
    large: '24px',
  },
  gaps: {
    defaultGap: '10px',
  },
  dashboardLinks: {
    brightPink: '#EFB6C8',
    brightYellow: '#FFD2A0',
  },
};
