interface IDermatologistColumns {
    id: string,
    profile_image: string,
    full_name: string,
    email: string,
    mobile_number: string,
    profile_status: number // 1 not active , 2 active
    maximum_no_of_open_consultations: number
    consultations_count: number // consultations 
    rating: number
}