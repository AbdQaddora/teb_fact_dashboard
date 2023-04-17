import React, { useId, useState, useEffect } from 'react'
import Style from './style'

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    value: string,
    placeholder?: string,
    error?: boolean,
    fullWidth?: boolean,
    margin?: string
}

const Input = ({ placeholder, error = false, value, fullWidth, margin, disabled, ...rest }: IProps) => {
    const id = useId();
    const [isEmpty, setIsEmpty] = useState(true);

    useEffect(() => {
        if (value && isEmpty) {
            setIsEmpty(false);
        } else if (!value && !isEmpty) {
            setIsEmpty(true);
        }
    }, [value])


    return (
        <Style disabled={disabled} className={!isEmpty ? "not_empty" : ""} fullWidth={fullWidth} margin={margin} error={error}>
            <input disabled={disabled} value={value} id={id} {...rest} />
            <label htmlFor={id}>{placeholder}</label>
        </Style>
    )
}

export default Input