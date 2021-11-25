import React from "react";
import { Link } from "react-router-dom";
import { categoryData } from "../../data/categoryData";

const HomeCats = () => {
  return (
    <div className="home-cat">
      {categoryData.map((cat) => (
        <Link to={`/tienda/category/${cat.id}`} key={cat.id}>
          <div
            className="category-card"
            style={{
              backgroundImage: `url(${
                process.env.PUBLIC_URL + `/assets/cats/${cat.id}.jpg`
              })`,
            }}
          >
            <div className="cat-name">
              <h3>{cat.name}</h3>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default HomeCats;
