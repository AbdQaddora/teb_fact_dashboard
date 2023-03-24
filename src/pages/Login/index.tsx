import React, { useState, useCallback } from 'react'
import { Body2, H4 } from '../../components/tiny/Typography/style'
import Style from './style'
import Input from '../../components/tiny/Input';
import Button from '../../components/tiny/Button';
// Translation
import { useTranslation } from 'react-i18next';

const Login = () => {
  const { t } = useTranslation('', { keyPrefix: "login" })

  const [data, setData] = useState({
    email: { value: "", error: false },
    password: { value: "", error: false }
  });

  const handelChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setData(prev => ({ ...prev, [e.target.name]: { value: e.target.value, error: false } }));
  }, [setData])

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // !TODO: API CALL
    console.log(data)
  }

  return (
    <Style>
      <div className="form_container">
        <form onSubmit={handelSubmit}>
          <H4>{t("title")}</H4>
          <Body2 margin="8px 0 20px" color='text/secondary'>{t("subTitle")}</Body2>
          <Input
            fullWidth
            value={data.email.value}
            error={data.email.error}
            onChange={handelChange}
            placeholder={t("label1") as string}
            name="email"
          />

          <Input
            fullWidth
            margin="20px 0"
            value={data.password.value}
            error={data.password.error}
            onChange={handelChange}
            placeholder={t("label2") as string}
            name="password"
          />
          <Button fullWidth>{t("btn")}</Button>
        </form>
      </div>
      <div className="left"></div>
    </Style>
  )
}

export default Login