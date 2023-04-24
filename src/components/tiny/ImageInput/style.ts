import styled from "styled-components";
interface IProps {
    margin?: string,
    height?: string,
    width?: string
}

const Style = styled.div<IProps>`
    ${props => props.width ? `width: ${props.width};` : "width: 100%;"}
    ${props => props.height ? `height: ${props.height};` : "height: 300px;"}
    ${props => props.margin ? `margin: ${props.margin};` : ""}
    cursor: pointer;
    .upload_input, .input_with_image ,.upload_image {
        width: 100%;
        height: 100%;
        overflow:hidden;
        border-radius:3px;
    }

    .upload_input{
        background-color: ${props => props.theme.colors.background.paper};
        border-radius: 4px;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 2rem;
        text-align: center;
        border: 2px dashed #ccc;
    }
    
    .upload_image{
        object-fit: cover;
        object-position: center center;
    }

    .input_with_image{
        position:relative;
        .edit_icon_container{
            opacity:1;
            position:absolute;
            top:50%;
            left:50%;
            transform:translateX(-50%) translateY(-50%);
            height:40px;
            width:40px;
            background-color:#fff;
            border-radius:50%;
            display:flex;
            align-items:center;
            justify-content:center;
            border:1px dashed #ccc;
            box-shadow:0 0 100vw 100vw rgba(0, 0 , 0, 0.3);
            .edit_icon{
                font-size:24px;
            }
        }
    }
`

export default Style;