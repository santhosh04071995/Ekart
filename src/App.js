//import './App.css';
import appstyle from './App.css';
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import MyNavbar from './components/MyNavbar';
import React, { Suspense } from 'react';
import Spinner from 'react-bootstrap/Spinner';
const LazyMyJewellery = React.lazy(() => import('./components/MyJewellery'));
const LazyMyElectronics = React.lazy(()=>import('./components/MyElectronics'));
const LazyMyMen = React.lazy(()=>import('./components/MyMen'));
const LazyMyWomen = React.lazy(()=>import('./components/MyWomen'))
const LazyProduct = React.lazy(()=>import('./components/MyProduct'));
 

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path = '/' element={<MyNavbar />} >

        <Route index element={<Suspense fallback = {<Spinner  className='m-3' animation="border" variant="danger" />}> <LazyMyJewellery /> </Suspense>} />
        <Route path="jewellery" element={<Suspense fallback={<Spinner  className="m-3" animation="border" variant="danger" />}> <LazyMyJewellery /> </Suspense>} />
        <Route path="electonics" element={<Suspense fallback={<Spinner  className="m-3" animation="border" variant="danger" />}> <LazyMyElectronics /> </Suspense>} />
        <Route path="men" element={<Suspense fallback={<Spinner  className="m-3" animation="border" variant="danger" />}> <LazyMyMen /> </Suspense>} />
        <Route path="women" element={<Suspense fallback={<Spinner  className="m-3" animation="border" variant="danger" />}> <LazyMyWomen /> </Suspense>} />
        <Route path="product" element={<Suspense fallback={<Spinner  className="m-3" animation="border" variant="danger" />}> <LazyProduct /> </Suspense>} />
            
     </Route>
        
    
    
    )
  );
 
  return (
    <div>
      <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
