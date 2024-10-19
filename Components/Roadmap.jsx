import React from "react";

const Roadmap = () => {
  return (
    <section
      id="roadmap"
      className="roadmap pt-lg-80 pb-md-100 pt-145 pos-rel pb-200"
    >
      <div className="container">
        <div className="sec-title text-center mb-60">
          <h5 className="sec-title__subtitle">Road map</h5>
          <h2 className="sec-title__title">Our project plan</h2>
        </div>
        <div className="roadmap__wrap ul_li_between">
          <div className="roadmap__item">
            <div className="roadmap__head ul_li">
              <div className="icon">
                <img src="assets/img/icon/rm_01.svg" alt="" />
              </div>
              <h3>Project Plan</h3>
            </div>
            <ul className="roadmap__info list-unstyled">
              <li>Website Design</li>
              <li>Website Live</li>
              <li>Smart Contract</li>
              <li>Deployment</li>
            </ul>
            <span className="number">
              Q1 <br />
              2022
            </span>
          </div>
          <div className="roadmap__item">
            <div className="roadmap__head ul_li">
              <div className="icon">
                <img src="assets/img/icon/rm_02.svg" alt="" />
              </div>
              <h3>Presale</h3>
            </div>
            <ul className="roadmap__info list-unstyled">
              <li>Contract Testing</li>
              <li>Project Prototype</li>
              <li>Metaverse Demo</li>
              <li>(Alpha)</li>
            </ul>
            <span className="number">
              Q2 <br />
              2023
            </span>
          </div>
          <div className="roadmap__item">
            <div className="roadmap__head ul_li">
              <div className="icon">
                <img src="assets/img/icon/rm_03.svg" alt="" />
              </div>
              <h3>Pre-Listing</h3>
            </div>
            <ul className="roadmap__info list-unstyled">
              <li>Partnerships</li>
              <li>
                Marketing to reach <br />
                wider Audiences
              </li>
              <li>
                Metaverse <br />
                Development
              </li>
            </ul>
            <span className="number">
              Q3 <br />
              2024
            </span>
          </div>
          <div className="roadmap__item">
            <div className="roadmap__head ul_li">
              <div className="icon">
                <img src="assets/img/icon/rm_04.svg" alt="" />
              </div>
              <h3>Token Launch</h3>
            </div>
            <ul className="roadmap__info list-unstyled">
              <li>NFT MarketPlace</li>
              <li>NFT Launch</li>
              <li>Exchanges Listing</li>
              <li>Dex Listing</li>
            </ul>
            <span className="number">
              Q4 <br />
              2025
            </span>
          </div>
          <div className="roadmap__item">
            <div className="roadmap__head ul_li">
              <div className="icon">
                <img src="assets/img/icon/rm_01.svg" alt="" />
              </div>
              <h3>Alpha Test</h3>
            </div>
            <ul className="roadmap__info list-unstyled">
              <li>
                In-house testing <br />
                of functional
              </li>
              <li>App development</li>
              <li>
                Further <br />
                Development
              </li>
            </ul>
            <span className="number">
              Q5 <br />
              2026
            </span>
          </div>
          <div className="roadmap__shape">
            <img src="assets/img/shape/rm_shape.png" alt="" />
          </div>
          <div className="roadmap__year">
            <h3 className="year year--start">2022</h3>
            <h3 className="year year--end">2026</h3>
          </div>
        </div>
      </div>
      <div className="roadmap__sec-shape">
        <div className="shape shape--1">
          <img src="assets/img/shape/s_shape1.png" alt="" />
        </div>
        <div className="shape shape--2">
          <img src="assets/img/shape/s_shape2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Roadmap;
