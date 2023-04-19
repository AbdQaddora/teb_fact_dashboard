import React from 'react'
import ReactQuill, { Quill } from 'react-quill';
// style
import './quill.snow.css';
import Style from './style';
import { useTranslation } from 'react-i18next';

//Text direction
Quill.register(Quill.import("attributors/style/direction"), true);
//Alignment
Quill.register(Quill.import("attributors/style/align"), true);
// Size
const Size = Quill.import("attributors/style/size");
Size.whitelist = ["0.75rem", "1rem", "1.5rem", "2.5rem"];
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
    whitelist: ["1rem", "2rem", "3rem", "4rem", "5rem", "6rem", "7rem", "8rem", "9rem"]
});

Quill.register(IndentStyle, true);
interface IProps {
    value: string,
    onChange: (str: string) => void,
    lang?: "en" | "ar",
    disabled?: boolean
}

const TextEditor = ({ value, lang, disabled, onChange }: IProps) => {
    const { t } = useTranslation("", { keyPrefix: "components.textEditor" })
    return (
        <Style
            disabled={disabled}
            text={{
                small: t("small"),
                normal: t("normal"),
                large: t("large"),
                huge: t("huge")
            }}
            lang={lang || "en"}>
            <ReactQuill
                value={value}
                onChange={onChange}
                readOnly={disabled}
                modules={{
                    toolbar: [
                        [{ 'header': '1' },
                        { 'header': '2' }],
                        [{ 'align': [] }],
                        [{ size: ["0.75rem", "1rem", "1.5rem", "2.5rem"] }],
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