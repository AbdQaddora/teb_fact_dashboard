import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.background.paper};
    padding: 1rem 0;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.other.divider};
`

export default Style;