const ExperienceSection = ({ data = { timelines: [] } }) => {
  return (
    <section className="colorlib-experience" data-section="experience">
      <div className="colorlib-narrow-content">
        <div className="row">
          <div
            className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box"
            data-animate-effect="fadeInLeft"
          >
            <span className="heading-meta">{data.meta}</span>
            <h2 className="colorlib-heading animate-box">{data.title}</h2>
          </div>
        </div>
        <div className="row">
          <div className="col-md-12">
            <div className="timeline-centered">
              {data.timelines.map((timeline, i) => (
                <article
                  key={timeline.title}
                  className="timeline-entry animate-box"
                  data-animate-effect="fadeInLeft"
                >
                  <div className="timeline-entry-inner">
                    <div className={`timeline-icon color-${i + 1}`}>
                      <i className="icon-pen2" />
                    </div>
                    <div className="timeline-label">
                      <h2>
                        <a href="#">{timeline.title}</a>{" "}
                        <span>{timeline.date}</span>
                      </h2>
                      <p dangerouslySetInnerHTML={{ __html: timeline.desc }} />
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;
