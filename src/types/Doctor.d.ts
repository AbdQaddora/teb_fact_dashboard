interface IDoctor {
    id: string,
    isActive: boolean;
    name: string;
    avatar: string;
    rating: number;
    email: string;
    gender: "male" | "female";
    phone: string;
    date_of_birth: string;
    graduation_year: number;
    graduation_gpa: number;
    max_open_consultations: number
    certificate?: string;
}