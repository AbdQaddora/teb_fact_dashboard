import styled from "styled-components";
const SIDE_MENU_WIDTH = '250px';
interface IProps {
    isMobileMenuOpen: boolean,
    dir: "ltr" | "rtl"
}

const Style = styled.div<IProps>`
    --side-menu-width:${SIDE_MENU_WIDTH};
    padding-inline-start: var(--side-menu-width);
    .content{
            padding: 1rem;
            background-color: ${props => props.theme.colors.background.default};
    }
    
    @media (max-width:920px){
        padding-inline-start:0;
        .content{
            padding: 1rem;
            transition: 0.3s all ease-in-out;
            ${props => props.isMobileMenuOpen ?
        props.dir === 'rtl' ? `transform: translateX(-${SIDE_MENU_WIDTH});` : `transform: translateX(${SIDE_MENU_WIDTH});`
        : "transform: translateX(0);"}
        }
    }
`

export default Style;