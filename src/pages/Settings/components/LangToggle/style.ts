import styled from "styled-components";

const Style = styled.div`
    position: relative;
    border-radius: 20px;
    padding: 2px;
    width: 80px;
    height: 35px;
    background-color:${props => props.theme.colors.primary.main};
    -webkit-border-radius: 8px;
    -moz-border-radius: 8px;
    -ms-border-radius: 8px;
    -o-border-radius: 8px;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;

    transition: 0.3s all ease-in-out;
    &:hover{
        background-color:${props => props.theme.colors.primary.states.p130};
    }
    &::before{
        content: "";
        position: absolute;
        inset-inline-start:3px;
        z-index: 2;
        height: calc(100% - 8px);
        width: calc(50% - 5px);
        background-color: #fff;
        border-radius: 8px;
        transition: 0.3s all ease-in-out;
    }

    &:has(.off.active)::before{
        inset-inline-start:unset;
        inset-inline-end:3px;
    }

    .lang_toggle_item{
        position: relative;
        z-index: 999;
        width: 50%;
        text-align: center;
        color: #fff;
        user-select: none;
        &.active{
            color:${props => props.theme.colors.primary.main};
        }
    }
`

export default Style;