import styled from 'styled-components';
import pizzabg1 from '../../images/pizzabg.jpg';

export const Herocontainer=styled.div`
background: linear-gradient(to right,
    rgba(0, 0, 0, 0.7),
    rgba(0, 0, 0, 0.1)),
    url(${pizzabg1});
height: 100vh;
background-position: center;
background-size: cover;


`
export const Herocontent=styled.div`
height: calc(100vh-80p);
max-height: 100%;
width: 100vw;
padding: 0rem calc(100vw -1300px)/2;
`
export const Heroitems=styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: flex-start;
height: 100vh;
max-height: 100%;
padding: 0rem 2rem;
width: 650px;
color: #fff;
text-transform: uppercase;
line-height: 1;
font-weight: bold;

@media screen and (max-width:650px){
    width: 100%;
}
`
export const Heroh1=styled.h1`
font-size: clamp(2.5rem,10vw,5rem);
margin-bottom: 1rem;
box-shadow: 3px 5px #e9ba23;
letter-spacing: 3px;
`

export const Herop=styled.p`
font-size: clamp(2rem,2.5vw,3rem);
margin-bottom: 2rem;
`
export const Herobtn=styled.button`
font-size: 1.4rem;
padding: 1rem 4rem;
border: none;
background: #e31837;
color: #fff;
transition: .2s ease-out;

&:hover{
    background: #ffc500;
    transition: .2s ease-out;
    cursor: pointer;
    color: #000;
}
`
















