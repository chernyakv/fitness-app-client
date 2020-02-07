import instance from "./instance";

export const planService = {
  getByUserId,
  addNews,

};

function getByUserId(userId) {
  return instance.get(`motivations/u/${userId}`)
}

function addNews(motivationId, news) {

  return instance.post(`motivations/${motivationId}/news`, {...news});
}

