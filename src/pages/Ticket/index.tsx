import React, { useEffect } from 'react'
import Style from './style'
import { useParams } from 'react-router-dom'
import { Body1, H4, H5 } from '../../components/tiny/Typography/style';
import NameAndAvatar from '../../components/tiny/NameAndAvatar';
import TextEditor from '../../components/TextEditor';
import Button from '../../components/tiny/Button';
import { useTranslation } from 'react-i18next';

const Ticket = () => {
  const { id } = useParams();
  const { t } = useTranslation("", { keyPrefix: "ticket" });

  useEffect(() => {
    // !TODO: API CALL TP GET REPORT DATA
    console.log({ id })
  }, [])

  return (
    <Style>
      <H4 margin='1rem 0 1rem'>{t("title")}</H4>
      <div className="ticket_content">
        <div className="sender_container">
          <NameAndAvatar
            name='Ekaterina Tankova'
            avatar='https://randomuser.me/api/portraits/women/72.jpg'
          />
        </div>
        <div className="divider" />
        <div className="content_container">
          <H5 margin='1rem 0 4px'>Lorem Ipsum</H5>
          <Body1 margin='4px 0 1rem'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum. Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
          </Body1>
          <TextEditor
            value=''
            onChange={() => { }}
          />
          <Button fullWidth size='large' margin='1rem 0 0'>
            {t("btn")}
          </Button>
        </div>
      </div>
    </Style >
  )
}

export default Ticket