import styled from "styled-components";

const Style = styled.div`
    .themes_buttons{
        display: flex;
        align-items: center;
        justify-content: flex-start;
        gap: 0.8rem;

        .theme_btn{
            --theme-btn-size:25px;
            cursor: pointer;
            height: var(--theme-btn-size);
            width: var(--theme-btn-size);
            background-color: red;
            border-radius: 50%;
            outline-offset: 2px;

            &.default{
                background-color: #646C85;
            }

            &.default.active{
                outline: 3px solid #646C85;
            }

            &.green{
                background-color: #155426;
            }

            &.green.active{
                outline: 3px solid #155426;
            }

            &.tebFact{
                background-color: #3832A0;
            }

            &.tebFact.active{
                outline: 3px solid #3832A0;
            }
        }
    }
`

export default Style;