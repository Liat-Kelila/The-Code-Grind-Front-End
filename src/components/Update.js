import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Update = (props) => {

//State Declarations
//Schema: name, season, image, category, ingredients, description, hasCaffeine, hasDairy
const [items, setItems] = useState([]);
const [displayPage, setDisplayPage] = useState('update');

//Use Effect

//Update
const updateItems = (event) => {
    event.preventDefault();
    axios.put(
      `https://codegrind.herokuapp.com/drinks/` + props.items.id,
        {
          name: event.target[0].value,
          season: event.target[1].value,
          image: event.target[2].value,
          category: event.target[3].value,
          ingredients: event.target[4].value,
          description: event.target[5].value,
          hasCaffeine: event.target[6].value,
          hasDairy: event.target[7].value
        }
    ).then((response) => {
      axios.get('https://codegrind.herokuapp.com/drinks')
    })
      .then((response) => {
        setItems(response.data);
      })
}

  return (
  <>
    {
      <form onSubmit={updateItems}>
        <h1>Update Menu Items</h1>
            Name: <input type="text" defaultValue={props.items.name}/>
            Season: <input type="text" defaultValue={props.items.image}/>
            Image: <input type="text"  defaultValue={props.items.image}/>
            Category: <input type="text"  defaultValue={props.items.category}/>
            Ingredients: <input type="text" defaultValue={props.items.ingredients}/>
            Description:  <input type="text" defaultValue={props.items.ingredients}/>
            Has Caffeine: <input type="checkbox" defaultValue={props.items.ingredients}/>
            Has Dairy:  <input type="checkbox" defaultValue={props.items.ingredients}/>
            <input type="hidden" value={props.item.id}/>
            <input type="submit" value="Update Items"/>
        </form>
      }
  </>
)

}
export default Update;
