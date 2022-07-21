import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCounts";
import ItemList from "../ItemList/ItemList";
import {useParams}  from "react-router-dom"; 
import {collection, doc, getDoc, getDocs, getFirestore, onSnapshot, orderBy, query, where} from 'firebase/firestore'

const ItemListContainer  = () => {
    
    const [categoria, setCategoria] = useState(false)
    const [productos, setProductos] = useState([])
    const [loading, setLoading] = useState(true)
    const {categoryId } = useParams()

    useEffect(() => {
        const db = getFirestore()
        const queryCollection = collection(db,'products')
        const queryCollectionFilter = query( queryCollection, where('categoryId','==', `${categoryId}`))
        if (categoryId) { getDocs(queryCollectionFilter)
        .then(data => setProductos(data.docs.map(item => ({id: item.id, ...item.data()}))));
        setCategoria(true)}
        else {
            getDocs(queryCollection)
            .then(data => setProductos(data.docs.map(item => ({id: item.id, ...item.data()}))));
            setCategoria(false)
        }
       
        setLoading(false)
    },[categoryId])


    return(
        <>
        <div className="container-fluid">
            <br></br>
            {categoria ? 
                <h1>{categoryId}</h1>
                :
                <h1>Todos los productos</h1>

            }
            
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