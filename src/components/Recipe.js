import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Detail from "./Detail";

const Recipe = props => {
  // let id=props.key;

  return (
    <Router>
      <div class="recepie">
        <div class="card-recepie">
          <Link to={"/detail"}>
            <img src={props.image} />
          </Link>
          <h3 class="head3">{props.title}</h3>
          <div class="overlay-recepie">
            <div class="card-text">
              <h3 class="head3">Ingregients:</h3>
              <ul>
                {props.ingredients.map(ingredient => (
                  <li>{ingredient}</li>
                ))}
              </ul>
              {/* <button>{props.yield}</button> */}
            </div>
          </div>
        </div>
      </div>

      <Route exact path="/detail:{props.key}" component={Detail} />
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
