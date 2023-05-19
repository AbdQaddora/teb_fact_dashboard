import styled from "styled-components";

const Style = styled.div`
    padding: 32px 24px;
    background-color: ${props => props.theme.colors.background.paper};
    border-radius: 8px;
    box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1);
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
`

export default Style;