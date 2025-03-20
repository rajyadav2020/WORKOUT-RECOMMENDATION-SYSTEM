import React, { useState } from 'react';
import WorkoutForm from './WorkoutForm';
import WorkoutPlan from './WorkoutPlan';


const WorkoutRecommendation = () => {
  const [workoutPlan, setWorkoutPlan] = useState(null);

  const handleFormSubmit = (goal) => {
    const plan = generateWorkoutPlan(goal);
    setWorkoutPlan(plan);
  };

  const generateWorkoutPlan = (goal) => {
    const plans = {
      weightLoss: [
        { exercise: 'Treadmill', duration: '30 mins' },
        { exercise: 'Jumping Jacks', duration: '15 mins' },
        { exercise: 'Plank', duration: '1 min' },
        { exercise: 'Squats', duration: '45 seconds'}
      ],
      muscleGain: [
        { exercise: 'Bench Press', sets: 3, reps: 10 },
        { exercise: 'Squats', sets: 3, reps: 12 },
        { exercise: 'Deadlifts', sets: 3, reps: 8 },
      ],
      endurance: [
        { exercise: 'Cycling', duration: '45 mins' },
        { exercise: 'Swimming', duration: '30 mins' },
        { exercise: 'Burpees', duration: '20 mins' },
      ],
      flexibility: [
        { exercise: 'Yoga', duration: '30 mins' },
        { exercise: 'Stretching', duration: '20 mins' },
        { exercise: 'Pilates', duration: '30 mins' },
        { exercise: 'Calisthenics', duration: '10 minutes'}
      ],
      improved: [
        { exercise: 'Walking', duration: '10000 steps'},
        { exercise: 'Sleep', duration: '7 hours daily'},
        { exercise: 'Meditation', duration: '30 minutes daily'}
        
      ]
    };

    return plans[goal] || null;
  };

  return (
    <div className="App">
      <h1>Personalized Workout Recommendation</h1>
      <WorkoutForm onSubmit={handleFormSubmit} />
      {workoutPlan && <WorkoutPlan plan={workoutPlan} />}
    </div>
  );
};

export default WorkoutRecommendation;