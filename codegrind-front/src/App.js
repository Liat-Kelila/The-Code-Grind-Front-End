import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
//Import component(s)
import Input from './components/Input';
import Item from './components/Item';
import Update from './components/Update';

const App = () => {

const [items, setItems] = useState([]);
let [display, setDisplay] = useState('main menu');

//Use Effect
useEffect(() => {
      axios
        .get('http://localhost:3001/drinks')
        .then((response) => {
            setItems(response.data)
        })
  }, []);

  const suggestionBox = () => {
      return (
        <Input item={items}/>
      )
  }

  //Display of menu items based on season
return (
  <>
  <h2>Code Grind Menu</h2>
      <button onClick={suggestionBox}> Suggestions </button>
      {items.map((item) => {
        return (
        <div className="item">
            <img src={item.image} alt=""/>
            <h3>Name: {item.name}</h3>
            <p>Category: {item.category}</p>
            <p>Description: {item.description}</p>
            <p>Caffeinated: {item.hasCaffeine}</p>
            <p>Has Dairy: {item.hasDairy}</p>
        </div>
      )
      })}
  </>
)};

export default App;
