const SkillsSection = ({ data = { progress: [] } }) => {
  return (
    <section className="colorlib-skills" data-section="skills">
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
            <p>{data.desc}</p>
          </div>
          {data.progress.map((prog, i) => (
            <div
              key={prog.title}
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div className="progress-wrap">
                <h3>{prog.title}</h3>
                <div className="progress">
                  <div
                    className={`progress-bar color-${i + 1}`}
                    role="progressbar"
                    aria-valuenow={prog.percentage}
                    aria-valuemin={0}
                    aria-valuemax={100}
                    style={{ width: `${prog.percentage}%` }}
                  >
                    <span>{prog.percentage}%</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
