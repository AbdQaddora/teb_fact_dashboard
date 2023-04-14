import React from 'react'
import ReactQuill from 'react-quill';
import Style from './style';
import './quill.snow.css';

interface IProps {
    value: string,
    onChange: (str: string) => void,
    lang?: "en" | "ar"
}

const TextEditor = ({ value, lang, onChange }: IProps) => {
    return (
        <Style lang={lang || "en"}>
            <ReactQuill
                value={value}
                onChange={onChange}
                modules={{
                    toolbar: [
                        [{ 'header': '1' },
                        { 'header': '2' }],
                        [{ 'align': [] }],
                        [{ size: [] }],
                        ['bold', 'italic', 'underline'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' },
                        { 'indent': '-1' }, { 'indent': '+1' }],
                        ['link', 'image'],
                    ],
                    clipboard: {
                        // toggle to add extra line breaks when pasting HTML:
                        matchVisual: false,
                    }
                }} />
        </Style>
    )
}

export default TextEditor;