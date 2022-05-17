import React, { useState } from 'react'
import AddingList from './AddingList';

function TodoList() {

    const [inputList, setinputList] = useState("");
    const [items, setItems] = useState([])
    const itemEvent = (event) => {
        console.log(event.target.value);
        setinputList(event.target.value)
    }

    const ListofItems = () => {
        setItems((oldItems) => {
            return [...oldItems, inputList]
        })
        setinputList("")
    }

    const deleteItems = (id) =>{
        console.log("deleted");

        setItems((oldItems)=>{
            return (oldItems.filter((arrElem,index)=>{
                return (index !== id)
            }))
        })
    }

    return (
        <>
            <div className="main_div">
                <div className="center_div">
                    <br />
                    <h1>ToDo LiSt</h1>
                    <br />
                    <input type="text" placeholder='Add Items' onChange={itemEvent} value={inputList} />
                    <button onClick={ListofItems}> + </button>
                    <ol>
                        {items.map((value,index) => {
                           return <AddingList 
                           key={index}
                           id={index} 
                           text={value}
                           onSelect={deleteItems}
                            />
                        })}
                    </ol>
                </div>
            </div>
        </>
    )
}

export default TodoList