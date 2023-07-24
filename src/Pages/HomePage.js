// import LeftImages from "../components/LeftImages";
import MintCardItem from "../components/MintCard/MintCardItem";
import ImageMarqueeCard from "../components/marquee/ImageMarqueeCard";
// import LeftImages from "../components/LeftImages";
import TextMarqueeItem from "../components/marquee/TextMarqueeItem";
import React from "react";
import RoadmapItemcard from "../components/roadmapItem/RoadmapItemcard";
import { LazyLoadImage } from "react-lazy-load-image-component";
import TeamCardItem from "../components/TeamCard/TeamCardItem";
import FaqContentItem from "../components/faqContentItem/FaqContentItem";
import SocialMediaLinkItem from "../components/SocialMediaLink/SocialMediaLinkItem";
function HomePage() {
  // const videoRef = useRef(null);

  // useEffect(() => {
  //   const handlePlay = () => {
  //     if (videoRef.current) {
  //       videoRef.current.play().catch((error) => {
  //         // Autoplay was blocked or failed, handle it here.
  //         console.error("Autoplay was blocked:", error);
  //       });
  //     }
  //   };

  //   document.addEventListener("click", handlePlay);

  //   return () => {
  //     document.removeEventListener("click", handlePlay); // Remove the event listener when the component unmounts
  //   };
  // }, []);

  // const videoUrl = `${process.env.PUBLIC_URL}/images/item-img.webm`;
  return (
    <React.Fragment>
      <div className="hero-section">
        <div className="hero-wrapper">
          <div className="hero-section-content">
            <div className="image-stripbar left-sideImage">
              <img
                src="/images/left-img-1.svg"
                className="carousel-img image-scale-1"
                alt=""
              />
              <img
                src="/images/left-img-2.svg"
                className="carousel-img image-scale-2"
                alt=""
              />
              <img
                src="/images/left-img-3.svg"
                className="carousel-img image-scale-3"
                alt=""
              />
              <img
                src="/images/left-img-4.svg"
                className="carousel-img image-scale-4"
                alt=""
              />
              <img
                src="/images/left-img-5.svg"
                className="carousel-img image-scale-5"
                alt=""
              />
              <img
                src="/images/left-img-6.svg"
                className="carousel-img image-scale-6"
                alt=""
              />
            </div>
            {/* <LeftImages /> */}
            <div className="hero-center-items">
              <div className="hero-center-img">
                <img src="/images/hero-center-img.svg" alt="" />
              </div>
              <button className="custom-btn">Join discord</button>
            </div>
            <div className="image-stripbar right-sideImage"></div>
          </div>
        </div>
      </div>
      {/* =============== Marquee Image Item =========*/}
      <div className="marque-section cpb-6">
        <ImageMarqueeCard />
      </div>
      {/* ============= Marquee Text Item ============ */}
      <div className="marque-text-section">
        <TextMarqueeItem />
      </div>
      {/* ================= About Us ================== */}
      <section className="about cpb-6" id="about">
        <div className="container">
          <div className="about-us-wrapper">
            <div className="about-us-content">
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
            <div className="about-us-img">
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
              <div className="col-lg-4 col-md-6 col-sm-12">
                <MintCardItem
                  title="download META MASK wallet"
                  img="/images/metamask.svg"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <MintCardItem
                  title="go to mint page"
                  img="/images/file.svg"
                  description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
                />
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
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
      </section>

      {/* =============== Roadmap Section ============ */}
      <section className="roadmap">
        <div className="roadmap-wrapper">
          <h1 className="section-title">Roadmap</h1>
          <div className="roadmap-content-con">
            <div className="roadmap-card-item roadmap-card-item-1">
              <RoadmapItemcard
                title="Phase 1"
                dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
              />
            </div>
            <div className="roadmap-card-item roadmap-card-item-2">
              <RoadmapItemcard
                title="Phase 2"
                dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
              />
            </div>
            <div className="roadmap-card-item roadmap-card-item-3">
              <RoadmapItemcard
                title="Phase 3"
                dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
              />
            </div>
            <div className="roadmap-card-item roadmap-card-item-4">
              <RoadmapItemcard
                title="Phase 4"
                dis="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum"
              />
            </div>
            <div className="roadmap-bg-img">
              <LazyLoadImage
                src="/images/roadmap-bg-img.svg"
                width="auto"
                height="auto"
              />
            </div>
          </div>
        </div>
      </section>
      {/* ==================== Team Section ================= */}
      <section className="team cpb-6" id="team">
        <div className="container">
          <div className="team-wrapper">
            <h1 className="section-title">Team</h1>
            <div className="row cpt-7">
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="team-card-item team-card-item-1">
                  <TeamCardItem
                    img="/images/team-1.svg"
                    title="Member 1"
                    bio="(Designer)"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="team-card-item team-card-item-2">
                  <TeamCardItem
                    img="/images/team-2.svg"
                    title="Member 2"
                    bio="(Designer)"
                  />
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="team-card-item team-card-item-3">
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
      <section className="faq cpb-6">
        <div className="container">
          <div className="faq-wrapper">
            <h1 className="section-title">frequently asked questions</h1>
            <div className="faq-content-wrapper cpt-6">
              <div className="faq-content-con">
                <div className="faq-content-item faq-content-item-1">
                  <FaqContentItem
                    question="What is crazy doodles ?"
                    answer='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
                    img="/images/Q.svg"
                  />
                </div>
                <div className="faq-content-item faq-content-item-2">
                  <FaqContentItem
                    question="What is crazy doodles ?"
                    answer='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
                    img="/images/Q.svg"
                  />
                </div>
                <div className="faq-content-item faq-content-item-3">
                  <FaqContentItem
                    question="What is crazy doodles ?"
                    answer='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
                    img="/images/Q.svg"
                  />
                </div>
                <div className="faq-content-item faq-content-item-4">
                  <FaqContentItem
                    question="What is crazy doodles ?"
                    answer='"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea'
                    img="/images/Q.svg"
                  />
                </div>
              </div>
              <div className="faq-item-img">
                <LazyLoadImage
                  src="/images/faq-img.svg"
                  width="auto"
                  height="auto"
                />
              </div>
            </div>
          </div>
        </div>
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
            width="auto"
            height="auto"
            src="/images/join-img-1.svg"
          />
        </div>
        <div className="join-img-2">
          <LazyLoadImage
            width="auto"
            height="auto"
            src="/images/join-img-2.svg"
          />
        </div>
      </section>
    </React.Fragment>
  );
}

export default HomePage;
