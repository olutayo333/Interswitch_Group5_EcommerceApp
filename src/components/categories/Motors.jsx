import React, { useState } from 'react'
import Nav from '../Nav'
// import {useSelector, useDispatch} from 'react-redux'
// import { increament } from '../redux/counterSlice';
import { GiSelfLove } from "react-icons/gi";
import img1 from "./images/categorylink.png"; import img2 from "./images/cpap mask.png"
import img3 from "./images/cpap supplies.png"; import img4 from "./images/humidifier.png";
import img5 from "./images/oxygen.png"; import img6 from "./images/categorylink.png";
import img7 from "./images/oxygen.png";
import img8 from "./images/categorylink.png"; import img12 from "./images/cpap mask.png"
import img9 from "./images/cpap supplies.png"; import img13 from "./images/humidifier.png";
import img10 from "./images/oxygen.png"; import img14 from "./images/categorylink.png";
import img11 from "./images/oxygen.png";
import Modal from 'react-bootstrap/Modal'; import Spinner from 'react-bootstrap/Spinner';


const Motors = () => {
  const [showDetail, setshowDetail] = useState(false); const handleCloseDetail = () => setshowDetail(false); const handleshowDetail = () => setshowDetail(true);
  const[productName, setproductName] = useState(""); const [productPrice, setproductPrice]=useState(""); const[productDescription, setproductDescription]=useState("")
  const[productImg, setproductImg] = useState();
  // let dispatch = useDispatch()
  // let allData = useSelector((state)=>state.counterReducer); let count = useSelector((state)=>state.counterReducer.count); let cartItem = useSelector((state)=>state.counterReducer.cartItems)
  let cartURL = ""
  console.log(allData); console.log(count); console.log(cartItem[0].name);
  
  let allCart=[]; let oldCart=[]
  const addToCart = () => {
    let productDetail={productName, productPrice, productImg}
    oldCart= JSON.parse(localStorage.getItem("productDetail1"))
    if (oldCart){allCart = oldCart};
    allCart.push(productDetail)
    localStorage.setItem('productDetail1', JSON.stringify(allCart))
    alert('added to cart successfully')
    //dispatch(increament()); 
    handleCloseDetail();
    //window.location.reload();
  }
  const products=[
    { id: 1, img: img1, text:"CPAP Machines", Price:"#6,000" }, { id: 2, img: img2, text:"CPAP Masks", Price:"#10,000" },
    { id: 3, img: img3, text:"CPAP Supllies", Price:"#3,000"}, { id: 4, img: img4, text:"Humidifiers & Parts",Price:"#10,000"},
    { id: 5, img: img5, text:"Oxygen & Supplies",Price:"#5,000" }, { id: 6, img: img6, text:"Category Link",Price:"#10,000"},
    { id:7, img:img8, text:'Catregi lind', Price:"#10,000"}, { id: 1, img: img9, text:"CPAP Machines", Price:"#6,000" }, { id: 13, img: img2, text:"CPAP Masks", Price:"#10,000" },
    { id: 3, img: img10, text:"CPAP Supllies", Price:"#3,000"}, { id: 14, img: img4, text:"Humidifiers & Parts",Price:"#10,000"},
    { id: 5, img: img11, text:"Oxygen & Supplies",Price:"#5,000" }, { id: 15, img: img6, text:"Category Link",Price:"#10,000"},
    { id:7, img:img12, text:'Catregi lind', Price:"#10,000"}
]

const productDetail=(items)=>{
  setproductName(items.text); setproductPrice(items.Price); setproductDescription(items.text); setproductImg(items.img)
  handleshowDetail()  //setshowDetail(true)
}
const productDetail2=(items)=>{
  setproductName(items.text); setproductPrice(items.Price); setproductDescription(items.text); setproductImg(items.img)
  if (productName && productPrice && productDescription && productImg) { addToCart();} 
}
  return (
    <div className='container-fluid'>
      <Nav/>
      {/* {cartItems.name} */}
      <div className='row mx-lg-5 mx-auto'>
          <h2 className='mt-5'>Motors</h2>
          {/* <div className=" grid lg:grid-col-6 md:grid-col-3 grid-col-2"> */}
            {
              products.map((items, index) => ( 
              <div  className="col-lg-2 col-md-3 col-12 rounded bg-white justify-center items-center pt-2 shadow mx-3 my-2" key={items.id}>
                <div className='mx-auto my-2 d-flex w-100 mx-5' style={{}}> <button className='bg-white' onClick={()=>productDetail(items)}><img className="w-75 rounded me-4 "  src={items.img} alt="" /></button><span className='float-end justify-content-end  ' style={{borderRadius:"1px",}}> <button className='bg-white' onClick={()=>productDetail2(items)}><GiSelfLove /></button> </span> </div> <br />
                <p className="ms-1 text-center "><b>{items.text}</b></p>
                <p className="ms-1 text-center "><b>{items.Price}</b></p>
              </div>
            ))
            }
      </div>

      <Modal show={showDetail} onHide={handleCloseDetail} size="md" aria-labelledby="contained-modal-title-vcenter" centered  style={{border:"1px solid red",letterSpacing:"0.2em" }} >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='d-flex justify-content-center ms-5 mx-5 ' style={{color:"white", backgroundColor:"#192943", borderRadius:"5px", padding:"5px 20px 5px 20px",letterSpacing:"0.15em"}}> PRODUCT DETAILS....  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <hr />  
          <h4 className='d-flex justify-content-center'><u>{productName}</u></h4> <hr />
          <img className='w-50 ms-5' width={{width:"10%"}} src={productImg} alt="" />  <hr />
          <b>{productPrice}</b> <hr />
          {productDescription}
        </Modal.Body>
          <Modal.Footer> 
            <button onClick={addToCart} className='btn mx-auto btn-outline-danger w-75' >Add to Cart </button> <hr />
            <button className='btn mx-auto w-75 btn-secondary' onClick={handleCloseDetail}> Close </button>
          </Modal.Footer>
      </Modal>


    </div>

  )
}

export default Motors
