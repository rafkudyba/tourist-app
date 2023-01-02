import {FC, useEffect, useState} from 'react';

import styles from './ViewCreateProduct.module.scss';

import dynamic from 'next/dynamic';
import FieldInputText from '@/components/design-system/fields/field-inputs/field-input-text/FieldInputText.component';
import {data, errorMessages, isValid, regexes, showErrors} from './ViewCreateProduct.data';
import {useFormHook} from '@/components/form/form.hook';
import ButtonSubmit from '@/components/design-system/button/button-submit/ButtonSubmit.component';
import {MUTATION_CREATE_PRODUCT} from '@/api/mutation/MutationCreateProduct';
import {useMutation} from '@apollo/client';

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

const ViewCreateProductComponent: FC = ({children}) => {

    const [mutateFunction, response] = useMutation(MUTATION_CREATE_PRODUCT);
    const {onChange, formErrors, showError, isFormValid} = useFormHook(data, isValid, showErrors, regexes);

    const [quillContent, setQuillContent] = useState('')
    const [selectedImages, setSelectedImages] = useState<FileList | undefined | null>(undefined);
    const [selectedImagesArray, setSelectedImagesArray] = useState<File[]>([]);
    const onFormSubmit = async (e: Event) => {
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
                name: data.name,
                olxLink: data.olxLink,
                description: quillContent,
                imagesToUpload: imagesToUpload
            }
            await mutateFunction({variables: {payload: requestBody}})
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
            <h1 className={styles.formHeader}>Dodaj produkt</h1>
            <form className={styles.contentWrapper}>
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
                <FieldInputText
                    label="Link do portalu olx.pl"
                    id="2"
                    name="olxLink"
                    value={data.olxLink}
                    onChange={onChange}
                    placeholder="Link do portalu olx.pl"
                    error={formErrors.olxLink}
                    errorMessage={errorMessages.olxLink}
                />
                <div className={styles.quillWr}>
                    <p>Opis produktu</p>
                    <QuillNoSSRWrapper
                        modules={modules}
                        formats={formats}
                        placeholder={"Opis produktu"}
                        theme="snow"
                        onChange={(content) => {
                            setQuillContent(content)
                        }}
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
                    name={"Dodaj produkt"}
                    onClick={onFormSubmit}
                />
            </div>
        </div>
    );
}

export default ViewCreateProductComponent;

