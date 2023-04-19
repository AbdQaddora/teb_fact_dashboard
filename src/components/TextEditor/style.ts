import styled from "styled-components";
interface IProps {
    lang: "en" | "ar",
    disabled?: boolean,
    text: {
        small: string,
        normal: string,
        large: string,
        huge: string
    }
}

const Style = styled.div<IProps>`
    .quill{
        border-radius: 8px;
        cursor:${props => props.disabled ? "not-allowed" : "text"};
        opacity:${props => props.disabled ? 0.7 : 1};
        .ql-container.ql-snow{
            background-color: #F9FAFC;
            padding-bottom: 0.5rem;
            border-bottom-left-radius:8px;
            border-bottom-right-radius:8px;
            cursor:${props => props.disabled ? "not-allowed" : "text"};

            .ql-editor {
                cursor:${props => props.disabled ? "not-allowed" : "text"};

                min-height: 250px;
                max-height: 480px;
                background-color: ${props => props.theme.colors.background.paper};
                >*{
                    cursor:${props => props.disabled ? "not-allowed" : "text"};
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

        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="0.75rem"]::before {
            content: ${props => `"${props.text.small}"`} !important;
        }

        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="1rem"]::before {
            content:  ${props => `"${props.text.normal}"`};
        }

        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="1.5rem"]::before {
            content:  ${props => `"${props.text.large}"`};
        }

        .ql-snow .ql-picker.ql-size .ql-picker-label[data-value="2.5rem"]::before {
            content:  ${props => `"${props.text.huge}"`};
        }

        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="0.75rem"]::before {
            content: ${props => `"${props.text.small}"`};
            font-size: 0.75rem !important;
        }

        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="1rem"]::before {
            content:  ${props => `"${props.text.normal}"`};
            font-size: 1rem !important;
        }

        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="1.5rem"]::before {
            content:  ${props => `"${props.text.large}"`};
            font-size: 1.5rem !important;
        }

        .ql-snow .ql-picker.ql-size .ql-picker-item[data-value="2.5rem"]::before {
            content:  ${props => `"${props.text.huge}"`};
            font-size: 2.5rem !important;
        }
    }
`

export default Style;