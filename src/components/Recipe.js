import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";


const Recipe = props => {
  // let id=props.key;

  return (
    <Router>
      <div class="trending">
        <div class="card">

          <Link to={"/detail"}>
            <img src={props.image} />
          </Link>
          <h3>{props.title}</h3>
          <div class="overlay">
            <div class="card-text">
              <h3>{props.title}</h3>
              <ul>
                {props.ingredients.map(ingredient =><li>
                  {ingredient}
                </li>)}
              </ul>
              {/* <button>{props.yield}</button> */}
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default Recipe;

{
  /*<ol>*/
}
{
  /*    {props.ingredients.map(ingredient =>(*/
}
{
  /*        <li>{ingredient.text}</li>*/
}
{
  /*    ))}*/
}
{
  /*</ol>*/
}
{
  /*<p>Calories:{props.calories}</p>*/
}
