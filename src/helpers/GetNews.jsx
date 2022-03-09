export const GetNews = async (keyword) => {
  // const url = `https://newsdata.io/api/1/news?apikey=pub_5333f7d35e41c9412f4a55a2eacec2903625&q=${encodeURI(
  //   keyword
  // )}&language=en`;

  const resp = await fetch(
    `https://free-news.p.rapidapi.com/v1/search?q=${encodeURI(
      keyword
    )}&lang=en`,
    {
      method: "GET",
      headers: {
        "x-rapidapi-host": "free-news.p.rapidapi.com",
        "x-rapidapi-key": "ae37d1ef55msh6477e1273cb8faap1aa267jsn3d7c12aec8b4",
      },
    }
  );

  const { articles } = await resp.json();

  console.log(articles);

  const news = articles?.map((article) => {
    return {
      id: article.id,
      author: article.author,
      title: article.title,
      summary: article.summary,
      link: article.link,
      media: article.media,
      rights: article.rights,
    };
  });

  return news;
};
