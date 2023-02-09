import React, { useState } from 'react';

interface Props {
  initialRating?: number;
}

export const Stars: React.FC<Props> = ({ initialRating = 0 }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRate = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className="star-rating">
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className="star hover:cursor-pointer"
          onClick={() => handleRate(star)}
          style={{ color: rating >= star ? '#FF859B' : 'rgba(255,255,255, 0.5)' }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};
