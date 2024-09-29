const HeroSection = ({ data = { slides: [] } }) => {
  return (
    <section id="colorlib-hero" className="js-fullheight" data-section="home">
      <div className="flexslider js-fullheight">
        <ul className="slides">
          {data.slides.map((slide) => (
            <li key={slide.bgImage} style={{ backgroundImage: slide.bgImage }}>
              <div className="overlay" />
              <div className="container-fluid">
                <div className="row">
                  <div className="col-md-6 col-md-offset-3 col-md-pull-3 col-sm-12 col-xs-12 js-fullheight slider-text">
                    <div className="slider-text-inner js-fullheight">
                      <div className="desc">
                        <h1 dangerouslySetInnerHTML={{ __html: slide.iam }} />
                        <h2>{slide.desc}</h2>
                        <p>
                          <a className="btn btn-primary btn-learn">
                            {slide.download} <i className="icon-download4" />
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default HeroSection;
