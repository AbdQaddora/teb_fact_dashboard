import Style from './style'
import { H5 } from '../../../../components/tiny/Typography/style'
import Button from '../../../../components/tiny/Button'
import { useTranslation } from 'react-i18next'
import { useAppSelector } from '../../../../hooks/redux'
import { selectPatients } from '../../../../redux/slices/patientsSlice'
import { useState } from 'react'
import RemovePatientModal from '../../../../components/modals/RemovePatientModal'
import Modal from '../../../../components/Modal'


const PatientCard = () => {
    const { t } = useTranslation("", { keyPrefix: "patient" });
    const { patient } = useAppSelector(selectPatients);
    const [isRemoveModalOpen, setIsRemoveModalOpen] = useState(false)

    return (
        <>
            {isRemoveModalOpen && <Modal close={() => setIsRemoveModalOpen(false)}>
                <RemovePatientModal
                    avatar={patient.profile_image}
                    close={() => setIsRemoveModalOpen(false)}
                    id={patient.id}
                    name={patient.full_name}
                />
            </Modal>}
            <Style>

                <img src={patient.profile_image} alt="avatar" className="avatar" />
                <H5 margin='0 0 0.5rem 0'>{patient.full_name}</H5>
                <Button
                    color='danger'
                    onClick={() => setIsRemoveModalOpen(true)}
                    fullWidth
                >{t("delete")}</Button>
            </Style>
        </>

    )
}

export default PatientCard