import React, { useEffect, useState } from 'react'
import Nav from './Nav'; 
import {useSelector, useDispatch} from 'react-redux'
import { increament } from './redux/counterSlice';
//import { increament } from '../redux/counterSlice';
import Footer from './Footer';
import { GiSelfLove } from "react-icons/gi";
import { Link } from 'react-router-dom';
import Modal from 'react-bootstrap/Modal'; import Spinner from 'react-bootstrap/Spinner';

import img1 from "../components/categories/images/categorylink.png"; import img2 from "../components/categories/images/categorylink.png"
import img3 from "../components/categories/images/cpap supplies.png"; import img4 from "../components/categories/images/humidifier.png";
import img5 from "../components/categories/images/oxygen.png"; import img6 from "../components/categories/images/categorylink.png";
import img7 from "../components/categories/images/oxygen.png";
import img8 from "../components/categories/images/categorylink.png"; import img12 from "../components/categories/images/cpap mask.png"
import img9 from "../components/categories/images/cpap supplies.png"; import img11 from "../components/categories/images/humidifier.png";
import img10 from "../components/categories/images/oxygen.png"; import img14 from "../components/categories/images/categorylink.png";
import Bimg1 from "../assets/images/Frame_37-removebg-preview.png"; import Bimg2 from"../assets/images/Frame_37f-removebg-preview.png";
import Bimg3 from"../assets/images/Frame_37e-removebg-preview.png"; import Bimg4 from"../assets/images/Frame_37d-removebg-preview.png";
import Bimg5 from"../assets/images/Frame_37b-removebg-preview.png"; import Bimg6 from"../assets/images/Frame_37a-removebg-preview.png";
import Bimg7 from"../assets/images/Frame 34.png"
const Home = () => {
  
  const[productName, setproductName] = useState(""); const[productImg, setproductImg]= useState(""); 
  const[productPrice, setproductPrice]=useState(""); const[productDescription, setproductDescription]= useState("")
  //let allData = useSelector((state)=>state.counterReducer); let reduxcount = useSelector((state)=>state.counterReducer.count); let cartItem = useSelector((state)=>state.counterReducer.cartItems); console.log(reduxcount);
  //CART  
  const [showDetail, setshowDetail] = useState(false); const handleCloseDetail = () => setshowDetail(false); const handleshowDetail = () => setshowDetail(true);

  //Category Arrays
  const [electronics, setelectronics] = useState([]); const[motors, setmotors] = useState([])
  const [homeandgarden, sethomeandgarden] = useState([]); const[clothing, setclothing]= useState([]);
  const[healthandbeauty, sethealthandbeauty] = useState([]);  const[sports, setsports] = useState([]); 
  const [toys, settoys] = useState([]); const[bussinessandIndustrial, setbussinessandIndustrial] = useState([])
  const[collectables, setcollectables] = useState([]);
  
  //Section Array 
  const[recentlyViewed, setrecentlyViewed] = useState([]);
  let RVoneObj =[]; let RVtwoObj =[]; let RVthreeObj =[]; let RVfourObj =[]; let RVfiveObj =[]; let RVgeneral =[]  
  
  const[picksForYou, setpicksForYou] = useState ([]);
  let PFYoneObj =[]; let PFYtwoObj =[]; let PFYthreeObj =[]; let PFYfourObj =[]; let PFYfiveObj =[]; let PFYgeneral =[]
    
  const[watchedItems, setwatchedItems] = useState([]); 
  let WIoneObj =[]; let WItwoObj =[]; let WIthreeObj =[]; let WIfourObj =[]; let WIfiveObj =[]; let WIgeneral =[]

  const[sponsoredItems, setsponsoredItems] = useState([])
  let SIoneObj =[]; let SItwoObj =[]; let SIthreeObj =[]; let SIfourObj =[]; let SIfiveObj =[]; let SIgeneral =[]

  const[itemsYouMayAlsoLike, setitemsYouMayAlsoLike] = useState([]); const[todaysDeals, settodaysDeals] = useState([]);

  //General Array
    const[generalArray, setgeneralArray]  = useState([{ id: 1, img: img1, text:"CPAP Machines", Price:"#6,000" }, { id: 2, img: img2, text:"CPAP Masks", Price:"#10,000" },
    { id: 3, img: img3, text:"CPAP Supllies", Price:"#3,000"}, { id: 4, img: img4, text:"Humidifiers & Parts",Price:"#10,000"},
    { id: 5, img: img5, text:"Oxygen & Supplies",Price:"#5,000" }, { id: 6, img: img6, text:"Category Link",Price:"#10,000"},
    { id:7, img:img8, text:'Catregi lind', Price:"#10,000"}, { id: 1, img: img9, text:"CPAP Machines", Price:"#6,000" }, { id: 13, img: img2, text:"CPAP Masks", Price:"#10,000" },
    { id: 3, img: img10, text:"CPAP Supllies", Price:"#3,000"}, { id: 14, img: img4, text:"Humidifiers & Parts",Price:"#10,000"},
    { id: 5, img: img11, text:"Oxygen & Supplies",Price:"#5,000" }, { id: 15, img: img6, text:"Category Link",Price:"#10,000"},
    { id:7, img:img12, text:'Catregi lind', Price:"#10,000"}])
    let allCart=[]; let oldCart=[]

    //FUNCTIONS
    
    let dispatch = useDispatch();
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
    
    const productDetail=(items)=>{
      setproductName(items.text); setproductPrice(items.Price); setproductDescription(items.text); setproductImg(items.img)
      handleshowDetail()  //setshowDetail(true)
    }
    const productDetail2=(items)=>{
      setproductName(items.text); setproductPrice(items.Price); setproductDescription(items.text); setproductImg(items.img)
      if (productName && productPrice && productDescription && productImg) { addToCart();} 
    }

    //useEffect to populate the general array  
    useEffect(()=>{
      let RVoneindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      RVoneObj=generalArray[RVoneindex]; RVgeneral.push(RVoneObj); 

      let RVtwoindex = Math.floor((Math.random()*generalArray.length-1)+1); 
      RVtwoObj=generalArray[RVtwoindex]; RVgeneral.push(RVtwoObj); 

      let RVthreeindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      RVthreeObj=generalArray[RVthreeindex]; RVgeneral.push(RVthreeObj);
      
      let RVfourindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      RVfourObj=generalArray[RVfourindex]; RVgeneral.push(RVfourObj);
      
      let RVfiveindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      RVfiveObj=generalArray[RVfiveindex]; RVgeneral.push(RVfiveObj); console.log(RVgeneral); 
      setrecentlyViewed([...RVgeneral])
      //setRVoneProductName(generalArray[RVoneindex].text); setRVoneProductPrice(generalArray[RVoneindex].Price); setRVoneProductIMG(generalArray[RVoneindex].img) 
    },[])

    useEffect(()=>{
      let PFYoneindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      PFYoneObj=generalArray[PFYoneindex]; PFYgeneral.push(PFYoneObj); 

      let PFYtwoindex = Math.floor((Math.random()*generalArray.length-1)+1); 
      PFYtwoObj=generalArray[PFYtwoindex]; PFYgeneral.push(PFYtwoObj); 

      let PFYthreeindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      PFYthreeObj=generalArray[PFYthreeindex]; PFYgeneral.push(PFYthreeObj);
      
      let PFYfourindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      PFYfourObj=generalArray[PFYfourindex]; PFYgeneral.push(PFYfourObj);
      
      let PFYfiveindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      PFYfiveObj=generalArray[PFYfiveindex]; PFYgeneral.push(PFYfiveObj);  
      setpicksForYou([...PFYgeneral])
    },[])

    useEffect(()=>{
      let WIoneindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      WIoneObj=generalArray[WIoneindex]; WIgeneral.push(WIoneObj); 

      let WItwoindex = Math.floor((Math.random()*generalArray.length-1)+1); 
      WItwoObj=generalArray[WItwoindex]; WIgeneral.push(WItwoObj); 

      let WIthreeindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      WIthreeObj=generalArray[WIthreeindex]; WIgeneral.push(WIthreeObj);
      
      let WIfourindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      WIfourObj=generalArray[WIfourindex]; WIgeneral.push(WIfourObj);
      
      let WIfiveindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      WIfiveObj=generalArray[WIfiveindex]; WIgeneral.push(WIfiveObj);  
      setwatchedItems([...WIgeneral])
    },[])

    useEffect(()=>{
      let SIoneindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      SIoneObj=generalArray[SIoneindex]; SIgeneral.push(SIoneObj); 

      let SItwoindex = Math.floor((Math.random()*generalArray.length-1)+1); 
      SItwoObj=generalArray[SItwoindex]; SIgeneral.push(SItwoObj); 

      let SIthreeindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      SIthreeObj=generalArray[SIthreeindex]; SIgeneral.push(SIthreeObj);
      
      let SIfourindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      SIfourObj=generalArray[SIfourindex]; SIgeneral.push(SIfourObj);
      
      let SIfiveindex = Math.floor((Math.random()*generalArray.length-1)+1);  
      SIfiveObj=generalArray[SIfiveindex]; SIgeneral.push(SIfiveObj);  
      setsponsoredItems([...SIgeneral])
    },[])
  
    return (
    <div className='container-fluid'>
      <Nav/> <hr /> <br />
      <h3 className='mt-1 mx-5'> <b>Recently Viewed</b></h3>
      <div className='row mx-lg-5 mx-auto'>
            {       
              recentlyViewed.map((items, index) => ( 
              <div  className="col-lg-2 col-md-3 col-12 rounded bg-white justify-center items-center pt-2 shadow mx-3 my-2" key={items.id}>
                <div className='mx-auto my-2 d-flex w-100 mx-5' style={{}}> <button className='bg-white' onClick={()=>productDetail(items)} ><img className="w-75 rounded me-4 "  src={items.img} alt="" /></button><span className='float-end justify-content-end  ' style={{borderRadius:"1px",}}> <button onClick={()=>productDetail2(items)} className='bg-white' ><GiSelfLove /></button> </span> </div> <br />
                <p className="ms-1 text-center "><b>{items.text}</b></p>
                <p className="ms-1 text-center "><b>{items.Price}</b></p>
              </div>
            ))
            } 
      </div> 
            <div className='row rounded py-3 mx-5 mt-5'>
              <div className='py-5 px-5' style={{backgroundColor:"#DEEBFF", color:"#0d2153", borderRadius:'10px'}}> 
                <h3> <b>You can score a #10,000 voucher*</b></h3>
                <h5> Simply join our mailing list to access all the latest offers. | <u> min spend #3,000 txn. Eligible items. T&Cs apply </u></h5>
              </div>
            </div>
      <h3 className='mt-5 mx-5'> <b>Picks For You</b></h3>
      <div className='row mx-5'>
            {       
              picksForYou.map((items, index) => ( 
              <div  className="col-lg-2 col-md-3 col-12 rounded bg-white justify-center items-center pt-2 shadow mx-3 my-2" key={items.id}>
                <div className='mx-auto my-2 d-flex w-100 mx-5'> <button className='bg-white' onClick={()=>productDetail(items)} ><img className="w-75 rounded me-4 "  src={items.img} alt="" /></button><span className='float-end justify-content-end  ' style={{borderRadius:"1px",}}> <button onClick={addToCart} className='bg-white' ><GiSelfLove /></button> </span> </div> <br />
                <p className="ms-1 text-center "><b>{items.text}</b></p>
                <p className="ms-1 text-center "><b>{items.Price}</b></p>
              </div>
            ))
            } 
      </div>
  
      <h3 className='mt-5 mx-5'> <b>Watched Items</b></h3>
      <div className='row mx-5'>
            {       
              watchedItems.map((items, index) => ( 
              <div  className="col-lg-2 col-md-3 col-12 rounded bg-white justify-center items-center pt-2 shadow mx-3 my-2" key={items.id}>
                <div className='mx-auto my-2 d-flex w-100 mx-5'> <button className='bg-white' onClick={()=>productDetail(items)} ><img className="w-75 rounded me-4 "  src={items.img} alt="" /></button><span className='float-end justify-content-end  ' style={{borderRadius:"1px",}}> <button onClick={addToCart} className='bg-white' ><GiSelfLove /></button> </span> </div> <br />
                <p className="ms-1 text-center "><b>{items.text}</b></p>
                <p className="ms-1 text-center "><b>{items.Price}</b></p>
              </div>
            ))
            } 
      </div> <hr />
      <div className='row rounded py-3 mx-5 mt-5' style={{backgroundColor:"#FFF2D4"}}> 
            <div className='col-2'> <Link to='/'> <img src={Bimg1} alt="" /> </Link>  </div>
            <div className='col-2'> <Link to='/sports'> <img src={Bimg2} alt="" /> </Link> </div>
            <div className='col-2'> <Link to='/collectables'> <img src={Bimg3} alt="" /> </Link> </div>
            <div className='col-2'> <Link to='/homeandgarden'> <img src={Bimg4} alt="" /> </Link></div>
            <div className='col-2'> <Link to='/homeandgarden'> <img src={Bimg5} alt="" /> </Link></div>
            <div className='col-2'> <Link to='/clothing'> <img src={Bimg6} alt="" /> </Link></div>
      </div>
      <h3 className='mt-5 mx-5'> <b>Sponsored Items</b></h3>
      <div className='row mx-5'>
            {       
              sponsoredItems.map((items, index) => ( 
              <div  className="col-lg-2 col-md-3 col-12 rounded bg-white justify-center items-center pt-2 shadow mx-3 my-2" key={items.id}>
                <div className='mx-auto my-2 d-flex w-100 mx-5'> <button className='bg-white' onClick={()=>productDetail(items)} ><img className="w-75 rounded me-4 "  src={items.img} alt="" /></button><span className='float-end justify-content-end  ' style={{borderRadius:"1px",}}> <button onClick={addToCart} className='bg-white' ><GiSelfLove /></button> </span> </div> <br />
                <p className="ms-1 text-center "><b>{items.text}</b></p>
                <p className="ms-1 text-center "><b>{items.Price}</b></p>
              </div>
            ))
            } 
      </div> <hr />
      
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

      <Footer/>
    </div>
  )
}

export default Home
