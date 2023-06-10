import styled, { css } from "styled-components";

interface IProps {
    variant?: "contained" | "outlined" | "text",
    size?: "large" | "medium" | "small"
    color?: "primary" | "secondary" | "danger",
    fullWidth?: boolean,
    margin?: string
}

// color styles
const colorStyle = css<IProps>`
    --btn-color:${props => props.color === "secondary"
        ? props.theme.colors.success.second :
        props.color === "danger" ? props.theme.colors.danger.main : props.theme.colors.primary.dark};
    
    --btn-hover-color:${props => props.variant === "outlined" || props.variant === "text" ?
        props.color === "secondary" ? props.theme.colors.success.main : props.theme.colors.primary.states.p8 :
        props.color === "secondary" ? props.theme.colors.success.main :
            props.color === "danger" ? props.theme.colors.danger.main : props.theme.colors.primary.states.p130};

    --btn-text-color:${props => props.variant === "outlined" || props.variant === "text" ?
        props.color === "secondary" ? props.theme.colors.success.main : props.theme.colors.primary.dark :
        props => props.color === "secondary" ? props.theme.colors.secondary.contrast : props.theme.colors.primary.contrast};
`
// variant
const outlinedStyle = css`
    background-color: transparent;
    color: var(--btn-text-color);
    border: 1px solid var(--btn-color);
`

const containedStyle = css`
    background-color: var(--btn-color);
    color: var(--btn-text-color);
`

const textStyle = css`
    background-color: transparent;
    color: var(--btn-text-color);
`
// size
const largeStyle = css`
    ${props => props.theme.typography.components.buttonLarge}
    padding: 11px 24px;
`

const mediumStyle = css`
    ${props => props.theme.typography.components.buttonMedium}
    padding: 8px 20px;
`

const smallStyle = css`
    ${props => props.theme.typography.components.buttonSmall}
    padding: 6px 16px;
`
const Button = styled.button<IProps>`
    ${props => props.fullWidth ? "width:100%;" : ""}
    outline: none;
    border: none;
    cursor: pointer;

    ${colorStyle}
    ${props => props.variant === "outlined" ? outlinedStyle :
        props.variant === "text" ? textStyle : containedStyle}
    ${props => props.size === "large" ? largeStyle :
        props.size === "small" ? smallStyle : mediumStyle}
    ${props => props.margin ? `margin:${props.margin};` : ""}
    transition: 0.2s all ease-in-out;
    border-radius: 8px;

    &:hover{
        background-color: var(--btn-hover-color);
    }

    &:disabled{
        background-color:${props => props.theme.colors.action.disabledBackground};
        color:${props => props.theme.colors.action.disabled};
    }
`

export default Button;