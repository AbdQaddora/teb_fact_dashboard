import styled from "styled-components";

const Style = styled.span`
    padding: 4px 8px;
    font-size: 14px;
    border-radius: 14px;
    color: #fff;
    
    &.new{
        background-color: #D14343;
    }
    &.open{
        background-color: #14B8A6;
    }
    &.closed{
        background-color: #111827;
    }
    &.cancelled{
        background-color: #999;
    }
`

export default Style;