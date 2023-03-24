import styled from "styled-components";

const Style = styled.div`
    position: fixed;
    inset-inline-start: 0;
    top: 0;
    height: 100dvh;
    width: var(--side-menu-width);
    padding: 1rem;
    background-color: ${props => props.theme.colors.background.dark};

`

export default Style;