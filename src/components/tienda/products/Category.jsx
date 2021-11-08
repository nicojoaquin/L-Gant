import React from 'react'
import { NavLink } from 'react-router-dom';

const Category = () => {

  return (
    <>
      <div className="category__container">
        <h3 className= "category-title">Filtros</h3>
        <NavLink exact to = '/tienda/category/pantalones' className="category__link" activeClassName="active">Pantalones</NavLink>
        <NavLink exact to = '/tienda/category/camisas' className="category__link" activeClassName="active">Camisas</NavLink>
        <NavLink exact to = '/tienda/category/sacos' className="category__link" activeClassName="active">Sacos</NavLink>
        <NavLink exact to = '/tienda/category/trajes' className="category__link" activeClassName="active">Trajes</NavLink>
        <NavLink exact to = '/tienda/category/zapatos' className="category__link" activeClassName="active">Zapatos</NavLink>
        <NavLink exact to = '/tienda/category/accesorios' className="category__link" activeClassName="active">Accesorios</NavLink>
      </div>
    </>
  )

}

export default Category
