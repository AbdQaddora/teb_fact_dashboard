import React, { useState, useCallback, useEffect } from 'react'
import { Body2, H4 } from '../../components/tiny/Typography/style'
import Style from './style'
import Input from '../../components/tiny/Input';
import Button from '../../components/tiny/Button';
// Translation
import { useTranslation } from 'react-i18next';
import { useAuth } from '../../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { PATHS } from '../../router';
import loginSchema from '../../validation/login';
import { toast } from 'react-toastify';
import Loading from '../../components/tiny/Loading';
import CheckBox from '../../components/tiny/CheckBox';

// slider images
import slider1 from "../../assets/images/slider_1.jpg";
import slider2 from "../../assets/images/slider_2.jpg";
import slider3 from "../../assets/images/slider_3.jpg";
import slider4 from "../../assets/images/slider_4.jpg";
const Login = () => {
  const { t } = useTranslation('', { keyPrefix: "login" })
  const auth = useAuth();
  const navigate = useNavigate();
  const [activeImage, setActiveImage] = useState(Math.floor(Math.random() * 4));
  const [data, setData] = useState({
    email: "",
    password: ""
  });

  const [isLoading, setIsLoading] = useState(false);
  const [isRememberMeOn, setIsRememberMeOn] = useState(false);
  useEffect(() => {
    const temp = setInterval(() => {
      setActiveImage(Math.floor(Math.random() * 4))
    }, 10000)

    return () => clearInterval(temp)
  }, [])
  const handelChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  }, [setData])

  const handelSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    loginSchema.validate(data, { abortEarly: false })
      .then(() => {
        setIsLoading(true);
        auth.login(data.email, data.password, isRememberMeOn)
          .then((status) => {
            if (status) {
              navigate(PATHS.HOME);
            }
          }).finally(() => {
            setIsLoading(false)
          })
      }).catch(({ errors }) => {
        errors.map((error: string) => {
          toast.error(t(`errors.${error}`))

        })
      })

  }

  useEffect(() => {
    if (auth.token) {
      navigate(PATHS.HOME);
    }
  }, [auth.token])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Style>
      <div className="form_container">
        <form onSubmit={handelSubmit}>
          <H4>{t("title")}</H4>
          <Body2 margin="8px 0 20px" color='text/secondary'>{t("subTitle")}</Body2>
          <Input
            fullWidth
            value={data.email}
            onChange={handelChange}
            placeholder={t("label1") as string}
            name="email"
          />

          <Input
            type='password'
            fullWidth
            margin="15px 0 10px"
            value={data.password}
            onChange={handelChange}
            placeholder={t("label2") as string}
            name="password"
          />

          <CheckBox
            className='remember_me'
            onChange={() => { setIsRememberMeOn(prev => !prev) }}
            value={isRememberMeOn}
            label={t("remember_me") as string} />
          <Button fullWidth>{t("btn")}</Button>
        </form>
      </div>
      <div className="left">
        {activeImage === 0 && <img src={slider1} alt={"slider 1"} className='left_image' />}
        {activeImage === 1 && <img src={slider2} alt={"slider 2"} className='left_image' />}
        {activeImage === 2 && <img src={slider3} alt={"slider 3"} className='left_image' />}
        {activeImage === 3 && <img src={slider4} alt={"slider 4"} className='left_image' />}
      </div>
    </Style>
  )
}

export default Login