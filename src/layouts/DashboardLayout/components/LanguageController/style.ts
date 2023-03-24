import styled from "styled-components";

const Style = styled.div`
    margin-top: 0.5rem;
    .lang_menu_head{
        padding: 0.6rem 0.3rem;
        display: flex;
        align-items: flex-start;
        gap: 10px;
        border-radius: 8px;
        ${props => props.theme.typography.Subtitle2}
        color: ${props => props.theme.colors.neutral.n300};
        transition: 0.3s all ease-in-out;
        cursor: pointer;
        user-select: none;
        .link_icon{
            font-size: 20px;
        }

        span{
            color: ${props => props.theme.colors.neutral.n300};
        }
        &.active{
            padding: 0.6rem 0.875rem;
            background: ${props => props.theme.colors.background.dark2};
            color: ${props => props.theme.colors.primary.light};
            span{
                color: ${props => props.theme.colors.primary.light};
            }
        }
    }

    .lang_menu_body{
        max-height: 0;
        overflow: hidden;
        transition: 0.3s all ease-in-out;
        margin-inline-start:1.5rem;
        margin-top: 0.5rem;
        border-radius: 8px;
        padding: 0.5rem 1rem 0;

        &.open{
            max-height: 100px;
            background: ${props => props.theme.colors.background.dark2};
        }

        .lang_menu_item{
            cursor: pointer;
            margin-bottom: 0.5rem;
            user-select: none;
            transition: 0.3s all ease-in-out;
            &.active{
                padding-inline-start: 0.5rem;
                color: ${props => props.theme.colors.primary.light};
            }
        }
    }


`

export default Style;