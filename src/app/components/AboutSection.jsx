const AboutSection = ({ data = { paragraphs: [] } }) => {
  return (
    <section className="colorlib-about" data-section="about">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div className="col-md-12">
            <div
              className="row row-bottom-padded-sm animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="col-md-12">
                <div className="about-desc">
                  <span className="heading-meta">About Us</span>
                  <h2 className="colorlib-heading">Who Am I?</h2>
                  {data.paragraphs.map((p) => (
                    <p key={p} dangerouslySetInnerHTML={{ __html: p }} />
                  ))}
                </div>
              </div>
            </div>
            <div className="row">
              {data.cards.map((card, idx) => (
                <div
                  key={card.icon}
                  className="col-md-3 animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className={`services color-${idx + 1}`}>
                    <span className="icon2">
                      <i className={card.icon} />
                    </span>
                    <h3>{card.title}</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="row">
              <div
                className="col-md-12 animate-box"
                data-animate-effect="fadeInLeft"
              >
                <div className="hire">
                  <h2 dangerouslySetInnerHTML={{ __html: data.yellow.h2 }} />
                  <a href="#" className="btn-hire">
                    {data.yellow.link}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
