import styled from "styled-components";

const Style = styled.div`
    padding: 24px;
    background-color: ${props => props.theme.colors.background.paper};
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0px 1px 1px rgba(100, 116, 139, 0.06), 0px 1px 2px rgba(100, 116, 139, 0.1);
    border-radius: 8px;
    height: fit-content;
    .avatar{
        --avatar-size:100px;
        width: var(--avatar-size);
        height: var(--avatar-size);
        border-radius: 50%;
        margin-bottom: 0.8rem;
    }

    .dermatologist_secondary_info{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-bottom: 1rem;
    }
`

export default Style;