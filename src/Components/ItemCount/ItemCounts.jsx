import React, {useState} from "react";
import { Link } from 'react-router-dom'

function ItemCount ({stock, initial,Add}){

    const [count,setCount] = useState(initial);

    function agregar(){
        if (count!=stock){
        setCount(count +1);
        }
    }
    function restar(){
        if (count!=initial){
        setCount(count -1);
        }
    }
    
    
    return(
    <>  
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">(stock {stock})</h5>
                <h5>{count}</h5>
                <div className="btn-group" role="group" aria-label="Basic example">
                    <button type="button" className="btn btn-primary" onClick={restar}>-</button>
                    <button type="button" className="btn btn-primary" onClick={agregar}>+</button>
                </div>
                <div className="btn">
                    <button type="button" className="btn btn-primary" onClick={() => Add(count)}>Agregar al carrito</button>
                </div>
            </div>
        </div>    
        
         
    </>
    )
}

export default ItemCount;