import styled from "styled-components";

const Style = styled.div`
    .avatar_container{
        display: flex;
        align-items: center;
        justify-content: center;
        .avatar{
            width: 120px;
            height: 120px;
            border-radius: 50%;
        }
    }

    .danger{
        background-color: #DC3545;

        &:hover{
            background-color: #AB2835;
        }
    }
    
`

export default Style;