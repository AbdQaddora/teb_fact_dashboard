import styled from "styled-components";

const Style = styled.table`
    width: 100%;
    border-collapse: collapse;

    .table_header{
        background-color: ${props => props.theme.colors.background.dark};
        th{ 
            padding: 10px 8px;
            text-align: start;
            line-height: 30px;
            text-transform: capitalize;
            font-weight: 500;
            color: ${props => props.theme.colors.neutral.n100};
            user-select: none;
            .order_icon{
                margin-inline-end: 5px;
            }
        }
    }

    .table_body_row{
        border-bottom: 1px solid ${props => props.theme.colors.neutral.n100};
        transition: 0.3s all ease-in-out;
        &:hover{
                background-color: ${props => props.theme.colors.neutral.n100};
        }
        
        td{
            padding: 0.5rem;
            color: ${props => props.theme.colors.text.primary};
            ${props => props.theme.typography.body2}
        }
    }

    .no_data{
        height: 100px;
        background-color: ${props => props.theme.colors.other.divider};
        text-align: center;
    }
`

export const TableContainer = styled.div`
    overflow-y: auto;
`

export default Style;