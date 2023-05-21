import React, { useId, useState, useEffect } from 'react'
import Style from './style'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string
    placeholder?: string
    error?: boolean
    fullWidth?: boolean
    margin?: string
    height?: "small" | "large",
    className?: string
}

const Input = ({ placeholder, error = false, className = "", height, value, fullWidth, margin, disabled, ...rest }: IProps) => {
    const id = useId();
    const [isEmpty, setIsEmpty] = useState(true);
    console.log({ value })
    useEffect(() => {
        if (value && isEmpty) {
            setIsEmpty(false);
        } else if (!value && !isEmpty) {
            setIsEmpty(true);
        }
    }, [value])


    return (
        <Style {...{ height, disabled, fullWidth, margin, error }} className={!isEmpty ? `not_empty ${className}` : className}>
            <input disabled={disabled} value={value} id={id} {...rest} />
            <label htmlFor={id}>{placeholder}</label>
        </Style>
    )
}

export default Input