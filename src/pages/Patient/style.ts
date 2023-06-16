import styled from "styled-components";

const Style = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 1rem;
    height: 100dvh;
    
    @media (max-width:920px){
        grid-template-columns: 1fr;
    }
`

export default Style;