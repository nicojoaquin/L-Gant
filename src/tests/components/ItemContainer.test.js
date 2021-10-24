import React from 'react';
import {shallow} from 'enzyme';
import ItemListContainer from '../../components/main/products/ItemListContainer'


describe('Prueba en <ItemListContainer />', () => {
  
  const buttonText = 'Agregar'
  const wrapper = shallow(<ItemListContainer buttonText = {buttonText} />);
  
  test('debe mostrar el componente correctamente', () => {

    
    expect( wrapper ).toMatchSnapshot();


  })

  test('debe tener un texto en el boton y la clase debe ser "button"', () => {
    
    const button = wrapper.find('button');
    expect( button.text().trim()).toBe(buttonText);
    expect(button.prop('className').includes('button')).toBe(true)


  })
    

})


