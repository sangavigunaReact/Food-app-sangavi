import styled from 'styled-components';

export const Productcontainer=styled.div`
width: 100vw;
min-height: 100vh;
padding: 5rem calc((1--vw-130px)/2);
background: #150f0f;
color: #fff;
`
export const ProductWrapper=styled.div`
display: flex;
flex-wrap: wrap;
justify-content: center;
margin: 0 auto;
`

export const Productcard=styled.div`
margin: 0 2rem;
line-height: 2;
width: 300px;
`
export const ProductImg=styled.img`
height: 300px;
min-width: 300px;
max-width: 100%;
box-shadow: 8px 8px #fdc500;
`
export const Productheading=styled.h1`
font-size: clamp(2rem, 2.5vw, 3rem);
text-align: center;
margin-bottom: 5rem;
`
export const Producttitle=styled.h2`
font-weight: 400;
font-size: 1.5rem;
`
export const Productinfo=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
padding: 2rem;
text-align: center;
`
export const Productdesc=styled.p`
margin-bottom: 1rem;
`
export const Productprice=styled.p`
margin-bottom: 1rem;
font-size: 2rem;
`
export const Productbutton=styled.button`
font-size: 1 rem;
padding: 1rem 4rem;
border: none;
background: #e31837;
color: #fff;
transition:  .2s ease-out;
&:hover{
    background: #ffc500;
    transition:  .2s ease-out;
    cursor: pointer;
    color: #000;
}
`






























