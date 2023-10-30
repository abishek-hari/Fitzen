import React, { useState } from "react";
import "./MuscleGroup.css";
import data from "../../data";
import { Link } from "react-router-dom";

const MuscleGroup = () => {
  const [muscleGroup, setmuscleGroup] = useState(data);
  return (
    <div className='container section'>
      <h2 className='musclegroup__title'>Your Fitness Odyssey Begins Here</h2>
      <div className='muscleGroup__container'>
        {muscleGroup.map((muscle) => {
          const { muscleGroup, id, img, min, exercise, challenges } = muscle;
          return (
            <Link to={`/exercise/${id}`} key={id} className='musclegroup__card'>
              <div className='info__card'>
                <div className='card__info-top'>
                  <p className='card__min'>{min} mins</p>
                  <p className='card__exercises'>{exercise} exercises</p>
                </div>
                <div className='card__info-top'>
                  <h2 className='card__info-title'>{muscleGroup}</h2>
                  <p>7 x {challenges} challenges</p>
                </div>
              </div>
              <div className='img__card'>
                <img src={img} alt='images' className='musclegroup__img' />
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default MuscleGroup;
