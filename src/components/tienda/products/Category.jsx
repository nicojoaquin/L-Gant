import React from 'react'
import { NavLink } from 'react-router-dom';

const Category = () => {

  return (
    <>
      <NavLink exact to = '/tienda' style={{marginTop:"1rem"}} className="category__link">Todos</NavLink>
      <div className="category__container">
        <NavLink to = '/tienda/category/pantalones' className="category__link" activeClassName="active">Pantalones</NavLink>
        <NavLink to = '/tienda/category/camisas' className="category__link" activeClassName="active">Camisas</NavLink>
        <NavLink to = '/tienda/category/sacos' className="category__link" activeClassName="active">Sacos</NavLink>
        <NavLink to = '/tienda/category/trajes' className="category__link" activeClassName="active">Trajes</NavLink>
      </div>
    </>
  )

}

export default Category
