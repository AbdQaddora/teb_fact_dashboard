import { colors } from "react-select/dist/declarations/src/theme";
import styled from "styled-components";

const Style = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
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

    .left{
        background: radial-gradient(50% 50% at 50% 50%, ${props => props.theme.colors.primary.main} 0%, ${props => props.theme.colors.primary.dark} 100%);
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
`

export default Style;