import styled from "styled-components";

const Style = styled.tbody`
    border-collapse: collapse;
    width: 100% !important;

    @keyframes loading {
        0% { background-position: -250px 0; }
        100% { background-position: 250px 0; }
    }   

    .loading_td{
        background: linear-gradient(to right, #eee 20%, #ddd 50%, #eee 80%);
        border-radius: 4px;
        height: 50px;
        opacity: 0.8;
        margin: 1px;
        animation-name: loading;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
        animation-fill-mode: forwards;
    }
`

export default Style;