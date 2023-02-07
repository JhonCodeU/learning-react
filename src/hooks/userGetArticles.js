import { useState, useEffect } from 'react';

const useGetArticles = () => {

  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setArticles([
        { id: 1, title: 'Title 1', content: 'Blog content' },
        { id: 2, title: 'Title 2', content: 'Blog content' },
        { id: 3, title: 'Title 3', content: 'Blog content' },
        { id: 4, title: 'Title 4', content: 'Blog content' },
        { id: 5, title: 'Title 5', content: 'Blog content' },
        { id: 6, title: 'Title 6', content: 'Blog content' },
        { id: 7, title: 'Title 7', content: 'Blog content' },
        { id: 8, title: 'Title 8', content: 'Blog content' },
        { id: 9, title: 'Title 9', content: 'Blog content' },
        { id: 10, title: 'Title 10', content: 'Blog content' },
      ]);
      setLoading(false);
    }, 3000);

  }, []);
  return [articles, loading];
}

export default useGetArticles;