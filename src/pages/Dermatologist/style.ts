import styled from "styled-components";

const Style = styled.div`
    padding-top: 1rem;
    .dermatologist_info_section{
        display: grid;
        grid-template-columns: 1fr 2fr;
        gap: 1rem;

        @media (max-width:920px){
            grid-template-columns: 1fr;
        }
    }
    

    .no_certificate , .certificate{
        margin-top: 2rem;
        width: 100%;
        border-radius: 8px;
        min-height: 80dvh;
        aspect-ratio: 16/9;
    }

    .certificate{
        object-fit: cover;
    }

    .no_certificate{
        background-color: #CCC;
        display: flex;
        align-items: center;
        justify-content: center;
    }
`

export default Style;