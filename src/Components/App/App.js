import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/footer';
import InputItem from '../InputItem/InputItem';

const todoItem = 'Create new app'
const App = () => {
	const allItems = [
		{
			value: 'Create new app'
		},
		{
			value: 'To write props'
		},
		{
			value: 'To finish all tasks'
		}
	];

	return (
  <div> 
  	<h1> ToDO List </h1> 
  	<InputItem/>
  	<ItemList allItems={allItems}/>
  	<Footer count={3}/>
  </div> )
};

export default App;
