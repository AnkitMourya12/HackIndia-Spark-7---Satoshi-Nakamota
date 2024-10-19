import React, { useState, useEffect } from "react";
//
const transferCurrency = ({
  TRANSFER_ETHER,
  CHECK_ACCOUNT_BALANCE,
  setTransferCurrency,
  setLoader,
  detail,
  currency,
}) => {
  const [transfer, setTransfer] = useState({
    _amount: "",
    _receiver: "",
  });

  const [receiver, setReceiver] = useState();
  const [address, setAddress] = useState();

  useEffect(() => {
    if (address) {
      const loadToken = async () => {
        setLoader(true);
        const balance = await CHECK_ACCOUNT_BALANCE(address);
        console.log(balance);
        if (balance == undefined) {
          console.log("Kindly past the balance address");
        } else {
          setReceiver(balance);
          console.log(balance);
        }
        setLoader(false);
      };

      loadToken();
    }
  }, [address]);

  return (
    <section class="new-margin ico-contact pos-rel">
      <div class="container">
        <div class="ico-contact__wrap">
          <h2 class="title ">
            Transfer {currency}{" "}
            <strong onClick={() => setTransferCurrency(false)}>X</strong>
          </h2>
          <div>
            <div class="row">
              <div class="col-lg-12">
                {receiver ? (
                  <input
                    type="text"
                    value={`Account Balance  ${receiver.slice(
                      0,
                      8
                    )} ${currency}`}
                  />
                ) : (
                  <input
                    type="text"
                    placeholder={"_receiver"}
                    onChange={(e) => (
                      setTransfer({ ...transfer, _receiver: e.target.value }),
                      setAddress(e.target.value)
                    )}
                  />
                )}
              </div>
              <div class="col-lg-12">
                <input
                  type="text"
                  placeholder="_amount"
                  onChange={(e) =>
                    setTransfer({ ...transfer, _amount: e.target.value })
                  }
                />
              </div>
              <p>
                <strong>Balance: </strong> {detail?.maticBal} {currency}
              </p>

              <div class="ico-contact__btn text-center mt-10">
                <button
                  onClick={() => TRANSFER_ETHER(transfer)}
                  class="thm-btn"
                >
                  Transfer Currency
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

export default transferCurrency;
