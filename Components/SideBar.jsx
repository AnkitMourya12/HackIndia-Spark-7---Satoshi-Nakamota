import React from "react";

const SideBar = () => {
  return (
    <aside className="slide-bar">
      <div className="close-mobile-menu">
        <a className="tx-close" href="javascript:void(0);" />
      </div>
      {/* side-mobile-menu start */}
      <nav className="side-mobile-menu">
        <a className="header__logo mb-30" href="#!">
          <img src="assets/img/logo/logo.svg" alt="" />
        </a>
        <div className="header-mobile-search">
          <form role="search" method="get" action="#">
            <input type="text" placeholder="Search Keywords" />
            <button type="submit">
              <i className="ti-search" />
            </button>
          </form>
        </div>
        <ul id="mobile-menu-active">
          <li className="">
            <a href="/">Home</a>
          </li>
          <li>
            <a className="scrollspy-btn" href="#about">
              about
            </a>
          </li>
          <li>
            <a className="scrollspy-btn" href="#roadmap">
              Roadmap
            </a>
          </li>
          <li>
            <a className="scrollspy-btn" href="#team">
              Team
            </a>
          </li>
          <li className="">
            <a href="#!">Blog</a>
          </li>
          <li>
            <a href="contact.html">Get in touch</a>
          </li>
        </ul>
      </nav>
      {/* side-mobile-menu end */}
    </aside>
  );
};

export default SideBar;
