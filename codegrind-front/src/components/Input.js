import React, {useState} from 'react';

const Input = (props) => {

//State Declarations
//Schema: name, season, image, category, ingredients, description, hasCaffeine, hasDairy
const [items, setItems] = useState([]);
const [newSeason, setNewSeason] = useState('');
const [newImage, setNewImage] = useState('');
const [newCategory, setNewCategory] = useState('');
const [newIngredients, setNewIngredients] = useState('');
const [newDescription, setNewDescription] = useState('');
const [newCaffeine, setNewCaffeine] = useState(true);
const [newHasDairy, setNewHasDairy] = useState(true);


////Functions to handle new items

// //Function to Handle New Item Name Change
// const newItemInput = (event) => {
//   setItems(event.target.value);
// }

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
const newHasCaffeineInput = (event) => {
  setNewHasCaffeine(event.target.value);
}

//Function to Handle New Item Name Change
const newHasDairyInput = (event) => {
  setNewHasDairy(event.target.value);
}

// Function to Handle Submitting New Item Form
const handleNewItemSubmission = (event) => {
    event.preventDefault();
    axios.post(
        '',
        {
          name: newName,
          season: newSeason,
          image: newImage,
          category: newCategory,
          ingredients: newIngredients,
          description: newDescription,
          hasCaffeine: newHasCaffeine,
          hasDairy: newHasDairy
        }

      ).then(() => {
        axios.get('')
          .then((response) => {
          setItems(response.data)
        })
    })
  }

return (
    <section>
            <h2>Submit New Item Suggestion</h2>
            <form onSubmit={handleNewItemSubmission}>
              Name: <input type="text" onChange=
                {newNameInput}/><br/>
              Season: <input type="text" onChange=
                {newSeasonInput}/><br/>
              Image: <input type="number" min="0" onChange=
                {newImageInput}/><br/>
              Category: <input type="text" onChange=
                {newCategoryInput}/><br/>
              Ingredients: <input type="text" onChange=
                {newIngredientsInput}/><br/>
              Description: <input type="text" onChange=
                {newDescriptionInput}/><br/>
              Caffeinated: <input type="text" onChange=
                {hasCaffeineInput}/><br/>
              Dairy: <input type="text" onChange=
                {hasDairyInput}/><br/>
            <input type="submit" value="Create Item"/>
            </form>
    </section>
  )
}

export default Input;
