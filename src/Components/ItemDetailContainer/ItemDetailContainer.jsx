import { useEffect, useState } from "react";
import getFetch from "../../Helpers/getFetch/getFetch";
import ItemCount from "../ItemCount/ItemCounts";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemList from "../ItemList/ItemList";
import {useParams}  from "react-router-dom"
import { doc, getDoc, getFirestore } from "firebase/firestore";

const ItemDetailContainer = (props) => {
    
    const [bool,setBool] = useState(true)
    const [i, setItem] = useState()
    const [loading, setLoading] = useState(true)
    const  {id} = useParams()


    useEffect(() => {
        const db = getFirestore()
        const queryItem = doc(db,'products')
        getDoc(queryItem)
        .then(resp => setItem({id: resp.id,...resp.data()}))
        console.log(i)
        setLoading(false)
    },[bool])

    /*useEffect(()=>{
        getFetch (id - 1)
        .then((resp)=>{
            setItem(resp)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false));
    }, [])*/


    return(
        <>
        <div className="container">
            { loading ?
                <h1>Cargando..</h1>
                :
                <ItemDetail id={i.id} title={i.title} price={i.price} description={i.description} pictureUrl={i.pictureUrl}/>
            }
        </div>
      </>
    )
}

export default ItemDetailContainer;