import React from 'react'
import Style from './style'

interface IProps {
    value: "en" | "ar",
    onToggle: () => void
}

const LangToggle = ({ value, onToggle }: IProps) => {
    return (
        <Style onClick={onToggle}>
            <div className={`lang_toggle_item on${value === "en" ? " active" : ""}`}>en</div>
            <div className={`lang_toggle_item off${value === "ar" ? " active" : ""}`}>ar</div>
        </Style>
    )
}

export default LangToggle