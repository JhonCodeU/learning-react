import styled from 'styled-components';
import useGetArticles from '../hooks/userGetArticles';

const Blog = () => {
  const [articles, loading] = useGetArticles();

  return (
    <ContainerBlog>
      <Title>Blog</Title>
      {loading && <p>Loading...</p>}
      <div>
        {articles.map((article) => (
          <div key={article.id}>
            <Article>{article.title}</Article>
            <Article>{article.content}</Article>
          </div>
        ))}
      </div>
    </ContainerBlog>
  );
}

const ContainerBlog = styled.div`
 margin: 40px 0 20px 0;
`;

const Title = styled.h2`
margin-bottom: 20px;
`;

const Article = styled.p`
margin-bottom: 10px;
`;

export default Blog;