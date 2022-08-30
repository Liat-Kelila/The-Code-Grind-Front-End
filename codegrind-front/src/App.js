import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';

//Import component(s)
import Input from './components/Input';
import Item from './components/Item';
import Update from './components/Update';

const App = () => {

let [display, setDisplay] = useState('main menu');

//Use Effect
useEffect(() => {
      axios
        .get('')
        .then((response) => {
            setItems(response.data)
        })
  }, []);

return (
  <>
//Display of menu items based on season
  <h2>Code Grind Menu</h2>
    <div className="winter-items-div">
      <button onClick={(event) =>
        {
        items.season.winter.map((item) => {
          return (
            <div className="item-div" key={items._id}>
              <Item item={item}/>
            </div>
          )}
        })
      }}>
    </button>
    </div>
    <div className="spring-items-div">
      <button onClick={(event) =>
        {
        items.spring.map((item) => {
          return (
            <div className="item-div" key={items._id}>
              <Item item={item}/>
            </div>
          )}
        })
      }}>
    </button>
    </div>
    <div className="summer-items-div">
      <button onClick={(event) =>
        {
        items.summer.map((item) => {
          return (
            <div className="item-div" key={items._id}>
              <Item item={item}/>
            </div>
          )}
        })
      }}>
    </button>
    </div>
    <div className="fall-items-div">
      <button onClick={(event) =>
        {
        items.fall.map((item) => {
          return (
            <div className="item-div" key={items._id}>
              <Item item={item}/>
            </div>
          )}
        })
      }}>
    </button>
    </div>
  </>
}

export default App;
