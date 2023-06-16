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
        if ((value || value === 0) && isEmpty) {
            setIsEmpty(false);
        } else if (!value && !isEmpty) {
            console.log(value)
            setIsEmpty(true);
        }
    }, [value])

    if (rest.type === "date" && onDateChange) {
        return <Style {...{ height, disabled, fullWidth, margin, error }} className={!isEmpty ? `not_empty ${className}` : className}>
            <DatePicker
                showMonthDropdown
                showYearDropdown
                selected={stringToDate(value as string)}
                className="date"
                value={value ? value as string : new Date().toLocaleDateString()}
                id={id}
                onChange={(value) => onDateChange(dateToString(value as Date))} />
            <label className='date_label' htmlFor={id}>{placeholder}</label>
        </Style>
    }

    return (
        <Style {...{ height, disabled, fullWidth, margin, error }} className={!isEmpty ? `not_empty ${className}` : className}>
            <input dir="auto" disabled={disabled} value={value} id={id} {...rest} onChange={rest.onChange} />
            <label htmlFor={id}>{placeholder}</label>
        </Style>
    )
}

export default Input