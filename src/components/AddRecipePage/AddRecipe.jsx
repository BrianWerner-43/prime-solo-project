import React from 'react';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

function AddRecipe() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const [name, setName] = useState('');
  const [image_url, setImage_url] = useState('');
  const [recipe, setRecipe] = useState('');
}
export default AddRecipe;