import styled from "styled-components";

const Style = styled.div`
    .logout_section{
        padding: 1rem 0;
    }

    .settings_section{
        background-color: ${props => props.theme.colors.background.paper};
        padding: 1rem;
        border:1px solid  ${props => props.theme.colors.other.divider};
        border-radius: 8px;
        margin: 1rem 0;
    }
`

export default Style;