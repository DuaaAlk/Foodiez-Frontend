import React, { useState } from "react";
import { Form, Stack, Button, Row } from "react-bootstrap";
import { observer } from "mobx-react";
import categoryStore from "../stores/categoryStore";
import CategoryItem from "./CategoryItem";
import CategoryModal from "./CategoryModal";

function CategoryList() {
  const [query, setQuery] = useState("");

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const categoryList = categoryStore.categories
    .filter((category) =>
      category.name.toLowerCase().includes(query.toLowerCase())
    )
    .map((category) => <CategoryItem key={category._id} category={category} />);

  return (
    <div>
      <div>
        <Stack direction="horizontal" gap={2}>
          <Form.Control
            className="m-2"
            placeholder="Search for category"
            onChange={(event) => setQuery(event.target.value)}
          />
          <Button variant="outline-light" onClick={handleShow}>
            Add Category
          </Button>
          <CategoryModal show={show} handleClose={handleClose} />
        </Stack>
        <Row>{categoryList}</Row>
      </div>
    </div>
  );
}

export default observer(CategoryList);
