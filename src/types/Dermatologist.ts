import { DermatologistProfileStatus } from "./enums";

export interface IDermatologist {
    id: string,
    profile_image: string;
    full_name: string;
    mobile_number: string;
    gender: "male" | "female";
    date_of_birth: string;
    profile_status: DermatologistProfileStatus;
    maximum_no_of_open_consultations: number
    rating: number;
    email: string;
    graduation_year: number;
    university_gpa: number;
    university_certificate_image?: string;
}
