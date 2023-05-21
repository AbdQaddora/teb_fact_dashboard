import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.background.paper};
    box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1);
    border-radius: 8px;

    .submit_section , .grid , .head{
        padding: 20px;
    }

    .head{
        border-bottom: 1px solid ${props => props.theme.colors.other.divider};
    }
    
    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 1rem;
        column-gap: 1rem;
        border-bottom: 1px solid ${props => props.theme.colors.other.divider};

        .date_input > label{
            padding-inline-end:5px ;
            padding-bottom:2px ;
        }
    }

    .submit_section{
        padding: 10px 20px;
        display: flex;
        justify-content: flex-end;
    }
`

export default Style;