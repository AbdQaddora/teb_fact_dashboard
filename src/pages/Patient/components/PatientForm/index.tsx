import React, { useState, useEffect } from 'react'
import Style from './style'
import { H5 } from '../../../../components/tiny/Typography/style'
import Input from '../../../../components/tiny/Input'
import Button from '../../../../components/tiny/Button'
import { useTranslation } from 'react-i18next'
import { useAppDispatch, useAppSelector } from '../../../../hooks/redux'
import Select from 'react-select'
import { toast } from 'react-toastify'
import { selectPatients, updatePatient } from '../../../../redux/slices/patientsSlice'
import patientSchema from '../../../../validation/patient'

const PatientForm = () => {
    const { t } = useTranslation("", { keyPrefix: "patient" });

    const dispatch = useAppDispatch();
    const { patient } = useAppSelector(selectPatients);

    const [localPatientData, setLocalDermatologistDate] = useState<IPatient>(patient);

    const onGenderChange = (gender: "male" | "female") => {
        setLocalDermatologistDate(prev => ({ ...prev, gender: gender }))
    }

    const onTextInputsChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setLocalDermatologistDate(prev => ({ ...prev, [e.target.name]: e.target.value }))
    }

    // to update the local values when global values changes
    useEffect(() => {
        setLocalDermatologistDate(patient)
    }, [patient])

    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log(localPatientData)
        patientSchema
            .validate(localPatientData)
            .then(() => {
                dispatch(updatePatient(localPatientData))
            }).catch((error) => {
                toast.error(error.message);
            })
    }

    return (
        <Style>
            <div className="head">
                <H5>{t("patient")} / {patient.full_name}</H5>
            </div>
            <form className="form" onSubmit={onSubmit}>
                <div className="grid">
                    <Input
                        onChange={onTextInputsChange}
                        name="full_name"
                        value={localPatientData.full_name}
                        placeholder={t("name") || ""}
                        fullWidth
                    />

                    <Input
                        onChange={onTextInputsChange}
                        name="email"
                        value={localPatientData.email}
                        placeholder={t("email") || ""}
                        type='email'
                        fullWidth
                    />

                    <Select
                        onChange={(val) => onGenderChange(val?.value as "male" | "female")}
                        className='gender'
                        value={{
                            value: localPatientData.gender,
                            label: localPatientData.gender
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
                        value={localPatientData.mobile_number}
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
                        value={localPatientData.date_of_birth}
                        type='date'
                        fullWidth
                    />

                    <Input
                        disabled
                        value={localPatientData.open_consultations}
                        placeholder={t("open_consultations") || ""}
                        type='text'
                        fullWidth
                    />

                    <Input
                        disabled
                        value={localPatientData.consultations_count}
                        placeholder={t("consultations_count") || ""}
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

export default PatientForm