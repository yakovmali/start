import React from 'react'
import {API_KEY} from '../../data/secret'
import Voditem from './voditem';
export default async function VodList(props:any) {
const q = props.searchParams?.s || 'lego'
 const url = `https://www.omdbapi.com/?s=${q}&apikey=${API_KEY}`;
 const resp = await fetch(url);
 const data = await resp.json();
 console.log(data.Search)
 const vod_ar = data.Search
 
 
    return (
    <div className='container'>
        <h1>List of Shows:</h1>
        <div className='row'>
     {vod_ar.map((x:any) => {
        return(
      <Voditem key={x.imdbID} x={x}/>
        )
     })}
    </div>
    </div>
  )
}
