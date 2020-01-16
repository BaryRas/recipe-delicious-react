import React from "react";
import uuid from "uuid";

const Recipe = props => {
  const recipes = props.recipe;
  if (recipes !== "") {
    const { calories, image, label, ingredients, url } = recipes.recipe;
    const serving = props.recipe.recipe.yield;
    return (
      <div className="recipe">
        <figure className="recipe__fig">
          <img src={image} alt={label} className="recipe__img" />
          <h1 className="recipe__title">
            <span>{label}</span>
          </h1>
        </figure>
        <div className="recipe__details">
          <div className="recipe__info">
            <svg className="recipe__info-icon">
              <use href="img/icons.svg#icon-stopwatch"></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--minutes">
              {Math.round(parseFloat(calories))}
            </span>
            <span className="recipe__info-text"> calories</span>
          </div>
          <div className="recipe__info">
            <svg className="recipe__info-icon">
              <use href="img/icons.svg#icon-man"></use>
            </svg>
            <span className="recipe__info-data recipe__info-data--people">
              {serving}
            </span>
            <span className="recipe__info-text"> servings</span>

            {/* <div className="recipe__info-buttons">
              <button className="btn-tiny">
                <svg>
                  <use href="img/icons.svg#icon-circle-with-minus"></use>
                </svg>
              </button>
              <button className="btn-tiny">
                <svg>
                  <use href="img/icons.svg#icon-circle-with-plus"></use>
                </svg>
              </button>
            </div> */}
          </div>
          <button
            className="recipe__love"
            onClick={() => props.handleAddLikes(recipes)}
          >
            <svg className="header__likes">
              <use href="img/icons.svg#icon-heart-outlined"></use>
            </svg>
          </button>
        </div>
        <div className="recipe__ingredients">
          <ul className="recipe__ingredient-list">
            {ingredients.map(ingredient => {
              return (
                <li className="recipe__item" key={uuid.v4()}>
                  <svg className="recipe__icon">
                    <use href="img/icons.svg#icon-check"></use>
                  </svg>
                  <div className="recipe__count"></div>
                  <div className="recipe__ingredient">
                    <span className="recipe__unit">{ingredient.text}</span>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
        <div className="recipe__directions">
          <h2 className="heading-2">How to cook it</h2>
          <a className="btn-small recipe__btn" href={url} target="_blank">
            <span>Directions</span>
            <svg className="search__icon">
              <use href="img/icons.svg#icon-triangle-right"></use>
            </svg>
          </a>
        </div>
      </div>
    );
  } else {
    return <div className="recipe"></div>;
  }
};

export default Recipe;
