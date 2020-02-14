import instance from "./instance";

export const exerciseService = {
  updateExercise,
  getExerciseForToday
};

function getExerciseForToday(userId) {
  return instance.get(`tasks/today?userId=${userId}`);
}

function updateExercise(id, exercise) {
  return instance.put(`tasks/${id}`, {...exercise});
}