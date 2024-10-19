import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
  TiSocialGithub,
} from "react-icons/ti";
import { IoCloudDownload } from "react-icons/io5";
import { IoIosSend } from "react-icons/io";

const Footer = () => {
  return (
    <footer
      class="site-footer footer__ico pos-rel"
      data-background="assets/img/bg/footer_bg.png"
    >
      <div class="container">
        <div class="row mt-none-30">
          <div class="col-lg-4 mt-30">
            <div class="footer__widget footer__subscribe">
              <h2>Subscribe newsletter</h2>
              <p>
                Pre-ICOs typically offer early access to the <br />
                project's tokens before the main ICO.
              </p>
              <form action="#">
                <input type="text" placeholder="coindox@gmail.com" />
                <button>
                  <IoIosSend />
                </button>
              </form>
            </div>
          </div>
          <div class="col-lg-8 mt-30">
            <div class="footer__widget text-lg-end">
              <h2>Download Documents</h2>
              <div class="footer__document ul_li_right">
                <a href="#!" class="footer__document-item text-center">
                  <div class="icon">
                    <img src="assets/img/icon/pdf.svg" alt="" />
                  </div>
                  <span class="title">
                    <IoCloudDownload />
                    white paper
                  </span>
                </a>
                <a href="#!" class="footer__document-item text-center">
                  <div class="icon">
                    <img src="assets/img/icon/pdf.svg" alt="" />
                  </div>
                  <span class="title">
                    <IoCloudDownload />
                    one paper
                  </span>
                </a>
                <a href="#!" class="footer__document-item text-center">
                  <div class="icon">
                    <img src="assets/img/icon/pdf.svg" alt="" />
                  </div>
                  <span class="title">
                    <IoCloudDownload />
                    privacy policy
                  </span>
                </a>
                <a href="#!" class="footer__document-item text-center">
                  <div class="icon">
                    <img src="assets/img/icon/pdf.svg" alt="" />
                  </div>
                  <span class="title">
                    <IoCloudDownload />
                    terms of sale
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div class="footer__bottom ul_li_between mt-50">
          <div class="footer__logo mt-20">
            <a href="index.html">
              <img src="assets/img/logo/logo.svg" alt="" />
            </a>
          </div>
          <ul class="footer__social ul_li mt-20">
            <li>
              <a href="#!">
                <TiSocialFacebook />
              </a>
            </li>
            <li>
              <a href="#!">
                <TiSocialTwitter />
              </a>
            </li>
            <li>
              <a href="#!">
                <TiSocialLinkedin />
              </a>
            </li>
            <li>
              <a href="#!">
                <TiSocialInstagram />
              </a>
            </li>
            <li>
              <a href="#!">
                <TiSocialGithub />
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div class="footer__copyright mt-35">
        <div class="container">
          <div class="footer__copyright-inner ul_li_between">
            <div class="footer__copyright-text mt-15">
              Copyright © 2024 @HackIndiaCoders. All rights reserved.
            </div>
            <ul class="footer__links ul_li_right mt-15">
              <li>
                <a href="#!">Privacy</a>
              </li>
              <li>
                <a href="#!">Cookies</a>
              </li>
              <li>
                <a href="#!">Terms</a>
              </li>
              <li>
                <a href="#!">About</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="footer__icon-shape">
        <div class="icon icon--1">
          <div data-parallax='{"x" : -80}'>
            <img src="assets/img/shape/f_icon1.png" alt="" />
          </div>
        </div>
        <div class="icon icon--2">
          <div data-parallax='{"x" : 80}'>
            <img src="assets/img/shape/f_icon2.png" alt="" />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
