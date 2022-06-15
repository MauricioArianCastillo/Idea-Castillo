import { useEffect, useState } from "react";
import getFetch from "../../Helpers/getFetch/getFetch";
import getFetchItem from "../../Helpers/getFetch/getFetchItem";
import ItemCount from "../ItemCount/ItemCounts";
import ItemDetail from "../ItemDetail/ItemDetail";
import ItemList from "../ItemList/ItemList";


const ItemDetailContainer = (props) => {
    
    const Items = [{id: "1", title: "Martillo",
    description: `- Cabeza forjada en acero especial y templada garantizando gran resistencia al producto.
    - Acabado pulido y cabeza barnizada, proporcionando protección contra la oxidación.
    - Mango de madera fijado con epoxi.
    - Perfecto balance entre la cabeza y el mango para aumentar el confort y seguridad del usuario durante el uso.
    - Los martillos son sometidos a un proceso de temple localizado para tener dureza adecuada en la base de impacto y uñas para soportar el uso continuo por largos períodos.`,
     price: "5000", pictureUrl: "https://d3f64ghtnjizps.cloudfront.net/wp-content/uploads/sites/103/2020/07/03094818/ikbp%C3%B1.jpg"},
    {id: "2", title: "Pala",
    description: `- Cabeza forjada en acero especial y templada garantizando gran resistencia al producto.
    - Acabado pulido y cabeza barnizada, proporcionando protección contra la oxidación.
    - Mango de madera fijado con epoxi.
    - Perfecto balance entre la cabeza y el mango para aumentar el confort y seguridad del usuario durante el uso.
    - Los martillos son sometidos a un proceso de temple localizado para tener dureza adecuada en la base de impacto y uñas para soportar el uso continuo por largos períodos.`,
    price: "3000", pictureUrl: "https://image.made-in-china.com/155f0j00YfeUbLuaVicB/Steel-Shovel-with-Wooden-Handle-for-Farming-Tools.jpg"}];

    const [i, setItem] = useState()
    const [loading, setLoading] = useState(true)

    useEffect(()=>{
        getFetchItem (Items,0)
        .then((resp)=>{
            setItem(resp)
        })
        .catch(err => console.log(err))
        .finally(()=> setLoading(false));
    })


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