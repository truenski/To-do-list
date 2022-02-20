import React, { useState } from 'react';
import './Todo.css';
import List from './components/List';
import Form from './components/Form';
import Modal from './components/Modal';
import MaterialIcon from 'material-icons-react';
 
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import listReducer from './reducers/listReducer'


const SAVED_ITEMS = 'savedItems'

//-----------STORAGE---------------------------------------------------

function persistState(state){
    localStorage.setItem(SAVED_ITEMS,JSON.stringify(state))
    //colocar array de items(state) no storage SAVED_ITEMS
}
function loadState(){
    const actualState = localStorage.getItem(SAVED_ITEMS);
    if(actualState)
    return JSON.parse(actualState)
    else return []
}

const store = createStore(listReducer,loadState())
//quando chamar a store, chama também loadState

store.subscribe(()=>{persistState(store.getState())
})

//---------------------------------------------------------------------

function Todo() {


    const [showModal, setShowModal] = useState(false);

 
function onHideModal(e){
    let target = e.target;
if(target.id === 'ee' ){setShowModal(false)}
}

    return (



        <div className="container m-4 d-flex flex-column justify-content-center mx-auto">
            <Provider store={store}>
            <header className="d-flex justify-content-between ">
            <h1 ClassName="m-2">To do list:</h1>
            <button  className=" btn btn-sm ml-2 pt-3 mb-4 btn-warning leu " onClick={()=>{setShowModal(true)}}  ><MaterialIcon icon="add_task"size={50} />    </button>
            </header>
        
           <List ></List>
           <Modal show={showModal} onHideModal={onHideModal}><Form onHideModal={onHideModal}   ></Form></Modal>


           </Provider>
        </div>

    )



}

export default Todo;