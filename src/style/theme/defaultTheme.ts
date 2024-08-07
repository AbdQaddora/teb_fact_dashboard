import { DefaultTheme } from 'styled-components';
const defaultTheme: DefaultTheme = {
    colors: {
        logo: {
            colorA: {
                light: "#F1525F",
                dark: "#c0487d",
            },
            colorB: {
                light: "#646C85",
                dark: "#48b8c0",
            },
        },
        danger: {
            main: "#dc3545", // Assuming you want to keep these colors
            second: "#8c232d"
        },
        success: {
            main: "#10B981", // Assuming you want to keep these colors
            second: "#0c825b"
        },
        primary: {
            main: "#F1525F", // Replaced with logo colorA
            contrast: "#FFFFFF",
            dark: "#c0487d", // Replaced with logo colorA dark
            light: "#FF7D8A", // New lighter shade based on logo colorA
            states: {
                p130: "#FF616E", // Assuming you want to keep these colors
                p50: "rgba(80, 72, 229 , 0.5)",
                p8: "rgba(80, 72, 229, 0.08)",
            }
        },
        text: {
            primary: "#111827", // Assuming you want to keep these colors
            secondary: "#6B7280",
            disabled: "rgba(55, 65, 81 , 0.5)",
            error: "#dc3545"
        },
        secondary: {
            main: "#646C85", // Replaced with logo colorB
            dark: "#48b8c0", // Replaced with logo colorB dark
            contrast: "#FFFFFF",
            states: {
                p130: "#db528e", // Assuming you want to keep these colors
                p50: "rgba(16, 185, 129 , 0.5)",
                p8: "rgba(16, 185, 129 , 0.08)",
            },
        },
        action: {
            active: "#6B7280", // Assuming you want to keep these colors
            disabled: "rgba(55, 65, 81 , 0.25)",
            disabledBackground: "rgba(55, 65, 81 , 0.12)",
        },
        other: {
            divider: "#D1D5DB" // Assuming you want to keep these colors
        },
        background: {
            paper: "#FFFFFF",
            default: "#F9FAFC",
            dark: "#111827",
            dark2: "rgba(255, 255, 255, 0.08);",
        },
        components: {
            outlinedBorder: "#D1D5DB", // Assuming you want to keep these colors
            errorBorder: "#dc3545"
        },
        neutral: {
            n900: "#111827",
            n500: "#D1D5DB",
            n400: "#D1D5DB",
            n300: "#9CA3AF",
            n100: "#F3F4F6",
        }
    },
    typography: {
        h1: "font-size:3.5rem;line-height: 4.8rem;font-weight: 700;",
        h2: "font-size:3rem;line-height: 4.12rem;font-weight: 700;",
        h3: "font-size:2.25rem;line-height: 3rem;font-weight: 700;",
        h4: "font-size:2rem;line-height: 2.75rem;font-weight: 700;",
        h5: "font-size:1.5rem;line-height: 2rem;font-weight: 600;",
        h6: "font-size:1.125rem;line-height: 1.54rem;font-weight: 600;",
        Subtitle1: "font-size:1rem;line-height: 1.75rem;font-weight: 500;",
        Subtitle2: "font-size:0.875rem;line-height: 1.53rem;font-weight: 500;",
        body1: "font-size:1rem;line-height: 1.5rem;font-weight: 400;",
        body2: "font-size:0.875rem;line-height: 1.3rem;font-weight: 400;",
        caption: "font-size:0.75rem;line-height: 1.24rem;font-weight: 400;",
        overline: "font-size:0.75rem;line-height: 1.87rem;font-weight: 600;",
        components: {
            buttonLarge: "font-size:0.94rem;line-height: 1.625rem;font-weight: 600;",
            buttonMedium: "font-size:0.875rem;line-height: 1.5rem;font-weight: 600;",
            buttonSmall: "font-size:0.81rem;line-height: 1.377rem;font-weight: 600;",
            InputValue: "font-family: 'Inter', sans-serif;font-size:1rem;line-height: 1.5rem;font-weight: 400;",
            InputLabel: "font-size:1rem;line-height:1rem;font-weight: 400;",
        },
    }
};

export default defaultTheme;