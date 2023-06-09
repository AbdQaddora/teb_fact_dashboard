import React, { useState, useEffect } from 'react'
import Style from './style'
import { H5 } from '../../../../components/tiny/Typography/style'
import Input from '../../../../components/tiny/Input'
import Button from '../../../../components/tiny/Button'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { selectDermatologists, updateDermatologist } from '../../../../redux/slices/dermatologistsSlice'
import Select from 'react-select'
import dermatologistSchema from '../../../../validation/dermatologist'
import { toast } from 'react-toastify'
import { IDermatologist } from '../../../../types/Dermatologist'

const DermatologistForm = () => {
    const { t } = useTranslation("", { keyPrefix: "dermatologist" });

    const dispatch = useAppDispatch();
    const { dermatologist } = useAppSelector(selectDermatologists);

    const [localDermatologistData, setLocalDermatologistDate] = useState<IDermatologist>(dermatologist);

    const onGenderChange = (gender: "male" | "female") => {
        setLocalDermatologistDate(prev => ({ ...prev, gender: gender }))
    }

    const onTextInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalDermatologistDate(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // to update the local values when global values changes
    useEffect(() => {
        setLocalDermatologistDate(dermatologist)
    }, [dermatologist])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(localDermatologistData)
        dermatologistSchema
            .validate(localDermatologistData)
            .then(() => {
                dispatch(updateDermatologist(localDermatologistData))
            }).catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <Style>
            <div className="head">
                <H5>{t("dermatologist")} / {dermatologist.full_name}</H5>
            </div>
            <form className="form" onSubmit={onSubmit}>
                <div className="grid">
                    <Input
                        onChange={onTextInputsChange}
                        name="full_name"
                        value={localDermatologistData.full_name}
                        placeholder={t("name") || ""}
                        fullWidth
                    />

                    <Input
                        onChange={onTextInputsChange}
                        name="email"
                        value={localDermatologistData.email}
                        placeholder={t("email") || ""}
                        type='email'
                        fullWidth
                    />

                    <Select
                        onChange={(val) => onGenderChange(val?.value as "male" | "female")}
                        className='gender'
                        value={{
                            value: localDermatologistData.gender,
                            label: localDermatologistData.gender
                        }}
                        options={[{
                            value: "male",
                            label: "male"
                        }, {
                            value: "female",
                            label: "female"
                        }]}

                        theme={(theme) => ({
                            ...theme,
                            borderRadius: 4,
                            colors: {
                                ...theme.colors,
                                primary: '#3832A0',
                            },
                        })}
                    />

                    <Input
                        onChange={onTextInputsChange}
                        name="mobile_number"
                        value={localDermatologistData.mobile_number}
                        placeholder={t("phone") || ""}
                        type='phone'
                        fullWidth
                    />

                    <Input
                        onDateChange={(value) => {
                            console.log({ date: value })
                            setLocalDermatologistDate(prev => ({ ...prev, date_of_birth: value }))
                        }}
                        placeholder={t("date_of_birth") || ""}
                        value={localDermatologistData.date_of_birth}
                        type='date'
                        fullWidth
                    />

                    <Input
                        onChange={onTextInputsChange}
                        name="graduation_year"
                        value={localDermatologistData.graduation_year}
                        placeholder={t("graduation_year") || ""}
                        type='text'
                        fullWidth
                    />

                    <Input
                        onChange={onTextInputsChange}
                        name="university_gpa"
                        value={localDermatologistData.university_gpa}
                        placeholder={t("graduation_GPA") || ""}
                        type='text'
                        fullWidth
                    />

                    <Input
                        onChange={onTextInputsChange}
                        name="maximum_no_of_open_consultations"
                        value={localDermatologistData.maximum_no_of_open_consultations}
                        placeholder={t("max_open_consultations") || ""}
                        type='text'
                        fullWidth
                    />
                </div>
                <div className="submit_section">
                    <Button>{t('save')}</Button>
                </div>
            </form>
        </Style>
    )
}

export default DermatologistForm