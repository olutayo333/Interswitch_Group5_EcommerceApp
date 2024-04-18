import React, { useState } from 'react'
import Nav from './Nav';

const Search = () => {
    
    const [searchKeyword, setsearchKeyword] = useState("");
    const [resultArr, setresultArr] = useState([]);
    const[motors, setmotors] = useState([]); const [electronics, setelectronics] = useState([]);
    const[homeAndGarden, sethomeAndGarden] = useState([]); const [clothings, setclothings]= useState([]);
    const[sports, setsports] = useState([]); const[healthAndBeauty, sethealthAndBeauty]=useState([]);
    const[businessandindustrial, setbusinessandindustrial] = useState([]);
    const [collectables, setcollectables] = useState([])
    const names = [{productName:'james', age:1}, {productName:'john', age:1}, {productName:'paul'}, {productName:'bingo'}, {productName:"geoge"}]

    //use effect to populate the category array

    // const filter =()=>{
    //     let pname = names.productName; console.log(pname);
    //     let arr = names.filter(nam =>{nam.productName.includes("j")})
    //    setresultArr ([...resultArr, arr] )
    //    console.log(resultArr);
    //    setallTodo([...allTodo, todo])
    // }

    return (
    <div>
        <Nav/>

        <div>
            {
                names.filter(person => person.productName.includes("j"))
                .map(filteredperson=>(<>{filteredperson.productName}</>))
            }
        </div>


      {
        resultArr.length==0?
       <>
            <h3 className='text-info my-5'>Your Search did not match any of our product</h3>
       </>:
       <>{
            resultArr.map((each, index) => (
            <div key={index}>
               <h1>{each.productName}</h1>
               <h1>{index}</h1> 
               {/* <button onClick={()=>deleteCart(index)}>Delete</button>  */}
              {/* <button onClick={()=>editCart(index)}>Edit</button> */}
            </div>
            ))
        }
       </>  
      }

      
    </div>
  )
}

export default Search
