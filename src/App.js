import React, { useState } from "react";
import "./App.css";
import RecipeCreate from "./RecipeCreate";
import RecipeList from "./RecipeList";
import RecipeData from "./RecipeData"

function App() {
  const [recipes, setRecipes] = useState(RecipeData);
  const handleCreate = (newRecipe) => { setRecipes([newRecipe, ...recipes]) };
  // TODO: Add the ability for the <RecipeList /> component to list and delete an existing recipe.
  // TODO: Add the ability for the <RecipeCreate /> component to create new recipes.
  const deleteRecipe = (event) => {
    const indexToDelete = parseInt(event.target.parentNode.id);
    const updateRecipes = recipes.filter((recipe, index) => {
      if(index !== indexToDelete) {
        return recipe;
      }
    })
    setRecipes([...updateRecipes])
  }
  
  return (
    <div className="App">
      <header><h1>Delicious Food Recipes</h1></header>
      <RecipeList recipes={recipes} deleteRecipe={deleteRecipe}/>
      <RecipeCreate handleCreate={handleCreate}/>
    </div>
  );
}

export default App;
