import React, { useEffect, useState, useCallback } from "react";
import { APP_ID, APP_KEY } from "./helpers";
import Header from "./components/Header";
import Results from "./components/Results";
import Recipe from "./components/Recipe";
import Likes from "./components/Likes";
import uuid from "uuid";
import "./App.css";

function App() {
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("");
  const [itemRecipe, setitemRecipe] = useState([]);
  const [likes, setLikes] = useState([]);

  // Push query to recipes
  const getRecipes = useCallback(async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  }, [query]);

  // Get query from view
  const updateSearch = e => {
    setSearch(e.target.value);
  };

  // Search for recipes
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  };

  // Recipe Controller
  const controlRecipe = recipe => {
    window.addEventListener("hashchange", e => {
      e.stopPropagation();
      const hash = window.location.hash.replace("#", "");
      if (hash) {
        // const recipe = recipes[hash].recipe;
        const rec = recipe[hash];
        console.log(rec);
        setitemRecipe(rec);
      }
    });
  };

  // Add recipe to favorite
  const handleAddLikes = recipe => {
    const like = {
      isLiked: true,
      recipe: recipe.recipe,
      id: uuid.v4()
    };
    const addLike = [...likes, like];
    console.log(addLike);
    setLikes(addLike);
  };

  useEffect(() => {
    getRecipes();
  }, [query, getRecipes]);

  return (
    <div className="container">
      <Header
        search={search}
        getSearch={getSearch}
        updateSearch={updateSearch}
      />

      {/* Items section  */}
      <Results recipes={recipes} controlRecipe={controlRecipe} />

      {/* Description section */}
      <Recipe
        recipe={itemRecipe.length !== 0 ? itemRecipe : ""}
        handleAddLikes={handleAddLikes}
      />

      {/* Likes Section */}
      <Likes
        recipes={likes.length !== 0 ? likes : ""}
        controlRecipe={controlRecipe}
      />
    </div>
  );
}

export default App;
