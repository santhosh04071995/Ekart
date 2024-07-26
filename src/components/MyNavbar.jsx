import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser,faMagnifyingGlass,faBagShopping,faBars } from '@fortawesome/free-solid-svg-icons';
import { useEffect, useState } from 'react';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Modal from 'react-bootstrap/Modal';

import { NavLink, Outlet } from 'react-router-dom';
import mystyle from './MyNavbar.module.css'
import { useSelector } from 'react-redux';



export default function MyNavbar() {

  const [navshow, setNavshow] = useState(false);
  const handleClose = () => setNavshow(false);
  const handleShow = () => setNavshow(true);

    // auto login popup page
    const [show, setShow] = useState(false);
    const popClose = () => setShow(false);
    // const popShow = () => setShow(true);

    useEffect(()=> {
      setTimeout(() => {
        setShow(true);
      }, 3000);
    
  },[])


  let x= useSelector((state)=> state.ourvalue.value)

  return (
    <div>
        <Navbar fixed="top" expand="lg" className="bg-body-tertiary">
      <Container className={mystyle.myflex}> 

        {/* responsive menu items */}
        <FontAwesomeIcon  className={mystyle.fabar} variant="primary" onClick={handleShow} icon={faBars}  size='2x' />


      <Offcanvas show={navshow} onHide={handleClose}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Sign Up/Login</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
        <Nav className="me-auto">
            <Nav.Link href="#home" className=' fw-bold text-uppercase'>Electronics</Nav.Link>
            <Nav.Link href="#link" className=' fw-bold text-uppercase'>Jewelery</Nav.Link>
            <Nav.Link href="#link" className=' fw-bold text-uppercase'>Men's clothing</Nav.Link>
            <Nav.Link href="#link" className=' fw-bold text-uppercase'>Women's clothing</Nav.Link>
         </Nav>
        </Offcanvas.Body>
      </Offcanvas>
        {/* end of responsive side menu */}

        {/* auto login popup */}
        <Modal show={show} onHide={popClose}>
        <Modal.Header closeButton>
          <Modal.Title><span className='fw-bolder'>Login</span> or <span className='fw-bolder'> Signup</span></Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="Mobile Number" />
          <p className='m-2'>By continuing, i agree to the <span className='text-danger'>Term of use</span>  & <span className='text-danger'>Privacy Policy</span></p>
        </Modal.Body>
        <Modal.Footer>
          <button type="button" class="btn btn-danger">CONTINUE</button>
        </Modal.Footer>
        </Modal>
      {/* end of auto login popup */}
        

      <NavLink to="/" className='fw-bold text-uppercase text-black text-decoration-none m-2'>
          <img src="/mytra_logo.png" className={`${mystyle.img} ms-2`} alt="" />
      </NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" className={mystyle.mycls} />
        <Navbar.Collapse id="basic-navbar-nav" className={mystyle.mymenu}>
        <Nav className="me-auto">
          
        <NavLink to="jewellery" className='fw-bold text-uppercase text-black text-decoration-none m-2'>Jewelery</NavLink>  
        <NavLink to="men" className='fw-bold text-uppercase text-black text-decoration-none m-2'>Men's clothing</NavLink>  
        <NavLink to="women" className='fw-bold text-uppercase text-black text-decoration-none m-2'>Women's clothing</NavLink>  
        <NavLink to="electonics" className='fw-bold text-uppercase text-black text-decoration-none m-2'>Electronics</NavLink>  
          
          </Nav>

          <div className='d-flex'>
            <Form inline>
            <InputGroup>
                <InputGroup.Text id="basic-addon1"> <FontAwesomeIcon icon={faMagnifyingGlass} /></InputGroup.Text>
            <Form.Control
                placeholder="Username"
                aria-label="Username"
                aria-describedby="basic-addon1"
            />
            </InputGroup>
            </Form>
            
            <div >   
              <NavLink to="product" className={`${mystyle.mycountparent}fw-bold text-uppercase text-black text-decoration-none m-2`}>
                <FontAwesomeIcon   className='ms-2 me-2' icon={faBagShopping} size='2x' />
              </NavLink>
              <p className={mystyle.mycount}>{x.length}</p>
            </div>
          <FontAwesomeIcon onClick={()=> alert('hello')} className='ms-2 me-2' icon={faUser} size='2x' />
        </div>
        </Navbar.Collapse>
        {/* separte two icons */}
        <div className={mystyle.mytwoicon}>
           
              <NavLink to="product" className={`${mystyle.mycountparent}fw-bold text-uppercase text-black text-decoration-none m-2`}>
                <FontAwesomeIcon   className='ms-2 me-2' icon={faBagShopping} size='2x' />
              </NavLink>
              <span className={mystyle.mycount}>{x.length}</span>
            
          <FontAwesomeIcon onClick={()=> alert('hello')} className='ms-2 me-2' icon={faUser} size='2x' />
        </div>
        {/* end of separte two icons */}
      </Container>
    </Navbar>
     
     <div className = {mystyle.subcat}>
      <NavLink to="jewellery"> <button type="button" class="btn btn-success">Jewellery</button></NavLink>
      <NavLink to="electonics"> <button type="button" class="btn btn-danger"> Electronics</button></NavLink>
      <NavLink to="men"> <button type="button" class="btn btn-warning">Men's clothing</button></NavLink>
      <NavLink to="women"> <button type="button" class="btn btn-info">Women's clothing</button></NavLink>
     </div>

    <Outlet />
   
    </div>
  );
}