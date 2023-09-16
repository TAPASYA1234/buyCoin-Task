import React from "react";
import "./Footer.scss";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-logo">
          <p className="logo-text">CryptoWebsite</p>
        </div>



        <div className="footer-links">
          <div className="footer-menu">
          

             <h3>Services</h3>
            <ul>
              <li>
                <a href="/buy-sell-crypto">Buy & Sell Crypto</a>
              </li>
              <li>
                <a href="/buy-bitcoin">Buy Bitcoin</a>
              </li>
              <li>
                <a href="/buy-ethereum">Buy Ethereum</a>
              </li>
              </ul>
          </div>
          
          <div className="footer-menu">
            <h3>Contact</h3>
            <ul>
              <li>
                <a href="/contacts">Contacts</a>
              </li>
              <li>
                <a href="/support">Support</a>
              </li>
              <li>
                <a href="/faqs">FAQs</a>
              </li>
            </ul>
          </div>

          </div>
          <div className="footer-links" > 

          <div className="footer-menu">
            <h3>Home</h3>
            <ul>
              <li>
                <a href="/">Home</a>
              </li>
              
            </ul>
          </div>

          <div className="footer-menu">

          <h3>About</h3>
            <ul>
              <li>
                <a href="/about-us">About Us</a>
              </li>
              <li>
                <a href="/university">University</a>
              </li>
             
              <li>
                <a href="/team">Team</a>
              </li>
              <li>
                <a href="/legal-security">Legal & Security</a>
              </li>
              </ul>
          </div>

        </div>


      </div>
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} CryptoWebsite. All Rights Reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
