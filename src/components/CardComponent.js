import React from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from "reactstrap";
import "./CardComponent.styles.css";
import { withRouter } from "react-router-dom";
const CardComponent = (props) => {
  const { recipe } = props;
  const handleClick = (e) => {
    e.preventDefault();
    props.history.push({
      pathname: "/payment",
      state: { amount: e.target.id },
    });
  };
  return (
    <Card className="CardComponent">
      <CardImg
        top
        width="100%"
        src={recipe.image}
        height="120px"
        alt="Card image cap"
      />
      <CardBody>
        <CardTitle style={{ fontWeight: "bolder" }}>{recipe.name}</CardTitle>
        <CardSubtitle>{recipe.category}</CardSubtitle>
        <CardText>{recipe.description}</CardText>
        <Button onClick={handleClick} color="success" id={recipe.price}>
          ${recipe.price}
        </Button>
      </CardBody>
    </Card>
  );
};

export default withRouter(CardComponent);
