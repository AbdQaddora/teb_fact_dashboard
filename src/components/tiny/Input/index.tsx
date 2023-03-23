import React, { useId, useState, useEffect } from 'react'
import Style from './style'

interface IProps extends React.HTMLAttributes<HTMLInputElement> {
    value: string,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    placeholder?: string,
    error?: boolean,
    fullWidth?: boolean,
    margin?: string
}

const Input = ({ placeholder, error = false, value, onChange, fullWidth, margin, ...rest }: IProps) => {
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
        <Style className={!isEmpty ? "not_empty" : ""} fullWidth={fullWidth} margin={margin} error={error}>
            <input value={value} id={id} {...rest} onChange={onChange} />
            <label htmlFor={id}>{placeholder}</label>
        </Style>
    )
}

export default Input