import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';
import { faStar as faStarEmpty } from '@fortawesome/free-regular-svg-icons';

export interface RatingProps {
  skillLevel: number;
};

const Rating = ({ skillLevel }: RatingProps) => {
  const maxStars = 5;
  const emptyStarsCount = maxStars - skillLevel;

  const emptyStars = [...Array(emptyStarsCount)].map(
    (item, index) => (
      <FontAwesomeIcon
        key={`empty-${index}`}
        icon={faStarEmpty}
        size="sm"
        style={{color:"#6c757d"}}
      />
    )
  );
  
  const solidStars = [...Array(skillLevel)].map(
    (item, index) => (
      <FontAwesomeIcon
        key={`solid-${index}`}
        icon={faStarSolid}
        size="sm"
      />
    )
  );

  return (
    <>
      {solidStars}
      {emptyStars}
    </>
  )
};

export default Rating;