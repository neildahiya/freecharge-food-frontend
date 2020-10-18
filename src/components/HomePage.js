import React, { Component } from "react";
import CardComponent from "./CardComponent";
import { Container, Row, Col } from "reactstrap";
import "./HomePage.styles.css";
import axios from "axios";
import { v4 } from "uuid";
import Jumbo from "./Jumbo";

const AllRecipes = ({ recipes }) => {
  return (
    <>
      <Jumbo />

      {recipes.map((recipe) => {
        return (
          <Col key={v4()} xs="6" sm="3">
            <CardComponent recipe={recipe} />
          </Col>
        );
      })}
    </>
  );
};

class HomePage extends Component {
  // As data is only used in this component, I'm using state to store data instead of using a state management library
  constructor(props) {
    super(props);
  }
  state = {
    recipes: [],
    isLoaded: false,
  };
  signal = axios.CancelToken.source();
  componentDidMount = () => {
    axios
      .get("http://starlord.hackerearth.com/recipe", {
        cancelToken: this.signal.token,
      })
      .then((res) => {
        const recipes = res.data;

        this.setState({ recipes: recipes, isLoaded: true });
      })
      .catch((err) => console.log(err));
  };
  componentWillUnmount = () => {
    this.signal.cancel("Api is being canceled");
  };
  render() {
    return (
      <div className="HomePage">
        <Container>
          <Row>
            {this.state.isLoaded && <AllRecipes recipes={this.state.recipes} />}
          </Row>
        </Container>
      </div>
    );
  }
}
export default HomePage;
