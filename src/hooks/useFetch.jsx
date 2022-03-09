import { useState, useEffect } from "react";
import { GetNews } from "../helpers/GetNews";

export const useFetch = (keyword) => {
  const [state, setState] = useState({
    data: [],
    loading: true,
  });

  useEffect(() => {
    GetNews(keyword).then((articles) => {
      setState({
        data: articles,
        loading: false,
      });
    });
  }, [keyword]);

  return state;
};
