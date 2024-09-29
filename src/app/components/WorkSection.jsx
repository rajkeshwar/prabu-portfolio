import { clsx } from "../utils/common";

const WorkSection = ({ data = { works: [], categories: [] } }) => {
  return (
    <section className="colorlib-work" data-section="work">
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
        <div
          className="row row-bottom-padded-sm animate-box"
          data-animate-effect="fadeInLeft"
        >
          <div className="col-md-12">
            <p className="work-menu">
              {data.categories.map((category, i) => (
                <span key={category}>
                  <a href="#" className={clsx({ active: i === 0 })}>
                    {category}
                  </a>
                </span>
              ))}
            </p>
          </div>
        </div>
        <div className="row">
          {data.works.map((work, i) => (
            <div
              key={work.title}
              className="col-md-6 animate-box"
              data-animate-effect="fadeInLeft"
            >
              <div
                className="project"
                style={{ backgroundImage: work.bgImage }}
              >
                <div className="desc">
                  <div className="con">
                    <h3>
                      <a href="work.html">{work.title}</a>
                    </h3>
                    <span>{work.meta}</span>
                    <p className="icon">
                      <span>
                        <a href="#">
                          <i className="icon-share3" />
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-eye" /> 100
                        </a>
                      </span>
                      <span>
                        <a href="#">
                          <i className="icon-heart" /> 49
                        </a>
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="row">
          <div className="col-md-12 animate-box">
            <p>
              <a href="#" className="btn btn-primary btn-lg btn-load-more">
                Load more <i className="icon-reload" />
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkSection;
