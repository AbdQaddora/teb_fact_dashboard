import React, { useId, useState, useEffect } from 'react'
import Style from './style'
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { dateToString, stringToDate } from '../../../util';

interface IProps extends React.InputHTMLAttributes<HTMLInputElement> {
    placeholder?: string
    onDateChange?: (val: any) => void
    error?: boolean
    fullWidth?: boolean
    margin?: string
    height?: "small" | "large",
    className?: string
}

const Input = ({ placeholder, error = false, className = "", height, value, fullWidth, margin, disabled, onDateChange, ...rest }: IProps) => {
    const id = useId();
    const [isEmpty, setIsEmpty] = useState(true);
    useEffect(() => {
        if (value && isEmpty) {
            setIsEmpty(false);
        } else if (!value && !isEmpty) {
            setIsEmpty(true);
        }
    }, [value])

    if (rest.type === "date" && onDateChange && value) {
        return <Style {...{ height, disabled, fullWidth, margin, error }} className={!isEmpty ? `not_empty ${className}` : className}>
            <DatePicker
                selected={stringToDate(value as string)}
                className="date"
                value={value as string}
                id={id}
                onChange={(value) => onDateChange(dateToString(value as Date))} />
            <label htmlFor={id}>{placeholder}</label>
        </Style>
    }

    return (
        <Style {...{ height, disabled, fullWidth, margin, error }} className={!isEmpty ? `not_empty ${className}` : className}>
            <input disabled={disabled} value={value} id={id} {...rest} onChange={rest.onChange} />
            <label htmlFor={id}>{placeholder}</label>
        </Style>
    )
}

export default Input