import React, { useEffect, useState, useId } from 'react'
import { Style } from './style';

interface IProps {
    label?: string,
    value: boolean,
    onChange: () => void,
    name?: string,
    error?: boolean,
    className?: string
}
const CheckBox = ({ label = "", value, onChange, name = "", error = false, className = "" }: IProps) => {
    const id = useId();

    return (
        <Style error={error} className={className}>
            <input
                className="custom-checkbox"
                type="checkbox"
                id={id}
                name={name}
                onChange={() => { }}
                checked={value}
            />
            <label onClick={onChange} htmlFor={id}>{label ? label : ""}</label>
        </Style>
    )
}

export default CheckBox