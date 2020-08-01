import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ allItems }) => (
	<ul>
		{allItems.map(item => (
			<li key = {item.value}> 
				<Item value = {item.value} /> 
			</li> ))};	
	</ul>);
export default ItemList;