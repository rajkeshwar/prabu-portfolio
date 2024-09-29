const LayoutContainer = ({ children }) => {
  return (
    <div id="colorlib-page">
      <div className="container-wrap">
        <a
          href="#"
          className="js-colorlib-nav-toggle colorlib-nav-toggle"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <i />
        </a>
        <aside
          id="colorlib-aside"
          role="complementary"
          className="border js-fullheight"
        >
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: "url(images/about.jpg)" }}
            />
            <h1 id="colorlib-logo">
              <a href="index.html">Jackson Ford</a>
            </h1>
            <span className="position">
              <a href="#">UI/UX/Designer</a> in Philippines
            </span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                <li className="active">
                  <a href="#" data-nav-section="home">
                    Home
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="about">
                    About
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="services">
                    Services
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="skills">
                    Skills
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="education">
                    Education
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="experience">
                    Experience
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="work">
                    Work
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="blog">
                    Blog
                  </a>
                </li>
                <li>
                  <a href="#" data-nav-section="contact">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="colorlib-footer">
            <p>
              <small>
                ©{" "}
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                Copyright All rights reserved. Made with{" "}
                <i className="icon-heart" aria-hidden="true" /> by{" "}
                <a href="https://colorlib.com" target="_blank">
                  Colorlib
                </a>
                {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}{" "}
                <span>
                  Distributed by{" "}
                  <a href="https://themewagon.com" target="_blank">
                    ThemeWagon
                  </a>
                </span>{" "}
                <span>
                  Demo Images:{" "}
                  <a href="https://unsplash.com/" target="_blank">
                    Unsplash.com
                  </a>
                </span>
              </small>
            </p>
            <ul>
              <li>
                <a href="#">
                  <i className="icon-facebook2" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-twitter2" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-instagram" />
                </a>
              </li>
              <li>
                <a href="#">
                  <i className="icon-linkedin2" />
                </a>
              </li>
            </ul>
          </div>
        </aside>
        <div id="colorlib-main">{children}</div>
        {/* end:colorlib-main */}
      </div>
      {/* end:container-wrap */}
    </div>
  );
};

export default LayoutContainer;
