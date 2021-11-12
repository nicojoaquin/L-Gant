import useProducts from '../../../hooks/useProducts'


export const GetSearch = (query) => {

  const {data} = useProducts()

  if ( query === "") {
    return [];
  }

  // Filtramos los productos para que coincidan con el query escrito en el input.
  
  return data.filter( item => item.name.toLowerCase().includes(query.toLowerCase()) );

} 