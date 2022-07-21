import React, { useState } from "react";

function RecipeCreate({ handleCreate }) {

  // TODO: When the form is submitted, a new recipe should be created, and the form contents cleared.
  // TODO: Add the required input and textarea form elements.
  // TODO: Add the required submit and change handlers
  const recipeObject = {
    name: "",
    cuisine: "",
    photo: "",
    ingredients: "",
    preparation: ""
  };

  const [dataForm, setDataForm] = useState({ ...recipeObject });

  const handleChange = (event) => {
    const value = event.target.value;
    const name = event.target.name;
    setDataForm({ ...dataForm, [name]: value })
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    handleCreate(dataForm);
    setDataForm(recipeObject);
  }
console.log(dataForm);
  return (
    <form name="create" onSubmit={ handleSubmit }>
      <table>
        <tbody>
          <tr>
            <td>
              <input name="name" placeholder="Name" value={dataForm.name} onChange={handleChange} required></input>
            </td>
            <td>
              <input name="cuisine" placeholder="Cuisine" value={dataForm.cuisine} onChange={handleChange}required></input>
            </td>
            <td>
              <input name="photo" type="url" placeholder="URL" value={dataForm.photo} onChange={handleChange} required></input>
            </td>
            <td>
              <textarea name="ingredients" className="content_td" placeholder="Ingredients" value={dataForm.ingredients} onChange={handleChange} required></textarea>
            </td>
            <td>
              <textarea name="preparation" className="content_td" placeholder="Preparation" value={dataForm.preparation} onChange={handleChange} required></textarea>
            </td>
            <td className="buttonCreate">
              <button type="submit">Create</button>
            </td>
          </tr>
        </tbody>
      </table>
    </form>
  );
}

export default RecipeCreate;
