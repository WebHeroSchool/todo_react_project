import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/footer';
import InputItem from '../InputItem/InputItem';

const todoItem = 'Create new app';
const App = () => (
<div> 
	<h1> ToDO List </h1> 
  	<InputItem/>
  	<ItemList todoItem = {todoItem} />
  	<Footer count = {3} />
</div>
);

export default App;
