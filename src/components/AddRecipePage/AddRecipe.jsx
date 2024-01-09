import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';


// This page will have 3 inputs:
// 1 for recipe name,
// 1 for an image
// A text box for the user to enter their recipe
// A submit button
function AddRecipe() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const [name, setName] = useState('');
  const [image_url, setImage_url] = useState('');
  const [recipe, setRecipe] = useState('');
}
export default AddRecipe;