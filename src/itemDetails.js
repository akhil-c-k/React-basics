import React from 'react';
import logo from './logo.svg';
import './App.css';
import {useEffect,useState} from 'react'

function Item({match}) {
console.log(match)
useEffect (() => {
    fetchItem()
},[]);

const [item,setItem] =useState({})

const fetchItem = async () => {
  const fetchItem = await fetch (
    `https://fortnite-public-api.theapinetwork.com/prod09/item/get?ids=${match.params.id}`
    );
  const item = await fetchItem.json();
  setItem(item)
 
}
  return (
    <div className="App">
     <h1>Individual item</h1>
       <ul>
       <li>{item.name}</li>
       <li>{item.type}</li>
       </ul>
     
    </div>
  );
}


export default Item;
