const ServicesSection = ({ data = {} }) => {
  return (
    <section className="colorlib-services" data-section="services">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">{data.whatIdo}</span>
            <h2 className="colorlib-heading">{data.expertise}</h2>
          </div>
        </div>
        <div className="row row-pt-md">
          {data.cards.map((card, i) => (
            <div key={card.title} className="col-md-4 text-center animate-box">
              <div className={`services color-${i + 1}`}>
                <span className="icon">
                  <i className={card.icon} />
                </span>
                <div className="desc">
                  <h3>{card.title}</h3>
                  <p>{card.desc}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
