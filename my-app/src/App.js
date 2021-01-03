//import logo from './logo.svg';
import React from 'react';
import './App.css';
import Goods from './components/Goods';
var prods=[
    {id:1,name:'Карбонара',image:'/img/1.png'},
    {id:2,name:'Кальцоне',image:'/img/2.png'},
    {id:3,name:'Гаваи',image:'/img/3.png'},
    {id:4,name:'4 сыра',image:'/img/4.png'},
    {id:5,name:'Оливковая',image:'/img/5.png'},
];

function App() {
	return (
		<div className="container">
			<Goods data={prods}></Goods>
		</div>
	);//
}

export default App;
