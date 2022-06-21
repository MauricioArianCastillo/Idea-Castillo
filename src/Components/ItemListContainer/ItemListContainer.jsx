import { useEffect, useState } from "react";
import getFetch from "../../Helpers/getFetch/getFetch";
import ItemCount from "../ItemCount/ItemCounts";
import ItemList from "../ItemList/ItemList";
import {useParams}  from "react-router-dom"; 

const ItemListContainer  = () => {
    
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId } = useParams()


    useEffect(()=>{
        if (categoryId){
            getFetch ("lista")
            .then((resp)=>{
                setProductos(resp.filter(producto => producto.categoryId === categoryId))
                setLoading(false)
            })
            .catch(err => console.log(err))
        }
        else{
            getFetch ("lista")
        .then((resp)=>{
            setProductos(resp)
            setLoading(false)
        })
        .catch(err => console.log(err))
        }
        
    }, [categoryId])


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