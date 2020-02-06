import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";
import TopBar from "../Bar/TopBar/TopBar";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

const Home = () => {
  const APP_ID = "5ee9d0c2";
  const APP_KEYS = "d8b82ede97e7f70d81538a066fa001e4";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("chicken");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`
    );
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSerch = e => {
    setSearch(e.target.value);
  };
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
  };
  return (
    <div className="App">
      {/* <TopBar /> */}
      <h2>
        <Link to={"/"}> Back</Link>
      </h2>
      <div className="search-area">
        <form onSubmit={getSearch} className="search-form">
          <div className="search-box">
            <input
              className="search-input"
              type="text"
              value={search}
              onChange={updateSerch}
            />
            <button className="search-btn" type="submit">
              Search
            </button>
          </div>
        </form>
      </div>

      {recipes.map(recipe => (
        <Recipe
          yield={recipe.recipe.yield}
          title={recipe.recipe.label}
          calories={recipe.recipe.calories}
          image={recipe.recipe.image}
          ingredients={recipe.recipe.ingredientLines}
        />
      ))}
    </div>
  );
};
export default Home;
