import React, { useState } from "react";
import { Navbar, SingleExercise } from "../components/components";

const ExerciseDetail = () => {
  return (
    <>
      <Navbar />
      <SingleExercise />
    </>
  );
};

export default ExerciseDetail;

// const ExerciseDetail = () => {
//   const [Bodyexercises, setBodyExercises] = useState(data);
//   const { exeId } = useParams();

//   const singleExercise = Bodyexercises.find((exe) => exe.id === Number(exeId));

//   const { id, muscleGroup, exercises } = singleExercise;

//   return (
//     <div key={id}>
//       <h1>{muscleGroup}</h1>
//       {exercises.map((exercise) => {
//         const { name, steps } = exercise;
//         return (
//           <div key={name}>
//             <h2>{name}</h2>
//             {steps.map((step) => {
//               return <p>{step}</p>;
//             })}
//           </div>
//         );
//       })}
//     </div>
//   );
// };
