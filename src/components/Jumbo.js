import React from "react";
import { Jumbotron, Button, Container } from "reactstrap";

const Jumbo = (props) => {
  return (
    <Jumbotron fluid style={{ width: "100%" }}>
      <Container fluid>
        <h1 className="display-3">Feeling hungry?</h1>

        <p className="lead">
          Well wait no more! Order delicious food now! 30% off & free home
          delivery if you order in the next 2 hours!
        </p>
      </Container>
    </Jumbotron>
  );
};

export default Jumbo;
