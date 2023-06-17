import React from 'react'
import Style from './style'
import Input from '../../../../components/tiny/Input'
import { H5 } from '../../../../components/tiny/Typography/style'
import Button from '../../../../components/tiny/Button'

const Contact = () => {
  return (
    <Style className='settings_section'>
      <H5 margin='0 0 0.5rem'>Contact info:</H5>
      <div className="grid">
        <Input fullWidth placeholder='mobile number' />
        <Input fullWidth placeholder='whatsapp' />
        <Input fullWidth placeholder='email' />
        <Input fullWidth placeholder='facebook' />
        <Input fullWidth placeholder='twitter' />
        <Input fullWidth placeholder='instagram' />
        <Input fullWidth placeholder='website' />
      </div>
      <Button margin='0.5rem 0 0' fullWidth>Save Changes</Button>
    </Style>
  )
}

export default Contact