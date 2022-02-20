import React, { useState } from 'react'
//import AddTaskIcon from '@mui/icons-material/AddTask';
import MaterialIcon from 'material-icons-react'
import {addItem} from '../Actions/listActions'
import {useDispatch} from 'react-redux'

function Form (props){
    
    
    

    const [text, setText] = useState("");
    const dispatch = useDispatch()

    function handleChange(event) {
        const t = event.target.value;
        setText(t);
    }

    function addItemE(event) {
        event.preventDefault();
        //.preventDefault() evita o comportamento normal do botão, que é fazer chamada pro back-end
        if(text){
        dispatch(addItem(text))
        setText("");
        props.onHideModal()
        }
        
       

    }
return(<div className="form-group">
<form className="m-4 d-flex flex-column ">
    <div className="d-flex">
    <input autofocus type="text" id="input" className="form-control list-group-item-warning w-70 p-2" onChange={handleChange} value={text} placeholder="New task..." ></input>
    <button onClick={addItemE}  className="btn btn-sm ml-2  " ><MaterialIcon icon="add " size={25} />
   
</button></div> <small className="text-muted">Clique fora da caixa para sair.</small>
</form>
</div>
)
 }

 
export default Form

