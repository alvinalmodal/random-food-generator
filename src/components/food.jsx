import React, { Component } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import FoodService from "../services/foodService";

class Food extends Component {
  state = {
    food: {},
  };

  async componentDidMount() {
    await this.getRandomFood();
  }

  getRandomFood = async () => {
    let foodService = new FoodService();
    let food = await foodService.getRandomFood();
    await this.setState({ food });
  };

  getIngredients = () => {
    const { food } = this.state;
    let ingredients = Object.keys(food).filter(
      (property) => property.includes("Ingredient") && food[property] !== ""
    );
    console.log(ingredients);
    return (
      <ul>
        {ingredients.map((property) => (
          <li>{food[property]}</li>
        ))}
      </ul>
    );
  };

  render() {
    const { strMealThumb, strMeal, strCategory, strInstructions } =
      this.state.food;
    let footer = (
      <span>
        <Button label="Save" icon="pi pi-check" />
        <Button
          label="Cancel"
          icon="pi pi-times"
          className="p-button-secondary p-ml-2"
        />
      </span>
    );

    return (
      <React.Fragment>
        <div className="generate-food">
          <Button
            label="Random recipe"
            icon="pi pi-check"
            iconPos="right"
            className="generate-food-btn"
            onClick={this.getRandomFood}
          />
        </div>

        <div className="p-d-flex p-jc-center">
          <Card
            title={strMeal}
            subTitle={strCategory}
            className="food-recipe"
            footer={footer}
            header={<img alt="Card" src={strMealThumb} />}
          >
            <h5>Ingredients</h5>
            {this.getIngredients()}
            <p className="p-m-2" style={{ lineHeight: "1.5" }}>
              {strInstructions}
            </p>
          </Card>
        </div>
      </React.Fragment>
    );
  }
}

export default Food;
