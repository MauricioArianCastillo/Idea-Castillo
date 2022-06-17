import { useEffect, useState } from "react";
import getFetch from "../../Helpers/getFetch/getFetch";
import ItemCount from "../ItemCount/ItemCounts";
import ItemList from "../ItemList/ItemList";
import {useParams}  from "react-router-dom"; 

const ItemListContainer  = (props) => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId1 } = useParams()


    useEffect(()=>{
        if (categoryId1){
            getFetch ()
            .then((resp)=>{
                setProductos(resp.filter(producto => producto.categoryId === categoryId1))
            })
            .catch(err => console.log(err))
            .finally(()=> setLoading(false));
        }
        else{
            getFetch ()
        .then((resp)=>{
            setProductos(resp)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false));
        }
        
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