import React, { useState, useEffect } from 'react'
import Style from './style'
import { H5 } from '../../../../components/tiny/Typography/style'
import Input from '../../../../components/tiny/Input'
import Button from '../../../../components/tiny/Button'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import { selectDoctors, updateDoctor } from '../../../../redux/slices/doctorsSlice'
import Select from 'react-select'
import { dateToString } from '../../../../util'
import doctorSchema from '../../../../validation/doctor'
import { toast } from 'react-toastify'

const DoctorForm = () => {
    const { t } = useTranslation("", { keyPrefix: "doctor" });

    const dispatch = useAppDispatch();
    const { doctor } = useAppSelector(selectDoctors);

    const [localDoctorData, setLocalDoctorDate] = useState<IDoctor>(doctor);

    const onGenderChange = (gender: "male" | "female") => {
        setLocalDoctorDate(prev => ({ ...prev, gender: gender }))
    }

    const onTextInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalDoctorDate(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // to update the local values when global values changes
    useEffect(() => {
        setLocalDoctorDate(doctor)
    }, [doctor])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        doctorSchema
            .validate(localDoctorData)
            .then(() => {
                dispatch(updateDoctor(localDoctorData))
            }).catch((error) => {
                toast.error(error.message);
            })
    }
    return (
        <Style>
            <div className="head">
                <H5>{t("doctor")} / {doctor.name}</H5>
            </div>
            <form className="form" onSubmit={onSubmit}>
                <div className="grid">
                    <Input
                        onChange={onTextInputsChange}
                        name="name"
                        value={localDoctorData.name}
                        placeholder={t("name") || ""}
                        fullWidth
                    />

                    <Input
                        onChange={onTextInputsChange}
                        name="email"
                        value={localDoctorData.email}
                        placeholder={t("email") || ""}
                        type='email'
                        fullWidth
                    />

                    <Select
                        onChange={(val) => onGenderChange(val?.value as "male" | "female")}
                        className='gender'
                        value={{
                            value: localDoctorData.gender,
                            label: localDoctorData.gender
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
                        name="phone"
                        value={localDoctorData.phone}
                        placeholder={t("phone") || ""}
                        type='phone'
                        fullWidth
                    />

                    <Input
                        onDateChange={(value) => {
                            setLocalDoctorDate(prev => ({ ...prev, date_of_birth: value }))
                        }}
                        onChange={() => { }}
                        placeholder={t("date_of_birth") || ""}
                        value={localDoctorData.date_of_birth}
                        type='date'
                        fullWidth
                    />

                    <Input
                        onChange={onTextInputsChange}
                        name="graduation_year"
                        value={localDoctorData.graduation_year}
                        placeholder={t("graduation_year") || ""}
                        type='text'
                        fullWidth
                    />

                    <Input
                        onChange={onTextInputsChange}
                        name="graduation_gpa"
                        value={localDoctorData.graduation_gpa}
                        placeholder={t("graduation_GPA") || ""}
                        type='text'
                        fullWidth
                    />

                    <Input
                        onChange={onTextInputsChange}
                        name="max_open_consultations"
                        value={localDoctorData.max_open_consultations}
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

export default DoctorForm