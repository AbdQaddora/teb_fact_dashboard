import styled from "styled-components";

const Style = styled.div`
    display: none;
    z-index: 999;
    position: relative;
    padding: 1rem;
    height: 70px;
    background-color: ${props => props.theme.colors.background.dark};
    .mobile_logo{
        max-height: 45px;
    }


    .open_menu_btn{
        font-size: 32px;
        background-color: transparent;
        outline: none;
        border: none;
        color: ${props => props.theme.colors.background.default};
        cursor: pointer;
    }

    @media (max-width:920px){
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`

export default Style;