import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function CategoryItem({ category }) {
  return (
    <>
      <Card>
        <Card.Body>
          <Link to={`/Categories/${category._id}`}>
            <Card.Img variant="top" src={category.image} alt={category.name} />
          </Link>
          <Card.Title>{category.name}</Card.Title>
          <Card.Text>{category.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}
export default CategoryItem;
