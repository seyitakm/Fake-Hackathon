import React from "react";

const Footer = () => {
  return (
    <div>
      <footer>
        <div class="main">
          <div class="col1">
            <h3 class="heading">About the store</h3>
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

          <div class="col2">
            <h3 class="heading">Language</h3>
            <div class="languages">
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

          <div class="col3">
            <h3 class="heading">Get in touch</h3>
            <div class="social">
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

        <p class="terms">
          <a href="#">Terms of purchase</a>
          <a href="#">Security and privacy</a>
          <a href="#">Newsletter</a>
        </p>
      </footer>

      <script
        type="module"
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.esm.js"
      ></script>
      <script
        nomodule
        src="https://unpkg.com/ionicons@5.5.2/dist/ionicons/ionicons.js"
      ></script>
    </div>
  );
};

export default Footer;
