import React, {useState} from 'react';

const Item = (props) => {

//Schema: name, season, image, category, ingredients, description, hasCaffeine, hasDairy
  return (
    <>
        <img src={props.items.image}/>
        <h3>Name: {props.items.name}</h3>
        <p>Category: {props.items.category}</p>
        <p>Description: {props.items.description}</p>
        <p>Caffeinated: {props.items.hasCaffeine}</p>
        <p>Has Dairy: {props.items.hasDairy}</p>
    </>
  )
}

export default Item;
