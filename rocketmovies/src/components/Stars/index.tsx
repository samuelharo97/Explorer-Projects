import React, { useState } from 'react';

interface StarProps {
  initialRating?: number;
  size?: string;
}

export const Stars: React.FC<StarProps> = ({ initialRating = 0, size = 'xl' }) => {
  const [rating, setRating] = useState(initialRating);

  const handleRate = (newRating: number) => {
    setRating(newRating);
  };

  return (
    <div className={`star-rating`}>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          className={`star hover:cursor-pointer text-${size}`}
          onClick={() => handleRate(star)}
          style={{ color: rating >= star ? '#FF859B' : 'rgba(255,255,255, 0.5)' }}
        >
          &#9733;
        </span>
      ))}
    </div>
  );
};
