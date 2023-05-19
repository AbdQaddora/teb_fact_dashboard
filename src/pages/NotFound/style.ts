import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.background.default};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100dvh;

    .not_found{
        margin: 2.5rem 0;
        width: 50%;
        max-width: 600px;
    }

`

export default Style;