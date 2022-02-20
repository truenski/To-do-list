import React from 'react'
import MaterialIcon from 'material-icons-react'
import '../Todo.css';
import {useSelector, useDispatch} from 'react-redux';
import {changeDone, deleteItem} from '../Actions/listActions'

function List (props){

    const items = useSelector(state=>state)
    const dispatch = useDispatch()

    function DoneOrNot(props){
        if(props.done ){return( <MaterialIcon icon="check_box"  size={25} />)}
else{return(
    <MaterialIcon icon="check_box_outline_blank"  size={25} />)}
        
    }
   
    return(
    <ul className="list-group " >
    {items.map(iten=><li  className={iten.done ? " text-decoration-line-through bg-dark text-secondary   list-group-item": "list-group-item-warning  list-group-item-action active list-group-item"}  key={iten.id}>
        
        {iten.text}
    <button  className="btn btn-sm ml-1 float-right"  onClick={()=>{dispatch(deleteItem(iten.id))}}><MaterialIcon icon="close" color="red" size={25} /></button>
    <button  className="btn btn-sm ml-1 float-right  "  onClick={()=>{dispatch(changeDone(iten.id))}}><DoneOrNot /*done={iten.done}*/></DoneOrNot></button>
    <span class="badge badge-warning badge-pill float-right">Tarefa criada às {iten.hour}h{iten.minutes}m</span>
    </li>)}
    </ul>
    )
}

export default List