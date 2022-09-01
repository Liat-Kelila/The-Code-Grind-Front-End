import React, {useState, useEffect} from 'react';


const Item = (props) => {
  return (
  <div className="item">
      <img src={props.item.image} alt=""/>
      <h3>Name: {props.item.name}</h3>
      <p>Category: {props.item.category}</p>
      <p>Description: {props.item.description}</p>
      <p>Caffeinated: {props.item.hasCaffeine}</p>
      <p>Has Dairy: {props.item.hasDairy}</p>
  </div>
  )
}

export default Item;
