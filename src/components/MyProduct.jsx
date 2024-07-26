import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import pstyle from './MyProduct.module.css'
import { useSelector } from "react-redux";
export default function MyProduct() {
    
    const[lists,setLists] = useState([]);
    let [myarray,setMyarray] = useState([]);
    const [myfinal, setMyfinal] = useState([]);
    let y = 0;

    let reduxarray = useSelector((state)=>state.ourvalue.value);

    useEffect(()=> {
        setMyarray(reduxarray)
    },[reduxarray])

    useEffect(()=> {
       async function myfunc() {
            let x = await fetch('https://fakestoreapi.com/products');
            let y = await x.json();
           
            let filtered =  y.filter(li =>myarray.includes(li.id));
            setMyfinal(filtered);
        }
        myfunc();
    },[myarray])

    y = myfinal.reduce((previous,current)=> {
        return previous+current.price;
     },0) 
    
    return (
        <div className="container me-4">
                <div >
               
               {myfinal && myfinal.length>0 ?(     
                   myfinal.map((my)=> (
                       <div>
                           <img src={my.image} className= {`${pstyle.myimg} rounded-4 shadow-4 float-start m-2`} alt="" />
                           <div className="ms-4">
                             <h1>  {my.title} </h1>
                              <p> {my.description}</p>
                               <h3 className= "text-end">RS:-{my.price}/- </h3> 
                               <hr />
                               </div>
                           </div>
                           
                       
                   ))
               ):(
                   <h1>Your Cart is empty,  </h1>
              )}
   
           </div>
           <div className="text-center">
                            <h1> Total Price : {y}/-</h1>   
                            <Button variant="success">Proceed To Payment</Button>

                            </div>

        </div>
        
        
    );
}