import React from "react";
import { Card } from "react-bootstrap";
import { Link } from "react-router-dom";

function RecipeItem({ recipe }) {
  return (
    <>
      <Card>
        <Card.Body>
          <Link to={`/recepies/${recipe._id}`}>
            <Card.Img variant="top" src={recipe.image} alt={recipe.name} />
          </Link>
          <Card.Title>{recipe.name}</Card.Title>
          <Card.Text>{recipe.description}</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default RecipeItem;
