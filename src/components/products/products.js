import React from 'react';
import {Productcontainer, Productheading, ProductWrapper, Productcard, ProductImg,
     Productinfo, Producttitle, Productdesc, Productprice, Productbutton} from './products.element';

const Products = ({heading,data}) => {
  return (
    <Productcontainer>
      <Productheading>{heading}</Productheading>
      <ProductWrapper>
          {data.map((product,index) =>{
              return(
                  <Productcard key={index}>
                      <ProductImg src={product.img} alt={product.alt} />
                      <Productinfo>
                          <Producttitle>{product.name}</Producttitle>
                          <Productdesc>{product.desc}</Productdesc>
                          <Productprice>{product.price}</Productprice>
                          <Productbutton>{product.button}</Productbutton>
                      </Productinfo>
                  </Productcard>
              )
          })}
      </ProductWrapper>
    </Productcontainer>
  )
}

export default Products;
