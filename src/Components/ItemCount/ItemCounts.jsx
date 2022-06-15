import React, {useState} from "react";

function ItemCount ({stock, initial,onAdd}){

    const [count,setCount] = useState(Number(initial));

    function agregar(){
        if (count!=stock){
        setCount(count +1);
        onAdd(count +1);
        }
    }
    function restar(){
        if (count!=initial){
        setCount(count -1);
        onAdd(count -1);
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
            </div>
        </div>    
        
         
    </>
    )
}

export default ItemCount;