interface IPatientColumns {
    id: string,
    profile_image: string,
    full_name: string,
    email: string,
    mobile_number: string,
    open_consultations: number // 1 not active , 2 active
    consultations_count: number
}