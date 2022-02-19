import React from "react";
import { Card } from "react-bootstrap";

function CategoryItem({ category }) {
  return (
    <>
      {" "}
      <Card>
        <div class="container">
          <img src={category.image} alt={category.name} class="image" />
          <div class="overlay">
            <div class="text">{category.name}</div>
          </div>
        </div>
        {/* <Card.Img
          className="card-img-top"
          variant="top"
          src={category.image}
          alt={category.name}
        /> */}
        {/* <Card.Title>{category.name}</Card.Title> */}
      </Card>
    </>
  );
}
export default CategoryItem;
