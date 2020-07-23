import React from 'react';
import Item from '../Item/Item';


const ItemList = ({todoItem}) => (
	<ul>
    	<li> 
    		<Item todoItem = {todoItem} />  
    	</li>
    	<li> 
    		<Item todoItem = {'To Write props'} /> 
    	</li>
    	<li> 
    		<Item todoItem = {'To finish all tasks'} /> 
    	</li>
    </ul> 
);
export default ItemList;