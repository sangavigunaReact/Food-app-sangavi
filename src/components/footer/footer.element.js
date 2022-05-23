import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Footercontainer=styled.div`
background-color: #0d0909;
width: 100vw;

`
export const Footerwrap=styled.div`
padding: 16px 24px;
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
max-width: 1300px;
margin: 0 auto;

`
export const Socialmedia=styled.section`
max-width: 1300px;
width: 100%;
`
export const Socialmediawrap=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
max-width: 1100px;
margin: 16px auto 0 auto;
@media screen and (max-width:820px){
    flex-direction: column;
}
`
export const Sociallog=styled(Link)`
color: #fff;
justify-self: start;
cursor: pointer;
text-decoration: none;
font-size: 1.5rem;
display: flex;
align-items: center;
margin-bottom: 16px;
font-weight: bold;
`
export const Socialicon=styled.div`
display: flex;
justify-content: space-between;
align-items: center;
width: 240px;
`
export const Socialiconlink=styled.a`
color: #fff;
font-size: 24px;
`