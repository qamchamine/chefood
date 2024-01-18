import React, { useEffect ,useState ,useContext} from 'react'
import $ from 'jquery'
import axios from 'axios';
import { Link } from 'react-router-dom';
import { getProd } from '../pages/sub-pages/Products';
import { useNavigate } from 'react-router-dom';
import { LoginContext } from '../../config/LoginContext';

export default function ProductCard({product_name,price,img,id}) {
    let starRender = [1, 2, 3, 4, 5]

    const {loading, setLoading} = useContext(LoginContext)
const {prod, setProd} = useContext(LoginContext)
const {formData , setFormData} = useContext(LoginContext)
const {isLoggedIn , setIsLoggedIn} = useContext(LoginContext)
const {userData , setUserData} = useContext(LoginContext)

const navigate = useNavigate()
useEffect(()=>{
  $(function(){
    $('.buyProduct').click(function(){
    setFormData({...formData , product_name:$(this).parents('.product-card').find('h4').text(),full_name:isLoggedIn?userData.firstname+' '+userData.lastname:'' ,user_id:userData.id  ,product_id:productOrder.id })
    $('#buyingInputLabel').html('Buying : ' + `<b>${$('.category-name').text().toLocaleLowerCase()}</b>` ) 
    })
  }) 
},[]) 


const handleDeleteProduct = async (x) => {
  try {
    await axios.delete(`http://127.0.0.1:8000/api/product/delete/${x}`);
    getProd(setLoading , setProd)
    navigate('/explore/products');
  } catch (error) {
    console.log(error);
  }
};

function confirmationOfDeletingProduct(e) {
  if (window.confirm('Sure about deleting this product?')) {
    handleDeleteProduct(e.target.parentElement.parentElement.getAttribute('data-id'));
  }
}


  return (
    <div data-id={id}  className={`col product-card col rounded-3 shadow-sm`} style={{ width: '20em', height: '20em' ,userSelect:'none' }}>
      <h4 className='text-center fs-5 py-2 pb-1' style={{ letterSpacing: '1px' }}>{product_name} 
      </h4>
      
      <div className='d-flex pt-4'>
        <img src={img} style={{ translate: '-35% 0' }} alt="" />
        <h1 className='text-danger text-center d-flex flex-column' style={{ translate: '-20% 0', height: 'fit-content' }}  > <span> {price} </span> <span className='fs-4 opacity-75' style={{ translate: '0 -20%' }}>MAD</span> </h1>
      </div>
      <div className=' float-end w-100 text-end d-grid justify-content-end gap-4' style={{ translate: '0% -80%' }}>
        <p className='me-4' >Rating : {starRender.map((el, i) => <i key={i} className=' fa fa-star' style={{ color: 'gold', marginInline: '1px' }}></i>)} </p>
        <span  /*  className='bg-success' */ /* style={{width:'fit-content'}} */  >
          <button  className='btn btnProductBuy buyProduct text-light rounded-3 me-3' data-bs-toggle="modal" data-bs-target="#buyProduct" style={{ background: '#982727' }}>Buy Now</button>
        </span>
        {userData.admin ? <i  onClick={(e)=> confirmationOfDeletingProduct(e) }className='deleteProduct fa fa-trash position-absolute p-3 fs-5 text-light end-0 ' style={{background:'#e82929ee',translate:'100% -70%',borderTopRightRadius:'12px',borderBottomRightRadius:'12px',boxShadow:'2px 2px 2px #000'}}></i> : ''}
        
      </div>
    </div>
  )
}
