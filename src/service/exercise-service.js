import instance from "./instance";

export const exerciseService = {
  updateExercise,
  getExerciseForToday
};

function getExerciseForToday(goalId) {
  return instance.get(`tasks/today?goalId=${goalId}`);
}

function updateExercise(id, exercise) {
  return instance.put(`tasks/${id}`, {...exercise});
}