import React from "react";
import { Link } from "react-router-dom";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-text">
        <p className="hero-small-title">Next-Gen Gaming Gear</p>
        <h1 className="hero-main-title">
          Build the <span>Ultimate</span> PC Rig.
        </h1>
        <p className="hero-subtitle">
          Curated components for high FPS, low temps, and maximum flex.
        </p>
        <div className="hero-buttons">
          <Link to="/products" className="btn-primary">
            Browse Components
          </Link>
        </div>
      </div>
      <div className="hero-cards">
        <div className="hero-box glow-purple">
          <span className="hero-badge">RTX Ready</span>
          <p>4K • Ray Tracing • DLSS 3</p>
        </div>
        <div className="hero-box glow-cyan">
          <span className="hero-badge">Liquid Cooled</span>
          <p>Stay frosty under full load.</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
