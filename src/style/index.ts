import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    &.ltr{
        direction: ltr;
        font-family: 'Inter', sans-serif;

        *{
            font-family: 'Inter', sans-serif;
        }
    }

    &.rtl{
        direction: rtl;
        font-family: 'Almarai', sans-serif;
        *{
            font-family: 'Almarai', sans-serif;
        }
    }
`
export default GlobalStyle;