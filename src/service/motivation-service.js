import instance from "./instance";

export const motivationsService = {
  getMotivationByUserId,
  addMotivationItem
};

function getMotivationByUserId(userId) {
  return instance.get(`motivations/u/${userId}`)
}


function addMotivationItem(motivationId, motivationItem) {

  return instance.post(`motivations/${motivationId}/motivationItems`, {...motivationItem});
} 

