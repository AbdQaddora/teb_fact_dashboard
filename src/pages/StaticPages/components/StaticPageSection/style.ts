import styled from "styled-components";

const Style = styled.div`
    margin: 1rem 0 ;
    .head{
        display: flex;
        align-items: center;
        justify-content: space-between;
        background-color: ${props => props.theme.colors.background.paper};
        padding: 1rem;
        cursor: pointer;
        border-radius: 4px;
        border: 1px solid #ccc;
        .small_screens{
            display: none;
        }

        @media (max-width:920px){
            .head_title_text{
                font-size: 1.25rem;
            }

            .large_screens{
                display: none;
            }

            .small_screens{
                display: unset;
            }
        }
    }

    .title{
        display: flex;
        align-items: center;
        gap: 8px;
        .toggle_menu{
            font-size: 32px;
        }
    }

    .buttons{
        display: flex;
        align-items: center;
        gap: 10px;

        .toggle_button{
            display: flex;
            gap: 8px;
            align-items: center;

            .lang_name{
                font-size: 18px;
                line-height: 24px;
            }
        }

        .activation_btn{
            display: flex;
            align-items: center;
            gap: 6px;
            span {
                padding-top: 1px;
            }

            .icon{
                font-size: 20px;
            }
        }
    }


    .body{
        max-height: 0;
        overflow: hidden;
        transition: 0.3s all ease-in-out;
        &.open{
            max-height: 100vh;
        }

        .page_icon{
            display: flex;
            align-items: center;
            gap: 15px;
            margin: 1rem 0;
        }
    }
`

export default Style;