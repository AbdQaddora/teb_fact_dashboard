import React from 'react'
import Style from './style'
import { BsStarFill } from 'react-icons/bs'

const Rating = ({ rating }: { rating: number }) => {
    return (
        <Style>
            {[...Array(rating)].map((el, index) => <BsStarFill className="star_icon" key={index} />)}
        </Style>
    )
}

export default Rating