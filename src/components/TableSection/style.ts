import styled from "styled-components";

const Style = styled.div`
    background-color: ${props => props.theme.colors.background.paper};
    padding: 1rem 0;
    border-radius: 8px;
    border: 1px solid ${props => props.theme.colors.other.divider};

    .section_head{
        margin: 0 1rem 1rem;
        display: flex;
        align-items: center;
        justify-content: space-between;

        .add_btn{
            font-size: 40px;
            padding: 10px 15px 15px;
            display: flex;
            align-items: center;
            justify-content: center;
        }
    }


`

export default Style;
