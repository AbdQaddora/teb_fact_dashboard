import { useCallback } from 'react'
import Style from './style'
import { useDropzone } from 'react-dropzone';
import { MdModeEdit } from 'react-icons/md';

interface IProps {
    onChange: (image: string) => void,
    value: string
    className?: string,
    margin?: string,
    height?: string,
    width?: string,
    text?: string
}
const ImageInput = ({ onChange, className = "", margin, height, width, text, value }: IProps) => {
    const onDrop = useCallback((acceptedFiles: File[]) => {
        const reader = new FileReader();

        reader.onload = () => {
            const base64 = reader.result;
            onChange(base64 as string);
        };

        reader.readAsDataURL(acceptedFiles[0]);
    }, [onChange]);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept: {
            'image/jpeg': [],
            'image/png': []
        }
    })

    return (
        <Style {...{ margin, height, width, className }}>
            {!value && <div className='upload_input' {...getRootProps()}>
                <input {...getInputProps()} />
                {text ? <p>{text}</p> :
                    isDragActive ?
                        <p>Drop the files here ...</p> :
                        <p>Drag and drop uploaded image, or click to select files</p>
                }
            </div>}
            {value && <div className='input_with_image' {...getRootProps()}>
                <input {...getInputProps()} />
                <div className="edit_icon_container">
                    <MdModeEdit className='edit_icon' />
                </div>
                <img
                    className='upload_image'
                    src={value}
                    alt="uploaded file" />
            </div>
            }
        </Style>
    )
}

export default ImageInput