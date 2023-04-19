import React from 'react'
import ReactQuill, { Quill } from 'react-quill';
import Style from './style';
import './quill.snow.css';

//Text direction
Quill.register(Quill.import("attributors/style/direction"), true);
//Alignment
Quill.register(Quill.import("attributors/style/align"), true);
// Size
const Size = Quill.import("attributors/style/size");
Size.whitelist = ["0.75em", "1em", "1.5em", "2.5em"];
Quill.register(Size, true);

// Indent
const Parchment = Quill.import("parchment");

// @ts-ignore
class IndentAttributor extends Parchment.Attributor.Style {
    // @ts-ignore
    add(node, value) {
        if (value === 0) {
            this.remove(node);
            return true;
        } else {
            return super.add(node, `${value}em`);
        }
    }
}
// @ts-ignore
let IndentStyle = new IndentAttributor("indent", "text-indent", {
    scope: Parchment.Scope.BLOCK,
    whitelist: ["1em", "2em", "3em", "4em", "5em", "6em", "7em", "8em", "9em"]
});

Quill.register(IndentStyle, true);
interface IProps {
    value: string,
    onChange: (str: string) => void,
    lang?: "en" | "ar",
    disabled?: boolean
}

const TextEditor = ({ value, lang, disabled, onChange }: IProps) => {
    console.log({ value });
    return (
        <Style disabled={disabled} lang={lang || "en"}>
            <ReactQuill
                value={value}
                onChange={disabled ? () => { } : onChange}
                readOnly={disabled}
                modules={{
                    toolbar: [
                        [{ 'header': '1' },
                        { 'header': '2' }],
                        [{ 'align': [] }],
                        [{ size: ["0.75em", "1em", "1.5em", "2.5em"] }],
                        ['bold', 'italic', 'underline'],
                        [{ 'list': 'ordered' }, { 'list': 'bullet' },
                        { 'indent': '-1' }, { 'indent': '+1' }],
                        ['link', 'image'],
                    ],
                    clipboard: {
                        matchVisual: false,
                    }
                }} />
        </Style>
    )
}

export default TextEditor;