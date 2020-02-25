import instance from "./instance";

export const motivationsService = {
  getMotivationByUserId,
  addMotivationItem,
  removeMotivationItem,
};

function getMotivationByUserId(userId) {
  return instance.get(`news/u/${userId}`)
}

function addMotivationItem(motivationId, motivationItem) {
  return instance.post(`news/${motivationId}/motivationItems`, {...motivationItem});
}

function removeMotivationItem(motivationItemId) {
  return instance.delete(`news/motivationItems/${motivationItemId}`);
}



