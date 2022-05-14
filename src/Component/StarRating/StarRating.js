import React, { useState } from "react";
import { AiFillStar } from "react-icons/ai";
import "./starRating.scss";

function StarRating() {
  const [rating, setRating] = useState(null);
  const [hover, setHover] = useState(null);

  return (
    <div>
      {[...Array(5)].map((star, i) => {
        const ratingValue = i + 1;
        return (
          <label key={i}>
            <input type="radio" />
            <AiFillStar
              size={50}
              color={ratingValue <= (hover|| rating )? "green" : "grey"}
              value={ratingValue}
              onClick={() => setRating(ratingValue)}
              onMouseEnter={()=>setHover(ratingValue)}
              onMouseLeave={()=>setHover(null)}
            />
          </label>
        );
      })}
    </div>
  );
}

export default StarRating;
