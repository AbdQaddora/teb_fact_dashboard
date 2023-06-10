import styled from "styled-components";
interface IProps {
    width?: string,
    height?: string,
    margin?: string,
}

const Style = styled.div<IProps>`
    ${props => props.width ? `max-width: ${props.width};` : "max-width:100%;"}
    ${props => props.width ? `max-height: ${props.height};` : "max-height:100%;"}
    ${props => props.width ? `margin: ${props.margin};` : ""}
    object-fit:cover;
    user-select:none;
`

export default Style;