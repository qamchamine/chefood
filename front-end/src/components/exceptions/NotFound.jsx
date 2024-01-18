import React from 'react'
import $ from 'jquery'
$(function(){
$('.notFoundPage').css('height',`calc(100vh - ${$('.nb').offset().top+$('.nb').height()-10}px)`)
})
export default function NotFound() {
  return (
    <div className='notFoundPage'>
      
<div className='translate-middle position-relative start-50 top-50' style={{zoom:'110%',paddingBottom:'6em'}}>
        <h1 className='display-1 text-center'>404</h1>
        <hr className='text-danger w-25 border border-secondary border-1 m-auto my-4 '/>
        <div className='fs-5 text-muted text-center'>
          This page could not be found
        </div>
</div>
    </div>
  )
}
