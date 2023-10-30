import React, { useState, useEffect } from "react";
import "./SingleExercise.css";
import data from "../../data";
import { Link, useParams } from "react-router-dom";

const SingleExercise = () => {
  const [Bodyexercises, setBodyExercises] = useState(data);
  const { exeId } = useParams();

  const singleExercise = Bodyexercises.find((exe) => exe.id === Number(exeId));

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const { id, muscleGroup, exercises } = singleExercise;

  return (
    <div key={id} className='container section '>
      <h1 className='singleExe__title'>
        <Link to='/' className='singleExe__title-link'>
          Home /{" "}
        </Link>
        {muscleGroup}
      </h1>
      {exercises.map((exercise) => {
        const { name, steps } = exercise;
        return (
          <div key={name} className='singleExe__info'>
            <div className='singleExe__info-step'>
              <h2 className='exercise__title'>{name}</h2>
              <h3 className='step__title'>Steps :</h3>
              {steps.map((step) => {
                return (
                  <p className='exercise__desc'>
                    <li className='exe__desc'>{step}</li>
                  </p>
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SingleExercise;

{
  /* <video autoPlay width='320' height='240' muted loop>
  <source src='https://media.musclewiki.com/media/uploads/videos/branded/male-bodyweight-hand-plank-side_GnZ2NZh.mp4#t=0.1' />
</video>; */
}
