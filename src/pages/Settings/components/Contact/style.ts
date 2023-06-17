import styled from "styled-components";

const Style = styled.div`
    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 8px;

        @media screen and (max-width:920px) {
            grid-template-columns: 1fr;
        }
    }
`

export default Style;