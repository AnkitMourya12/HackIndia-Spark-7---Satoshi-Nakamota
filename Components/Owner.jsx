import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
} from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";

const Owner = ({
  setOwnerModel,
  currency,
  detail,
  account,
  setTransferModel,
  setTransferCurrency,
  setOpenUpdatePrice,
  setOpenUpdateAddress,
  setOpenDonate,
  TOKEN_WITHDRAW,
}) => {
  return (
    <section id="team" class="team pos-rel pos-rel">
      <div class="container">
        <div class="new-owner  team__wrap ul_li">
          <div class="team__item">
            <div class="avatar">
              <img src="assets/img/shape/c_shape1.png" alt="" />
            </div>
            <div class="team__info text-center mb-20">
              <h3>TOKEN TRANSFER</h3>
              <span>Any ERC20</span>
            </div>
            <div class="team__social ul_li_center">
              <span
                onClick={() => (setOwnerModel(false), setTransferModel(true))}
                class="h-icon"
                style={{
                  cursor: "pointer",
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>
          <div class="team__item">
            <div class="avatar">
              <img src="assets/img/token/t_info_img.png" alt="" />
            </div>
            <div class="team__info text-center mb-20">
              <h3>TRANSFER FUND</h3>
              <span>
                {detail?.maticBal.slice(0, 6)} {currency}
              </span>
            </div>
            <div class="team__social ul_li_center">
              <span
                onClick={() => (
                  setOwnerModel(false), setTransferCurrency(true)
                )}
                class="h-icon"
                style={{
                  cursor: "pointer",
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>
          <div class="team__item">
            <div class="avatar">
              <img src="assets/img/shape/c_shape2.png" alt="" />
            </div>
            <div class="team__info text-center mb-20">
              <h3>DONATE FUND</h3>
              <span>If you can</span>
            </div>
            <div class="team__social ul_li_center">
              <span
                onClick={() => (setOwnerModel(false), setOpenDonate(true))}
                class="h-icon"
                style={{
                  cursor: "pointer",
                }}
              >
                <FaPlus />
              </span>
            </div>
          </div>

          {account == detail?.owner && (
            <>
              <div class="team__item">
                <div class="avatar">
                  <img src="assets/img/token/t_info_img.png" alt="" />
                </div>
                <div class="team__info text-center mb-20">
                  <h3>WITHDRAW </h3>
                  <span>ICO TOKEN, Only Owner</span>
                </div>
                <div class="team__social ul_li_center">
                  <span
                    onClick={() => TOKEN_WITHDRAW()}
                    class="h-icon"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <FaPlus />
                  </span>
                </div>
              </div>
              <div class="team__item">
                <div class="avatar">
                  <img src="assets/img/token/t_info_img.png" alt="" />
                </div>
                <div class="team__info text-center mb-20">
                  <h3>UPDATE TOKEN </h3>
                  <span>ICO TOKEN, Only Owner</span>
                </div>
                <div class="team__social ul_li_center">
                  <span
                    onClick={() => (
                      setOwnerModel(false), setOpenUpdateAddress(true)
                    )}
                    class="h-icon"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <FaPlus />
                  </span>
                </div>
              </div>
              <div class="team__item">
                <div class="avatar">
                  <img src="assets/img/token/t_info_img.png" alt="" />
                </div>
                <div class="team__info text-center mb-20">
                  <h3>TOKEN_PRICE </h3>
                  <span>UPDATE TOKEN PRICE, Only Owner</span>
                </div>
                <div class="team__social ul_li_center">
                  <span
                    onClick={() => (
                      setOwnerModel(false), setOpenUpdatePrice(true)
                    )}
                    class="h-icon"
                    style={{
                      cursor: "pointer",
                    }}
                  >
                    <FaPlus />
                  </span>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
      <div class="team__shape">
        <div class="shape shape--1">
          <img src="assets/img/shape/t_shape1.png" alt="" />
        </div>
        <div class="shape shape--2">
          <img src="assets/img/shape/t_shape2.png" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Owner;
