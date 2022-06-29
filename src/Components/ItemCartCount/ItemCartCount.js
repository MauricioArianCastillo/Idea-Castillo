import React, {useState} from "react";
import { Link } from 'react-router-dom'

function ItemCartCount ({stock,initial,item,funcion,id}){

    const [count,setCount] = useState(item.cantidad);

    function agregar(){
        if (count!=stock){
        setCount(count +1);
        funcion(count,id)
        }
    }
    function restar(){
        if (count!=0){
        setCount(count -1);
        funcion(count,id)
        }
        else{funcion(count,id)}
    }
    
    
    return(
    <>  
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={restar}>-</button>
                    <h2><span class="badge bg-secondary">{count}</span></h2>
                    <button type="button" className="btn btn-primary" onClick={agregar}>+</button>
                </div>   
        
         
    </>
    )
}

export default ItemCartCount;