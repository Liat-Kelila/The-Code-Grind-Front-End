import React, {useState, useEffect} from 'react';

const Item = (props) => {

//Schema: name, season, image, category, ingredients, description, hasCaffeine, hasDairy
  return (
//state declaration
const [items, setItems] = useState([]);
let [display, setDisplay] = useState('suggestItem')

// //Use Effect
// useEffect(() => {
//     axios
//       .get('')
//       .then((response) => {
//           setItems(response.data)
//       })
// }, []);




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
