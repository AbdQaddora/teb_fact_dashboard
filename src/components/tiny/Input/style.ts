import styled from "styled-components";

interface IProps {
    error?: boolean,
    fullWidth?: boolean,
    margin?: string
}

const Style = styled.div<IProps>`
    position: relative;
    height: 3rem;
    width:${props => props.fullWidth ? "100%" : "fit-content"};


    ${props => props.margin ? "margin: " + props.margin + ";" : ""}
    label{
        text-transform: capitalize;
        ${props => props.theme.typography.components.InputLabel};
        color:${props => !props.error ? props.theme.colors.text.secondary : props.theme.colors.text.error};
        cursor: text;
        position: absolute;
        inset-inline-start: 12px;
        top: 50%;
        transform: translateY(-50%);
        transition: 0.3s all ease-in-out ;
        background-color: ${props => props.theme.colors.background.paper};
    }

    &.not_empty label , input:focus + label{
        top: 0;
    }

    input{
        background-color: ${props => props.theme.colors.background.paper};
        ${props => props.fullWidth ? " width:100%;" : ""}
        height:100%;
        ${props => props.theme.typography.components.InputValue};
        color:${props => !props.error ? props.theme.colors.text.primary : props.theme.colors.text.error};
        outline: none;
        
        border:1px solid ${props => !props.error ? props.theme.colors.components.outlinedBorder : props.theme.colors.components.errorBorder};
        border-radius: 0.5rem;
        padding: 0 12px;

        &::placeholder {
            display: none;
            opacity: 0;
            visibility: hidden;
        }
    }


`

export default Style;