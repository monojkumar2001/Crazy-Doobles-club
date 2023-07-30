import MintCardItem from "../components/MintCard/MintCardItem";
import ImageMarqueeCard from "../components/marquee/ImageMarqueeCard";
import TextMarqueeItem from "../components/marquee/TextMarqueeItem";
import React from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TeamCardItem from "../components/TeamCard/TeamCardItem";
import FaqContentItem from "../components/faqContentItem/FaqContentItem";
import SocialMediaLinkItem from "../components/SocialMediaLink/SocialMediaLinkItem";
import LeftImages from "../components/Hero/LeftImages";
import RightImages from "../components/Hero/RightImages";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <React.Fragment>
      <div className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-section-content">
            <LeftImages />
            <div
              className="hero-center-items d-flex align-items-center flex-column gap-4"
              data-aos="fade-bottom"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2000"
            >
              <div className="hero-center-img">
                <img src="/images/hero-center-img.svg" alt="" />
              </div>
              <button className="custom-btn discord-btns">Join discord</button>
            </div>
            <RightImages />
          </div>
        </div>
        <div className="hero-blur-1"></div>
        <div className="hero-blur-2"></div>
      </div>
      {/* =============== Marquee Image Item =========*/}
      <div
        className="marque-section cpb-6"
        data-aos="fade-bottom"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2500"
      >
        <ImageMarqueeCard />
      </div>
      {/* ============= Marquee Text Item ============ */}
      <div
        className="marque-text-section"
        data-aos="fade-bottom"
        data-aos-offset="300"
        data-aos-easing="ease-in-sine"
        data-aos-duration="2500"
      >
        <TextMarqueeItem />
      </div>
      {/* ================= About Us ================== */}
      <section className="about cpb-6" id="about">
        <div className="container">
          <div className="about-us-wrapper">
            <div
              className="about-us-content"
              data-aos="fade-right"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2500"
            >
              <h1 className="section-title mb-4">ABOUT US</h1>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged. It was
                popularised in
              </p>
              <div className="about-count-price-item mt-4 d-flex align-items-center justify-content-between">
                <h2>3000</h2>
                <h2>30.8 eth</h2>
                <h2>0.8 eth</h2>
              </div>
            </div>
            <div
              className="about-us-img"
              data-aos="fade-left"
              data-aos-offset="300"
              data-aos-easing="ease-in-sine"
              data-aos-duration="2500"
            >
              <img src="/images/about-us-img.svg" alt="" />
            </div>
          </div>
        </div>
      </section>
      {/* ========= Mint card =========== */}
      <section className="mint cpb-6">
        <div className="container">
          <div className="mint-card-item-wrapper">
            <h1 className="section-title">HOW TO MINT</h1>
            <div className="mint-item-cards row cpt-6">
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <MintCardItem
                  title="download META MASK wallet"
                  img="/images/metamask.svg"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
                />
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="fade-up"
                data-aos-duration="3000"
                data-aos-anchor-placement="top-bottom"
              >
                <MintCardItem
                  title="go to mint page"
                  img="/images/file.svg"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
                />
              </div>
              <div
                className="col-lg-4 col-md-6 col-sm-12"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2000"
              >
                <MintCardItem
                  title="then Mint Your nft"
                  img="/images/nft.svg"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="mint-blur"></div>
        <div className="mint-blur-2"></div>
      </section>
      {/* ======================= Roadmap Section ================== */}
      <section className="roadmap" id="roadmap">
        <div className="container-fluid">
          <div className="roadmap-wrapper ">
            <h1 className="section-title">Roadmap</h1>
            <div className="roadmap-item-1 cpb-6 cpt-7 roadmap-item">
              <div className="roadmap-left-site roadmap-site-img-item">
                <div
                  className="roadmap-left-img"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2500"
                >
                  <LazyLoadImage src="./images/roadmap-img-1.svg" alt="" />
                </div>
              </div>
              <div
                className="roadmap-right-site roadmap-content-item-box"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                <div className="roadmap-content-item">
                  <div className="roadmap-persen">
                    <h1>0%</h1>
                  </div>
                  <h4>Genesis Collection 100 Boss ETC ETC Drop</h4>
                  <Link href={"#"} className="custom-btn buy-opensea-btn">
                    Buy On OpenSea
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="roadmap-item-2 cpb-6 roadmap-item"
              data-aos="flip-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2500"
            >
              <div className="roadmap-left-site roadmap-content-item-box roadmap-content-item-box-2">
                <div className="roadmap-content-item-2">
                  <div className="roadmap-persen">
                    <h1>25%</h1>
                  </div>
                  <h4>Genesis Collection 100 Boss ETC ETC Drop</h4>
                  <Link href={"#"} className="custom-btn buy-opensea-btn">
                    Buy On OpenSea
                  </Link>
                </div>
              </div>
              <div
                className="roadmap-right-site roadmap-site-img-item-2"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="3000"
              >
                <div className="roadmap-left-img">
                  <LazyLoadImage src="./images/roadmap-img-2.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="roadmap-item-1 cpb-6 roadmap-item">
              <div className="roadmap-left-site roadmap-site-img-item">
                <div
                  className="roadmap-left-img"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2500"
                >
                  <LazyLoadImage src="./images/roadmap-img-1.svg" alt="" />
                </div>
              </div>
              <div
                className="roadmap-right-site roadmap-content-item-box"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2500"
              >
                <div className="roadmap-content-item">
                  <div className="roadmap-persen">
                    <h1>50%</h1>
                  </div>
                  <h4>Genesis Collection 100 Boss ETC ETC Drop</h4>
                  <Link href={"#"} className="custom-btn buy-opensea-btn">
                    Buy On OpenSea
                  </Link>
                </div>
              </div>
            </div>
            <div className="roadmap-item-2 cpb-6 roadmap-item">
              <div
                className="roadmap-left-site roadmap-content-item-box roadmap-content-item-box-2"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2500"
              >
                <div className="roadmap-content-item-2">
                  <div className="roadmap-persen">
                    <h1>75%</h1>
                  </div>
                  <h4>Genesis Collection 100 Boss ETC ETC Drop</h4>
                  <Link href={"#"} className="custom-btn buy-opensea-btn">
                    Buy On OpenSea
                  </Link>
                </div>
              </div>
              <div
                className="roadmap-right-site roadmap-site-img-item-2"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2500"
              >
                <div className="roadmap-left-img">
                  <LazyLoadImage src="./images/roadmap-img-2.svg" alt="" />
                </div>
              </div>
            </div>
            <div className="roadmap-item-1 cpb-6 roadmap-item">
              <div
                className="roadmap-left-site roadmap-site-img-item"
                data-aos="flip-left"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2500"
              >
                <div className="roadmap-left-img">
                  <LazyLoadImage src="./images/roadmap-img-1.svg" alt="" />
                </div>
              </div>
              <div
                className="roadmap-right-site roadmap-content-item-box"
                data-aos="flip-right"
                data-aos-easing="ease-out-cubic"
                data-aos-duration="2500"
              >
                <div className="roadmap-content-item">
                  <div className="roadmap-persen roadmap-persen-5">
                    <h1>100%</h1>
                  </div>
                  <h4>Genesis Collection 100 Boss ETC ETC Drop</h4>
                  <Link href={"#"} className="custom-btn buy-opensea-btn">
                    Buy On OpenSea
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="roadmap-blur-1"></div>
        <div className="roadmap-blur-2"></div>
        <div className="roadmap-blur-3"></div>
      </section>
      {/* ==================== Team Section ================= */}
      <section className="team cpb-6" id="team">
        <div className="container">
          <div className="team-wrapper" data-aos="fade-up">
            <h1 className="section-title">Team</h1>
            <div className="row cpt-7">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="team-card-item team-card-item-1"
                  data-aos="flip-left"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2500"
                >
                  <TeamCardItem
                    img="/images/team-1.svg"
                    title="Member 1"
                    bio="(Designer)"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="team-card-item team-card-item-2"
                  data-aos="zoom-in-down"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="2500"
                >
                  <TeamCardItem
                    img="/images/team-2.svg"
                    title="Member 2"
                    bio="(Designer)"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div
                  className="team-card-item team-card-item-3"
                  data-aos="flip-right"
                  data-aos-easing="ease-out-cubic"
                  data-aos-duration="3000"
                >
                  <TeamCardItem
                    img="/images/team-3.svg"
                    title="Member 3"
                    bio="(Designer)"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="team-blur"></div>
      </section>
      {/* ==================== FAQ Section =============== */}
      <section className="faq cpb-6" id="faq">
        <div className="container">
          <div className="faq-wrapper">
            <h1 className="section-title">frequently asked questions</h1>
            <div className="faq-content-wrapper cpt-6">
              <div className="faq-content-con">
                <div
                  className="faq-content-item faq-content-item-1"
                  data-aos="fade-right"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="2000"
                >
                  <FaqContentItem
                    question="What is crazy doodles ?"
                    answer='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
                    img="/images/Q.svg"
                  />
                </div>
                <div
                  className="faq-content-item faq-content-item-2"
                  data-aos="fade-left"
                  data-aos-offset="300"
                  data-aos-easing="ease-in-sine"
                  data-aos-duration="2500"
                >
                  <FaqContentItem
                    question="What is crazy doodles ?"
                    answer='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
                    img="/images/Q.svg"
                  />
                </div>
                <div
                  className="faq-content-item faq-content-item-3"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <FaqContentItem
                    question="What is crazy doodles ?"
                    answer='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
                    img="/images/Q.svg"
                  />
                </div>
                <div
                  className="faq-content-item faq-content-item-4"
                  data-aos="fade-up"
                  data-aos-duration="3000"
                >
                  <FaqContentItem
                    question="What is crazy doodles ?"
                    answer='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
                    img="/images/Q.svg"
                  />
                </div>
              </div>
              <div
                className="faq-item-img"
                data-aos="zoom-in"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
                data-aos-duration="2500"
              >
                <LazyLoadImage
                  src="/images/faq-img.svg"
                  width="auto"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="faq-blur"></div>
      </section>
      {/* =================== Join Our Community ============= */}
      <section className="join-community cpb-7">
        <div className="container">
          <div className="join-community-wrapper d-flex align-items-center justify-content-center flex-column">
            <div className="join-community-content  d-flex align-items-center justify-content-center flex-column">
              <h1 className="section-title">JOIN OUR COMMUNITY</h1>
              <SocialMediaLinkItem />
            </div>
          </div>
          <p className="copy-right-text">
            © 2022 crazy doodles - All Rights RESERVED
          </p>
        </div>
        <div className="join-img-1">
          <LazyLoadImage
            src="/images/join-img-1.svg"
          />
        </div>
        <div className="join-img-2">
          <LazyLoadImage
            src="/images/join-img-2.svg"
          />
        </div>
      </section>
      {/* =================== Join Our Community ============= */}
    </React.Fragment>
  );
}

export default HomePage;
