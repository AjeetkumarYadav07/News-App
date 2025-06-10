import { useEffect, useState } from "react";
import NewsItem from "./NewsItem"; 

const NewsBoards = ({ category}) => {
  const [articles, setArticles] = useState([]);
  const apiKey = process.env.VITE_API_KEY ;
  console.log(apiKey);

  useEffect(() => {
    const url = `https://newsapi.org/v2/top-headlines?country=us&category=${category}&apiKey=${apiKey}`;

   const fetchingNews = async () => {
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const data = await response.json();
    setArticles(data.articles);
  } catch (error) {
    console.error("Error fetching news:", error);
  }
};

    fetchingNews();
  }, [category]);

  return (
    <>
      <h2 className="text-center">
        Latest <span className="badge bg-danger">News</span>
      </h2>

      
      
          {articles.map((news, index) => (
            <NewsItem
              key={index}
              title={news.title}
              description={news.description}
              src={news.urlToImage}
              url={news.url}
            />
          ))}
       
    
    </>
  );
};

export default NewsBoards;

// import { useEffect, useState } from "react";
// import NewsItem from "./NewsItem";

// const NewsBoards = ({ category }) => {
//   const [articles, setArticles] = useState([]);

//   useEffect(() => {
//     const fetchingNews = async () => {
//       try {
//         const response = await fetch(`/api/news?category=${category}`);
//         const data = await response.json();
//         setArticles(data.articles);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       }
//     };

//     fetchingNews();
//   }, [category]);

//   return (
//     <>
//       <h2 className="text-center">
//         Latest <span className="badge bg-danger">News</span>
//       </h2>

//       {articles.map((news, index) => (
//         <NewsItem
//           key={index}
//           title={news.title}
//           description={news.description}
//           src={news.urlToImage}
//           url={news.url}
//         />
//       ))}
//     </>
//   );
// };

// export default NewsBoards;

