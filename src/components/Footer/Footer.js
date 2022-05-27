import React from "react";
import { Button } from "../Documentations/Button";
import { Link } from "react-router-dom";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer-container" id="footer">
      <section className="footer-subscription">
        <h2 style={{ color: "white" }}>
          <u>About us</u>
        </h2>
        <p>
          We are a team of 5 UOW students determined to produce a face animation
          website with 7 features all using the application of GAN model.
        </p>
        <br />
        <ul style={{ color: "white" }}>
          <li>Yun Gayoung - Project Manager</li>
          <li>Robert Ong - Lead Developer</li>
          <li>Melvin Jong Sze Kuan - Machine Learning Developer</li>
          <li>Wang Qian Lin - Machine Learning Developer</li>
          <li>Benjamin Ang Qi Shao - Web Developer</li>
        </ul>
        <br />
        <br />
        <div style={{ color: "white" }}>
          <h2>
            <u>Contact Us</u>
          </h2>
          <p>Email: facemover.helpline@gmail.com</p>
        </div>
        <div className="input-areas">
          <form>
            <input
              type="email"
              name="email"
              placeholder="Enter Email"
              className="footer-input"
            />
            <Button buttonStyle="btn--outline">Enter</Button>
          </form>
        </div>
      </section>
      <section className="social-media">
        <div className="social-media-wrap">
          <div className="footer-logo">
            <Link to="/" className="social-logo">
              Face Mover &nbsp;<i className="fas fa-code-branch fas-fade"></i>
            </Link>
          </div>
          <small className="website-rights">
            Face Mover Pte Ltd &#169; 2022
          </small>
          <div className="social-icons">
            <a
              href="https://www.facebook.com/Facemover-Pte-Ltd-103807422343888/"
              target="_blank"
              aria-label="Facebook"
              className="social-icon-link facebook"
            >
              <i className="fab fa-facebook-f"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;
