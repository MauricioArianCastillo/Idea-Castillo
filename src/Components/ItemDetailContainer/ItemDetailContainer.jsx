import { useEffect, useState } from "react";
import ItemCount from "../ItemCount/ItemCounts";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemList from "../ItemList/ItemList";
import {NavLink, useParams}  from "react-router-dom"
import { collection, doc, getDoc, getDocs, getFirestore, onSnapshot, query, where } from "firebase/firestore";

const ItemDetailContainer = (props) => {
    

    const [i, setItem] = useState([])
    const [loading, setLoading] = useState(true)
    const  {id} = useParams()


    useEffect(() => {
       
        const db = getFirestore()
        const queryCollection = collection(db,'products')
        let prod = []
       
        onSnapshot(queryCollection,(snapshot) => {
            
            snapshot.docs.forEach((doc) => prod.push({ ...doc.data()}))
            console.log(prod)
            setLoading(true)
            let prod_id = []
            prod.forEach((item) => {
                prod_id.push(item.id)
            });
            
            if(prod_id.includes(Number(id))){ 
                const queryCollectionFilter = query( queryCollection, where('id','==', Number(id)))
                getDocs(queryCollectionFilter)
                .then(data => setItem(data.docs.map(item => ({id: item.id, ...item.data()}))))
                setLoading(false)}
            else {setLoading('.')}
        })
    },[])


    return(
        <>
        <div className="container">
            {(() =>{ 
                if (loading===true) {
                return(
                <h1>Cargando..</h1>)}
                else if (loading===false) {
                    return(
                        i.map(item => <li key={item.id} className="list-unstyled"><ItemDetail id={item.id} title={item.title} price={item.price} description={item.description} pictureUrl={item.pictureUrl} /></li>)
                    )
                }
                else if(loading==='.'){return(
                    <div>
                        <h1>Por el momento no hay stock de ese producto. Toca el boton para ir a la pagina principal</h1>
                        <br></br>
                        <br></br>
                        <NavLink to={`/`}>
                                <br></br>
                                <br></br>
                                <button type="button" className="btn btn-primary" >Ir al Inicio</button>
                                
                            </NavLink>
                    </div>    
                )}

                
            })()}
        </div>
      </>
    )
}

export default ItemDetailContainer;