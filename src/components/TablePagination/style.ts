import styled from "styled-components";

const Style = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-end;
    gap: 2rem;
    margin-top: 1rem;
    flex-wrap: wrap;
    margin-inline-end: 1rem;
    @media (max-width:920px){
        align-content:center;
        justify-content: center;
    }
    
    .rows_pre_page{
        display: flex;
        align-items: center;
        gap: 10px;
        .page_size_select{
            width: 100px !important;
        }
    }
    
    .buttons{
        display: flex;
        align-content: center;
        gap: 10px;
        .count_text{
            user-select: none;
        }

        .table_pagination_btn{
            outline: none;
            border: none;
            background-color: transparent;
            display: flex;
            align-items: center;
            cursor: pointer;
            .icon{
                font-size:  18px;
                color: ${props => props.theme.colors.text.primary};
            }
        }
    }

`

export default Style;