import React from 'react'
import Style from './style'
import { AiFillStar, AiOutlineStar } from 'react-icons/ai'

const Rating = ({ rating }: { rating: number }) => {
    return (
        <Style>
            {[...Array(rating)].map((el, index) => <AiFillStar className="star_icon" key={index} />)}
            {[...Array(5 - rating)].map((el, index) => <AiOutlineStar className="star_icon" key={index} />)}
        </Style>
    )
}

export default Rating