import styled from "styled-components";

const Style = styled.div`
    display: flex;
    align-items: center;
    gap: 0.5rem;
    .avatar{
        width: 40px;
        height: 40px;
        border-radius: 50%;
    }

    p{
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
    }
`

export default Style;