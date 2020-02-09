import React from "react";
import { Link, BrowserRouter as Router, Route } from "react-router-dom";
import Detail from "./Detail";

const Trend = props => {
  // let id=props.key;

  return (
    <Router>
      <div class="trending">
        <div class="card">
          <Link to={"/detail"}>
            <img src={props.image} />
            <h3 class="head3">{props.title}</h3>
          </Link>
          <div class="overlay">
            <div class="card-text">
              <h3 class="head3">Ingredients</h3>
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

export default Trend;

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
