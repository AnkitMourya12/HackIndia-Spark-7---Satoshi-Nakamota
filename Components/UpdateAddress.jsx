import React, { useState, useEffect } from "react";

//IMPORT
import { shortenAddress } from "../Utils/index";
const updateAddress = ({
  setOpenUpdateAddress,
  detail,
  currency,
  UPDATE_TOKEN,
  setLoader,
  ERC20,
}) => {
  const [address, setAddress] = useState();

  const [tokenDetails, setTokenDetails] = useState();

  const [zeroAdd, setZeroAdd] = useState(
    "0x0000000000000000000000000000000000000000"
  );

  const [transferToken, setTransferToken] = useState();

  useEffect(() => {
    if (transferToken) {
      const loadToken = async () => {
        setLoader(true);
        const token = await ERC20(transferToken);
        if (token == undefined) {
          console.log("Kindly past the token address");
        } else {
          setTokenDetails(token);
          console.log(token);
        }
        setLoader(false);
      };

      loadToken();
    }
  }, [transferToken]);
  return (
    <section class="new-margin ico-contact pos-rel">
      <div class="container">
        <div class="ico-contact__wrap">
          <h2 class="title ">
            Update Token{" "}
            <strong onClick={() => setOpenUpdateAddress(false)}>X</strong>
          </h2>
          <div>
            <div class="row">
              <div class="col-lg-12">
                {tokenDetails?.name ? (
                  <input
                    type="text"
                    value={`Name: ${tokenDetails?.name} Balance: ${tokenDetails?.balance} ${tokenDetails?.symbol}`}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder={"_tokenaddress"}
                    onChange={(e) => (
                      setAddress(e.target.value),
                      setTransferToken(e.target.value)
                    )}
                  />
                )}
              </div>

              <p>
                <strong>Current Price: </strong> {detail?.tokenPrice} {currency}{" "}
                &nbsp;&nbsp; <strong>Token Balance: </strong> {detail?.tokenBal}{" "}
                {detail?.symbol}
                &nbsp;&nbsp;{" "}
                <strong
                  onClick={() =>
                    navigator.clipboard.writeText(detail?.tokenAddr)
                  }
                  style={{
                    cursor: "pointer",
                  }}
                >
                  Token Address:{" "}
                </strong>{" "}
                {detail?.toeknBal} {shortenAddress(detail?.tokenAddr)}
              </p>

              <div class="ico-contact__btn text-center mt-10">
                <button onClick={() => UPDATE_TOKEN(address)} class="thm-btn">
                  Update Address
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

export default updateAddress;
