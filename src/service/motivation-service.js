import instance from "./instance";

export const motivationsService = {
  getMotivationByUserId,
  addMotivationItem,
  removeMotivationItem
};

function getMotivationByUserId(userId) {
  return instance.get(`motivations/u/${userId}`)
}

function addMotivationItem(motivationId, motivationItem) {
  return instance.post(`motivations/${motivationId}/motivationItems`, {...motivationItem});
}
function removeMotivationItem(motivationId, motivationItemId) {
  return instance.delete(`motivations/${motivationId}/motivationItems/${motivationItemId}`);
}

