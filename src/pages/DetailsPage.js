import React from 'react'
import { useLocation } from "react-router-dom";
import { timeElapsedSince } from '../Utils/timeElapsed/timeElapsed';
import { filterAndSliceArticles } from '../Utils/filterAndSliceArticles/filterAndSliceArticles';
import HeaderNavigationMenu from '../components/Navigation/HeaderNavigationMenu';
import CategoryComponent from '../components/Category/Category';
import Card from '../components/Card/Card';
import CategoryHeader from '../components/CategoryHeader/Header';
import Loader from '../components/Loader/Loader';

const DetailsPage = () => {
    const location = useLocation();
    const { category } = location.state;
  return (
    <>
      {/* nav */}
      <HeaderNavigationMenu title={"News App"} />
      <CategoryComponent />
      <div className="flex-container">
        <div className="flex-item-left">
          <CategoryHeader title={category.title} />
          {category.data ? (
            filterAndSliceArticles(category.data, 20).map(
              (article, index) => (
                <Card
                  key={index}
                  source={article.source.name}
                  url={article.url}
                  imageUrl={article.urlToImage}
                  title={article.title}
                  description={article.content}
                  lastUpdated={timeElapsedSince(article.publishedAt)}
                />
              )
            )
          ) : (
            <Loader />
          )}
        </div>
      </div>
    </>
  );
}

export default DetailsPage