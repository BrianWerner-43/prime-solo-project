import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

export default function RecipeForm() {
  const dispatch = useDispatch();

  const user = useSelector((store) => store.user);

  const [name, setName] = useState('');
  const [image_url, setImage_url] = useState('');
  const [recipe, setRecipe] = useState('');
}