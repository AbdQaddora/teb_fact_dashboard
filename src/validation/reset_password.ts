import * as yup from 'yup';

const ResetPasswordSchema = yup.object({
    old_password: yup.string().required("old_password_is_required"),
    new_password: yup
        .string().min(8, "password_min_error")
        .matches(/[a-z]/, 'password_small_letter_error')
        .matches(/[A-Z]/, 'password_capital_letter_error')
        .matches(/\d/, 'password_number_error')
        .matches((/[^A-Za-z0-9]/), 'password_special_characters_error')
        .required("new_password_is_required"),
    confirm_password: yup.mixed().oneOf([yup.ref('new_password')], "passwords_match_error").required("confirm_password_is_required"),
});

export default ResetPasswordSchema;