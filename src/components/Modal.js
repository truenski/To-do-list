import React from 'react'
import Card from './Card'



function Modal(props){
    
   
    
    return(<div id="ee" onClick={props.onHideModal} className={props.show?"Modal pulse":"Modal d-none"} >
<Card className="cardModal">{props.children}</Card>
</div>
)
    
}

export default Modal

