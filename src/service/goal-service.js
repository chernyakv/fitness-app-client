import instance from "./instance";

export const goalService = {
  addGoal,
  updateGoal,
  removeGoal,
  getById,
  getTodayExercise,
  updateExercise
}

function getById(userId) {
  return instance.get(`goals/u/${userId}`);
}

function addGoal(goal) {
  return instance.post(`goals`, {...goal});
}

function updateGoal(id, goal) {
  return instance.put(`goals/${id}`, {...goal});
}

function removeGoal(goalId) {
  return instance.delete(`goals/${goalId}`);
}

function getTodayExercise(goalId) {
  return instance.get(`goals/${goalId}/exercise`);
}

function updateExercise(exerciseId, exercise) {
  debugger;
  return instance.put(`goals/${exerciseId}/exercise/${exerciseId}`, {...exercise});
}

