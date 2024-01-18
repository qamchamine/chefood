import React, {useState} from "react";
import { FaStar } from "react-icons/fa";
import '../../css/starsrating.css';
import $ from 'jquery';
import ReviewsComments from './reviews-comments';

const StarsRating = () => {
    const [rating, setRating] = useState(null)
    const [hover, setHover] = useState(null)
    return (
        <div>
            {[ ...Array(5)].map((star, i) => {
                const ratingValue = i + 1;

                return (
                    <label key={i}>
                        <input 
                            type="radio" 
                            name="rating" 
                            value={ratingValue} 
                            onClick={ ()=> setRating(ratingValue)}
                            data-toggle="modal" 
                            data-target="#exampleModal"
                        />
                        <ReviewsComments/>
                        <FaStar 
                            className="star-rating-icon" 
                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                            size={50} 
                            onMouseEnter={ ()=> setHover(ratingValue)}
                            onMouseLeave={ ()=> setHover(null)}
                        />
                    </label>
                    
                );
            })}
            
        </div>
    );
    
};
export default StarsRating;