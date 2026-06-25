import React, { useState, useEffect } from "react";
import "./Home.css";
// Import your header logo asset
import logoImg from "../assets/mlogo.png";
// Import your new wings background asset
import wingsBg from "../assets/wings.jpg";
import abtImg from "../assets/abt.jpg";
import aboutImg from "../assets/about.PNG";
import menuImg from "../assets/menu.jpg";
import chefIcon from "../assets/chef.png";
import grillIcon from "../assets/grill.png";

import morayamBg from "../assets/morayam.jpg";
import nImg from "../assets/n.jpg";
import yImg from "../assets/y.jpg";
import fImg from "../assets/f.jpg";

import frothVideo from "../assets/froth.mp4";
import secondLogo from "../assets/second.png";

import mnImg from "../assets/mn.jpg";

import ramImg from "../assets/ram.jpg";

const Home = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMenuZoomed, setIsMenuZoomed] = useState(false);
  const [isFrothMenuZoomed, setIsFrothMenuZoomed] = useState(false);

  // 🌟 NEW HOOK: Tracks flip-state individually for all three best-selling cards
  const [flippedCards, setFlippedCards] = useState({
    cardN: false,
    cardY: false,
    cardF: false
  });

  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    // Check initial window width
    const checkWidth = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkWidth();
    
    // Listen for resize changes
    window.addEventListener("resize", checkWidth);
    return () => window.removeEventListener("resize", checkWidth);
  }, []);

  // Toggles flip logic on double-tap triggers
  const handleDoubleClickFlip = (cardKey) => {
    setFlippedCards((prev) => ({
      ...prev,
      [cardKey]: !prev[cardKey]
    }));
  };
  // Array storing your text phrases with matching unique styling classes
  const heroSlides = [
    { text: "Welcome to Salamora Grills", className: "font-welcome" },
    { text: "Mora Time", className: "font-mora-time" },
    { text: "Visit us and become a part of our Mora community", className: "font-community" },
    { text: "Enjoy the best grilled dishes", className: "font-grilled" },
    { text: "Sizzling perfection in every single bite", className: "font-sizzle" },
    { text: "Where local tradition meets open-flame passion", className: "font-passion" }
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Auto-looping slider timer effect (changes text every 3.5 seconds)
  useEffect(() => {
    const slideTimer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % heroSlides.length);
    }, 3500);

    return () => clearInterval(slideTimer);
  }, [heroSlides.length]);
  
  

  return (
    <div className="home">
      {/* Navbar Section */}
      <nav className="navbar">
  {/* 🍔 MOBILE MENU TOGGLE ICON */}
  <button 
    className={`mobile-menu-toggle ${isMobileMenuOpen ? "open" : ""}`} 
    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
    aria-label="Toggle navigation menu"
  >
    <span className="bar"></span>
    <span className="bar"></span>
    <span className="bar"></span>
  </button>

  {/* Left Navigation Links Group (Closes menu when clicked) */}
  <ul className={`nav-group nav-left ${isMobileMenuOpen ? "nav-mobile-active" : ""}`}>
    <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
    <span className="nav-divider"></span>
    <li><a href="#menu" onClick={() => setIsMobileMenuOpen(false)}>Menu</a></li>
  </ul>

  {/* Center Logo Container */}
  <div className="logo-container-center">
    <img src={logoImg} alt="Salamora Grills Logo" className="navbar-logo-centered" />
  </div>

  {/* Right Navigation Links Group (Closes menu when clicked) */}
  <ul className={`nav-group nav-right ${isMobileMenuOpen ? "nav-mobile-active" : ""}`}>
    <li><a href="#froth-theory" onClick={() => setIsMobileMenuOpen(false)}>Froth Theory</a></li>
    <span className="nav-divider"></span>
    <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact</a></li>
  </ul>
</nav>

      {/* Hero Section */}
      <section 
        id="home" 
        className="hero" 
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.65)), url(${wingsBg})` }}
      >
        <div className="hero-content">
          <div className="text-slider-wrapper">
            <h2 className={`hero-title ${heroSlides[currentSlide].className}`}>
              {heroSlides[currentSlide].text}
            </h2>
          </div>
          
          <p className="hero-subtitle">
            Delicious meals prepared with passion, fresh ingredients, and unforgettable taste.
          </p>

          <a href="#menu">
            <button className="hero-btn">
              Explore Menu
            </button>
          </a>
        </div>
      </section>

      {/* Rest of your sections (About, Menu, Froth etc.) continue below completely untouched... */}

      {/* About Section */}
      <section id="about" className="about">
        <div className="about-header-zone">
          <h2 className="about-title">About Us</h2>
          <div className="title-underline-container">
            <span className="stylish-line line-top"></span>
            <span className="stylish-line line-bottom"></span>
          </div>
        </div>

        <div className="about-grid">
          {/* Far Left Side Image */}
          <div className="about-image-wrapper">
            <img src={abtImg} alt="Salamora Grills Left" className="about-photo" />
          </div>

          {/* Centered Narrative Text Block */}
          <div className="about-content">
            <p className="about-text">
              Established in 2026, Salamora Grills offers an exquisite blend of traditional 
              open-flame cooking and modern culinary artistry. We create unforgettable dining experiences 
              for families, friends, and food lovers who appreciate passion, quality ingredients, 
              and rich, authentic flavors, with a burning ambition to be recognized amongst the very best in the near future.
            </p>
          </div>

          {/* Far Right Side Image */}
          <div className="about-image-wrapper">
            <img src={aboutImg} alt="Salamora Grills Right" className="about-photo" />
          </div>
        </div>
      </section>

      {/* Featured Dishes */}
      <section id="menu" className="featured">
        {/* Subtle Decorative Chef Image at Top Left */}
        <img src={chefIcon} alt="Decorative Chef Graphic" className="menu-deco-icon chef-icon" />

        <div className="menu-header-zone">
          <h2 className="menu-main-title">Featured Dishes</h2>
          <h3 className="menu-sub-title">Main Menu</h3>
          <div className="title-underline-container">
            <span className="stylish-line line-top"></span>
            <span className="stylish-line line-bottom"></span>
          </div>
        </div>

        {/* Center Menu Board Showcase */}
        <div className="menu-display-container">
          <div 
            className={`menu-board-wrapper ${isMenuZoomed ? 'zoomed-overlay' : ''}`}
            onClick={() => setIsMenuZoomed(!isMenuZoomed)}
          >
            <img 
              src={menuImg} 
              alt="Salamora Grills Main Menu" 
              className="menu-board-image" 
            />
            {!isMenuZoomed && <div className="menu-click-hint">Click to View Menu</div>}
          </div>
        </div>

        {/* Subtle Decorative Grill Image at Bottom Right */}
        <img src={grillIcon} alt="Decorative Grill Graphic" className="menu-deco-icon grill-icon" />
      </section>

    {!isMobile && (  
      <section 
        id="best-sellers" 
        className="best-sellers"
        style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.75)), url(${morayamBg})` }}
      >
        <div className="sellers-header-zone">
          <h2 className="sellers-title">Best Selling Dishes</h2>
          <div className="title-underline-container">
            <span className="stylish-line line-top"></span>
            <span className="stylish-line line-bottom"></span>
          </div>
        </div>

        <div className="sellers-grid">
          {/* Card N */}
          <div 
            className={`flip-card-container ${flippedCards.cardN ? "is-flipped" : ""}`}
            onDoubleClick={() => handleDoubleClickFlip("cardN")}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={nImg} alt="Best Dish" className="seller-photo" />
              </div>
              <div className="flip-card-back">
                <p className="secret-text">Most customers said this is the best dish in salamora.</p>
              </div>
            </div>
          </div>

          {/* Card Y */}
          <div 
            className={`flip-card-container ${flippedCards.cardY ? "is-flipped" : ""}`}
            onDoubleClick={() => handleDoubleClickFlip("cardY")}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={yImg} alt="Filling Dish" className="seller-photo" />
              </div>
              <div className="flip-card-back">
                <p className="secret-text">Most customers said this gets your stomach filled up quickly.</p>
              </div>
            </div>
          </div>

          {/* Card F */}
          <div 
            className={`flip-card-container ${flippedCards.cardF ? "is-flipped" : ""}`}
            onDoubleClick={() => handleDoubleClickFlip("cardF")}
          >
            <div className="flip-card-inner">
              <div className="flip-card-front">
                <img src={fImg} alt="Loaded Fries" className="seller-photo" />
              </div>
              <div className="flip-card-back">
                <p className="secret-text">Customers said This is the best loaded fries they have had.</p>
              </div>
            </div>
          </div>
        </div>
       
        <div className="sellers-footer-hint">
          <p className="secret-hint-text">Double tap the images to reveal a secret...🤫</p>
        </div>
      </section>
    )}
      {/* CTA */}
      <section id="froth-theory" className="froth-theory">
        
        {/* Full Screen Ambient Video Engine Layer */}
        <div className="video-background-container">
          <video 
            autoPlay 
            loop 
            muted 
            playsInline 
            className="froth-bg-video"
          >
            <source src={frothVideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          {/* Dark Glassmorphism and Blur Filter Overlay Mask */}
          <div className="video-overlay-mask"></div>
        </div>

        {/* Floating Brand Emblem pinned to Top Left */}
        <div className="froth-brand-badge">
          <img src={secondLogo} alt="Froth Theory Logo" className="froth-sub-logo" />
        </div>

        {/* High-Legibility Central Copy Block */}
        <div className="froth-content-core">
          <h2 className="froth-main-title">Froth Theory</h2>
          <p className="froth-sub-heading">
            After having your meal at Salamora, come have a nice matcha or signature drink 
            to perfectly complement your open-flame food experience.
          </p>
        </div>

      </section>
      <section id="froth-menu-section" className="froth-menu-section">
        {/* Mirroring the main menu design with a decorative branding icon at top left */}
        <img src={secondLogo} alt="Froth Accent Emblem Left" className="froth-deco-icon froth-deco-left" />

        <div className="froth-menu-header-zone">
          <h2 className="froth-menu-main-title">Froth Offerings</h2>
          <h3 className="froth-menu-sub-title">Signature Drinks Menu</h3>
          <div className="title-underline-container">
            <span className="stylish-line line-top"></span>
            <span className="stylish-line line-bottom"></span>
          </div>
        </div>

        {/* Replicating the centered image board template layout */}
        <div className="froth-menu-display-container">
          <div 
            className={`froth-board-wrapper ${isFrothMenuZoomed ? 'froth-zoomed-overlay' : ''}`}
            onClick={() => setIsFrothMenuZoomed(!isFrothMenuZoomed)}
          >
            <img 
              src={mnImg} 
              alt="Froth Theory Specialty Menu" 
              className="froth-board-image" 
            />
            {!isFrothMenuZoomed && <div className="froth-click-hint">Click to Enlarge Menu</div>}
          </div>
        </div>

        {/* Mirroring the main menu design with a decorative icon at bottom right */}
        <img src={secondLogo} alt="Froth Accent Emblem Right" className="froth-deco-icon froth-deco-right" />
      </section>
      
      <section id="services" className="services-section">
        
        {/* Left Column: Content Block with Structured Alignment */}
        <div className="services-left-content">
          <div className="services-header-zone">
            <h2 className="services-main-title">Services</h2>
            <div className="title-underline-container">
              <span className="stylish-line line-top"></span>
              <span className="stylish-line line-bottom"></span>
            </div>
          </div>

          <ul className="services-bullet-list">
            <li>We offer private event services</li>
            <li>Offering home services</li>
            <li>Home services</li>
          </ul>
        </div>

        {/* Right Column: Visual Panel with Custom Background Image & Fade Overlay */}
        <div 
          className="services-right-visual"
          style={{ backgroundImage: `url(${ramImg})` }}
        >
          {/* This element applies the horizontal gradient that makes the background fade into the picture */}
          <div className="services-fade-overlay"></div>
        </div>

      </section>

      <footer id="contact" className="contact-footer-section">
          <div className="contact-container-inner">
            
            <h2 className="contact-main-title">Contact Us</h2>
            
            {/* Dual Brand Layout Container */}
            <div className="contact-logo-hub">
              <img src={logoImg} alt="Salamora Grills Logo" className="contact-brand-emblem" />
              <div className="contact-logo-divider"></div>
              <img src={secondLogo} alt="Froth Theory Logo" className="contact-brand-emblem" />
            </div>

            {/* Map Link */}
            <div className="contact-detail-row">
              <a 
                href="https://maps.google.com/?q=4+Amisi+Musa+St,+Jabi,+Abuja" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-interactive-link address-text"
              >
                4 Amisi Musa St, Jabi, Abuja 900001, Federal Capital Territory
              </a>
            </div>

            {/* WhatsApp Link */}
            <div className="contact-detail-row">
              <a 
                href="https://wa.me/2347069931000?text=Hello%20Salamora%20Grills!" 
                target="_blank" 
                rel="noopener noreferrer"
                className="contact-interactive-link whatsapp-text"
              >
                For bookings and enquiries : +2347069931000
              </a>
            </div>

            {/* Operational Hours */}
            <div className="contact-detail-row">
              <p className="contact-hours-text">
                Open from 10:00 am - 10:00 pm Everyday
              </p>
            </div>

            {/* High Visibility Prompt */}
            <div className="contact-closing-row">
              <p className="contact-invitation-highlight">Visit us anytime</p>
            </div>

          </div>
        </footer>
    </div>
  );
};

export default Home;