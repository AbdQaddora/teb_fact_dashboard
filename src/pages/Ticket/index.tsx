import React, { useEffect, useState, useCallback } from 'react'
import Style from './style'
import { useNavigate, useParams } from 'react-router-dom'
import { Body1, H4, H5 } from '../../components/tiny/Typography/style';
import TextEditor from '../../components/TextEditor';
import Button from '../../components/tiny/Button';
import { useTranslation } from 'react-i18next';
import TicketsAPI from '../../api/tickets';
import Loading from '../../components/tiny/Loading';
import { toast } from 'react-toastify';
import { PATHS } from '../../router';

const Ticket = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isLoadingReplySent, setIsLoadingReplySent] = useState(false);
  const navigate = useNavigate();
  const [replyMessage, setReplyMessage] = useState("");
  const [ticket, setTicket] = useState<ITicket>({
    email: "",
    full_name: "",
    id: "",
    is_read: false,
    message: ""
  });

  const { t } = useTranslation("", { keyPrefix: "ticket" });

  const sendReply = useCallback((message: string) => {
    if (message.length > 10) {
      setIsLoadingReplySent(true);
      TicketsAPI.replyOnTicket(id as string, message)
        .then((res) => {
          if (res?.status) {
            toast.success(t("success_reply"));
            setTimeout(() => { navigate(PATHS.TICKETS) }, 1000)
          } else {
            toast.error(t("error_unknown"))
          }
        }).finally(() => {
          setIsLoadingReplySent(false);
        })
    } else {
      toast.error(t("error_required"))
    }
  }, [])

  useEffect(() => {
    setIsLoading(true);
    TicketsAPI.getTicketById(id as string)
      .then((res) => {
        setTicket(res?.data)
      })
      .catch(() => {

      })
      .finally(() => {
        setIsLoading(false);
      })
  }, [])

  if (isLoading) {
    return <Loading />
  }

  return (
    <Style>
      <H4 margin='1rem 0 1rem'>{t("title")}</H4>
      <div className="ticket_content">
        <div className="sender_container">
          <Body1>{ticket.email}</Body1>
        </div>
        <div className="divider" />
        <div className="content_container">
          <H5 margin='1rem 0 4px'>{ticket.full_name}</H5>
          <Body1 margin='4px 0 1rem'>
            {ticket.message}
          </Body1>
          <TextEditor
            value={replyMessage}
            onChange={(value) => { setReplyMessage(value) }}
          />
          <Button
            disabled={isLoadingReplySent}
            fullWidth
            size='large' margin='1rem 0 0' onClick={() => sendReply(replyMessage)}>
            {isLoadingReplySent ?
              <Body1 color='text/error' weight={600}>{t('btn_sending')}</Body1>
              : t("btn")}
          </Button>
        </div>
      </div>
    </Style >
  )
}

export default Ticket