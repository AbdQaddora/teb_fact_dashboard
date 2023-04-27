import styled from "styled-components";

const Style = styled.div`
    .table{
        height: 500px;
        width: 100%;

        .ag-header{
            background-color: ${props => props.theme.colors.background.dark2} !important;
        }
    }
`

export default Style;