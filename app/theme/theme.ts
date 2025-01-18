export interface GlobalTheme {
    theme: {
        colors: {
            primary: string
            secondary: string
            tertiary: string
            quaternary: string
        }
        paddings: {
            deafult: string
        }
        fontsSizes: {
            small: string
            medium: string
            large: string
        }
        gaps: {
            defaultGap: string
        }
    }
}

export const theme = {
    colors: {
        primary: '#FAF3F0',
        secondary: '#D4E2D4',
        tertiary: '#FFCACC',
        quaternary: '#A888B5',
    },
    paddings: {
        deafult: '20px',
    },
    fontsSizes: {
        small: '12px',
        medium: '16px',
        large: '24px',
    },
    gaps: {
        defaultGap: '10px',
    },
}
