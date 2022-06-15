

const getFetchItem = (Items,id) =>{
    return new Promise((resolve, reject) =>{
        setTimeout(()=>{resolve(Items[Number(id)])},2000)
    })
}

export default getFetchItem;