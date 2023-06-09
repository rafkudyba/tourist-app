import {FC, useEffect, useState} from 'react';

import styles from './ViewEditProduct.module.scss';

import dynamic from 'next/dynamic';
import FieldInputText from '@/components/design-system/fields/field-inputs/field-input-text/FieldInputText.component';
import {data, errorMessages, isValid, regexes, showErrors} from './ViewEditProduct.data';
import {useFormHook} from '@/components/form/form.hook';
import ButtonSubmit from '@/components/design-system/button/button-submit/ButtonSubmit.component';
import axios from 'axios';

const QuillNoSSRWrapper = dynamic(import('react-quill'), {
    ssr: false,
    loading: () => <p>Loading ...</p>,
});

const modules = {
    toolbar: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [
            { list: 'ordered' },
            { list: 'bullet' },
            { indent: '-1' },
            { indent: '+1' },
        ],
        ['link', 'image', 'video'],
        ['clean'],
    ],
    clipboard: {
        // toggle to add extra line breaks when pasting HTML:
        matchVisual: false,
    },
};
/*
 * Quill editor formats
 * See https://quilljs.com/docs/formats/
 */
const formats = [
    'header',
    'font',
    'size',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
    'video',
];

const ViewEditProductComponent: FC = ({children}) => {
    const {onChange, formErrors, showError, isFormValid} = useFormHook(data, isValid, showErrors, regexes);

    const [quillContent, setQuillContent] = useState('')
    const [selectedImages, setSelectedImages] = useState<FileList | undefined | null>(undefined);
    const [selectedImagesArray, setSelectedImagesArray] = useState<File[]>([]);

    const onFormSubmit = async (e: Event) => {
        console.log(isFormValid)
        e.preventDefault()
        showError()
        if (isFormValid) {
            let imagesToUpload: {data: string, name: string, format: string}[] = []
            await Promise.all(selectedImagesArray.map(async (image) => {
                const imageStr = await toBase64(image);
                if (!imageStr) return;
                const splittedStr = String(imageStr).split('base64,')
                const imageToUpload = {
                    data: splittedStr[1],
                    name: image.name.split('.')[0].replace(/\s/g, ''),
                    format: image.type.split('/')[1]
                }
                imagesToUpload.push(imageToUpload)
            }))

            const requestBody = {
                // postId: Number(data.id),
                name: data.name,
                content: data.content,
                imagesToUpload: imagesToUpload
            }
            
            axios.patch(`http://localhost:8081/post/${data.id}/update`,{
                name: 'posctowy',
                content: '123',
                postId: '77'
            }, {
                headers: {
                    'Accept': '*/*',
                    'Authorization': `${localStorage.getItem('token')}`
                }
            }).then((res) => {
                console.log(res);
                data.name ="";
                data.content = "";
                data.id = "";
            })
            // await mutateFunction({variables: {payload: requestBody, id: data.id}})
        }
    }

    const toBase64 = (file: File) => new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = error => reject(error);
    });

    useEffect(() => {
        if (selectedImages) {
            for (let i = 0; i < selectedImages.length; i++) {
                setSelectedImagesArray(Array.from(selectedImages))
            }
        }
    }, [selectedImages])

    return (
        <div className={styles.mainWr}>
            <h1 className={styles.formHeader}>Edytuj post</h1>
            <form className={styles.contentWrapper}>
                <FieldInputText
                    label="Id"
                    id="1"
                    name="id"
                    value={data.id}
                    onChange={onChange}
                    placeholder="ID"
                    error={formErrors.id}
                    errorMessage={errorMessages.id}
                />
                <FieldInputText
                    label="Nazwa"
                    id="1"
                    name="name"
                    value={data.name}
                    onChange={onChange}
                    placeholder="Nazwa"
                    error={formErrors.name}
                    errorMessage={errorMessages.name}
                />
                <div className={styles.quillWr}>
                    <FieldInputText
                        label="Treść"
                        id="2"
                        name="content"
                        value={data.content}
                        onChange={onChange}
                        placeholder="Treść"
                        error={formErrors.content}
                        errorMessage={errorMessages.content}
                    />
                    {/*<p className="ql-editor" dangerouslySetInnerHTML={{__html: quillContent}}/>*/}
                </div>
                <div className={styles.imgWr}>
                    <p>Dodaj zdjęcia</p>
                    <input
                        type="file"
                        name="myImage"
                        onChange={(event) => {
                            console.log(event.target.files);
                            setSelectedImages(event.target.files);
                        }}
                        accept="image/jpeg, image/png, image/jpg"
                        multiple
                    />

                </div>
                {
                    selectedImagesArray.map((imageFile,index) => (
                        <div key={index} className={styles.imgBlock}>
                            <img alt="not fount" width={"250px"} src={URL.createObjectURL(imageFile)} />
                        </div>))
                }
            </form>

            <div className={styles.buttonWr}>
                <ButtonSubmit
                    name={"Edytuj produkt"}
                    onClick={onFormSubmit}
                />
            </div>
        </div>
    );
}

export default ViewEditProductComponent;

