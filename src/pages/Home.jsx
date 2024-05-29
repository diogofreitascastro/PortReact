import React from "react";
import ServiceCard from "../components/ServiceCard";

function Home() {
  return (
    <main>
      <div className="section-wrapper" id="welcome">
        <section className="landing-wrapper grid-x">
          <div className="cell small-12 small-order-2 medium-7 medium-order-1 large-6">
            <h1 id="name">
              Hello! I'm <span className="bloo">Diogo</span>.
            </h1>
            <p>
              Designer based in Madeira. I like coding, photography and
              illustration.
            </p>
            <a href="#" id="hire-me" title="Hire me">
              <div>Let's talk!</div>
            </a>
          </div>
          <div className="img-holder cell small-12 small-order-1 medium-5 medium-order-2 large-6">
            <img src="images/my-face-for-portfolio.png" />
          </div>
          <a
            className="ca3-scroll-down-link ca3-scroll-down-arrow"
            data-ca3_iconfont="ETmodules"
            data-ca3_icon
          />
        </section>
      </div>
      <div className="section-wrapper">
        <section className="services-megawrapper">
          <h1>Areas I like working on the most</h1>
          <div className="service-cards-wrapper">
            <ServiceCard
              title="Web Design"
              text="My favourite area of design. I do UI/UX but also enjoy diving into the code."
            />
            <ServiceCard
              title="Graphic Design"
              text="The main area of my studies. I'm a fan of simple and smart designs."
            />
            <ServiceCard
              title="Photography"
              text="Despite not having the most professional gear, photography is an area I find very interesting. I like product photography and videography a lot but haven't yet had the chance to do either."
            />
            <ServiceCard
              title="Illustration"
              text="I often try to incorporate a bit of illustrarion in my design projects as it makes everything a little more unique."
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default Home;
