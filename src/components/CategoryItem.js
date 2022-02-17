import React from "react";
import { Card } from "react-bootstrap";

function CategoryItem(category) {
  return (
    <>
      <Card>
        <Card.Img variant="top" src={category.image} alt={category.name} />
        <Card.Body>
          <Card.Title>Category Name</Card.Title>
          {/* <Card.Text>{category.description}</Card.Text> */}
        </Card.Body>
      </Card>
    </>
  );
}
export default CategoryItem;
