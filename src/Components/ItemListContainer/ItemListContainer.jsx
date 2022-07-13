import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCounts";
import ItemList from "../ItemList/ItemList";
import {useParams}  from "react-router-dom"; 
import {collection, doc, getDoc, getDocs, getFirestore, query, where} from 'firebase/firestore'

const ItemListContainer  = () => {
    
    const [bool, setBool] = useState(true)
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db,'products')
        const queryCollectionFilter = query( queryCollection, where('categoryId','==', `${categoryId}`))
        if (categoryId) { getDocs(queryCollectionFilter)
        .then(data => setProductos(data.docs.map(item => ({id: item.id, ...item.data()}))))}
        else {
            getDocs(queryCollection)
            .then(data => setProductos(data.docs.map(item => ({id: item.id, ...item.data()}))))
        }
       
        setLoading(false)
    },[categoryId])


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