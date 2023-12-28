export function filterAndSliceArticles(articles, maxArticles) {
  const filteredData = articles.filter((item) => item.urlToImage !== null);
  return filteredData.slice(0, maxArticles);
}
