import React, { useState, useEffect } from "react";
import { shortenAddress } from "../Utils/index";

const Popup = ({
  setBuyModel,
  BUY_TOKEN,
  currency,
  detail,
  account,
  ERC20,
  TOKEN_ADDRESS,
  setLoader,
}) => {
  const [amount, setAmount] = useState();

  const [transferToken, setTransferToken] = useState();

  useEffect(() => {
    setLoader(true);
    ERC20(TOKEN_ADDRESS).then((items) => {
      setTransferToken(items);
      console.log(items);
      setLoader(false);
    });
  }, []);

  return (
    <section class="new-margin ico-contact pos-rel">
      <div class="container">
        <div class="ico-contact__wrap">
          <h2 class="title ">
            Buy Token <strong onClick={() => setBuyModel(false)}>X</strong>
          </h2>
          <div>
            <div class="row">
              <div class="col-lg-6">
                <input
                  type="text"
                  placeholder={`Token Balance: ${transferToken?.balance} ${transferToken?.symbol}`}
                  onChange={(e) => setAmount(e.target.value)}
                />
              </div>
              <div class="col-lg-6">
                <input
                  type="email"
                  value={
                    amount
                      ? `${amount * detail?.tokenPrice} ${currency}`
                      : "Output value"
                  }
                />
              </div>

              <div class="col-lg-12">
                <textarea
                  disabled
                  name="message"
                  cols="30"
                  rows="10"
                  placeholder={`Current Price: ${
                    detail?.tokenPrice
                  } ${currency}  Token Balance:  ${detail?.tokenBal}${
                    detail?.symbol
                  }   Token Address:  ${detail?.toeknBal} ${shortenAddress(
                    detail?.tokenAddr
                  )}`}
                ></textarea>
              </div>
              <div class="ico-contact__btn text-center mt-10">
                <button onClick={() => BUY_TOKEN(amount)} class="thm-btn">
                  Buy Token
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

export default Popup;
