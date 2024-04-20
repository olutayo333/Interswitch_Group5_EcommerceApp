import axios from 'axios'
import Carousel from 'react-bootstrap/Carousel';
import React, { useEffect, useState } from 'react'
import {useSelector} from 'react-redux'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal'; import Spinner from 'react-bootstrap/Spinner';
import { MdLocalShipping } from 'react-icons/md'
import '../assets/css/Nav.css'
import logo from "../assets/images/Regis Logo 12 Transparent bg.png"
import { AiOutlineSearch } from 'react-icons/ai'
import { FiLogIn } from 'react-icons/fi'
import { CiLogout, CiUser } from 'react-icons/ci'
import { FaCartPlus } from "react-icons/fa6";
import { Link, useNavigate } from 'react-router-dom';
import BusinessandIndustrial from './categories/BusinessandIndustrial';
import profileIMG from "../assets/images/Ellipse 1.png"
import banner1 from "../assets/images/Frame 30.png"; import banner2 from "../assets/images/two.jpg"; import banner3 from "../assets/images/three.jpg"



const Nav = () => {
  let signinURL = "https://interswitchcustomersserver.onrender.com/user/signin"; let signupURL = "https://interswitchcustomersserver.onrender.com/user/signup"; let dashboardURL = "https://interswitchcustomersserver.onrender.com/user/dashboard";
  let oldCart;
  oldCart= JSON.parse(localStorage.getItem("productDetail1")) 
  
  let allData = useSelector((state)=>state.counterReducer); const [count, setcount]=useState(0)
  console.log(allData); 
  const Navigate = useNavigate();
  const [show, setShow] = useState(false); const handleClose = () => setShow(false); const handleShow = () => setShow(true);
  const [show2, setShow2] = useState(false); const handleClose2 = () => setShow2(false); const handleShow2 = () => setShow2(true);
  const [showCart, setShowCart] = useState(false); const handleCloseCart = () => setShowCart(false); const handleShowCart = () => setShowCart(true);
  const [showShippingForm, setshowShippingForm] = useState(false); const handleCloseShippingForm = () => setshowShippingForm(false); 
  const handleShowShippingForm = () => {
    if(username) { setshowShippingForm(true); setShowCart(false);}
    else if(!username) {login()}  }
  
  const [username, setusername] = useState("")
  const[useremail, setuseremail] = useState("")
  const[signinemail, setsigninemail] = useState(""); const[signinpassword, setsigninpassword]=useState("")

  const [name, setname] = useState(""); const[phonenumber, setphonenumber]= useState(""); const [registeremail, setregisteremail] = useState (""); 
  const [address, setaddress] = useState (""); const [password, setpassword] = useState(""); 

  const [validname, setvalidname] = useState(true); const [validemail, setvalidemail] = useState(true); const [validpassword, setvalidpassword] = useState(true); 
  const [validphonenumber, setvalidphonenumber] = useState(true)
  const [izloading, setizloading] = useState(false)

  const[cartNo, setcartNo] = useState(0); const [cart, setcart]= useState([]);

  const [status, setstatus] = useState(false)
  const [buyer, setbuyer] = useState(true); const [buyerregistration, setbuyerregistration] = useState(true)

  useEffect(()=>{
    axios.get(dashboardURL,{ headers: { "Authorization": `Bearer ${token}`,  "Content-Type": "application/json", "Accept": "application/json" } })
    .then((response)=>{
        if(!response.data.status){setusername(""); setuseremail(""), setphonenumber(""); setaddress(""); setstatus(false); localStorage.removeItem('productDetail1') }
        else if (response.data.status){
            console.log(response);
            setuseremail(response.data.user.email); setname(response.data.user.name); setstatus(true);
            setphonenumber(response.data.user.phonenumber); setbalance(response.data.user.balance)
        }
    })
}, [])
let token = localStorage.token;

  useEffect(()=>{
    oldCart= JSON.parse(localStorage.getItem("productDetail1"));
    if (oldCart){ setcount(oldCart.length); }
    else{setcount(0)}
  }, [])
  const deleteCart =(index) =>{
    //let newallTodo = [...cart]  //passing the data of alltodo to todo
    oldCart.splice(index,1)
    localStorage.setItem('productDetail1', JSON.stringify(oldCart)); handleCloseCart();
    alert("Deleted Successfully"); 
    window.location.reload()
    //handleCloseCart();
    //setcart(newcart)
  }
  
 const login = () => { setShow(true); setShow2(false) }

  const confirmlogin = ()=>{
    setizloading(true)
        axios.post (signinURL,{email:signinemail, password:signinpassword})
        .then((response)=>{
        if(!response.data.status){alert(response.data.message);}
        else{   alert("Login successful"); console.log(response);
                localStorage.token = response.data.token
              setstatus(true); setusername(response.data.user.name); 
              setuseremail(response.data.user.email); setaddress(response.data.address);
              setphonenumber(response.data.phonenumber); 
              setizloading(false);  handleClose(); 
            }
        })
  }

  const logout= ()=>{ setstatus(false); setname(""); setusername(""); setaddress(""); setphonenumber(""); setpassword(""); localStorage.removeItem('productDetail1') } 
  const register=()=>{     setShow2(true); setShow(false)}

  const sellerregister =()=>{}
  const sellerlogin =()=>{Navigate("/store")}

  const confirmsignup = () => {
    setizloading(true)
    console.log(name, registeremail, phonenumber, address, password);
    axios.post(signupURL, {name, email:registeremail, password, phonenumber, physicaladdress:address})
    .then((response)=>{console.log(response)
    if (response.data.status)
    {alert("HURRAY SignUp Successful"); setname(""); setregisteremail(""); setpassword(""); setphonenumber(""); setaddress("") ;setusername("")}
    else{alert(response.data.message); setizloading(false)} handleClose2(); handleShow();
       })
    }

  const handlenameChange =(e)=>
       {    const nameRegEx = /^([a-zA-Z]{3,15})+([\s][a-zA-Z]{3,15})+$/  
            const enteredname = e.target.value; 
            setname(enteredname); 
            setvalidname(nameRegEx.test(enteredname)); 
       }
  const handleEmailChange =(e)=>
  {    const emailRegex =/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
       const enteredEmail = e.target.value; 
      setregisteremail(enteredEmail); 
      setvalidemail(emailRegex.test(enteredEmail));
  }
  const handlePasswordChange =(e)=>
  {    const passwordRegExp = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/
       const enteredpassword = e.target.value; 
      setpassword(enteredpassword); 
      setvalidpassword(passwordRegExp.test(enteredpassword));
  }
  

  return (
    <>
      <div className='container-fluid w-100 header mx-0'>
        <div className='row mx-auto'>

          <div className='row mx-auto d-flex nav-1 '>
          <div className='col-8 d-flex mx-auto nav-1-inner '  >
            <li className="mx-3"> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Plus</Link> </li>
            <li className="mx-3"> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Deals</Link> </li>                
            <li className="mx-3"> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Find a Store</Link> </li>
            <li className="me-5"> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Help</Link> </li>
            
            <li className="ms-5 "> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Become a Seller</Link> </li>
            <li className="mx-3"> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Deals</Link> </li>                
            <li className="mx-3 me-5"> <Link className='text-dark' style={{textDecoration:"none"}} to="/">Find a Store</Link> </li>
          </div>
          <div className='col-1 justify-content-end'>
              <li style={{zIndex:1}} className="nav-item dropdown ms-5 px-0" >
                  <p className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false"> <img src={profileIMG} alt="" /> </p>
                      <ul className="dropdown-menu border-0 shadow-sm" style={{zIndex:1}}>
                          <li className='py-0'><button onClick={login} className="dropdown-item">Merchant </button> </li>
                          <li className='py-0'><button onClick={login} className="dropdown-item">Customer </button> </li>
                      </ul>
              </li>
            </div>
          <div className='col-3 justify-content-end d-flex'>
          {
               !status ?
                <div className='user'>
                    <div className='info'>
                    <button className='ms-2 me-0' onClick={()=>setShowCart(true)}> <FaCartPlus /> Cart </button> <sup style={{color:"blue"}}> <b>{count}</b></sup>
                      <button className='mx-3' onClick={login}> <CiUser/> Login </button>
                    </div>
                </div> :
                <div className='user'>
                  <div className='info'>
                    {username}
                    <button className='ms-2 me-0' onClick={()=>setShowCart(true)}> <FaCartPlus /> Cart </button> <sup style={{color:"blue"}}> <b>{count}</b></sup>
                      <button className='mx-3' onClick={logout}> <CiUser/> Logout </button>
                    </div>
                </div>
            }
          </div>
          </div> <hr />   

        <div className='row mid_header mx-0'>
            <div className='logo col-1 mx-0 my-0'> 
             <sup> <img className="img-fluid img-responsive mx-0 my-0" src={logo} alt="logo" /> </sup>
            </div>
            <div className="col-1" style={{zIndex:1}} >
                        <ul className="dropdown-nav" style={{listStyleType:"none"}}>
                            <li style={{zIndex:1}} className="nav-item dropdown px-0" >
                                <p className="nav-link dropdown-toggle " role="button" data-bs-toggle="dropdown" aria-expanded="false"> All </p>
                                <ul className="dropdown-menu border-0 shadow-sm" style={{zIndex:1}}>
                                    <li className='py-0'><button className="dropdown-item">Electronics </button> </li>
                                    <li className='py-0'><button className="dropdown-item">Motors </button> </li>
                                    <li className='py-0'><button className="dropdown-item">Home & Garden </button> </li>
                                    <li className='py-0'><button className="dropdown-item">Clothings </button> </li>
                                    <li className='py-0'><button className="dropdown-item">Sports </button> </li>
                                    <li className='py-0'><button className="dropdown-item">Health & Beauty</button> </li>
                                    <li className='py-0'><button className="dropdown-item">Toys </button> </li>
                                    <li className='py-0'><button className="dropdown-item">Business & Industrial </button> </li>
                                    <li className='py-0'><button className="dropdown-item">Collectables </button> </li>
                                </ul>
                            </li> 
                          </ul>
                </div>
            <div className='col-10 search_box ' > 
            <input type="text" style={{width:"60vw"}} placeholder='search for anything' />  <button onClick={()=>Navigate("/search")} className='btn btn-primary'>Search </button> <button className='btn btn-tertiary'>Advanced</button>
            </div>
        </div> <hr />

  <div className="sticky-top nav-sticky shadow-lg rounded my-1" style={{zIndex:0, }}>
    <nav className="navbar navbar-expand-lg py-3 shadow-lg">
        <div className="container">
            {/* <Link className="navbar-brand ms-lg-5" to="/"><img src={regislogo} width={60} alt="" className='imglogo'/></Link> */}
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
                         
          <li className='nav-item'> <Link className="nav-link" to='/'>Home</Link> </li>
          {/* <li className="nav-item"> <Link className="nav-link" to="/*">Business&nbsp;<Link to='/*' className='border rounded text-decoration-none shadow-sm'></Link></Link></li> */}
          <li className="nav-item"> <Link className="nav-link" to="/electronics">Electronics</Link> </li>
          <li className="nav-item"> <Link className="nav-link" to="/motors">Motors</Link> </li>                
          <li className="nav-item"> <Link className="nav-link" to="/homeandgarden">Home & Garden</Link> </li>
          <li className="nav-item"> <Link className="nav-link" to="/clothing">Clothing</Link> </li>
          <li className="nav-item"> <Link className="nav-link" to="/sports">Sports</Link> </li>
          <li className="nav-item"> <Link className="nav-link" to="/healthandbeauty">Health&Beauty</Link> </li>
          <li className="nav-item"> <Link className="nav-link" to="/toys">Toys</Link> </li>
          <li className="nav-item"> <Link className="nav-link" to="/businessandindustrial">Business & Industrial</Link> </li>
          <li className="nav-item"> <Link className="nav-link" to="/collectables">Collectables</Link> </li>
                           
          </ul>     
        </div>
        </div>
      </nav>
    </div>
    {/* SIGNIN MODAL */}
    <Modal show={show} onHide={handleClose} size="md" aria-labelledby="contained-modal-title-vcenter" centered  style={{border:"1px solid red",letterSpacing:"0.2em" }} >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='d-flex justify-content-center ms-5 mx-5 ' style={{color:"white", backgroundColor:"#192943", borderRadius:"5px", padding:"5px 20px 5px 20px",letterSpacing:"0.23em"}}> SIGNIN PORTAL....  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=' row d-flex'>
            <div className='d-flex col-6 justify-content-start'> <button className='btn btn-lg col-12 btn-outline-primary' onClick={() => setbuyer(true)}> Buyer </button>  </div>
            <div className='d-flex col-6 justify-content-end'> <button className='btn btn-lg col-12 btn-outline-info' onClick={() => setbuyer(false)}>Seller </button> </div>
          </div> <hr />
         {
            buyer?
          <>
          <h4 className='d-flex justify-content-center'>Buyer's Login </h4>
          <input type="email" name="email" className='form form-control my-2' placeholder='example@gmail.com' onChange={(e)=>setsigninemail(e.target.value)} />
          <input type="password" name='password' className='form form-control' placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' onChange={(e)=>setsigninpassword(e.target.value)} /> <hr />
          <button className='btn btn-outline-danger' onClick={confirmlogin}> Siginin </button>
          <p>Dont't have a Buyer Account Yet? <button className='btn btn-sm btn-outline-secondary' onClick={register}> Register Here</button> </p>
          </>:
          <>
          <h4 className='d-flex justify-content-center'>Sellers's Login</h4>
          <input type="email" name="email" className='form form-control my-2' placeholder='example@gmail.com' onChange={(e)=>setsigninemail(e.target.value)} />
          <input type="password" name='password' className='form form-control' placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' onChange={(e)=>setsigninpassword(e.target.value)}/> <hr />
          <button className='btn btn-outline-danger' onClick={sellerlogin}> Siginin </button>
          <p>Dont't have a Seller Account Yet?<button className='btn btn-sm btn-outline-secondary' onClick={register}> Register Here</button></p>
          </>
          }
          </Modal.Body>
          <Modal.Footer> <Button variant="secondary" onClick={handleClose}> Close </Button> </Modal.Footer>
      </Modal>

      {/* REGISTRATION MODAL */}
      <Modal show={show2} onHide={handleClose2} size="md" aria-labelledby="contained-modal-title-vcenter" centered  style={{border:"1px solid red",letterSpacing:"0.2em" }} >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='d-flex justify-content-center ms-5 mx-5 ' style={{color:"white", backgroundColor:"#192943", borderRadius:"5px", padding:"5px 20px 5px 20px",letterSpacing:"0.23em"}}> REGISTRATION PORTAL....  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className=' row d-flex'>
            <div className='d-flex col-6 justify-content-start'> <button className='btn btn-lg col-12 btn-outline-primary' onClick={() => setbuyerregistration(true)}> Buyer </button>  </div>
            <div className='d-flex col-6 justify-content-end'> <button className='btn btn-lg col-12 btn-outline-info' onClick={() => setbuyerregistration(false)}>Seller </button> </div>
          </div> <hr />
            {
            buyerregistration?
          <>
          <h4 className='d-flex justify-content-center'> <u>Buyer's Registration</u></h4>
          
          <label htmlFor="full name" className='fw-bold' style={{color:"#4DC5DA"}} >Full Name:</label>
          <input type="text" className='form form-control' id='nameID'  placeholder='firstname&nbsp;&nbsp;lastname' onChange={handlenameChange} />
          {validname? null : <p><small className='text-danger'>Please enter a valid name</small></p> }

          <label htmlFor="phone number" className='fw-bold mt-1' style={{color:"#4DC5DA"}} >Phone Number:</label>
          <input type="number" className='form form-control' placeholder='enter phone number'  name='phone' onChange={(e)=>{setphonenumber(e.target.value)}} />
          {/* {validphonenumber? null : <p><small className='text-danger'>Please enter a valid phonenumber</small></p>} */}
          
          <label htmlFor="email address"  className='fw-bold mt-1' style={{color:"#4DC5DA"}} >Email Address:</label>
          <input type="email" name="email" className='form form-control my-2' placeholder='example@gmail.com' onChange={handleEmailChange}  />
          {validemail? null : <p><small className='text-danger'>Please enter a valid email address</small></p>}
          
          <label htmlFor=" address"  className='fw-bold mt-1' style={{color:"#4DC5DA"}} >Physical Address:</label>
          <input type="text" name="address" className='form form-control my-2' placeholder='Enter your home or office address' onChange={(e)=>{setaddress(e.target.value)}} />
          {/* {validemail? null : <p><small className='text-danger'>Please enter a valid email address</small></p>} */}

          <label htmlFor="password" className='fw-bold mt-1 ' style={{color:"#4DC5DA"}} >Password:</label>
          <input type="password" name='password' className='form form-control my-2' placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' onChange={handlePasswordChange} />
          {validpassword? null : <p><small className='text-danger'>Enter a strong password</small></p>}
          
          {
              ! izloading ?
              <><button onClick={confirmsignup} disabled={!validname || !validemail || !validpassword || !registeremail || !name || !password || !phonenumber} type='submit' id='submit' className="btn my-2 p-2 text-light w-100" style={{backgroundColor:"#192943"}}>Create Account</button></>:
              <><button disabled className="btn my-2 p-2 text-light w-100" style={{backgroundColor:"#192943"}}> <Spinner as="span" variant='white' animation="grow" size="sm" role="status" aria-hidden="true" /> Loading... </button></>
          }
          <p>Already have a buyer account? <button className='btn btn-sm btn-outline-secondary' onClick={login}>Login here</button> </p>
          </>:
          <>
          <h4 className='d-flex justify-content-center'><u>Seller's Registration</u></h4>
          <label htmlFor="full name" className='fw-bold' style={{color:"#4DC5DA"}} >Full Name:</label>
          <input type="text" className='form form-control' id='nameID'  placeholder='firstname&nbsp;&nbsp;lastname' onChange={handlenameChange} />
          {validname? null : <p><small className='text-danger'>Please enter a valid name</small></p> }

          <label htmlFor="phone number" className='fw-bold mt-1' style={{color:"#4DC5DA"}} >Phone Number:</label>
          <input type="number" className='form form-control' placeholder='enter phone number'  name='phone' onChange={(e)=>{setphonenumber(e.target.value)}} />
          {/* {validphonenumber? null : <p><small className='text-danger'>Please enter a valid phonenumber</small></p>} */}
          
          <label htmlFor="email address"  className='fw-bold mt-1' style={{color:"#4DC5DA"}} >Email Address:</label>
          <input type="email" name="email" className='form form-control my-2' placeholder='example@gmail.com' onChange={handleEmailChange}  />
          {validemail? null : <p><small className='text-danger'>Please enter a valid email address</small></p>}
          
          <label htmlFor=" address"  className='fw-bold mt-1' style={{color:"#4DC5DA"}} >Physical Address:</label>
          <input type="text" name="address" className='form form-control my-2' placeholder='Enter your Physical address' onChange={(e)=>{setaddress(e.target.value)}} />
          {/* {validemail? null : <p><small className='text-danger'>Please enter a valid email address</small></p>} */}

          <label htmlFor="password" className='fw-bold mt-1 ' style={{color:"#4DC5DA"}} >Password:</label>
          <input type="password" name='password' className='form form-control my-2' placeholder='&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;&#9679;' onChange={handlePasswordChange} />
          {validpassword? null : <p><small className='text-danger'>Enter a strong password</small></p>}
          
          {
              ! izloading ?
              <><button onClick={sellerregister} disabled={!validname || !validemail || !validpassword || !registeremail || !name || !password || !phonenumber} type='submit' id='submit' className="btn my-2 p-2 text-light w-100" style={{backgroundColor:"#192943"}}>Create Account</button></>:
              <><button disabled className="btn my-2 p-2 text-light w-100" style={{backgroundColor:"#192943"}}> <Spinner as="span" variant='white' animation="grow" size="sm" role="status" aria-hidden="true" /> Loading... </button></>
          }
          <p>Already have a seller account?  <button className='btn btn-sm btn-outline-secondary' onClick={login}>Login here</button></p>
          </>
          }
          </Modal.Body>
          <Modal.Footer> <Button variant="secondary" onClick={handleClose2}> Close </Button> </Modal.Footer>
      </Modal>

      <Modal show={showCart} onHide={handleCloseCart} size="md" aria-labelledby="contained-modal-title-vcenter" centered  style={{border:"1px solid red",letterSpacing:"0.2em" }} >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='d-flex justify-content-center ms-5 mx-5 ' style={{color:"white", backgroundColor:"#192943", borderRadius:"5px", padding:"5px 20px 5px 20px",letterSpacing:"0.23em"}}> CART ITEMS....  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <hr />
            {
            !oldCart?
          <>
            <h3>Your Cart is Currently Empty</h3>
          </>:
          <>
          {
          //  oldCart= JSON.parse(localStorage.getItem("productDetail1"))
            oldCart.map((each, index) => (
            <div className=" bg-white justify-center items-center ps-5 " key={index}>
               <h5>{index+1} <span>{each.productName}</span></h5> 
              <img className='w-25' src={each.productImg} alt="" /> <br />
              <b>{each.productPrice}</b> <br />  
               <button className='btn btn-sm btn-danger' onClick={()=>deleteCart(index)}>Delete</button> <hr />
            </div>
            ))
          }
          
          </>
          }
          </Modal.Body>
          <Modal.Footer> 
            
          <button onClick={handleShowShippingForm} className='btn  btn-lg btn-outline-danger col-12' > Proceed To Checkout </button>
          <button className='btn btn-outline-danger' onClick={handleCloseCart}> Close Cart</button>
          
          </Modal.Footer>
      </Modal>
      
      <Modal show={showShippingForm} onHide={handleCloseShippingForm} size="md" aria-labelledby="contained-modal-title-vcenter" centered  style={{border:"1px solid red",letterSpacing:"0.2em" }} >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter" className='d-flex justify-content-center ms-5 mx-5 ' style={{color:"white", backgroundColor:"#192943", borderRadius:"5px", padding:"5px 20px 5px 20px",letterSpacing:"0.15em"}}> CONFIRM DELIVERY DETAILS....  </Modal.Title>
        </Modal.Header>
        <Modal.Body>
           <hr />  
          { 
            // cart.map((each, index) => (
            // <div key={index}>
            //    <h1>{each.productName}</h1>
            //    <h1>{index}</h1> 
            //    <button onClick={()=>deleteCart(index)}>Delete</button> 
            //   {/* <button onClick={()=>editCart(index)}>Edit</button> */}
            // </div>
            // ))
            }   

          <h4 className='d-flex justify-content-center'><u>Delivery Details</u></h4>
          <label htmlFor="full name" className='fw-bold' style={{color:"#4DC5DA"}} >Full Name:</label>
          <input type="text" className='form form-control' id='nameID'  placeholder='firstname&nbsp;&nbsp;lastname' onChange={handlenameChange} />
          {validname? null : <p><small className='text-danger'>Please enter a valid name</small></p> }

          <label htmlFor="phone number" className='fw-bold mt-1' style={{color:"#4DC5DA"}} >Phone Number:</label>
          <input type="number" className='form form-control' placeholder='enter phone number'  name='phone' onChange={(e)=>{setphonenumber(e.target.value)}} />
          {/* {validphonenumber? null : <p><small className='text-danger'>Please enter a valid phonenumber</small></p>} */}
          
          <label htmlFor="email address"  className='fw-bold mt-1' style={{color:"#4DC5DA"}} >Email Address:</label>
          <input type="email" name="email" className='form form-control my-2' placeholder='example@gmail.com' onChange={handleEmailChange}  />
          {validemail? null : <p><small className='text-danger'>Please enter a valid email address</small></p>}
          
          <label htmlFor=" address"  className='fw-bold mt-1' style={{color:"#4DC5DA"}} >Shipping Address:</label>
          <input type="text" name="address" className='form form-control my-2' placeholder='Enter your Shipping address' onChange={(e)=>{setaddress(e.target.value)}} />
          {/* {validemail? null : <p><small className='text-danger'>Please enter a valid email address</small></p>} */}
          </Modal.Body>
          <Modal.Footer> 
           {
              ! izloading ?
              <><button  className='btn  btn-lg btn-outline-danger col-12' disabled={cart.length==0 }> Proceed To Make Payment </button></>:
              <><button disabled className="btn my-2 p-2 text-light w-100" style={{backgroundColor:"#192943"}}> <Spinner as="span" variant='white' animation="grow" size="sm" role="status" aria-hidden="true" /> Loading... </button></>
          }
          </Modal.Footer>
      </Modal>


    <div className=''>
        <div className=''>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img src={banner1} style={{borderRadius:"10px"}} alt=""  />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item interval={500}>
          <img src={banner1} style={{borderRadius:"10px"}} alt="" text="Second Slide"  />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img src={banner1} alt="" text="Third Slide" />
            <Carousel.Caption>
              <h3></h3>
              <p></p>
            </Carousel.Caption>
          </Carousel.Item>
    </Carousel>
        </div>
    </div>
  </div>
   </div>   
   
    </>
    
  )
}

export default Nav
