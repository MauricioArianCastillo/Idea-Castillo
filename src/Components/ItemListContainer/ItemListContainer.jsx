import { useEffect, useState } from "react";
import getFetch from "../../Helpers/getFetch/getFetch";
import ItemCount from "../ItemCount/ItemCounts";
import ItemList from "../ItemList/ItemList";
import {useParams}  from "react-router-dom"; 
import {doc, getDoc, getFirestore} from 'firebase/firestore'

const ItemListContainer  = () => {
    
    const [bool, setBool] = useState(true)
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryItem = doc(db,'products','pdOSD2uMBSCfSxfPwJVc')
        getDoc(queryItem)
        .then(resp => setProductos({id: resp.id,...resp.data()}))
        setLoading(false)
        console.log(productos)
    },[bool])

   /* useEffect(()=>{
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
        
    }, [categoryId])*/


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