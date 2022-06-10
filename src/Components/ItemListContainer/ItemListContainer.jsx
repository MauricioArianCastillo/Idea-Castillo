import { useEffect, useState } from "react";
import getFetch from "../../Helpers/getFetch/getFetch";
import ItemCount from "../ItemCount/ItemCounts";
import ItemList from "../ItemList/ItemList";


const ItemListContainer  = (props) => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetch ()
        .then((resp)=>{
            setProductos(resp)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false));
    })


    return(
        <>
        <div className="container-fluid">
            { loading ?
                <h1>Cargando..</h1>
                :
                <ItemList items={productos}/>
            }
        </div>
      </>
    )
}

export default ItemListContainer;