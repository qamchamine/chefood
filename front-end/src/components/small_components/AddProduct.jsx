import React from 'react'

export default function AddProduct() {
  return (
    <div style={{position:'absolute',right:'3em',bottom:'3em'}}>
        <button data-bs-toggle="offcanvas" data-bs-target="#addproduct" className='btn btn-success px-4 rounded-circle fs-1'>+</button>
    </div>
  )
}
