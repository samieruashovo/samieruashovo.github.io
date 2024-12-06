import React from "react";
// import "./App.css"; // Assuming you have the CSS file
// import "./assets/css/style.css"; // If you keep the original CSS

const App = () => {
  return (
    <div id="top">
      {/* HEADER */}
      <header className="header" data-header>
        <div className="container">
          <a href="#">
            <h1 className="logo">Ethan Ward</h1>
          </a>
          <button
            className="nav-toggle-btn"
            aria-label="Toggle Menu"
            data-nav-toggle-btn
          >
            <ion-icon name="menu-outline" className="menu-icon"></ion-icon>
            <ion-icon name="close-outline" className="close-icon"></ion-icon>
          </button>
          <nav className="navbar container">
            <ul className="navbar-list">
              {["Home", "About", "Portfolio", "Skills", "Contact", "Blog"].map(
                (item) => (
                  <li key={item}>
                    <a
                      href={`#${item.toLowerCase()}`}
                      className="navbar-link"
                      data-nav-link
                    >
                      {item}
                    </a>
                  </li>
                )
              )}
              <li>
                <a href="#" className="btn btn-primary">
                  Download CV
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {/* MAIN */}
      <main>
        {/* HERO */}
        <section className="hero" id="home">
          <div className="container">
            <div className="hero-banner">
              <img
                src="./assets/images/hero-banner.jpg"
                width="800"
                height="864"
                loading="lazy"
                alt="Ethan's Photo"
                className="img-cover"
              />
              <div className="elem elem-1">
                <p className="elem-title">12</p>
                <p className="elem-text">Years of Success</p>
              </div>
              <div className="elem elem-2">
                <p className="elem-title">800+</p>
                <p className="elem-text">Projects Completed</p>
              </div>
              <div className="elem elem-3">
                <ion-icon name="trophy"></ion-icon>
              </div>
              <img
                src="./assets/images/rotate-img.png"
                width="169"
                height="172"
                alt="I'm developer from New York"
                className="rotate-img"
              />
            </div>
            <div className="hero-content">
              <h2 className="hero-title">
                <span>Hello I'm</span>
                <strong>Ethan Ward</strong> Web Developer from New York
              </h2>
              <p className="hero-text">
                Adipisicing elit. Neque nulla voluptatum eos repellat deserunt
                nesciunt tempore porro totam.
              </p>
              <div className="btn-group">
                <a href="#contact" className="btn btn-primary blue">
                  Get a Quote
                </a>
                <a href="#about" className="btn">
                  About Me
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <div className="container">
            <figure className="about-banner">
              <img
                src="./assets/images/about-banner.jpg"
                width="800"
                height="652"
                loading="lazy"
                alt="Ethan's Photo"
                className="img-cover"
              />
              <img
                src="./assets/images/absolute-image.jpg"
                width="800"
                height="717"
                loading="lazy"
                alt="Ethan's Photo"
                className="abs-img"
              />
              {["css3", "javascript", "angular"].map((icon, index) => (
                <div key={index} className={`abs-icon abs-icon-${index + 1}`}>
                  <ion-icon name={`logo-${icon}`}></ion-icon>
                </div>
              ))}
            </figure>
            <div className="about-content">
              <p className="section-subtitle">I'm a Developer</p>
              <h2 className="h2 section-title">
                I Develop Application that Help People
              </h2>
              <p className="section-text">
                Dliquip ex ea commo do conse namber onequa ute irure dolor in
                reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatu epteur sint occaecat cupidatat
              </p>
              <p className="section-text">
                Krnon proident, sunt in culpa qui officia deserunt mollit anim
                id est laborum. Sed ut perspiciatis unde omnis
              </p>
              <a href="#portfolio" className="btn btn-primary blue">
                View Portfolio
              </a>
            </div>
          </div>
        </section>

        {/* Add other sections similarly... */}
      </main>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container">
          <p className="copyright">
            &copy; 2022{" "}
            <a href="#" className="copyright-link">
              codewithsadee
            </a>
            . All Rights Reserved
          </p>
          <ul className="footer-list">
            {["Terms & Condition", "Privacy Policy"].map((item) => (
              <li key={item}>
                <a href="#" className="footer-link">
                  {item}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </footer>

      {/* BACK TO TOP */}
      <a href="#top" className="back-to-top" data-back-to-top>
        BACK TOP
      </a>
    </div>
  );
};

export default App;
