import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.background.paper};
    padding: 1rem;
    margin: 1rem 0;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.other.divider};
    .header{
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
    }

    .chart_type_select{
        width: 150px;
    }

    .chart{
        max-height: 80dvh;
    }
`

export default Style;