import React, { useState, useEffect } from "react";
//
const transferToken = ({
  TRANSFER_TOKEN,
  setTransferModel,
  ERC20,
  setLoader,
}) => {
  const [token, setToken] = useState({
    _sendTo: "",
    _amount: "",
    _tokenAddress: "",
  });

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
            Transfer Token{" "}
            <strong onClick={() => setTransferModel(false)}>X</strong>
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
                    placeholder={"_tokenAddress"}
                    onChange={(e) => (
                      setToken({ ...token, _tokenAddress: e.target.value }),
                      setTransferToken(e.target.value)
                    )}
                  />
                )}
              </div>
              <div class="col-lg-12">
                <input
                  type="text"
                  placeholder="_sendTo"
                  onChange={(e) =>
                    setToken({ ...token, _sendTo: e.target.value })
                  }
                />
              </div>
              <div class="col-lg-12">
                <input
                  type="text"
                  placeholder="_amount"
                  onChange={(e) =>
                    setToken({ ...token, _amount: e.target.value })
                  }
                />
              </div>
              <div class="ico-contact__btn text-center mt-10">
                <button onClick={() => TRANSFER_TOKEN(token)} class="thm-btn">
                  Transfer Token
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

export default transferToken;
