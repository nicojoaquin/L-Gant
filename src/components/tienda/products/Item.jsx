import React from 'react'
import { Link } from 'react-router-dom';
import {motion} from 'framer-motion/dist/framer-motion'

const variants = {
  hidden: {
    opacity: 0,
  },
  show: {
    opacity: 1,
  },
  out: {
    opacity: 0,
  }
}

const transition = {
  type: "tween",
  ease: "anticipate",
  duration: 0.2
}

const Item = ({product}) => (
  
  //Dibujamos los productos con las props del item mapeado.
  <Link to={`/tienda/${product.id}`}>
    
    <motion.div
      className = "item" 
      style = {{
        backgroundImage: `url(${process.env.PUBLIC_URL + product.img})`
      }}
      variants={variants}
      initial="hidden"
      animate="show"
      exit="out"
      transition={transition}
      >

        <div className= "item__info">
          <h3 className = "item__name" >{product.name}</h3>
          <h4 className = "item__price" >${product.price}</h4>
        </div>

    </motion.div>  

  </Link>
    
)

export default Item;