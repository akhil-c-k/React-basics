import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'
import {Link} from 'react-router-dom'


function Shop() {

useEffect (() => {
   fetchItems();
},[]);

const [items,setItem] =useState([])

const fetchItems= async() => {
  const data = await fetch('https://fortnite-public-api.theapinetwork.com/prod09/upcoming/get');
    const items = await data.json();
    setItem(items.items)
  }


  return (
    <div className="App">
     <h1>Shop page</h1>

     {items.map(item => (
        <h3 key={item.itemid}> <Link to={`/shop/${item.itemid}`}>{item.name}</Link></h3>
     ))}
    </div>
  );
}


export default Shop;
