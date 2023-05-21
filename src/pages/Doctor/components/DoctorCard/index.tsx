import React from 'react'
import Style from './style'
import { Body2, H5 } from '../../../../components/tiny/Typography/style'
import Button from '../../../../components/tiny/Button'
import Rating from '../../../../components/tiny/Rating'

const DoctorCard = () => {
    return (
        <Style>
            <img src="https://randomuser.me/api/portraits/men/57.jpg" alt="avatar" className="avatar" />
            <H5>Adrian Stefan</H5>
            <div className='doctor_secondary_info'>
                <Body2 color='text/secondary'>Los Angeles USA</Body2>
                <Rating rating={5}/>
            </div>
            <Button fullWidth>Deactivate</Button>
        </Style>
    )
}

export default DoctorCard