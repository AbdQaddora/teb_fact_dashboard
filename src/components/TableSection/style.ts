import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.background.paper};
    padding: 1rem 0;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.other.divider};

    .section_head{
        margin: 0 1rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .add_btn{
            font-size: 40px;
            padding: 10px 15px 15px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }

    @keyframes loading {
            0%{
                background-color: ${props => props.theme.colors.primary.main};
            }

            50%{
                background-color: ${props => props.theme.colors.primary.states.p130};
            }

            100%{
                background-color: ${props => props.theme.colors.primary.main};
            }
    }

    .loading_table{
        border-collapse: collapse;
        width: 100% !important;
        
        .table_header{
            background-color: ${props => props.theme.colors.text.primary};
            th{ 
                flex-grow: 1;
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

        .loading_td{
            border-radius: 4px;
            height: 45px;
            opacity: 0.8;
            margin: 1px;
            animation-name: loading;
            animation-iteration-count: infinite;
            animation-duration: 2s;
            animation-timing-function:ease-in-out ;
        }
    }
`

export default Style;