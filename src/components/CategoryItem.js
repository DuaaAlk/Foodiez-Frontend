import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryItem({ category }) {
  return (
    <>
      <Link to={`/${category._id}/recipes`}>
        <Card style={{ width: "25rem" }}>
          <div class="container">
            <img src={category.image} alt={category.name} class="image" />
            <div class="overlay">
              <div class="text">{category.name}</div>
            </div>
          </div>
        </Card>
      </Link>
    </>
  );
}
export default CategoryItem;
