import Link from 'next/link';
import React from 'react'

export default function Voditem(props:any) {
    const x = props.x;
  return (
    <div className='col-md-6 p-2 border'>  
        <img src={x.Poster} className='float-start me-2 w-25'/>
        <h4> {x.Title}</h4> 
        <div>year: {x.Year}</div>
        <Link href={`/vod/info/${x.imdbID}`} className='btn btn-dark mt-3'>more info</Link>
        </div>
  )
}
