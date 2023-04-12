import styled from "styled-components";
interface IProps {
    lang: "en" | "ar"
}

const Style = styled.div<IProps>`
    .quill{
        border-radius: 8px;
        .ql-container.ql-snow{
            background-color: #F9FAFC;
            padding-bottom: 0.5rem;
            border-bottom-left-radius:8px;
            border-bottom-right-radius:8px;
            cursor: text;

            .ql-editor {
                min-height: 250px;
                max-height: 480px;
                >*{
                    ${props => props.lang === 'en' ? `
                    font-family: 'Inter', sans-serif !important;
                    direction: ltr !important;
                    ` : `
                        font-family: 'Almarai', sans-serif !important;
                        direction: rtl !important;
                    `}
                }

            }
        }

        .ql-toolbar.ql-snow{
            border-top-left-radius:8px;
            border-top-right-radius:8px;
        }

        .ql-snow.ql-toolbar button:hover,
        .ql-snow .ql-toolbar button:hover,
        .ql-snow.ql-toolbar button:focus, 
        .ql-snow .ql-toolbar button:focus, 
        .ql-snow.ql-toolbar button.ql-active,
        .ql-snow .ql-toolbar button.ql-active, 
        .ql-snow.ql-toolbar .ql-picker-label:hover, 
        .ql-snow .ql-toolbar .ql-picker-label:hover, 
        .ql-snow.ql-toolbar .ql-picker-label.ql-active, 
        .ql-snow .ql-toolbar .ql-picker-label.ql-active, 
        .ql-snow.ql-toolbar .ql-picker-item:hover, 
        .ql-snow .ql-toolbar .ql-picker-item:hover, 
        .ql-snow.ql-toolbar .ql-picker-item.ql-selected, 
        .ql-snow .ql-toolbar .ql-picker-item.ql-selected {
            color: ${props => props.theme.colors.primary.dark};
        }
        
        .ql-snow .ql-picker:not(.ql-color-picker):not(.ql-icon-picker) svg{
                    right: unset;
                    inset-inline-end: 4px;
        }
    }
`

export default Style;