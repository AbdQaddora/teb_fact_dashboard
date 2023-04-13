import styled from "styled-components";

const Style = styled.div`
    .search_block{
        padding: 2rem;
        margin:1rem 0;
        background-color: ${props => props.theme.colors.background.paper};
        border-radius: 8px;
    }
`

export default Style;