const EducationSection = ({ data = { accordions: [] } }) => {
  return (
    <section className="colorlib-education" data-section="education">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">{data.meta}</span>
            <h2 className="colorlib-heading animate-box">{data.heading}</h2>
          </div>
        </div>
        <div className="row">
          <div
            className="col-md-12 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <div className="fancy-collapse-panel">
              <div
                className="panel-group"
                id="accordion"
                role="tablist"
                aria-multiselectable="true"
              >
                {data.accordions.map((accor, i) => (
                  <div className="panel panel-default" key={accor.title}>
                    <div className="panel-heading" role="tab" id={`heading${i}`}>
                      <h4 className="panel-title">
                        <a
                          className={i === 0 ? "" : "collapsed"}
                          data-toggle="collapse"
                          data-parent="#accordion"
                          href={`#collapse${i}`}
                          aria-expanded={i === 0 ? "true" : "false"}
                          aria-controls={`collapse${i}`}
                        >
                          {accor.title}
                        </a>
                      </h4>
                    </div>
                    <div
                      id={`collapse${i}`}
                      className={`panel-collapse collapse ${i === 0 ? "in" : ""}`}
                      role="tabpanel"
                      aria-labelledby={`heading${i}`}
                    >
                      <div className="panel-body">
                        <div dangerouslySetInnerHTML={{ __html: accor.desc }} />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
