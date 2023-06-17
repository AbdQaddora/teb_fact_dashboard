import styled from "styled-components";

const Style = styled.div`
    .grid{
        display: grid;
        grid-template-columns: 1fr 1fr;
        row-gap: 12px;
        column-gap: 8px;

        @media screen and (max-width:920px) {
            grid-template-columns: 1fr;
        }
    }
`

export default Style;