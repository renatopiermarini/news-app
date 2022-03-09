import { useFetch } from "../../hooks/useFetch";
import { Article } from "../article-container/Article";
import { Loading } from "../loading/Loading";
import "./results.css";

export const SearchResults = ({ keyword }) => {
  const { data: articles, loading } = useFetch(keyword);

  return (
    <div className="search-results">
      {loading && <Loading />}

      {articles && <h3>{"Showing results for: " + keyword}</h3>}

      <div className="article-div animate__fadeIn">
        {articles?.map((article) => (
          <Article
            key={Math.random()}
            author={article.author}
            title={article.title}
            summary={article.summary}
            link={article.link}
            media={article.media}
            rights={article.rights}
          />
        ))}
      </div>
    </div>
  );
};
