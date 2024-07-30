import { colors } from "react-select/dist/declarations/src/theme";
import styled from "styled-components";

const Style = styled.div`
    display: grid;
    grid-template-columns: 45% 55%;
    min-height: 100dvh;
    .form_container{
        width: 70%;
        margin: 0 auto;
        display: flex;
        align-items: center;
        height: 100%;
        form{
            width: 100%;
        }
    }

    .left_image{
        width: 100%;
        height: 100%;
        object-fit: cover;
        opacity: 0;
        animation: fade-in 0.5s linear forwards;
    }

    .left{
        position: relative;
    }

    .left::after{
        content: "";
        width: 100%;
        height: 100%;
        background-color: rgba(100,100,100,0.3);
        position: absolute;
        top: 0;
        left: 0;
    }

    .remember_me{
        margin-bottom: 1rem;
    }

    @media (max-width:920px) {
        grid-template-columns: 1fr;
        .form_container{
            width: 90%;
        }
        .left{
            display: none;
        }
        
    }

    @keyframes fade-in {
    0% {
        opacity: 0;
    }

    100% {
        opacity: 1;
    }
}
`

export default Style;