import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/footer';
import InputItem from '../InputItem/InputItem';
import './App.css';

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
  <div className = "wrap"> 
  	<h1 className= "fonts"> ToDO List </h1> 
  	<InputItem/>
  	<ItemList allItems={allItems}/>
  	<Footer count={3}/>
  </div> )
};

export default App;
