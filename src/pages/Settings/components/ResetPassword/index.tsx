import React, { useCallback, useState } from 'react'
import Style from './style'
import { H5 } from '../../../../components/tiny/Typography/style'
import Input from '../../../../components/tiny/Input'
import Button from '../../../../components/tiny/Button'
import ResetPasswordSchema from '../../../../validation/reset_password'
import { toast } from 'react-toastify'
import { useTranslation } from 'react-i18next'
import AuthAPI from '../../../../api/auth'

const ResetPassword = () => {
    const [oldPassword, setOldPassword] = useState("");
    const [newPassword, setNewPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    const { t } = useTranslation("", { keyPrefix: "settings.reset_password" });
    const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        ResetPasswordSchema.validate({
            old_password: oldPassword,
            new_password: newPassword,
            confirm_password: confirmPassword,
        }).then(() => {
            AuthAPI.changePassword(oldPassword, newPassword)
                .then((res) => {
                    if (res?.status) {
                        toast.success(res.message);
                    } else {
                        toast.error(res?.message);
                    }
                })
        }).catch((error) => {
            toast.error(t("errors." + error.message));
        })
    }

    return (
        <Style className='settings_section'>
            <H5 margin='0 0 1rem'>{t("title")}:</H5>
            <form onSubmit={handelSubmit}>
                <Input
                    margin='0 0 0.5rem'
                    fullWidth
                    placeholder={t("old_password_placeholder") as string}
                    value={oldPassword}
                    onChange={e => setOldPassword(e.target.value)}
                />
                <div className="divider"></div>
                <Input
                    margin='0 0 0.5rem'
                    fullWidth
                    placeholder={t("new_password_placeholder") as string}
                    value={newPassword}
                    onChange={e => setNewPassword(e.target.value)}
                />
                <Input
                    margin='0 0 0.5rem'
                    fullWidth
                    placeholder={t("confirm_password_placeholder") as string}
                    value={confirmPassword}
                    onChange={e => setConfirmPassword(e.target.value)}
                />
                <Button margin='0.5rem 0 0' fullWidth type='submit'>{t("reset_password_btn")}</Button>
            </form>
        </Style>
    )
}

export default ResetPassword