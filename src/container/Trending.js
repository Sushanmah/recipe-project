import React, { useEffect, useState } from "react";
import { Link, BrowserRouter, Route, Switch } from "react-router-dom";

import Trend from "../components/Trend";
import TopBar from "../Bar/TopBar/TopBar";
import Aboutus from "../components/Aboutus";
import Slider from "../Bar/SideBar/Slider";
import logo from "../Bar/TopBar/logo.png";

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
    <div>
      {/* <TopBar />
      <Slider /> */}

      <nav class="mynav">
        <div class="logo">
          <img src={logo} />
        </div>
        <div>
          <button className="btn waves-effect waves-light">
            <Link to={"/loghome"}>Login</Link>
          </button>
          <button class="btn waves-effect waves-light">
            <Link to={"/register"}>Register</Link>
          </button>
        </div>
      </nav>

      <Slider />
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
                ingredients={recipe.recipe.ingredientLines}
              />
            ))}
          </div>
        </div>
      </div>
      {/* <Aboutus /> */}
    </div>
  );
};
export default Trending;
