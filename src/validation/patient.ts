import * as yup from 'yup';

const patientSchema = yup.object({
    full_name: yup.string().required(),
    email: yup.string().email().required(),
    gender: yup.string().oneOf(["male", "female"]).required(),
    mobile_number: yup.string().matches(/^((?:[1-9][0-9 ().-]{5,28}[0-9])|(?:(00|0)( ){0,1}[1-9][0-9 ().-]{3,26}[0-9])|(?:(\+)( ){0,1}[1-9][0-9 ().-]{4,27}[0-9]))$/gm, {
        message: "Invalid phone number",
    }),
    date_of_birth: yup.string().test('date-format', 'Invalid date format (DD/MM/YYYY)', (value) => {
        if (!value) return false;

        const [year, month, day] = value.split('-').map(Number);

        if (year <= 1900 || year > new Date().getFullYear()) return false;
        if (year === new Date().getFullYear() && month - 1 > new Date().getMonth()) return false;
        if (year === new Date().getFullYear() && month - 1 > new Date().getMonth() && day > new Date().getDate()) return false;

        const date = new Date(year, month - 1, day);
        return (
            date.getDate() === day &&
            date.getMonth() === month - 1 &&
            date.getFullYear() === year
        );
    }),
})

export default patientSchema;
