import React, { Suspense } from 'react'
 
import HeaderVod from './comps/headerVod'
import VodList from './comps/vodList'
import Loading from './loading'
export default function page(props:any) {
  return (
    <React.Fragment>


      <HeaderVod/>
        <Suspense key={Date.now() } fallback={<Loading/>}>
      <VodList {...props}/>
        </Suspense>
    </React.Fragment>
  )
}
