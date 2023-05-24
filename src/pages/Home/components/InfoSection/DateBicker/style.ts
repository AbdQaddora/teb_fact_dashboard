import styled from "styled-components";

const Style = styled.div`
    .range_large{
        display:block;
    }

    .range_small{
        display:none;
    }
    
    @media screen and (max-width:1000px){
        .range_large{
            display: none;
        }

        .range_small{
            display:block;
        }
    }
`

export default Style;