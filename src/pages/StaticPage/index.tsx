import React, { useMemo, useState, useEffect } from 'react'
import Style from './style'
import { H5 } from '../../components/tiny/Typography/style'
import Input from '../../components/tiny/Input'
import TextEditor from '../../components/TextEditor'
import Button from '../../components/tiny/Button'
import ImageInput from '../../components/tiny/ImageInput'
import { useTranslation } from 'react-i18next'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { useAppDispatch, useAppSelector } from '../../hooks/redux'
import { addStaticPage, getPageByID, selectStaticPages, updateStaticPage } from '../../redux/slices/staticPagesSlice'
import { PATHS } from '../../router'
import pageSchema from '../../validation/static_page'
import { toast } from 'react-toastify'
import Loading from '../../components/tiny/Loading'

const defaultValues: IStaticPage = {
    ar: {
        title: "",
        description: ""
    },
    en: {
        title: "",
        description: ""
    },
    icon: "",
    id: "",
    status: true,
    slug: ""
}

const isEmptyPage = (page: IStaticPage) => {
    if (page.ar.description === defaultValues.ar.description
        && page.ar.title === defaultValues.ar.title
        && page.en.title === defaultValues.en.title
        && page.en.description === defaultValues.en.description) {
        return true;
    }
    return false;
}
const StaticPage = () => {
    const { t } = useTranslation("", { keyPrefix: "static_page" })
    const { pathname } = useLocation();
    const { id } = useParams();
    const { page, page_requests_state } = useAppSelector(selectStaticPages);
    const navigate = useNavigate();
    const dispatch = useAppDispatch();

    const [data, setData] = useState<IStaticPage>(page);

    useEffect(() => {
        if (isEmptyPage(page) && pathname !== PATHS.NEW_STATIC_PAGE) {
            dispatch(getPageByID(id as string))
        }
    }, [])

    useEffect(() => {
        setData(page);
    }, [page])

    useEffect(() => {
        if (page_requests_state.error) {
            toast.error(page_requests_state.error)
            if (isEmptyPage(page) && pathname !== PATHS.NEW_STATIC_PAGE) {
                navigate(PATHS.STATIC_PAGES)
            }
        }
    }, [page_requests_state])

    const handelSubmit = () => {
        // VALIDATION
        pageSchema.validate({
            icon: data.icon,
            en_title: data.en.title,
            ar_title: data.ar.title,
            en_description: data.en.description,
            ar_description: data.ar.description,
            slug: data.slug
        }, { abortEarly: false }).then(() => {
            try {
                if (pathname === PATHS.NEW_STATIC_PAGE) {
                    // *ADD
                    dispatch(addStaticPage(data, () => {
                        toast.success(t("success_add_msg"));
                    }))
                } else {
                    // *UPDATE
                    dispatch(updateStaticPage(data, () => {
                        toast.success(t("success_update_msg"));
                    }))
                }
            } catch (error) {
                toast.error(t("errors.something_went_wrong"));

            }
        }).catch(({ errors }) => {
            errors.map((error: string) => {
                toast.error(t(`errors.${error}`));
            })
        })
    }

    const setState = (obj: any) => { setData(prev => ({ ...prev, ...obj })) }

    if (page_requests_state.loading) {
        return <Loading />
    }

    return (
        <Style>
            <section>
                <H5>{t("page_icon")}</H5>
                <ImageInput
                    value={data.icon}
                    onChange={(icon) => { setState({ icon }) }}
                    width='150px'
                    height='150px'
                    text={t("page_icon_input") || ""}
                    margin='8px 0'
                />
            </section>
            <Input
                value={data.slug}
                margin='0.5rem 0'
                fullWidth
                onChange={(e) => {
                    setState({ slug: e.target.value })
                }}
                placeholder={t("page_description") || ""}
            />
            <section>
                <H5>{t("english_page")}</H5>
                <Input
                    value={data.en.title}
                    margin='0.5rem 0'
                    fullWidth
                    onChange={(e) => {
                        setState({
                            en: {
                                ...data.en,
                                title: e.target.value,
                            }
                        })
                    }}
                    placeholder={t("english_title_placeholder") || ""}
                />
                <TextEditor
                    onChange={(value) => {
                        setState({
                            en: {
                                ...data.en,
                                description: value
                            }
                        })
                    }}
                    value={data.en.description}
                />
            </section>
            <section>
                <H5>{t("arabic_page")}</H5>
                <Input
                    margin='0.5rem 0'
                    value={data.ar.title}
                    fullWidth
                    onChange={(e) => {
                        setState({
                            ar: {
                                ...data.ar,
                                title: e.target.value
                            }
                        })
                    }}
                    placeholder={t("arabic_title_placeholder") || ""}
                />
                <TextEditor
                    onChange={(value) => {
                        setState({
                            ar: {
                                ...data.ar,
                                description: value
                            }
                        })
                    }}
                    value={data.ar.description}
                />
            </section>
            <Button fullWidth size='large' color='primary' onClick={handelSubmit}>
                {pathname === PATHS.NEW_STATIC_PAGE ? t("add_btn") : t("update_btn")}
            </Button>
        </Style>
    )
}

export default StaticPage