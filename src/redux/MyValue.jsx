import { createSlice } from "@reduxjs/toolkit";
// import Button from 'react-bootstrap/Button';
// import Modal from 'react-bootstrap/Modal';


// const [smShow, setSmShow] = useState(false);

const MyValueslice = createSlice({
    name : 'anyname',
    initialState : {
        value : []
    },
    reducers : {
        myclick : (state,action)=> {
            state.value.push(action.payload);
            console.log('pushed');
           
        }
    }
    
})
export default MyValueslice.reducer;	
export const {myclick}= MyValueslice.actions