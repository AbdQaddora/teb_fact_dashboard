import styled from "styled-components";
interface IProps {
    isMobileMenuOpen: boolean,
    dir: "ltr" | "rtl"
}

const Style = styled.div<IProps>`
    position: fixed;
    inset-inline-start: 0;
    top: 0;
    height: 100dvh;
    width: var(--side-menu-width);
    padding: 1rem;
    background-color: ${props => props.theme.colors.background.dark};

    @media (max-width:920px){
        z-index: 998;
        transition: 0.3s all ease-in-out;
        padding-top: 70px;
        ${props => props.dir === 'rtl' ?
        props.isMobileMenuOpen ? "transform: translateX(0%);" : "transform: translateX(100%);" :
        props.isMobileMenuOpen ? "transform: translateX(0%);" : "transform: translateX(-100%);"}
        
        .large_screen_logo{
            display: none;
        }
    }
`

export default Style;