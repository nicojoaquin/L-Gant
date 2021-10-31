import React from 'react'
import { Link } from 'react-router-dom';


const Category = () => {


  return (

    <div>
    <Link to = '/tienda/category/pantalones'>Pantalones</Link>
    <Link to = '/tienda/category/camisas'>Camisas</Link>
    <Link to = '/tienda/category/sacos'>Sacos</Link>
    <Link to = '/tienda/category/trajes'>Trajes</Link>
    </div>

  )

}

export default Category
