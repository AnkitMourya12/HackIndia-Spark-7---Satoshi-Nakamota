import React from "react";

const Token = () => {
  return (
    <section class="token pt-125">
      <div class="container">
        <div class="row align-items-center mt-none-30">
          <div class="col-lg-5 mt-30">
            <div class="token__content wow fadeInLeft">
              <div class="sec-title mb-20">
                <h5 class="sec-title__subtitle">Tokenomics</h5>
                <h2 class="sec-title__title">
                  Token allocation & funds distribution
                </h2>
              </div>
              <ul class="nav nav-tabs token__tab" id="myTab" role="tablist">
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link active"
                    id="home-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#home"
                    type="button"
                    role="tab"
                    aria-controls="home"
                    aria-selected="true"
                  >
                    Funding Allocation
                  </button>
                </li>
                <li class="nav-item" role="presentation">
                  <button
                    class="nav-link"
                    id="profile-tab"
                    data-bs-toggle="tab"
                    data-bs-target="#profile"
                    type="button"
                    role="tab"
                    aria-controls="profile"
                    aria-selected="false"
                  >
                    Token Allocation
                  </button>
                </li>
              </ul>
              <div class="token__info mt-40">
                <h2>1 CNL = 0.0013 BTC</h2>
                <p>
                  A portion of the total token supply is often allocated as
                  reserved <br />
                  tokens. These tokens are set aside for the development
                </p>
                <div class="token-btn mt-40">
                  <a class="thm-btn" href="#!">
                    buy now
                  </a>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-7 mt-30">
            <div
              class="tab-content wow fadeInRight"
              data-wow-delay="100ms"
              id="myTabContent"
            >
              <div
                class="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div class="token__img">
                  <img src="assets/img/token/token_chart.png" alt="" />
                </div>
              </div>
              <div
                class="tab-pane fade"
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div class="token__img">
                  <img src="assets/img/token/token_chart2.png" alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Token;
