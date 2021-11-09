import React from 'react'
import { NavLink } from 'react-router-dom';
import {categoryData} from "../../../data/categoryData"

const Category = () => {

  return (
    <>
      <div className="category__container">
        <h3 className= "category-title">Filtros</h3>

        {
          categoryData.map(cat => 
            <NavLink key = {cat.id} exact to = {`/tienda/category/${cat.id}`} className="category__link" activeClassName="active">{cat.name}</NavLink>
          )
        }

      </div>
    </>
  )

}

export default Category
