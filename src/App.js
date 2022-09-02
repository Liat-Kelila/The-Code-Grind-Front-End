import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
//Import component(s)
import Input from './components/Input';
import Item from './components/Item';
import Update from './components/Update';

const App = () => {

const [items, setItems] = useState([]);
const [showSuggestionBox, setShowSuggestionBox] = useState(false);
let [display, setDisplay] = useState('main menu');


//Use Effect
useEffect(() => {
      axios
        .get('https://codegrind.herokuapp.com/drinks')
        .then((response) => {
            setItems(response.data)
        })
  }, []);


const handleDelete = (itemData) => {
    axios.delete(`https://codegrind.herokuapp.com/drinks/${itemData._id}`)
      .then(() => {
        axios.get('https://codegrind.herokuapp.com/drinks')
          .then((response) => {
            setItems(response.data)
          })
      })
  }

  const updateItems = (event) => {
        event.preventDefault();
        axios.put(`https://codegrind.herokuapp.com/drinks/` + event.target[8].value,
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
  ////////////DOES NOT UPDATE ON PAGE, WILL NEED LOOKING THROUGH
      //Display of menu items based on season
    return (
      <>
      <h2>Code Grind Menu</h2>
          <button onClick={() => setShowSuggestionBox(!showSuggestionBox)}> Suggestions </button>
          {showSuggestionBox ?
            <div>
              <Input />
            </div>
            : null
          }
          {items.map((item) => {
            return (
            <div className="item" key={item._id}>
                <img src={item.image} alt=""/>
                <h3>Name: {item.name}</h3>
                <p>Category: {item.category}</p>
                <p>Description: {item.description}</p>
                <p>Caffeinated: {item.hasCaffeine}</p>
                <p>Has Dairy: {item.hasDairy}</p>
                <details>
                          <summary>Delete</summary>
                            <button
                              onClick={(event) => {
                                handleDelete(item)
                              }}>
                                DELETE
                            </button>
                        </details>
                <details>
                          <summary>Edit</summary>
                          <form onSubmit={updateItems}>
                                Name: <input type="text" defaultValue={item.name}/>
                                Season: <input type="text" defaultValue={item.season}/>
                                Image: <input type="text"  defaultValue={item.image}/>
                                Category: <input type="text"  defaultValue={item.category}/>
                                Ingredients: <input type="text" defaultValue={item.ingredients}/>
                                Description:  <input type="text" defaultValue={item.description}/>
                                Has Caffeine: <input type="checkbox" defaultValue={item.hasCaffeine}/>
                                Has Dairy:  <input type="checkbox" defaultValue={item.hasDairy}/>
                                <input type="hidden" defaultValue={item._id}/>
                                <input type="submit" onClick={() => window.location.reload(false)} value="Save"/>
                            </form>

                        </details>
            </div>
          )
          })}
      </>
    )};


export default App;
