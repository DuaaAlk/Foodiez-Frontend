import { observer } from "mobx-react";
import React from "react";
import { Card } from "react-bootstrap";
function IngredientItem({ ingredient }) {
  return (
    <div>
      <Card className="glassEffect" style={{ width: "18rem" }}></Card>
      <Card.Body>
        <Card.Title>{ingredient.name}</Card.Title>
      </Card.Body>
    </div>
  );
}

export default observer(IngredientItem);
