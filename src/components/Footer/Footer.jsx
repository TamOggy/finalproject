import React from 'react'
import './Footer.css'

const Footer = () => {
    return (
      <footer className="footer">
        <div className="footer-content">
          <div className="footer-section signup">
            <h3>SIGN UP FOR OUR EMAIL UPDATES</h3>
            <p>Stay up to date with our whitepapers, articles, webinars, and invitations to special events.</p>
            <input type="email" placeholder="Email Address" />
            <button>Submit</button>
          </div>
  
          <div className="footer-section social">
            <h3>STAY CONNECTED WITH US</h3>
            <div className="social-icons">
              <a href="#"><i className="fab fa-tumblr"></i></a>
              <a href="#"><i className="fab fa-twitter"></i></a>
              <a href="#"><i className="fab fa-google-plus-g"></i></a>
              <a href="#"><i className="fab fa-linkedin-in"></i></a>
              <a href="#"><i className="fab fa-facebook-f"></i></a>
              <a href="#"><i className="fab fa-youtube"></i></a>
              <a href="#"><i className="fas fa-rss"></i></a>
            </div>
          </div>
        </div>
  
        <div className="footer-bottom">
          <img src="/logo.png" alt="Logo" className="footer-logo" />
          <nav>
            <a href="#">Omnichannel Solutions</a>
            <a href="#">Services</a>
            <a href="#">Contact Us</a>
          </nav>
          <p>&copy; 2014 Listrak. All rights reserved.</p>
        </div>
      </footer>
    );
  };

export default Footer
