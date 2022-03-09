export const GetNews = async (keyword) => {
  const url = `https://newsapi.org/v2/everything?q=${encodeURI(
    keyword
  )}&apiKey=e027dabe16624d4aab89044f49fabb61`;

  const resp = await fetch(url);

  const { articles } = await resp.json();

  const news = articles?.map((article) => {
    return {
      source: article.source.name,
      author: article.author,
      title: article.title,
      description: article.description,
      url: article.url,
      urlToImage: article.urlToImage,
      date: article.publishedAt,
      content: article.content,
    };
  });

  return news;
};
