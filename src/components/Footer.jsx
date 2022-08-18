import React from "react";

const Footer = () => {
  return (
    <div className="footer__container">
      <footer>
        <div className="main">
          <div className="col1">
            <h3 className="heading">About the store</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Become a customer</a>
              </li>
              <li>
                <a href="#">About us</a>
              </li>
              <li>
                <a href="#">FAQ</a>
              </li>
              <li>
                <a href="#">Return policy</a>
              </li>
              <li>
                <a href="#">Contact us</a>
              </li>
            </ul>
          </div>

          <div className="col2">
            <h3 className="heading">Language</h3>
            <div className="languages">
              <a href="#">Deutsch</a>
              <a href="#">English</a>
              <a href="#">Espaṅol</a>
              <a href="#">Français</a>
              <a href="#">Indonesian</a>
              <a href="#">Italian</a>
              <a href="#">Nederlands</a>
              <a href="#">Polnisch</a>
              <a href="#">Português</a>
              <a href="#">Русский</a>
              <a href="#">Tiéng Viêt</a>
              <a href="#">Türkçe</a>
            </div>
          </div>

          <div className="col3">
            <h3 className="heading">Get in touch</h3>
            <div className="social">
              <a href="#">
                <ion-icon name="logo-facebook"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-twitter"></ion-icon>
              </a>
              <a href="#">
                <ion-icon name="logo-linkedin"></ion-icon>
              </a>
            </div>
          </div>
        </div>

        <p className="terms">
          <a href="#">Terms of purchase</a>
          <a href="#">Security and privacy</a>
          <a href="#">Newsletter</a>
        </p>
      </footer>
    </div>
  );
};

export default Footer;
