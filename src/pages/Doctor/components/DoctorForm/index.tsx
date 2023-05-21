import React from 'react'
import Style from './style'
import { H5 } from '../../../../components/tiny/Typography/style'
import Input from '../../../../components/tiny/Input'
import Button from '../../../../components/tiny/Button'

const DoctorForm = () => {
    return (
        <Style>
            <div className="head">
                <H5>Doctor / Adrian Stefan</H5>
            </div>
            <form className="form">
                <div className="grid">
                    <Input value='' placeholder='Name' fullWidth />

                    <Input value='' placeholder='Email' type='email' fullWidth />

                    <Input value='' placeholder='Gender' type='email' fullWidth />

                    <Input value='' placeholder='Phone' type='phone' fullWidth />

                    <Input value='' placeholder='Date of birth' type='date' fullWidth className='date_input'/>

                    <Input value='' placeholder='Graduation year' type='text' fullWidth />

                    <Input value='' placeholder='Graduation GPA' type='text' fullWidth />
                    
                    <Input value='' placeholder='max open consultations' type='text' fullWidth />
                </div>
                <div className="submit_section">
                    <Button>Save changes</Button>
                </div>
            </form>
        </Style>
    )
}

export default DoctorForm