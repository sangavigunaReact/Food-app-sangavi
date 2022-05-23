import React,{useState} from 'react'
import Navbar from '../navbar/navbar';
import Sidebar from '../sidebar/sidebar';
import {Herocontainer, Herocontent, Heroitems, Heroh1, Herop, Herobtn  } from './infosection.element'

const Infosection = () => {
    const [isOpen,setisOpen]=useState(false)
    const toggle=() =>{
        setisOpen(!isOpen)
    }
  return (
    
      <Herocontainer>
          <Navbar toggle={toggle}/>
          <Sidebar isOpen={isOpen} toggle={toggle}/>
          <Herocontent>
              <Heroitems>
                  <Heroh1>Greatest Pizza Ever</Heroh1>
                  <Herop>Ready in 60sec</Herop>
                  <Herobtn>Place Order</Herobtn>
              </Heroitems>
          </Herocontent>
      </Herocontainer>
    
  )
}

export default Infosection;
