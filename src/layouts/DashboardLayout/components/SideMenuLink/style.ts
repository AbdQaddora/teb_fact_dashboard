import styled from "styled-components";

const Style = styled.div`
    padding: 0.6rem 0.3rem;
    display: flex;
    align-items: flex-start;
    gap: 10px;
    border-radius: 8px;
    ${props => props.theme.typography.Subtitle2}
    color: ${props => props.theme.colors.neutral.n300};
    transition: 0.3s all ease-in-out;
    cursor: pointer;

    .link_icon{
        font-size: 20px;
    }

    &.active{
        padding: 0.6rem 0.875rem;
        background: ${props => props.theme.colors.background.dark2};
        color: ${props => props.theme.colors.primary.light};
    }
`

export default Style;