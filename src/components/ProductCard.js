import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, Button } from "react-bootstrap";

// import images
import img1 from "../img/img1.jpg";
import img2 from "../img/img2.jpg";
import img3 from "../img/img3.jpg";
import img4 from "../img/img4.jpg";
import img5 from "../img/img5.jpg";

const ProductCard = (props) => {
  let { imgSrc, price, title } = props.data;
  return (
    <Card className="p-0 overflow-hidden h-100 shadow">
      <div className="overflow-hidden rounded p-0 bg-light">
        <Card.Img variant="top" src={imgSrc} />
      </div>
      <Card.Body className="text-center">
        <Card.Title className="display-6">{price}</Card.Title>
        <Card.Title className="display-6">{title}</Card.Title>
      </Card.Body>
      <Button className="w-100 rounded-0" variant="success">
        Add To Cart
      </Button>
    </Card>
  );
};

export default ProductCard;
