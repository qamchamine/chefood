import React, { useState, useEffect, useContext } from 'react'
import '../../../css/products.css'
import ProductCard from '../../small_components/ProductCard'
import axios from 'axios'
import { Link } from 'react-router-dom'
import $ from 'jquery'
/* import ButtonMain from '../../small_components/ButtonMain' */
import AddProduct from '../../small_components/AddProduct'
import { LoginContext } from '../../../config/LoginContext'
$(function () {
  $('.products-page').css('height', `calc(133vh  - ${$('.nb').offset().top + $('.nb').height()}px)`) 
}) 
export const getProd = async (setProd,setLoading) => {
  const pr = await axios.get(`http://127.0.0.1:8000/api/product`)
  setProd(pr.data.data)
  setLoading(false);
} 
export default function Products() {
const {userData /* , setUserData */} = useContext(LoginContext)
const {isLoggedIn , setIsLoggedIn} = useContext(LoginContext)
const {formData , setFormData} = useContext(LoginContext)

const {loading, setLoading} = useContext(LoginContext)
const {prod, setProd} = useContext(LoginContext)
console.lo(prod);
/*   const [loading, setLoading] = useState(true); */
  const [payCreditCard, setPayCreditCard] = useState(false);
/*   const [productCount, setProductCount] = useState(1); */
  const [currentPage, setCurrentPage] = useState(1);
  const [productsPerPage] = useState(6);
  $(`#${currentPage}`).addClass('activePagination')

/*   const [paginationNums, setPaginationNums] = useState(0) */
  /*   const [currentPage, setCurrentPage] = useState(1); */

  const [errors, setErrors] = useState({});
  const [errorsProduct, setErrorsProduct] = useState({});
/*   const [prod, setProd] = useState([]); */
  const [ctg, setCtg] = useState('combo meals');
  const [addedProduct, setAddedProduct] = useState({
    product_name : '',
    price : '',
    img : '',
    category : ''
  });



  const paginate = (array, currentPage, productsPerPage) => {
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    return array.slice(startIndex, endIndex);
  };
  const pageNumbering = (numberOfPagination) => {
    const buttons = [];
    for (let i = 0; i < numberOfPagination; i++) {
      buttons.push(
        <button id={i+1} onClick={()=>setCurrentPage(i+1)} key={i} className='paginationButtons btn btn-light fw-bold' style={{ color: '#982727' }} >
          {i + 1}
        </button>
      );
    }
    return buttons;
  };
useEffect(() => {
  $('.paginationButtons').removeClass('activePagination')
$(`#${currentPage}`).addClass('activePagination')
}, [currentPage]);



const handleAddProduct = (e)=>{
  e.preventDefault()
  axios.post('http://127.0.0.1:8000/api/product',addedProduct)
  .then(res=>{ 
    setAddedProduct({ product_name : '', price : '', img : '', category : '' })
    getProd(setProd,setLoading)
  })
  .catch(error=>{
    if (error.response && error.response.status === 422) {
      setErrorsProduct(error.response.data.errors);
    } else {
      console.error(error);
    }
  })
} 


  useEffect(() => {
    getProd(setProd, setLoading)
    var ctgLinks = document.querySelectorAll('.category-link')
    for (var i = 0; i < ctgLinks.length; i++) {
      ctgLinks[i].addEventListener('click', (event) => {
        setCurrentPage(1)
        document.querySelector('.category-name').innerText = event.target.innerText
        setCtg(event.target.innerText.toLocaleLowerCase())
      })
    }
  }, [loading,setLoading,setProd]);

  useEffect(() => {
    $(function () {
      $('#increaseProductCount').click(function () {
        setFormData({ ...formData, product_quantity: formData.product_quantity + 1 })
      })
      $('#decreaseProductCount').click(function () {
        (formData.product_quantity > 1) ? setFormData({ ...formData, product_quantity: formData.product_quantity - 1 }) : setFormData({ ...formData, product_quantity: 1 })
      })
}) 


  }, [formData]);

  const handleChangeOrder = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });

    if (e.target.value === 'credit card') {
      setPayCreditCard(true)
    }
    else {
      setPayCreditCard(false)
    } 
    setErrors({ ...errors, [e.target.name]: '' });
  };

  const handleProductChange = (e)=>{
    setAddedProduct({...addedProduct , [e.target.name]:e.target.value})
  }
  


