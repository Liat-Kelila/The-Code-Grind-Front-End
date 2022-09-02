import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
//Import component(s)
import Input from './components/Input';
import Item from './components/Item';
import Update from './components/Update';

const REACT_APP_DRINKS_API = process.env.REACT_APP_DRINKS_API;

const App = () => {

const [items, setItems] = useState([]);
const [showSuggestionBox, setShowSuggestionBox] = useState(false);
let [display, setDisplay] = useState('main menu');


//Use Effect
useEffect(() => {
      axios
        .get(`${REACT_APP_DRINKS_API}/drinks`)
        .then((response) => {
            setItems(response.data)
        })
  }, []);


const handleDelete = (itemData) => {
    axios.delete(`${REACT_APP_DRINKS_API}/drinks/${itemData._id}`)
      .then(() => {
        axios.get(`${REACT_APP_DRINKS_API}/drinks`)
          .then((response) => {
            setItems(response.data)
          })
      })
  }

  const updateItems = (event) => {
        event.preventDefault();
        axios.put(`${REACT_APP_DRINKS_API}/drinks/` + event.target[8].value,
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
          axios.get(`${REACT_APP_DRINKS_API}/drinks`)
        })
          .then((response) => {
            setItems(response.data);
          })
    }
      return (
          <div className="page">
          <h1>The Code Grind Cafe</h1>
          <h2>Menu Items</h2>
              <button onClick={() => setShowSuggestionBox(!showSuggestionBox)}> Add Menu Item </button>
              {showSuggestionBox ?
                <div className="suggestions">
                  <Input />
                </div>
                : null
              }
              <div className="item-list">
              {items.map((item) => {
                return (
                <div className="item" key={item._id}>
                    <img src={item.image} alt=""/>
                    <h1> {item.name}</h1>
                    <details>
                    <summary>More Info</summary>
                    <p> {item.season} Collection </p> <br/>
                    <p> {item.category}</p> <br/>
                    <p> Description:  {item.description}</p> <br/>
                    <p> Ingredients: {item.ingredients}</p> <br/>
                    {!item.hasCaffeine
                      ? <p>Contains Caffiene</p>
                      : null
                    }
                    {!item.hasDairy
                      ? <p>Contains Dairy</p>
                      : null
                    }
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
                              <form className="edit" onSubmit={updateItems}>
                                  <p>
                                    Name: <input type="text" defaultValue={item.name}/> <br/>
                                    Season: <input type="text" defaultValue={item.season}/> <br/>
                                    Image: <input type="text"  defaultValue={item.image}/> <br/>
                                    Category: <input type="text"  defaultValue={item.category}/> <br/>
                                    Ingredients: <input type="text" defaultValue={item.ingredients}/> <br/>
                                    Description:  <input type="text" defaultValue={item.description}/> <br/>
                                    Has Caffeine: <input type="checkbox" defaultValue={item.hasCaffeine}/> <br/>
                                    Has Dairy:  <input type="checkbox" defaultValue={item.hasDairy}/> <br/>
                                    <input type="hidden" defaultValue={item._id}/>
                                    <input className="submit" type="submit" onClick={() => window.location.reload(false)} value="Save"/>
                                  </p>
                                </form>

                            </details>
                </details>

                </div>
              )
              })}
              </div>
          </div>
    )};


export default App;
