import React from "react";
import AboutMeExperience from "../components/AboutMeExperience";

function AboutMe() {
  return (
    <main>
      <div className="about-wrapper">
        <section className="section-wrapper first-section about-wrapper">
          <h1>About me</h1>
          <div className="intro-wrapper grid-x">
            <div className="icons-and-text-wrapper cell small-12 medium-12 large-9">
              <div className="text-wrapper">
                <p>
                  Hello! My name is Diogo, I'm 25 and I'm a designer who
                  graduated from the University of Madeira. I like coding in
                  HTML and CSS. My favorite area of design is Web Design but I
                  would like to learn more about Photography and Video as I find
                  these areas very interesting.
                </p>
              </div>
              <div className="software-icons">
                <div className="adobes">
                  <img
                    src="../images/Illustrator-icon.svg"
                    title="Illustrator"
                  />
                  <img src="../images/Photoshop-icon.svg" title="Photoshop" />
                  <img
                    src="../images/AfterEffects-icon.svg"
                    title="AfterEffects"
                  />
                  <img src="../images/Premiere-icon.svg" title="Premiere" />
                  <img src="../images/Xd-icon.svg" title="XD" />
                  <img src="../images/InDesign-icon.svg" title="InDesign" />
                </div>
                <div className="code">
                  <img src="../images/HTML-icon.svg" title="HTML" />
                  <img src="../images/CSS-icon.svg" title="CSS" />
                </div>
              </div>
            </div>
            <div className="img-holder img-about show-for-large cell large-3">
              <img src="../images/my-face-for-portfolio.png" />
            </div>
          </div>
        </section>
        <section className="section-wrapper">
          <h1>Work Experience</h1>
          <div id="about-work-experience">
            <AboutMeExperience
              title="ON7 &amp; ONESEVEN"
              start="August 2022"
              end="Present"
              text="I returned to, at the time, ON7, for another internship, whereI ended up staying. It then got transformed into ONESEVENunder different management but with the same employees. I amcurrently working at ONESEVEN doing design and production."
            />
            <AboutMeExperience
              title="Ignite"
              start="September 2020"
              text="At this company I mostly did small projects like calendars,
              social media posts and restaurant menus... Can't say these
              were my favorite projects but someone has to do them."
            />
            <AboutMeExperience
              title="Pixel Velocity EXPLOREit"
              start="February 2020"
              end="April 2020"
              text="Invited by an, at the time, current web design teacher, I wasgiven the opportunity to intern at a new company he was a partof, helping with developing the front-end for this new Appthat is yet to be released. It helped me expand my knowledgeof web design, especially when it comes to working in a teamthrough GitLab and SourceTree."
            />
            <AboutMeExperience
              title="ON7 Publicidade"
              start="Summer 2019"
              text="During the summer of 2019, I interned at ON7. This internship
              lasted around one month and I got to learn about file
              preparation for printing, how the printers work, laser cutting
              as well as how a company operates."
            />
          </div>
        </section>
        <section className="section-wrapper">
          <h1>Academic History</h1>
          <div id="about-academic-history">
            <AboutMeExperience
              title="Universidade da Madeira"
              start="September 2018"
              end="June 2020"
              course="Design"
              text="During the summer of 2019, I interned at ON7. This internship
              lasted around one month and I got to learn about file
              preparation for printing, how the printers work, laser cutting
              as well as how a company operates."
            />
            <AboutMeExperience
              title="Faculdade de Belas-Artes da Universidade Porto"
              start="September 2017"
              end="June 2018"
              course="Communication Design"
              text="I studied in Porto during my first year, in a course that was
              more specialized in graphic design, mostly learning the basics
              about software and the theoretical part."
            />
          </div>
        </section>
      </div>
    </main>
  );
}

export default AboutMe;