/*   useEffect(() => {
  }, []); */


  const sendOrder = (e) => {
    e.preventDefault();
    axios.post('http://127.0.0.1:8000/api/order', formData)
      .then(response => {
        

        document.querySelector('.productsCloseBtn').click()
      })
      .catch(error => {
        if (error.response && error.response.status === 422) {
          setErrors(error.response.data.errors);
        } else {
          console.error(error);
        }
      }); 
  };
  const closeModal = () => {
    $('.productsCloseBtn').click()
  }
  return (
    <div className='products-page mb-5 pb-5'>


      <div className="modal fade" id="buyProduct"/*  tabIndex="-1" */ style={{ zIndex: '10000000000000000000' }} >
        <div className="modal-dialog ">
          <form onSubmit={sendOrder} >
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="exampleModalLabel">New command</h1>
                <button type="button" className="btn-close productsCloseBtn" data-bs-dismiss="modal"></button>
              </div>
              <div className="modal-body">
                <div className="d-grid ">

                  <div className="row row-cols-1">

                    <label htmlFor="buyingInput" id='buyingInputLabel' className=" col-form-label">Buying :</label>
                    <div className="input-group mb-3 d-flex justify-content-between gap-4">
                      <input type="text" className="form-control" value={formData.product_name} disabled  onChange={handleChangeOrder} name='product_name'  id="buyingInput" />
                      
                      <input type="text" className="form-control" value={formData.product_name} disabled  onChange={handleChangeOrder} name='product_name'  id="buyingInput" />
                      <span className='d-flex'>
                        <span id='decreaseProductCount' className='btn btn-danger me-1 d-flex justify-content-center  text-white  align-items-center' style={{ width: '2.5em' }}>-</span>
                        <input  disabled className='rounded-2 d-flex justify-content-center text-center  align-items-center fw-bold' type="number" name='product_quantity' onChange={handleChangeOrder} style={{ width: '4em', color: '#982727', border: 'none' }} value={formData.product_quantity} />
                        <span id='increaseProductCount' className='btn btn-success ms-1 d-flex justify-content-center  text-white  align-items-center' style={{ width: '2.5em' }}>+</span> 
                      </span>
                    </div> 

                    <div className="mb-3">
                      <label htmlFor="full_name" className="col-form-label">Full name :</label>
                      <input type="text" name='full_name' disabled={isLoggedIn?true:false} value={formData.full_name} onChange={handleChangeOrder} className="form-control" id="full_name" placeholder='your full name ..' />
                      {errors.full_name && <small className="text-danger opacity-75 ps-2">{errors.full_name[0]}</small>}

                    </div>
                    <div className="mb-3">
                      <label htmlFor="location" className="col-form-label">Your location :</label>
                      <input type="text" name='location' value={formData.location} onChange={handleChangeOrder} className="form-control" id="location" placeholder='type your location ..' />
                      {errors.location && <small className="text-danger opacity-75 ps-2">{errors.location[0]}</small>}
                    </div> 

                    <div className='d-flex justify-content-between gap-4'>
                      <div className="col mb-3">
                        <label htmlFor="payment_method" className="col-form-label">Payment Method :</label>
                        <select id='payment_method' value={formData.payment_method} onChange={handleChangeOrder} className="form-select" name='payment_method' >
                          <option value="cash on delivery" key="1">Cash on delivery</option>
                          <option value="credit card" key="2">Credit card</option>
                        </select>
                        {errors.payment_method && <small className="text-danger opacity-75 ps-2">{errors.payment_method[0]}</small>}
                      </div>

                      <div className="col mb-3">
                        <label htmlFor="delivery_offer" className="col-form-label">Select delivery offer :</label>
                        <select className="form-select" value={formData.delivery_offer} onChange={handleChangeOrder} name='delivery_offer'>
                          <option value="normal" key="1">Normal</option>
                          <option value="fast" key="2">Fast</option>
                          <option value="faster" key="3">Faster</option>
                        </select>
                        {errors.delivery_offer && <small className="text-danger opacity-75 ps-2">{errors.delivery_offer[0]}</small>}
                      </div>
                    </div>



                    {payCreditCard === true ? <div className="mb-3">
                      <label htmlFor="credit_card_code" className="col-form-label">Credit card code :</label>
                      <input type="number" name='credit_card_code' className="form-control" id="credit_card_code" placeholder='type your credit card code ..' />
                    </div> : ''}
                  </div>
                </div>

              </div>
              <div className="modal-footer">
                <button type='submit' className='btn btnOrderNow text-light rounded-3' style={{ background: '#982727' }}>
                  Order Now
                </button>
              </div>
              <div>
                <p className='text-light py-3  mb-0 px-4 ' style={{ background: '#982727', borderBottomLeftRadius: '.35em', borderBottomRightRadius: '.35em' }}> <span className='opacity-50'>Read more about the delivery offers and services !</span> <Link onClick={closeModal} className='clickHereButtonProduct nav-link d-inline ms-2' to='/services/delivery'>Click here</Link> </p>
              </div>
            </div>
          </form>
        </div>
      </div>

      <span className="offcanvas-btn btn px-4 py-3" style={{ zIndex: '100' }} type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasWithBothOptions" >
        <img src={require('../../../images/icons/left-arrow.png')} style={{ rotate: '180deg', filter: 'invert(100%)' }} alt="" />
      </span>

      <div className="offcanvas offcanvas-start" data-bs-scroll="true" tabIndex="-1" id="offcanvasWithBothOptions" aria-labelledby="offcanvasWithBothOptionsLabel">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasWithBothOptionsLabel">CATEGORIES</h5>
          <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
        </div>
        <div className="offcanvas-body p-0 mt-3">
          <ul className='category-list text-center list-group'>
            <li className='list-group-item category-link'  > Salades </li>
            <li className='list-group-item category-link'  > Pizza </li>
            <li className='list-group-item category-link'  > Sandwichs </li>
            <li className='list-group-item category-link'  > Drinks </li>
            <li className='list-group-item category-link'  > Big Box Meals </li>
            <li className='list-group-item category-link'  > Sauces </li>
            <li className='list-group-item category-link'  > Fruit </li>
            <li className='list-group-item category-link'  > Chicken </li>
            <li className='list-group-item category-link'  > Extras </li>
            <li className='list-group-item category-link'  > Pasta </li>
            <li className='list-group-item category-link'  > Combo Meals </li>
            <li className='list-group-item category-link'  > Seafood </li>
          </ul>
        </div>
      </div>


      {/*  -----------------------------   COMBO MEALS   -------------------------- */}
      <h1 className='text-center fs-3 category-name fw-bold mb-4 pb-3 pt-2 mt-4' style={{ textTransform: 'uppercase'/* ,textDecoration:'underline' */, color: '#982727' }}>Top Products</h1>


      {loading ? (
        <div className=' balls text-center fs-1 ' style={{ height: '3em', width: '3em' }}>
          <div></div>
          <div></div>
          <div></div>
        </div>
      ) :
        <div  className='cards-sections d-grid justify-content-center '>

          {/*   ----    CARD SECTION */}
          <div style={{ gap:'1em 19em'}} className='cards-section-1 row-gap '>
            {paginate(prod.filter(el => el.category === ctg), currentPage, productsPerPage).map((item, i) => {
              const x = item.img;
              return (
                <ProductCard
                  key={i}
                  id={item.id}
                  product_name={item.product_name}
                  price={item.price}
                  img={require(`../../../images/products/${ctg} (${x}).png`)}
                />
              );
            })}
          </div>



{userData.admin ? 

<AddProduct   />
:
''
}

<div className="offcanvas offcanvas-top " style={{height:'fit-content'}} tabIndex="-1" id="addproduct" >
  <div className="offcanvas-header">
    <h5 className="offcanvas-title w-100 py-2 rounded-3 text-center" style={{background:'#982727',color:'white'}} id="offcanvasTopLabel">New Product</h5>
    <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
  </div>
  <div className="offcanvas-body pb-5">
    <form className='row row-cols-4' onSubmit={handleAddProduct}>
<div className='form-group col'>
        <label className='form-label' htmlFor="productname">Product name : </label>
        <input className='form-control' value={addedProduct.product_name} onChange={handleProductChange} name='product_name' type="text" id='productname' />
        {errorsProduct.product_name && <small className="text-danger opacity-75 ps-2">{errorsProduct.product_name[0]}</small>}

</div>
<div className='form-group col'>
        <label className='form-label' htmlFor="price">Price : </label>
        <input className='form-control' value={addedProduct.price} onChange={handleProductChange} name='price' type="text" id='price' />
        {errorsProduct.price && <small className="text-danger opacity-75 ps-2">{errorsProduct.price[0]}</small>}

</div>
<div className='form-group col'>
        <label className='form-label' htmlFor="img">Image : </label>
        <input className='form-control' value={addedProduct.img} onChange={handleProductChange} name='img' type="text" id='img' />
        {errorsProduct.img && <small className="text-danger opacity-75 ps-2">{errorsProduct.img[0]}</small>}

</div>
<div className='form-group col'>
        <label className='form-label' htmlFor="category">Category : </label>
        <select className='form-control' value={addedProduct.category} onChange={handleProductChange} name='category' id='category'>
          <option value="" disabled  key="0" >Select category</option>
          <option value="salades" key="1" >Salades</option>
          <option value="pizza" key="2">Pizza</option>
          <option value="sandwichs" key="3">Sandwichs</option>
          <option value="drinks" key="4">Drinks</option>
          <option value="big box meals" key="5" >Big Box Meals</option>
          <option value="sauces" key="6">Sauces</option>
          <option value="fruit" key="7">Fruit</option>
          <option value="chicken" key="8">Chicken</option>
          <option value="extras" key="9">Extras</option>
          <option value="pasta" key="10">Pasta</option>
          <option value="combo meals" key="11">Combo Meals</option>
          <option value="seafood" key="12">Seafood</option> 
        </select>
        {errorsProduct.category && <small className="text-danger opacity-75 ps-2">{errorsProduct.category[0]}</small>}

</div>

<div className='w-100 d-flex justify-content-center mt-5' >
  
<button type="submit" className='btn ' style={{background:'#982727',color:'white'}}> Add product</button>
</div>
    </form>
  </div>
</div>


          <div style={{zoom:'80%'}} className='pagination-container  d-flex w-100 justify-content-center  mt-4'>
            <div className='btn-group' style={{width:'35em'}}>
              <button className='btn nextPrevBtn' style={{width:'23%', background: '#982727', paddingBlock: '.8em', fontSize: '1.05em', textTransform: 'capitalize', color: 'white' }} onClick={() => setCurrentPage(currentPage - 1)} disabled={currentPage === 1} >
                <i className='fa fa-angle-left pe-4 opacity-75'></i>

                Previous </button>


              {pageNumbering(Math.ceil(prod.filter(el => el.category === ctg).length / productsPerPage))}


              <button className='btn nextPrevBtn' style={{width:'23%', background: '#982727', paddingBlock: '.8em', fontSize: '1.05em', textTransform: 'capitalize', color: 'white' }} onClick={() => setCurrentPage(currentPage + 1)} disabled={currentPage === Math.ceil(prod.filter(el => el.category === ctg).length / productsPerPage)} >
                Next
                <i className='fa fa-angle-right ps-4 opacity-75'></i>

              </button> 
            </div>
          </div>
        </div>
      }


{/* <ProductCard/>
 */}
    </div>

  )
}




