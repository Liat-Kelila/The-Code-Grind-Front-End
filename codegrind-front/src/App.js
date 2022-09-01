import './App.css';
import {useState, useEffect} from 'react';
import axios from 'axios';
import Input from './components/Input';
import Item from './components/Item';
import Update from './components/Update';

const App = () => {

const [items, setItems] = useState([]);
const [showSuggestionBox, setShowSuggestionBox] = useState(false);
let [display, setDisplay] = useState('main menu');
const [toggleEdit, setToggleEdit] = useState(false);


//Use Effect
useEffect(() => {
      axios
        .get('http://localhost:2000/drinks')
        .then((response) => {
            setItems(response.data)
        })
  }, []);

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
      <button onClick={() => setToggleEdit(!toggleEdit)}> Edit </button>
      <div className='item-list'>
      {toggleEdit
        ? items.map((item) => {
         <Update/>
      })
      : items.map((item) => {
         <Item item={item}/>
      })
      }
      </div>
    </>
  )
}


export default App;
