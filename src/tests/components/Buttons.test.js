import React from 'react';
import {shallow} from 'enzyme';
import Buttons from '../../components/main/products/Buttons'


describe('Prueba en <Buttons />', () => {
  
  const buttonText = 'Agregar producto';
  const setItems = () => {
    "Funcion"
  };
  const items = [];

  const wrapper = shallow(<Buttons buttonText = {buttonText} setItems = {setItems} items = {items} />);
  
  test('debe mostrar el componente correctamente', () => {
   
    expect( wrapper ).toMatchSnapshot();

  });

  test('debe tener un texto en el boton y la clase debe ser "addButton"', () => {
    
    const button = wrapper.find('.addButton');
    expect(button.text().trim()).toBe(buttonText);
    expect(button.prop('className').includes('addButton')).toBe(true);

  });
    

});


