import { DefaultTheme } from "styled-components";

const greenTheme: DefaultTheme = {
    colors: {
        logo: {
            colorA: {
                light: "#9AA8C2",
                dark: "#4C515B",
            },
            colorB: {
                light: "#0D7A2E",
                dark: "#155426",
            },
        },
        danger: {
            main: "#BF1324",
            second: "#8c232d"
        },
        success: {
            main: "#0D7A2E",
            second: "#155426"
        },
        primary: {
            main: "#0D7A2E",
            contrast: "#FFFFFF",
            dark: "#155426",
            light: "#13af3d",
            states: {
                p130: "rgba(21, 84, 38 , 0.8)",
                p50: "rgba(21, 84, 38 , 0.5)",
                p8: "rgba(21, 84, 38 , 0.08)",
            }
        },
        text: {
            primary: "#111827",
            secondary: "#6B7280",
            disabled: "rgba(55, 65, 81 , 0.5)",
            error: "#dc3545"
        },
        secondary: {
            main: "#9AA8C2",
            contrast: "#FFFFFF",
            dark: "#4C515B",
            states: {
                p130: "#0c825b",
                p50: "rgba(16, 185, 129 , 0.5)",
                p8: "rgba(16, 185, 129 , 0.08)",
            },
        },
        action: {
            active: "#6B7280",
            disabled: "rgba(55, 65, 81 , 0.25)",
            disabledBackground: "rgba(55, 65, 81 , 0.12)",
        },
        other: {
            divider: "#D1D5DB"
        },
        background: {
            paper: "#FFFFFF",
            default: "#F9FAFC",
            dark: "#041B0A",
            dark2: "rgba(255, 255, 255, 0.08);",
        },
        components: {
            outlinedBorder: "#D1D5DB",
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

export default greenTheme;