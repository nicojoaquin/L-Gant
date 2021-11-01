import React from 'react'
import Slider from 'infinite-react-carousel';
import slider1 from '../../assets/slider/slider1.jpg'
import slider2 from '../../assets/slider/slider2.jpg'


const Destacados = () => {
  return (
    <div className="slider">

      <h1 className="sliderTitle">Destacados</h1>

      <Slider className="sldierContent">
        <div className="sldierContent-Item">
          <img className="sliderImg" src={slider2} alt="" />
        </div>
        <div className="sldierContent-Item">
          <img className="sliderImg" src={slider1} alt="" />
        </div>
      </Slider>

    </div>

  )
}

export default Destacados
