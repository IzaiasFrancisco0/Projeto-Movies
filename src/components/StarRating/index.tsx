import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa6";
import './index.scss'

export type Props = {
    rating: number,
}

export default function StarRating(props: Props)  {
    const numStars = Math.round(props.rating / 2);

    const starsArrayGordo = [];
    const starsArrayMagro = [];

    for (let i = 0; i < 5; i++) {
        if (i < numStars) {
            starsArrayGordo.push(i);
        } else {
            starsArrayMagro.push(i);
        }
    }

    /* return (
        <div className="movie-rate">
            {starsArray.map((star, index) => (
                <span key={index}>
                    {star}
                </span>
            ))}
        </div>
    ); */

    return (
        <div className="movie-rate">
            {starsArrayGordo.map(index => <FaStar key={index} />)}
            {starsArrayMagro.map(index => <FaRegStar key={index} />)}
        </div>
    )
};