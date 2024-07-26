import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import jstyle from './MyJewellery.module.css'
import { useDispatch, useSelector } from "react-redux";
import { myclick } from "../redux/MyValue";

import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';



export default function MyJewellery() {
    const[lists,setLists] = useState([]);
    const [filteredData, setFilteredData] = useState([]);
    const myArray = [7,8];
    
    const [smShow, setSmShow] = useState(false);
   
   
    useEffect(()=> {
        async function myfunc() {
             let x = await fetch('https://fakestoreapi.com/products/category/jewelery');
             let y = await x.json();
           
             setLists(y);

             const filtered = lists.filter(singlelist => myArray.includes(singlelist.id));
             setFilteredData(filtered)
         }
 
         myfunc();
     },[])


     function handleAddToCart(a){
        cartpopup();
        autoclick(myclick(a));
     }
     
     function cartpopup() {
        setSmShow(true);
        setTimeout(() => {
            setSmShow(false);
        }, 1000);
     }

     let y = useSelector((state)=> state.ourvalue.value)
     let autoclick = useDispatch();

    return (
        <div>

    {/* cart added popup by modal */}
        
        <Modal
            size="sm"
            show={smShow}
            onHide={() => setSmShow(false)}
            aria-labelledby="example-modal-sizes-title-sm"
        >
        {/* <Modal.Header closeButton>
          <Modal.Title id="example-modal-sizes-title-sm">
            Cart
          </Modal.Title>
        </Modal.Header> */}
        <Modal.Body className="text-center m-1" >Item  Added <FontAwesomeIcon icon={faCheck} size='2x' /></Modal.Body>
               
		</Modal>
    {/* End of cart popup */}
         
         {/* <h1>{y}</h1>    */}

        {/* <MyNavbar /> */}

        
        <div className="container">
           <div className="row ms-3">
             
             
                {lists.map((list)=> (
                    <Card style={{ width: '15rem' }} className="m-2">
                    <Card.Img className={jstyle.pimage} variant="top" src={list.image} />
                    <Card.Body>
                      <Card.Title className={jstyle.mytitle}>{list.title}</Card.Title>
                      <Card.Text className="text-center">
                            <p>{list.category}</p>
                           <p> RS:-{list.price}</p> 
                         
                        </Card.Text>
                        <div className="text-center">
                        <Button type="button" className="btn btn-danger" onClick={()=>handleAddToCart(list.id)}>ADD CART</Button>
                        </div>
                        
                    </Card.Body>
                  </Card>   
                ))}
                
            </div>
        </div>
        </div>  
    );
}