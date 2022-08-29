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

//Use Effect
useEffect(() => {
    axios
      .get('')
      .then((response) => {
          setItems(response.data)
      })
}, []);

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
          setBirds(response.data)
        })
    })
  }

return (
    <section>
            <h2>Submit New Item Suggestion</h2>
            <form onSubmit={handleNewItemsSubmission}>
              Name: <input type="text" onChange=
                {newName}/><br/>
              Season: <input type="text" onChange=
                {newSeason}/><br/>
              Image: <input type="number" min="0" onChange=
                {newImage}/><br/>
              Category: <input type="text" onChange=
                {newCategory}/><br/>
              Ingredients: <input type="text" onChange=
                {newIngredients}/><br/>
              Description: <input type="text" onChange=
                {newDescription}/><br/>
              Caffeinated: <input type="text" onChange=
                {hasCaffeine}/><br/>
              Dairy: <input type="text" onChange=
                {hasDairy}/><br/>
            <input type="submit" value="Create Bird"/>
            </form>
    </section>
  )
}

export default Input;
