import React, { useState } from "react";
import { Form, Stack, Button, Row } from "react-bootstrap";
import { observer } from "mobx-react";
import categoryStore from "../stores/categoryStore";
import CategoryItem from "./CategoryItem";
import CategoryModal from "./CategoryItem";

function CategoryList() {
  const [query, setQuery] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => {
    console.log("Clicked");
    setShow(true);
  };

  const categoryList = categoryStore.categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem key={category._id} category={category} />);

  return (
    <div>
      <Stack direction="horizontal" gap={2}>
        <Form.Control
          className="m-2"
          placeholder="Search for category"
          onChange={(event) => setQuery(event.target.value)}
        />
        <Button variant="outline-dark" onClick={handleShow}>
          Add Category
        </Button>
        <CategoryModal show={show} handleShow={handleClose} />
      </Stack>
      <Row>{categoryList}</Row>
    </div>
  );
}

export default observer(CategoryList);
