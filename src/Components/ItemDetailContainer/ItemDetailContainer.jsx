import { useEffect, useState } from "react";
import getFetch from "../../Helpers/getFetch/getFetch";
import ItemCount from "../ItemCount/ItemCounts";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemList from "../ItemList/ItemList";
import {useParams}  from "react-router-dom"
import { collection, doc, getDoc, getDocs, getFirestore, query, where } from "firebase/firestore";

const ItemDetailContainer = (props) => {
    
    const [bool,setBool] = useState(true)
    const [i, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const  {id} = useParams()


    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db,'products')
        const queryCollectionFilter = query( queryCollection, where('id','==', Number(id)))
        getDocs(queryCollectionFilter)
        .then(data => setItem(data.docs.map(item => ({id: item.id, ...item.data()}))))
       
        setLoading(false)
    },[])
    console.log(i)

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
                i.map(item => <ItemDetail id={item.id} title={item.title} price={item.price} description={item.description} pictureUrl={item.pictureUrl} />)
            }
        </div>
      </>
    )
}

export default ItemDetailContainer;