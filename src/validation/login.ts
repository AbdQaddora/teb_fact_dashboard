import * as yup from 'yup';

const loginSchema = yup.object({
    email: yup.string().email("invalid_email").required("email_is_required"),
    password: yup.string().required("password_is_required"),
});

export default loginSchema;