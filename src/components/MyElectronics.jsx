import { useEffect, useState } from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import estyle from './MyElectonics.module.css'
import { useDispatch, useSelector } from "react-redux";
import { myclick } from "../redux/MyValue";

import Modal from 'react-bootstrap/Modal';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';

export default function MyElectronics() {
    const[lists,setLists] = useState([]);

    const [smShow, setSmShow] = useState(false);
    useEffect(()=> {
        async function myfunc() {
             let x = await fetch('https://fakestoreapi.com/products/category/electronics');
             let y = await x.json();
             console.log(y);
             setLists(y);
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

            {/* <h1>{y}</h1> */}

            {/* <MyNavbar /> */}
        
        <div className="container">
           <div className="row ms-3">
             
             
                {lists.map((list)=> (
                    <Card style={{ width: '15rem' }} className="m-2">
                    <Card.Img className={estyle.pimage} variant="top" src={list.image} />
                    <Card.Body>
                      <Card.Title className={estyle.mytitle}>{list.title}</Card.Title>
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