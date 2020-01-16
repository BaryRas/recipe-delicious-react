import React from "react";
import Item from "../layouts/ResultsItem";
import uuid from "uuid";

const Likes = props => {
  const recipes = props.recipes;
  console.log(recipes.length);
  if (recipes !== "") {
    return (
      <div className="results">
        <h2 className="heading-2">My Favorite List</h2>
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
        <h2 className="heading-2">My Favorite List</h2>
      </div>
    );
  }
};

export default Likes;
