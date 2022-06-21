const Items = [{
    categoryId: "martillos",
    id: "1", 
    title: "Martillo", 
    description: `- Cabeza forjada en acero especial y templada garantizando gran resistencia al producto.
    - Acabado pulido y cabeza barnizada, proporcionando protección contra la oxidación.
    - Mango de madera fijado con epoxi.
    - Perfecto balance entre la cabeza y el mango para aumentar el confort y seguridad del usuario durante el uso.
    - Los martillos son sometidos a un proceso de temple localizado para tener dureza adecuada en la base de impacto y uñas para soportar el uso continuo por largos períodos.`,
    price: "5000",
    pictureUrl: "https://d3f64ghtnjizps.cloudfront.net/wp-content/uploads/sites/103/2020/07/03094818/ikbp%C3%B1.jpg"},
    {categoryId: "palas",
     id: "2",
     title: "Pala",
     description: `- Cabeza forjada en acero especial y templada garantizando gran resistencia al producto.
    - Acabado pulido y cabeza barnizada, proporcionando protección contra la oxidación.
    - Mango de madera fijado con epoxi.
    - Perfecto balance entre la cabeza y el mango para aumentar el confort y seguridad del usuario durante el uso.
    - Los martillos son sometidos a un proceso de temple localizado para tener dureza adecuada en la base de impacto y uñas para soportar el uso continuo por largos períodos.`, 
     price: "3000", 
     pictureUrl: "https://image.made-in-china.com/155f0j00YfeUbLuaVicB/Steel-Shovel-with-Wooden-Handle-for-Farming-Tools.jpg"}];


const getFetch = (id) =>{
    return new Promise((resolve, reject) =>{
        if(id != "lista")
            setTimeout(()=>{resolve(Items[Number(id)])},2000)
        else 
            setTimeout(()=>{resolve(Items)},2000)
    })
}


export default getFetch;