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
        .get('http://localhost:3000/drinks')
        .then((response) => {
            setItems(response.data)
        })
  }, []);

  const suggestionBox = () => {
      return (
        <Input item={items}/>
      )
  }

  ////Winter Items////
const showWinterItems = () => {
  <div className="item-list">
  {items.season['winter'].map((item) => {
    return (
      <div className="item" key={items._id}>
      <Item item={items}/>
      </div>
    )}
  )}
  </div>
}

  ////Spring Items////
const showSpringItems = () => {
<div className="item-list">
{items.spring.map((item) => {
  return (
    <div className="item" key={items._id}>
      <Item item={items}/>
    </div>
  )}
)}
</div>
}

/////Summer Items////
const showSummerItems = () => {
  <div className="item-list">
{items.summer.map((item) => {
  return (
    <div className="item" key={items._id}>
      <Item item={items}/>
    </div>
  )}
)}
</div>
}

/////Fall Items////
const showFallItems = () => {
  <div className="item-list">
  {
  items.fall.map((item) => {
    return (
      <div className="item" key={items._id}>
        <Item item={items}/>
      </div>
    )}
  )}
</div>
}

  //Display of menu items based on season
return (
  <>
  <h2>Code Grind Menu</h2>
      <button onClick={showWinterItems}> Winter Items</button>
      <button onClick={showSpringItems}> Spring Items</button>
      <button onClick={showSummerItems}> Summer Items</button>
      <button onClick={showFallItems}> Fall Items </button>
      <button onClick={suggestionBox}> Suggestions </button>
      <Item item={items}/>

  </>
)};

export default App;
