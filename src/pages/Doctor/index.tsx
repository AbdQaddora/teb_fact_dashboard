import React, { useState } from 'react'
import TextEditor from '../../components/TextEditor'

const Doctor = () => {
  const [text, setText] = useState('')
  return (
    <TextEditor value={text} onChange={(value) => { setText(value) }} />
  )
}

export default Doctor