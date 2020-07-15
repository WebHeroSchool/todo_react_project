import React from 'react';
import ItemList from '../ItemList/ItemList';
import Footer from '../Footer/footer';
import InputItem from '../InputItem/InputItem';


const App = () => (
  <div> <h1> ToDO List </h1> 
  	<InputItem/>
  	<ItemList />
  	<Footer />
  </div>
);

export default App;
