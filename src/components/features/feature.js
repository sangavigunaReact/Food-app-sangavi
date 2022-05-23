import React from 'react';
import {Featurecontainer, Featurebutton } from './feature.element';

const Feature = () => {
  return (
    <Featurecontainer>
      <h1>Pizza of the Day</h1>
      <p>Truffle alfredo sauce topped with 24 carat gold dust.</p>
      <Featurebutton>Order Now</Featurebutton>
    </Featurecontainer>
  )
}

export default Feature;
