import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faDeleteLeft } from '@fortawesome/free-solid-svg-icons'

function AddingList(props) {

   
    return (
        <>
            <div className="todo_style">
                <FontAwesomeIcon icon={faDeleteLeft} className="icon"
                    onClick={()=>{
                        props.onSelect(props.id)
                    }}
                /> &nbsp;&nbsp;&nbsp;
                <br />
                <li >{props.text}</li>
            </div>
        </>
    )
}

export default AddingList