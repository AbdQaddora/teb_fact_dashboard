import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.background.paper};
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.other.divider};

    .numbers_cards{
        overflow: auto;
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        gap: 10px;
        margin-bottom: 1rem;
    }
`

export default Style;