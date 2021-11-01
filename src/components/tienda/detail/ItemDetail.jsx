import React from 'react'

const ItemDetail = ({item}) => {
  return (
    <div 
        className = "item" 
        onClick= { () => console.log(item) }
        style = {{
          backgroundImage: `url(${process.env.PUBLIC_URL + item.img})`
        }}>
          <div className= "item__info">
            <h3 className = "item__name" >{item.name}</h3>
            <h4 className = "item__price" >${item.price}</h4>
          </div>  
        </div>
  )
}

export default ItemDetail
