import React from 'react'
import { useLocation } from 'react-router-dom'
import queryString from 'query-string'
import { GetSearch } from './GetSearch'
import Item from '../products/Item'
import useProducts from '../../../hooks/useProducts'

const Search = () => {

  // Extraemos el query de el location (el valor que le dimos al input de búsqueda).
  // Llamamos a la función que filtra los items y le mandamos como parámetro el query.
  // Luego renderizamos los productos filtrados.

  const location = useLocation()
  const {q} = queryString.parse(location.search)
  const itemsFiltered = GetSearch(q)
  const {loader} = useProducts()

  return (

    <section className = "container">
      { 
        loader ?
          <svg 
            className = "cssload-spin-box loader"
            style = {{marginTop: 400}}>
          </svg>
        :
          <div className = "item-list">
            {
              itemsFiltered.map(item => 
                <Item key = {item.id} product = {item} />
              )
            }
          </div>
      }
    </section>
    
  )
}

export default Search
