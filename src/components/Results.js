import React from "react";
import Item from "../layouts/ResultsItem";
import uuid from "uuid";

const Results = props => {
  const recipes = props.recipes;
  if (props !== []) {
    return (
      <div className="results">
        <ul className="results__list">
          {recipes.map((recipe, index) => {
            const id = uuid.v4();
            const hash = `#${index}`;
            return (
              <Item
                key={id}
                controlRecipe={() => props.controlRecipe(recipes)}
                hash={hash}
                image={recipe.recipe.image}
                title={recipe.recipe.label}
                calories={recipe.recipe.calories}
              />
            );
          })}
        </ul>
      </div>
    );
  } else {
    return (
      <div className="results">
        <ul className="results__list"></ul>
      </div>
    );
  }
};

export default Results;
