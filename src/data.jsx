import FitzenAbs from "./assets/fitzen-11.png";
import FitzenPecs from "./assets/fitzen-15.png";
import FitzenLegs from "./assets/fitzen-3.png";
import FitzenShoulder from "./assets/fitzen-14.png";
import FitzenBiceps from "./assets/fitzen-19.png";
import FitzenTriceps from "./assets/fitzen-8.png";
import FitzenQuads from "./assets/fitzen-12.png";
import FitzenOblique from "./assets/fitzen-6.png";
import FitzenLats from "./assets/fitzen-14.png";
import FitzenCalves from "./assets/fitzen-9.png";
import FitzenDelts from "./assets/fitzen-10.png";

const allExercises = [
  // Abs Exercises
  {
    id: 1,
    muscleGroup: "Abs",
    img: FitzenAbs,
    min: 24,
    exercise: 7,
    challenges: 3,
    exercises: [
      {
        name: "Crunches",
        steps: [
          "Lie on your back with your knees bent and feet flat on the floor.",
          "Cross your arms over your chest or place your hands behind your head.",
          "Lift your shoulders off the ground, engaging your core, then lower them back down.",
        ],
      },
      {
        name: "Leg Raises",
        steps: [
          "Lie on your back with your legs straight and your hands by your sides.",
          "Lift your legs while keeping them straight, then lower them back down.",
        ],
      },
      {
        name: "Planks",
        steps: [
          "Get into a push-up position with your forearms on the ground.",
          "Keep your body in a straight line from head to heels, engaging your core.",
          "Hold the position for as long as you can.",
        ],
      },
      {
        name: "Russian Twists",
        steps: [
          "Sit on the ground with your knees bent and your feet off the ground.",
          "Hold a weight or medicine ball with both hands and twist your torso to each side.",
        ],
      },
      {
        name: "Mountain Climbers",
        steps: [
          "Assume a push-up position with your hands under your shoulders.",
          "Bring one knee toward your chest and then switch to the other knee, alternating quickly.",
        ],
      },
      {
        name: "Hanging Leg Raises",
        steps: [
          "Hang from a pull-up bar with your palms facing away from your body.",
          "Lift your legs while keeping them straight, then lower them back down.",
        ],
      },
      {
        name: "V-Ups",
        steps: [
          "Lie on your back with your arms extended overhead and your legs straight.",
          "Lift your upper body and legs to create a V shape, then lower them back down.",
        ],
      },
    ],
  },
  {
    id: 2,
    muscleGroup: "Pecs",
    img: FitzenPecs,
    min: 30,
    exercise: 7,
    challenges: 5,
    exercises: [
      {
        name: "Bench Press",
        steps: [
          "Lie on a bench with your back flat and feet planted on the ground.",
          "Grip the barbell with your hands slightly wider than shoulder-width apart.",
          "Lower the barbell to your chest, then push it back up.",
        ],
      },
      {
        name: "Push-Ups",
        steps: [
          "Assume a push-up position with your hands under your shoulders.",
          "Lower your body by bending your elbows, then push yourself back up.",
        ],
      },
      {
        name: "Dumbbell Flyes",
        steps: [
          "Lie on a bench with a dumbbell in each hand, arms extended upward.",
          "Lower your arms to the sides, then bring them back up to the starting position.",
        ],
      },
      {
        name: "Incline Bench Press",
        steps: [
          "Lie on an incline bench with your back flat and feet planted on the ground.",
          "Grip the barbell with your hands slightly wider than shoulder-width apart.",
          "Lower the barbell to your upper chest, then push it back up.",
        ],
      },
      {
        name: "Chest Dips",
        steps: [
          "Grip parallel bars and lift your body off the bars.",
          "Lower your body by bending your elbows, then push yourself back up.",
        ],
      },
      {
        name: "Cable Crossovers",
        steps: [
          "Stand in front of cable machines with handles at shoulder height.",
          "Cross your hands over in front of your chest, then return to the starting position.",
        ],
      },
      {
        name: "Pullovers",
        steps: [
          "Lie on a bench with your upper back supported and a dumbbell held above your chest.",
          "Lower the dumbbell backward over your head, then bring it back to the starting position.",
        ],
      },
    ],
  },

  {
    id: 3,
    muscleGroup: "Legs",
    img: FitzenLegs,
    min: 25,
    exercise: 7,
    challenges: 4,
    exercises: [
      {
        name: "Squats",
        steps: [
          "Stand with your feet shoulder-width apart and a barbell on your upper back.",
          "Bend your knees and hips to lower your body down, then stand back up.",
        ],
      },
      {
        name: "Lunges",
        steps: [
          "Stand with your feet together and hold dumbbells by your sides.",
          "Step one foot forward and lower your body into a lunge, then return to the starting position.",
        ],
      },
      {
        name: "Deadlifts",
        steps: [
          "Stand with your feet hip-width apart and a barbell in front of you.",
          "Bend at your hips and knees to lift the barbell, then stand up straight.",
        ],
      },
      {
        name: "Leg Press",
        steps: [
          "Sit in a leg press machine and place your feet on the platform.",
          "Push the platform to extend your legs, then return to the starting position.",
        ],
      },
      {
        name: "Step-Ups",
        steps: [
          "Stand in front of a bench or step with dumbbells in your hands.",
          "Step onto the bench with one foot, then step back down.",
        ],
      },

      {
        name: "Hamstring Curls",
        steps: [
          "Lie face down on a leg curl machine, placing your feet under the pad.",
          "Curl your legs upward by bending your knees, then lower them back down.",
        ],
      },
      {
        name: "Calf Raises",
        steps: [
          "Stand with your toes on the edge of a step or platform and your heels hanging off.",
          "Raise your heels by extending your ankles, then lower them back down.",
        ],
      },
    ],
  },

  {
    id: 4,
    muscleGroup: "Shoulders",
    img: FitzenShoulder,
    min: 15,
    exercise: 7,
    challenges: 2,
    exercises: [
      {
        name: "Military Press",
        steps: [
          "Sit on a bench with back support and hold a barbell at shoulder height.",
          "Push the barbell overhead until your arms are fully extended, then lower it back to shoulder height.",
        ],
      },
      {
        name: "Dumbbell Press",
        steps: [
          "Sit on a bench with back support and hold a dumbbell in each hand at shoulder height.",
          "Press the dumbbells overhead until your arms are fully extended, then lower them back to shoulder height.",
        ],
      },
      {
        name: "Lateral Raises",
        steps: [
          "Stand with dumbbells in your hands by your sides.",
          "Raise the dumbbells to your sides until your arms are parallel to the ground, then lower them back down.",
        ],
      },
      {
        name: "Front Raises",
        steps: [
          "Stand with a dumbbell in each hand in front of your thighs.",
          "Raise the dumbbells in front of you until your arms are parallel to the ground, then lower them back down.",
        ],
      },
      {
        name: "Shrugs",
        steps: [
          "Stand with a dumbbell in each hand by your sides.",
          "Lift your shoulders as high as you can, then lower them back down.",
        ],
      },
      {
        name: "Upright Rows",
        steps: [
          "Stand with a barbell in front of you with your hands close together.",
          "Pull the barbell up towards your chin, then lower it back down.",
        ],
      },
      {
        name: "Face Pulls",
        steps: [
          "Attach a rope handle to a cable machine at head height.",
          "Pull the rope handle towards your face, then return to the starting position.",
        ],
      },
      // Add other Shoulders exercises here...
    ],
  },

  // Biceps Exercises
  {
    id: 5,
    muscleGroup: "Biceps",
    img: FitzenBiceps,
    min: 18,
    exercise: 7,
    challenges: 3,
    exercises: [
      {
        name: "Bicep Curls",
        steps: [
          "Stand with a dumbbell in each hand by your sides.",
          "Curl the dumbbells towards your shoulders, then lower them back down.",
        ],
      },
      {
        name: "Hammer Curls",
        steps: [
          "Stand with a dumbbell in each hand by your sides, palms facing in.",
          "Curl the dumbbells towards your shoulders, then lower them back down.",
        ],
      },
      {
        name: "Preacher Curls",
        steps: [
          "Sit at a preacher curl bench with your upper arms resting on the pad.",
          "Curl a barbell upwards, then lower it back down.",
        ],
      },
      {
        name: "Concentration Curls",
        steps: [
          "Sit on a bench with a dumbbell in one hand and your arm extended.",
          "Curl the dumbbell towards your shoulder, then lower it back down.",
        ],
      },
      {
        name: "21s",
        steps: [
          "Perform 7 half curls from the bottom to the mid-point of the curl.",
          "Perform 7 half curls from the mid-point to the top of the curl.",
          "Finish with 7 full curls from the bottom to the top of the curl.",
        ],
      },
      {
        name: "Zottman Curls",
        steps: [
          "Stand with a dumbbell in each hand by your sides, palms facing in.",
          "Curl the dumbbells towards your shoulders, then rotate your palms outward and lower them back down.",
        ],
      },
      {
        name: "Chin-Ups",
        steps: [
          "Hang from a pull-up bar with your palms facing toward your body.",
          "Pull your body up towards the bar by bending your elbows, then lower yourself back down.",
        ],
      },
    ],
  },

  // Triceps Exercises
  {
    id: 6,
    min: 30,
    exercise: 7,
    challenges: 6,
    muscleGroup: "Triceps",
    img: FitzenTriceps,
    exercises: [
      {
        name: "Tricep Dips",
        steps: [
          "Sit on parallel bars and grip the handles.",
          "Lift your body off the bars and lower it by bending your elbows, then push yourself back up.",
        ],
      },
      {
        name: "Tricep Pushdowns",
        steps: [
          "Stand at a cable machine with a straight bar attachment.",
          "Push the bar down by extending your elbows, then return it to the starting position.",
        ],
      },
      {
        name: "Skull Crushers",
        steps: [
          "Lie on a bench with a barbell held above your chest.",
          "Bend your elbows to lower the barbell to your forehead, then extend your arms back up.",
        ],
      },
      {
        name: "Close-Grip Bench Press",
        steps: [
          "Lie on a bench and grip the barbell with your hands closer than shoulder-width apart.",
          "Lower the barbell to your chest, then press it back up.",
        ],
      },
      {
        name: "Tricep Kickbacks",
        steps: [
          "Hold a dumbbell in each hand and bend at your hips.",
          "Extend your arms straight behind you, then return to the starting position.",
        ],
      },
      {
        name: "Diamond Push-Ups",
        steps: [
          "Assume a push-up position with your hands close together under your chest.",
          "Lower your body by bending your elbows, then push yourself back up.",
        ],
      },
      {
        name: "Overhead Tricep Extension",
        steps: [
          "Stand with a dumbbell in one hand and extend it overhead.",
          "Bend your elbow to lower the dumbbell behind your head, then extend your arm back up.",
        ],
      },
    ],
  },

  // Lats (Latissimus Dorsi) Exercises
  {
    id: 7,
    muscleGroup: "Lats",
    img: FitzenLats,
    min: 20,
    exercise: 7,
    challenges: 4,
    exercises: [
      {
        name: "Lat Pulldowns",
        steps: [
          "Sit at a lat pulldown machine and grip the bar with your hands wider than shoulder-width apart.",
          "Pull the bar down to your chest, then slowly release it back up.",
        ],
      },
      {
        name: "Pull-Ups",
        steps: [
          "Hang from a pull-up bar with your palms facing away from your body.",
          "Pull your body up toward the bar by bending your elbows, then lower yourself back down.",
        ],
      },
      {
        name: "Bent-Over Rows",
        steps: [
          "Stand with your knees slightly bent, holding a barbell with your hands in front of you.",
          "Bend at your hips and knees and row the barbell to your lower ribcage.",
        ],
      },
      {
        name: "T-Bar Rows",
        steps: [
          "Stand on a T-bar row machine with a V-handle attachment.",
          "Bend at your hips and knees to lift the weight, then row it to your lower ribcage.",
        ],
      },
      {
        name: "Single-Arm Dumbbell Rows",
        steps: [
          "Stand with one knee and one hand on a bench, and hold a dumbbell in your free hand.",
          "Row the dumbbell to your hip, then lower it back down.",
        ],
      },
      {
        name: "Straight-Arm Pulldowns",
        steps: [
          "Stand at a cable machine with a straight bar attachment.",
          "Extend your arms straight down and then pull the bar to your thighs.",
        ],
      },
      {
        name: "Cable Rows",
        steps: [
          "Sit at a cable row machine with a V-handle attachment.",
          "Row the handle towards your lower ribcage, then return it to the starting position.",
        ],
      },
    ],
  },

  // Obliques Exercises
  {
    id: 8,
    muscleGroup: "Obliques",
    img: FitzenOblique,
    min: 25,
    exercise: 7,
    challenges: 5,
    exercises: [
      {
        name: "Russian Twists",
        steps: [
          "Sit on the ground with your knees bent and your feet off the ground.",
          "Hold a weight or medicine ball with both hands and twist your torso to each side.",
        ],
      },
      {
        name: "Side Planks",
        steps: [
          "Lie on your side with your elbow under your shoulder and your legs straight.",
          "Lift your hips off the ground to create a straight line from head to heels.",
        ],
      },
      {
        name: "Bicycle Crunches",
        steps: [
          "Lie on your back with your hands behind your head.",
          "Lift your shoulder blades off the ground and bring one knee toward your chest while rotating your torso.",
        ],
      },
      {
        name: "Woodchoppers",
        steps: [
          "Stand with your feet shoulder-width apart and hold a weight or medicine ball with both hands.",
          "Swing the weight diagonally across your body from high to low, then return to the starting position.",
        ],
      },
      {
        name: "Oblique V-Ups",
        steps: [
          "Lie on your side with your legs straight and your arm extended overhead.",
          "Lift your legs and upper body, bringing your arm to meet your legs.",
        ],
      },
      {
        name: "Leg Raises (Oblique Variation)",
        steps: [
          "Lie on your back with your legs straight.",
          "Raise your legs, keeping them straight, and twist to one side, then lower them back down.",
        ],
      },
      {
        name: "Standing Side Crunches",
        steps: [
          "Stand with your feet hip-width apart and one hand behind your head.",
          "Bring your knee to your elbow, crunching your oblique, then return to the starting position.",
        ],
      },
    ],
  },

  // Quads (Quadriceps) Exercises
  {
    id: 9,
    muscleGroup: "Quads",
    img: FitzenQuads,
    min: 10,
    exercise: 7,
    challenges: 4,
    exercises: [
      {
        name: "Squats",
        steps: [
          "Stand with your feet shoulder-width apart and a barbell on your upper back.",
          "Bend your knees and hips to lower your body down, then stand back up.",
        ],
      },
      {
        name: "Lunges",
        steps: [
          "Stand with your feet together and hold dumbbells by your sides.",
          "Step one foot forward and lower your body into a lunge, then return to the starting position.",
        ],
      },

      {
        name: "Deadlifts",
        steps: [
          "Stand with your feet hip-width apart and a barbell in front of you.",
          "Bend at your hips and knees to lift the barbell, then stand up straight.",
        ],
      },
      {
        name: "Leg Press",
        steps: [
          "Sit in a leg press machine and place your feet on the platform.",
          "Push the platform to extend your legs, then return to the starting position.",
        ],
      },
      {
        name: "Step-Ups",
        steps: [
          "Stand in front of a bench or step with dumbbells in your hands.",
          "Step onto the bench with one foot, then step back down.",
        ],
      },
      {
        name: "Hamstring Curls",
        steps: [
          "Lie face down on a leg curl machine, placing your feet under the pad.",
          "Curl your legs upward by bending your knees, then lower them back down.",
        ],
      },
      {
        name: "Calf Raises",
        steps: [
          "Stand with your toes on the edge of a step or platform and your heels hanging off.",
          "Raise your heels by extending your ankles, then lower them back down.",
        ],
      },
    ],
  },

  // Calves Exercises
  {
    id: 10,
    muscleGroup: "Calves",
    img: FitzenCalves,
    min: 35,
    exercise: 7,
    challenges: 4,
    exercises: [
      {
        name: "Standing Calf Raises",
        steps: [
          "Stand with your feet shoulder-width apart and a barbell on your upper back.",
          "Lift your heels as high as possible by extending your ankles, then lower them back down.",
        ],
      },
      {
        name: "Seated Calf Raises",
        steps: [
          "Sit on a calf raise machine with your knees bent at 90 degrees and your feet on the platform.",
          "Lift your heels by extending your ankles, then lower them back down.",
        ],
      },
      {
        name: "Donkey Calf Raises",
        steps: [
          "Stand on a calf raise machine with a partner on your back.",
          "Lift your heels by extending your ankles, then lower them back down.",
        ],
      },
      {
        name: "Calf Press (Leg Press Machine)",
        steps: [
          "Sit in a leg press machine and place your feet at the bottom of the platform.",
          "Push the platform to extend your ankles, then return to the starting position.",
        ],
      },
      {
        name: "Single-Leg Calf Raises",
        steps: [
          "Stand on one foot with your toes on the edge of a step or platform and your heel hanging off.",
          "Lift your heel by extending your ankle, then lower it back down.",
        ],
      },
      {
        name: "Box Jumps",
        steps: [
          "Stand in front of a box or platform.",
          "Jump onto the box with both feet and then step or jump back down.",
        ],
      },
      {
        name: "Calf Raises with Bands",
        steps: [
          "Attach resistance bands to a stable surface and loop them around your shoulders.",
          "Lift your heels by extending your ankles against the resistance, then lower them back down.",
        ],
      },
    ],
  },

  // Delts (Deltoids) Exercises
  {
    id: 11,
    muscleGroup: "Delts",
    img: FitzenDelts,
    min: 30,
    exercise: 7,
    challenges: 5,
    exercises: [
      {
        name: "Military Press",
        steps: [
          "Sit on a bench with back support and hold a barbell at shoulder height.",
          "Push the barbell overhead until your arms are fully extended, then lower it back to shoulder height.",
        ],
      },
      {
        name: "Dumbbell Press",
        steps: [
          "Sit on a bench with back support and hold a dumbbell in each hand at shoulder height.",
          "Press the dumbbells overhead until your arms are fully extended, then lower them back to shoulder height.",
        ],
      },
      {
        name: "Lateral Raises",
        steps: [
          "Stand with dumbbells in your hands by your sides.",
          "Raise the dumbbells to your sides until your arms are parallel to the ground, then lower them back down.",
        ],
      },
      {
        name: "Front Raises",
        steps: [
          "Stand with a dumbbell in each hand in front of your thighs.",
          "Raise the dumbbells in front of you until your arms are parallel to the ground, then lower them back down.",
        ],
      },
      {
        name: "Shrugs",
        steps: [
          "Stand with a dumbbell in each hand by your sides.",
          "Lift your shoulders as high as you can, then lower them back down.",
        ],
      },
      {
        name: "Upright Rows",
        steps: [
          "Stand with a barbell in front of you with your hands close together.",
          "Pull the barbell up towards your chin, then lower it back down.",
        ],
      },
      {
        name: "Face Pulls",
        steps: [
          "Attach a rope handle to a cable machine at head height.",
          "Pull the rope handle towards your face, then return to the starting position.",
        ],
      },
    ],
  },
];

export default allExercises;
