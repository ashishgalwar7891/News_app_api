import React from 'react';
import {useContext} from 'react';
import {useNavigate} from 'react-router-dom';
import Button from '../Button/Button.jsx';
import { NewsAppContext } from '../../Context/NewsAppProvider.jsx';
import { categoryTokens } from '../../staticdata.jsx';
import './Category.css';

const Category = () => {
      const navigate = useNavigate();
      const {
        businessState,
        entertainmentState,
        healthState,
        scienceState,
        sportsState,
        technologyState,
      } = useContext(NewsAppContext);
      const categoryDetailPage = (categoryName, data) => {
        const category = { title: categoryName, data: data };
        navigate(`/detail/${categoryName}`, { state: { category } });
      };
      const handleCategory = (categoryName) => {
        switch (categoryName) {
          case "business":
            categoryDetailPage(categoryName, businessState);
            break;
          case "entertainment":
            categoryDetailPage(categoryName, entertainmentState);
            break;
          case "health":
            categoryDetailPage(categoryName, healthState);
            break;
          case "science":
            categoryDetailPage(categoryName, scienceState);
            break;
          case "sports":
            categoryDetailPage(categoryName, sportsState);
            break;
          case "technology":
            categoryDetailPage(categoryName, technologyState);
            break;
          default:
            console.error(`Invalid category: ${categoryName}`);
        }
      };
  return (
    <section className="category-wrapper">
      {categoryTokens.map(({ categoryName, color }) => (
        <Button
          key={categoryName}
          onClick={() => handleCategory(categoryName)}
          style={{ backgroundColor: color }}
        >
          {categoryName}
        </Button>
      ))}
    </section>
  );
}

export default Category