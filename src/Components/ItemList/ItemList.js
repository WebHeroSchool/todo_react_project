import React from 'react';
import Item from '../Item/Item';


const ItemList = ({ allItems }) => (<ul>
    	{allItems.map(item => (
    		<li> <Item value = {item.value} /> 
    		</li> ))}
    	
    </ul>);
export default ItemList;