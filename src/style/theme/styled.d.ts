
// import original module declarations
import 'styled-components';

interface IColors {
    logo: {
        colorA: {
            light: string,
            dark: string,
        },
        colorB: {
            light: string,
            dark: string,
        },
    }
    text: {
        primary: string,
        secondary: string,
        disabled: string,
        error: string
    },
    danger: {
        main: string,
        second: string
    },
    success: {
        main: string,
        second: string
    },
    primary: {
        main: string,
        contrast: string,
        dark: string,
        light: string,
        states: {
            p8: string,
            p50: string,
            p130: string,
        }
    },
    secondary: {
        main: string,
        contrast: string,
        dark: string,
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
        dark: string,
        dark2: string,
    },
    components: {
        outlinedBorder: string,
        errorBorder: string
    },
    neutral: {
        n900: string,
        n500: string,
        n400: string,
        n300: string,
        n100: string,
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