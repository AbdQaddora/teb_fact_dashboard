import styled, { DefaultTheme } from "styled-components";
type colors = "primary/main" | "primary/contrast" | "primary/dark" | "primary/light" | "primary/states/130" | "primary/states/50" | "primary/states/8" |
    "text/primary" | "text/secondary" | "text/disabled" | "text/error" |
    "secondary/main" | "secondary/contrast" | "secondary/states/130" | "secondary/states/50" | "secondary/states/8" |
    "action/active" | "action/disabled" | "action/disabledBackground" |
    "other/divider" | "background/paper" | "background/default" |
    "components/outlinedBorder" | "neutral/n900" | "neutral/n500" |
    "neutral/n400" | "neutral/n300";

interface IProps {
    color?: colors
    weight?: 100 | 200 | 300 | 400 | 500 | 600 | 700,
    align?: "center" | "end" | "start" | "justify",
    transform?: "capitalize" | "uppercase" | "lowercase",
    margin?: string,
}

const getColorsFromTheme = (color: colors, theme: DefaultTheme) => {
    if (color === "primary/main") return theme.colors.primary.main
    if (color === "primary/contrast") return theme.colors.primary.contrast
    if (color === "primary/dark") return theme.colors.primary.dark
    if (color === "primary/light") return theme.colors.primary.light
    if (color === "primary/states/130") return theme.colors.primary.states.p130
    if (color === "primary/states/50") return theme.colors.primary.states.p50
    if (color === "primary/states/8") return theme.colors.primary.states.p8

    if (color === "text/primary") return theme.colors.text.primary
    if (color === "text/secondary") return theme.colors.text.secondary
    if (color === "text/disabled") return theme.colors.text.disabled
    if (color === "text/error") return theme.colors.text.error

    if (color === "secondary/main") return theme.colors.secondary.main
    if (color === "secondary/contrast") return theme.colors.secondary.contrast
    if (color === "secondary/states/130") return theme.colors.secondary.states.p130
    if (color === "secondary/states/50") return theme.colors.secondary.states.p50
    if (color === "secondary/states/8") return theme.colors.secondary.states.p8


    if (color === "action/active") return theme.colors.action.active
    if (color === "action/disabled") return theme.colors.action.disabled
    if (color === "action/disabledBackground") return theme.colors.action.disabledBackground

    if (color === "other/divider") return theme.colors.other.divider
    if (color === "background/default") return theme.colors.background.default
    if (color === "background/paper") return theme.colors.background.paper

    if (color === "components/outlinedBorder") return theme.colors.components.outlinedBorder

    if (color === "neutral/n900") return theme.colors.neutral.n900
    if (color === "neutral/n500") return theme.colors.neutral.n500
    if (color === "neutral/n400") return theme.colors.neutral.n400
    if (color === "neutral/n300") return theme.colors.neutral.n300
}

const Typography = (theme: DefaultTheme, props: IProps) => {
    const result = `
        color: ${props.color ? getColorsFromTheme(props.color, theme) : theme.colors.text.primary};};
        ${props.align ? "text-align: " + props.align + ";" : ""}
        ${props.weight ? "font-weight: " + props.weight + ";" : ""}
        ${props.transform ? "text-transform: " + props.transform + ";" : ""}
        ${props.margin ? "margin: " + props.margin + ";" : ""}
        `
    return result;
}

export const H1 = styled.h1<IProps>`
    ${props => props.theme.typography.h1}
    ${props => Typography(props.theme, { ...props })}
`

export const H2 = styled.h2<IProps>`
    ${props => props.theme.typography.h2}
    ${props => Typography(props.theme, { ...props })}
`

export const H3 = styled.h4<IProps>`
    ${props => props.theme.typography.h3}
    ${props => Typography(props.theme, { ...props })}

`

export const H4 = styled.h4<IProps>`
    ${props => props.theme.typography.h4}
    ${props => Typography(props.theme, { ...props })}

`

export const H5 = styled.h5<IProps>`
    ${props => props.theme.typography.h5}
    ${props => Typography(props.theme, { ...props })}
`

export const H6 = styled.h6<IProps>`
    ${props => props.theme.typography.h6}
    ${props => Typography(props.theme, { ...props })}
`

export const Subtitle1 = styled.h6<IProps>`
    ${props => props.theme.typography.Subtitle1}
    ${props => Typography(props.theme, { ...props })}
`

export const Subtitle2 = styled.h6<IProps>`
    ${props => props.theme.typography.Subtitle2}
    ${props => Typography(props.theme, { ...props })}
`

export const Body1 = styled.p<IProps>`
    ${props => props.theme.typography.body1}
    ${props => Typography(props.theme, { ...props })}
`

export const Body2 = styled.p<IProps>`
    ${props => props.theme.typography.body2}
    ${props => Typography(props.theme, { ...props })}
`

export const Caption = styled.p<IProps>`
    ${props => props.theme.typography.caption}
    ${props => Typography(props.theme, { ...props })}
`

export const Overline = styled.p<IProps>`
    ${props => props.theme.typography.overline}
    ${props => Typography(props.theme, { ...props })}
`

export const Span = styled.span<IProps>`
    font-size: inherit;
    font-weight: inherit;
    color: inherit;
    ${props => Typography(props.theme, { ...props })}
`
