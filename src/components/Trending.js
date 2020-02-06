import React, { useEffect, useState } from "react";
import Trend from "./Trend";
import TopBar from "../Bar/TopBar/TopBar";
import Aboutus from "./Aboutus";

const Trending = () => {
  const APP_ID = "5ee9d0c2";
  const APP_KEYS = "d8b82ede97e7f70d81538a066fa001e4";

  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [query, setQuery] = useState("trending");

  useEffect(() => {
    getRecipes();
  }, [query]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEYS}`
    );
    // console.log(response);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };
  return (
    <div class="main-content">
      <div class="content">
        <h1>TRENDING RECEPIES</h1>
        <div class="trending">
          {recipes.map(recipe => (
            <Trend
              yield={recipe.recipe.yield}
              title={recipe.recipe.label}
              calories={recipe.recipe.calories}
              image={recipe.recipe.image}
              ingredients={recipe.recipe.ingredients}
            />
          ))}
        </div>
      </div>
      {/* <Aboutus /> */}
    </div>
  );
};
export default Trending;
