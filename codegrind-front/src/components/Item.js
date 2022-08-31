import React, {useState, useEffect} from 'react';


//Schema: name, season, image, category, ingredients, description, hasCaffeine, hasDairy
const Item = (props) => {

  <div className="item">
      <img src={props.items.image} alt=""/>
      <h3>Name: {props.items.name}</h3>
      <p>Category: {props.items.category}</p>
      <p>Description: {props.items.description}</p>
      <p>Caffeinated: {props.items.hasCaffeine}</p>
      <p>Has Dairy: {props.items.hasDairy}</p>
  </div>

}
// <button onClick{}>Edit</button>

export default Item;
