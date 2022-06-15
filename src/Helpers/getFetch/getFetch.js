
const Items = [{id: "1", title: "Martillo", price: "5000", pictureUrl: "https://d3f64ghtnjizps.cloudfront.net/wp-content/uploads/sites/103/2020/07/03094818/ikbp%C3%B1.jpg"},
{id: "2", title: "Pala", price: "3000", pictureUrl: "https://image.made-in-china.com/155f0j00YfeUbLuaVicB/Steel-Shovel-with-Wooden-Handle-for-Farming-Tools.jpg"}];

const getFetch = () =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{resolve(Items)},2000)
    })
}

export default getFetch;