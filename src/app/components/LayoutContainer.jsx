import { clsx } from "../utils/common";

const LayoutContainer = ({ children, data = { navs: [] } }) => {
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
          className="js-fullheight"
        >
          <div className="text-center">
            <div
              className="author-img"
              style={{ backgroundImage: data.profileImg }}
            />
            <h1 id="colorlib-logo">
              <a href="#">{data.name}</a>
            </h1>
            <span className="position">
              <a href="#">{data.role}</a> {data.location}
            </span>
          </div>
          <nav id="colorlib-main-menu" role="navigation" className="navbar">
            <div id="navbar" className="collapse">
              <ul>
                {data.navs.map((nav, i) => (
                  <li className={clsx({ active: i === 0 })} key={nav}>
                    <a href="#" data-nav-section={nav.toLowerCase()}>
                      {nav}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </nav>
          <div className="colorlib-footer">
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
