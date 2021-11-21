import React from 'react'
import { useLocation, Redirect } from 'react-router-dom'
import queryString from 'query-string'
import { GetSearch } from './GetSearch'
import Item from '../products/Item'
import useProducts from '../../../hooks/useProducts'
import { Fade } from 'react-awesome-reveal';

const Search = () => {

  // Extraemos el query de el location (el valor que le dimos al input de búsqueda).
  // Llamamos a la función que filtra los items y le mandamos como parámetro el query.
  // Luego renderizamos los productos filtrados.

  const location = useLocation()
  const {q} = queryString.parse(location.search)
  const itemsFiltered = GetSearch(q)
  const {loader} = useProducts()

  return (

    <Fade>
      <section className = "container">
        { 
          loader ?
            <svg 
            className = "cssload-spin-box loader"
            style = {{marginTop: 400}}>
              </svg>
          :   
            itemsFiltered.length === 0 ?
              <h2 style = {{marginTop: 100}}>No hay resultados</h2>
            :
              <>
                <div>
                  <h2 style = {{marginTop: 100}}>Resultados</h2>
                  <hr/>
                </div>

                <div className = "item-list" style={{marginTop : 120}}>
                  {
                    itemsFiltered.map(item => 
                      <Item key = {item.id} product = {item} />
                    )
                  }
                </div>
              </>

        }
      </section>
    </Fade>
    
  )
}

export default Search
