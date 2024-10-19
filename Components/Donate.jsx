import React, { useState, useEffect } from "react";
//
const donate = ({ setOpenDonate, detail, currency, DONATE }) => {
  const [donateFund, setDonateFund] = useState();

  return (
    <section class="new-margin ico-contact pos-rel">
      <div class="container">
        <div class="ico-contact__wrap">
          <h2 class="title ">
            Donate {currency}{" "}
            <strong onClick={() => setOpenDonate(false)}>X</strong>
          </h2>
          <div>
            <div class="row">
              <div class="col-lg-12">
                <input
                  type="text"
                  placeholder={"_amount"}
                  onChange={(e) => setDonateFund(e.target.value)}
                />
              </div>

              <p>
                <strong>Balance: </strong> {detail?.maticBal} {currency}
              </p>

              <div class="ico-contact__btn text-center mt-10">
                <button onClick={() => DONATE(donateFund)} class="thm-btn">
                  Donate
                </button>
              </div>
            </div>
          </div>
          <div class="ico-contact__shape-img">
            <div class="shape shape--1">
              <div data-parallax='{"y" : -50}'>
                <img src="assets/img/shape/c_shape1.png" alt="" />
              </div>
            </div>
            <div class="shape shape--2">
              <div data-parallax='{"y" : 60}'>
                <img src="assets/img/shape/c_shape2.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="ico-contact__shape">
        <div class="shape shape--1">
          <img src="assets/img/shape/f_shape1.png" alt="" />
        </div>
        <div class="shape shape--2">
          <img src="assets/img/shape/f_shape2.png" alt="" />
        </div>
        <div class="shape shape--3">
          <img src="assets/img/shape/f_shape3.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default donate;
