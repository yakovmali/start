'use client'
import React, { useRef }   from 'react'
import { useRouter } from 'next/navigation';
import { on } from 'events';
 
export default function HeaderVod(props:any) {



const inputRef:any = useRef();
const router = useRouter();
  const onclicki =() =>{
router.push(`/vod?s=${inputRef.current.value}`)
  }
  const onKey = (e:any) => {
   if (e.key == 'Enter') {
    onclicki()
   }
  }
  return (
    <div>
      <header className='container-fluid bg-warning p-2'>
        <div className='container'>
            <div className='row align-items-center'>
              <div className='logo col-auto'>
<h1>my  vod</h1>
              </div>
              <nav className='col-auto ms-3'>
<div className='d-flex'>
  <input onKeyDown={onKey} ref={inputRef} className='form-control' placeholder='search'/>
  <button onClick={onclicki} className='btn btn-dark'>search</button>
</div>
              </nav>
            </div>
        </div>


      </header>
    </div>
  )
}
