import React from "react";

const Item = props => {
  return (
    <li onClick={props.controlRecipe}>
      <a className="results__link results__link--active" href={props.hash}>
        <figure className="results__fig">
          <img src={props.image} alt={props.title} />
        </figure>
        <div className="results__data">
          <h4 className="results__name">{props.title}</h4>
          <p className="results__author">
            Calories : {Math.round(parseFloat(props.calories))}
          </p>
        </div>
      </a>
    </li>
  );
};

export default Item;
