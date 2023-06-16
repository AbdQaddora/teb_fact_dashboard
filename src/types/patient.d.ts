interface IPatient {
    id: string,
    profile_image: string,
    full_name: string,
    email: string,
    mobile_number: string,
    gender: "male" | "female",
    date_of_birth: string,
    open_consultations: number,
    consultations_count: number,
    email_verified_at: string,
    created_at: string
}