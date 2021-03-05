import React from 'react';
import './footer.css';


function Footer() {
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div class='footer-link-items'>
            <h2>Contact Us
              9am-6pm
              <br/>
              <a target="_blank" href="mailto:hayesautomotivellc@gmail.com">Email</a>

              <a href="tel:+15866069289">586-606-9289</a>
              

              <a target="_blank" href="https://goo.gl/maps/b1ay3fCxaT7Apoxn7">18812 Vandyke Ave, Detroit, MI 48234</a>
           
              <a target="_blank" href="https://www.facebook.com/hayesautomotivellc"> <i class='fab fa-facebook-f' /></a>
          </h2> 
         </div>

        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <small class='website-rights'> © 2021 All rights reserved</small>
        </div>
      </section>
    </div>
  );
}

export default Footer;