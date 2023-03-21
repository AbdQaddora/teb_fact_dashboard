
// import original module declarations
import 'styled-components';

interface IColors {
    text: {
        primary: string,
        secondary: string,
        disabled: string,
    },
    primary: {
        main: string,
        contrast: string,
        dark: string,
        light: string
    },
    secondary: {
        main: string,
        contrast: string,
        states: {
            p8: string,
            p50: string,
            p130: string,
        }
    },
    action: {
        active: string,
        disabled: string,
        disabledBackground: string,
    },
    other: {
        divider: string,
    },
    background: {
        paper: string,
        default: string,
    },
    components: {
        outlinedBorder: string,
    },
    neutral: {
        n900: string,
        n500: string,
        n300: string,
        n400: string,
    }
}

interface ITypography {
    h1: string,
    h2: string,
    h3: string,
    h4: string,
    h5: string,
    h6: string,
    Subtitle1: string,
    Subtitle2: string,
    body1: string,
    body2: string,
    caption: string,
    overline: string,
    components: {
        buttonLarge: string,
        buttonMedium: string,
        buttonSmall: string,
        InputValue: string,
        InputLabel: string,
    }
}

// and extend them!
declare module 'styled-components' {
    export interface DefaultTheme {
        colors: IColors,
        typography: ITypography
    }
}