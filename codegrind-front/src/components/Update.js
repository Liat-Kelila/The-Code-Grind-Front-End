import React, {useState} from 'react';

const Update = (props) => {

//State Declarations
//Schema: name, season, image, category, ingredients, description, hasCaffeine, hasDairy
const [items, setItems] = useState([]);
// const [displayPage, setDisplayPage] = useState('update');

// //Use Effect
// useEffect(() => {
//     axios
//       .get('')
//       .then((response) => {
//           setItems(response.data)
//       })
// }, []);

//Update
const updateItems = (event) => {
    event.preventDefault();
    axios.put(
      `http://apiaddress/${event.target[8].value}`,
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
        //This is so that we can also SEE what we updated come up on the page.
    ).then((response) => {
      axios.get('')
      .then((response) => {
        //Look into this!
        setItems(response.data);
      })
    })
}

  return (
    <>
//Add delete button!
    {
     items.map((item) =>  {
      return (
        <summary>Update Menu Items</summary>
          <form onSubmit={updateItems}>
            Name: <input type="text" defaultValue={props.items.name}/>
            Season: <input type="text" defaultValue={props.items.image}/>
            Image: <input type="text"  defaultValue={props.items.image}/>
            Category: <input type="text"  defaultValue={props.items.category}/>
            Ingredients: <input type="text" defaultValue={props.items.ingredients}/>
            Description:  <input type="text" defaultValue={props.items.ingredients}/>
            Has Caffeine: <input type="text" defaultValue={props.items.ingredients}/>
            Has Dairy:  <input type="text" defaultValue={props.items.ingredients}/>
            <input type="hidden" value={item._id}/>
            <input type="submit" value="Update Items"/>
          </form>
        )
      })
    }
    </>

}
export default Update;
