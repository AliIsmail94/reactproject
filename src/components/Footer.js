import React from "react";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-left">
        <span className="logo-small">NeonPC</span>
        <p>Custom PC parts & builds for gamers, streamers, and creators.</p>
      </div>
      <div className="footer-links">
        <a href="#support">Support</a>
        <a href="#faq">FAQ</a>
        <a href="#contact">Contact</a>
      </div>
      <div className="footer-right">
        <span>© {new Date().getFullYear()} NeonPC</span>
      </div>
    </footer>
  );
}

export default Footer;
