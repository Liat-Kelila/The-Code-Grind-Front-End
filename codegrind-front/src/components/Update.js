import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Update = (props) => {
  const [items, setItems] = useState([]);
  useEffect(() => {
        axios
          .get('http://localhost:2000/drinks')
          .then((response) => {
              setItems(response.data)
          })
    }, []);

const updateItems = (event) => {
    event.preventDefault();
    axios.put(
      `http://localhost:2000/drinks/` + props.item.id,
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
      axios.get('http://localhost:2000/drinks')
    })
      .then((response) => {
        setItems(response.data);
      })
}

  return (
<>
      <form onSubmit={updateItems}>
        <h1>Update Menu Items</h1>
            Name: <input type="text" defaultValue={props.item.name}/>
            Season: <input type="text" defaultValue={props.item.image}/>
            Image: <input type="text"  defaultValue={props.item.image}/>
            Category: <input type="text"  defaultValue={props.item.category}/>
            Ingredients: <input type="text" defaultValue={props.item.ingredients}/>
            Description:  <input type="text" defaultValue={props.item.ingredients}/>
            Has Caffeine: <input type="checkbox" defaultValue={props.item.ingredients}/>
            Has Dairy:  <input type="checkbox" defaultValue={props.item.ingredients}/>
            <input type="hidden" value={props.item.id}/>
            <input type="submit" value="Update Items"/>
        </form>
</>
  )

}
export default Update;
