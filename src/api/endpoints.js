//Important!
//Nu e safe sa lasi keys aici
const API_KEY = "f58f923a-9edb-4d46-929b-b312d25741ab";

export const getNewsCategoriesEndpoint = (
  category,
  page = 1,
  pageSize = 20
) => {
  const queryParams = `?api-key=${API_KEY}&section=${category}&show-fields=all&page=${page}&page-size=${pageSize}`;

  return `https://content.guardianapis.com/search${queryParams}`;
};

export const getNewsDetailsEndpoint = newsId => {
  const queryParams = `?api-key=${API_KEY}&show-fields=all`;

  return `https://content.guardianapis.com/${newsId}${queryParams}`;
};
