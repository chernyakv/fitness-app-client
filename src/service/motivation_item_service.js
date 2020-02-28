import instance from "./instance";

export const motivationItemService = {
  addNewsItem,
  getMotivationItem
};

function addNewsItem(motivationItemId, newsItem) {
  return instance.put(`news/motivationItems/${motivationItemId}`, {...newsItem})
}

function getMotivationItem(motivationItemId) {
  return instance.get(`news/motivationItems/${motivationItemId}`);
}