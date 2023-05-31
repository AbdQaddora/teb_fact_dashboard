interface IConsultation {
    id: string,
    patient_name: string,
    patient_avatar: string,
    patient_email: string;
    consultation: string;
    state: ConsultationType;
    date: string;
}