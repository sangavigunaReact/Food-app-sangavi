import React from 'react';
import {Footercontainer, Footerwrap, Socialmedia, Socialmediawrap, Sociallog, Socialicon, Socialiconlink} from './footer.element';
import {FaFacebook, FaYoutube, FaInstagram, FaTwitter, FaLinkedin} from 'react-icons/fa';

const Footer = () => {
  return (
    <Footercontainer>
      <Footerwrap>
          <Socialmedia>
              <Socialmediawrap>
                  <Sociallog to="/">Pizza</Sociallog>
                  <Socialicon>
                      <Socialiconlink href="/" target="_blank" aria-label="Facebook" rel="noopener norefferer">
                          <FaFacebook />
                      </Socialiconlink>
                      <Socialiconlink href="/" target="_blank" aria-label="Instagram" rel="noopener norefferer">
                          <FaInstagram />
                      </Socialiconlink>
                      <Socialiconlink href="/" target="_blank" aria-label="Youtube" rel="noopener norefferer">
                          <FaYoutube />
                      </Socialiconlink>
                      <Socialiconlink href="/" target="_blank" aria-label="Twitter" rel="noopener norefferer">
                          <FaTwitter />
                      </Socialiconlink>
                      <Socialiconlink href="/" target="_blank" aria-label="Linkedin" rel="noopener norefferer">
                          <FaLinkedin />
                      </Socialiconlink>
                  </Socialicon>
              </Socialmediawrap>
          </Socialmedia>
      </Footerwrap>
    </Footercontainer>
  )
}

export default Footer;
