import styled from "styled-components";

const Style = styled.div`
    .divider{
        width: 100%;
        height: 1px;
        background-color: ${props => props.theme.colors.other.divider};
        margin: 1rem 0;
    }
`

export default Style;