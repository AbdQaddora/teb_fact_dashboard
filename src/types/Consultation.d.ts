interface IConsultation {
    id: string,
    consultation: string;
    date: string;
    patient_name: string,
    patient_avatar: string,
    patient_email: string;
    state: ConsultationType;
}