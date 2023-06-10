import styled from "styled-components";

const Style = styled.div`
    padding: 32px 24px;
    background-color: ${props => props.theme.colors.background.paper};
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.other.divider};
    display: flex;
    align-items: center;
    justify-content: space-between;
    min-width: 300px;
    .icon{
        background-color: ${props => props.theme.colors.primary.dark};
        height: 45px;
        width: 45px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
    }

    .loading{
        animation-name: loading;
        animation-iteration-count: infinite;
        animation-duration: 1s;
        animation-timing-function: ease-in-out;
    }

    @keyframes loading {
        0%{
            opacity: 0.5;
            transform: scale(1);
        }

        50%{
            opacity: 1;
            transform: scale(1.05);
        }

        100%{
            opacity: 0.5;
            transform: scale(1);
        }
    }
`

export default Style;