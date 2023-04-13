import styled from "styled-components";

const Style = styled.div`
    display: flex;
    gap: 2px;
    align-items: center;

    .star_icon{
        color: ${props => props.theme.colors.primary.states.p130};
    }
`

export default Style;