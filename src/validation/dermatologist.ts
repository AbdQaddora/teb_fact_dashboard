import * as yup from 'yup';

const dermatologistSchema = yup.object({
    profile_status: yup.number().oneOf([0 , 1 , 2]),
    full_name: yup.string().required(),
    profile_image: yup.string().required(),
    rating: yup.number().min(1).max(5).required(),
    email: yup.string().email().required(),
    gender: yup.string().oneOf(["male", "female"]).required(),
    mobile_number: yup.string().matches(/^(\+?1[0-9]{10})$/, {
        message: "Invalid phone number",
    }),
    date_of_birth: yup.string().test('date-format', 'Invalid date format (DD/MM/YYYY)', (value) => {
        if (!value) return false;

        const [day, month, year] = value.split('/').map(Number);

        if (year <= 1950 || year > new Date().getFullYear()) return false;

        const date = new Date(year, month - 1, day);
        return (
            date.getDate() === day &&
            date.getMonth() === month - 1 &&
            date.getFullYear() === year
        );
    }),
    graduation_year: yup.number().min(1960).max(new Date().getFullYear()).required(),
    university_gpa: yup.number().min(75).max(100).required(),
    maximum_no_of_open_consultations: yup.number().min(5).max(10).required(),
    university_certificate_image: yup.string().notRequired()
})

export default dermatologistSchema;
