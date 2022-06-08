import React, {useState} from "react";

function ItemCount ({stock, initial,onAdd}){

    const [count,setCount] = useState(0);

    function agregar(){
        if (count!=stock){
        setCount(count + 1);
        onAdd(count +1);
        }
    }
    function restar(){
        if (count!=0){
        setCount(count -1);
        onAdd(count -1);
        }
    }
    return(
    <>
        <div className="card">
            <div className="card-body">
                <h3 className="card-title">Remera (stock {stock})</h3>
                <h4>{count}</h4>
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