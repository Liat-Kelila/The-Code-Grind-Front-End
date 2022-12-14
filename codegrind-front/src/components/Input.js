import React, {useState, useEffect} from 'react';
import axios from 'axios';

const REACT_APP_DRINKS_API = process.env.REACT_APP_DRINKS_API;


const Input = (props) => {


//State Declarations
//Schema: name, season, image, category, ingredients, description, hasCaffeine, hasDairy
const [items, setItems] = useState([]);
const [newName, setNewName] = useState('');
const [newSeason, setNewSeason] = useState('');
const [newImage, setNewImage] = useState('');
const [newCategory, setNewCategory] = useState('');
const [newIngredients, setNewIngredients] = useState('');
const [newDescription, setNewDescription] = useState('');
const [newCaffeine, setNewCaffeine] = useState(false);
const [newHasDairy, setNewHasDairy] = useState(false);




////Functions to handle new items

// //Function to Handle New Item Name Change
// const newItemInput = (event) => {
//   setItems(event.target.value);
// }
const newNameInput = (event) => {
  setNewName(event.target.value);
}

//Function to Handle New Season Change
const newSeasonInput = (event) => {
  setNewSeason(event.target.value);
}

//Function to Handle New Image Change
const newImageInput = (event) => {
  setNewImage(event.target.value);
}

//Function to Handle New Item Name Change
const newCategoryInput = (event) => {
  setNewCategory(event.target.value);
}

//Function to Handle New Item Name Change
const newIngredientsInput = (event) => {
  setNewIngredients(event.target.value);
}

//Function to Handle New Item Name Change
const newDescriptionInput = (event) => {
  setNewDescription(event.target.value);
}

//Function to Handle New Item Name Change
const hasCaffeineInput = (event) => {
  setNewCaffeine(event.target.value);
}

//Function to Handle New Item Name Change
const hasDairyInput = (event) => {
  setNewHasDairy(event.target.value);
}

// Function to Handle Submitting New Item Form
const handleNewItemSubmission = (event) => {
    event.preventDefault();
    axios.post(
        `${REACT_APP_DRINKS_API}/drinks`,
        {
          name: newName,
          season: newSeason,
          image: newImage,
          category: newCategory,
          ingredients: newIngredients,
          description: newDescription,
          hasCaffeine: newCaffeine,
          hasDairy: newHasDairy
        }

      ).then(() => {
        axios.get(`${REACT_APP_DRINKS_API}/drinks`)
          .then((response) => {
          setItems(response.data)
        })
    })
  }



return (
    <section>
            <h2>Submit New Item</h2>
            <form onSubmit={handleNewItemSubmission}>
              Name: <input type="text" onChange=
                {newNameInput}/><br/>
              Season: <input type="text" onChange=
                {newSeasonInput}/><br/>
              Image: <input type="text" onChange=
                {newImageInput}/><br/>
              Ingredients: <input type="text" onChange=
                {newIngredientsInput}/><br/>
              Description: <input type="text" onChange=
                {newDescriptionInput}/><br/>
              Caffeinated: <input type="checkbox" onChange=
                {hasCaffeineInput}/><br/>
              Contains Dairy: <input type="checkbox" onChange=
                {hasDairyInput}/><br/>
            <input type="submit" onClick={() => window.location.reload(false)} value="Create Item"/>
            </form>
    </section>
  )
}


export default Input;
