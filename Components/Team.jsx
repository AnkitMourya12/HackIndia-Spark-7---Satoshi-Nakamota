import React from "react";
import {
  TiSocialFacebook,
  TiSocialTwitter,
  TiSocialLinkedin,
  TiSocialInstagram,
} from "react-icons/ti";
import { FaPlus } from "react-icons/fa6";

const Team = () => {
  return (
    <section id="team" class="team pos-rel pos-rel">
      <div class="container">
        <div class="sec-title text-center mb-70">
          <h5 class="sec-title__subtitle">Our Team</h5>
          <h2 class="sec-title__title">Meet our skilld team</h2>
        </div>
        <div class="team__wrap ul_li">
          <div class="team__item">
            <div class="avatar">
              <img src="assets/img/team/img_01.png" alt="" />
            </div>
            <div class="team__info text-center mb-20">
              <h3>Ankit Mourya</h3>
              <span>Developer</span>
            </div>
            <div class="team__social ul_li_center">
              <ul class="team__social-link link-left ul_li">
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
              </ul>
              <span class="h-icon">
                <FaPlus />
              </span>
              <ul class="team__social-link link-right ul_li">
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
              </ul>
            </div>
          </div>
          <div class="team__item">
            <div class="avatar">
              <img src="assets/img/team/img_02.png" alt="" />
            </div>
            <div class="team__info text-center mb-20">
              <h3>Durgesh Rajbhar</h3>
              <span>Founder & CO</span>
            </div>
            <div class="team__social ul_li_center">
              <ul class="team__social-link link-left ul_li">
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
              </ul>
              <span class="h-icon">
                <FaPlus />
              </span>
              <ul class="team__social-link link-right ul_li">
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
              </ul>
            </div>
          </div>
          <div class="team__item">
            <div class="avatar">
              <img src="assets/img/team/img_03.png" alt="" />
            </div>
            <div class="team__info text-center mb-20">
              <h3>Adarsh Sharma</h3>
              <span>Developer</span>
            </div>
            <div class="team__social ul_li_center">
              <ul class="team__social-link link-left ul_li">
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
              </ul>
              <span class="h-icon">
                <FaPlus />
              </span>
              <ul class="team__social-link link-right ul_li">
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
              </ul>
            </div>
          </div>
          <div class="team__item">
            <div class="avatar">
              <img src="assets/img/team/img_04.png" alt="" />
            </div>
            <div class="team__info text-center mb-20">
              <h3>Anit Maurya</h3>
              <span>Developer</span>
            </div>
            <div class="team__social ul_li_center">
              <ul class="team__social-link link-left ul_li">
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
              </ul>
              <span class="h-icon">
                <FaPlus />
              </span>
              <ul class="team__social-link link-right ul_li">
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
              </ul>
            </div>
          </div>
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

export default Team;
