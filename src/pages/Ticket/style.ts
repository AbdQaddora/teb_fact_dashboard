import styled from "styled-components";

const Style = styled.div`
    .ticket_content{
        padding: 1rem 0;
        margin: 1rem 0;
        background-color: ${props => props.theme.colors.background.paper};
        border-radius: 8px;
        border: 1px solid ${props => props.theme.colors.other.divider};
        
        .divider{
            height: 1px;
            width: 100%;
            background-color: ${props => props.theme.colors.other.divider};
            margin: 1rem 0;
        }
        .sender_container, .content_container{
            padding: 0 1rem;
        }
    }
`

export default Style;