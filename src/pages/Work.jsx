import React from "react";

function Work() {
  return (
    <main>
      <section className="section-wrapper first-section">
        <h1>Projects</h1>
        <div className="projects-grid">
          <div className="project-category-wrapper">
            <div className="filters">
              <ul>
                <li data-filter="web-design" className="web-design-filter">
                  Web Design
                </li>
                <li
                  data-filter="graphic-design"
                  className="graphic-design-filter"
                >
                  Graphic Design
                </li>
                <li data-filter="illustration" className="illustration-filter">
                  Illustration
                </li>
                <li data-filter="photography" className="photography-filter">
                  Photography
                </li>
              </ul>
            </div>
          </div>
          <div className="project-grid-wrapper grid">
            {/* single project */}
            <div className="project-grid-card graphic-design">
              <h2>Suity Bot</h2>
              <a href="suity-bot/index.html" title="Suity Bot">
                <div className="project-image-holder">
                  <img
                    loading="lazy"
                    src="../images/suity-bot-work-thumb.png"
                  />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card web-design illustration">
              <h2>RuneScape Card Deck</h2>
              <a
                href="runescape-card-deck/index.html"
                title="RuneScape Card Deck"
              >
                <div className="project-image-holder">
                  <img loading="lazy" src="../images/Mockup_RS3_deck.png" />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card illustration">
              <h2>Scimitops animations</h2>
              <a
                href="scimitops-animation/index.html"
                title="Scimitops animation"
              >
                <div className="project-image-holder">
                  <img loading="lazy" src="../images/Final_Scimitops_gif.png" />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card photography">
              <h2>Photography</h2>
              <a href="photography/index.html" title="Photography">
                <div className="project-image-holder">
                  <img loading="lazy" src="../images/Photograpy_THUMB.png" />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card web-design">
              <h2>UMa InfoAlunos redesign</h2>
              <a
                href="uma-infoalunos/index.html"
                title="UMa InfoAlunos redesign"
              >
                <div className="project-image-holder">
                  <img loading="lazy" src="../images/Mockup_InfoAlunos.png" />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card">
              <h2>Sound Museum</h2>
              <a href="sound-museum/index.html" title="Sound Museum">
                <div className="project-image-holder">
                  <img
                    loading="lazy"
                    src="../images/Launchpad_thing_THUMB.png"
                  />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card illustration">
              <h2>Christmas advent event</h2>
              <a
                href="christmas-advent-event-rac/index.html"
                title="Christmas advent event"
              >
                <div className="project-image-holder">
                  <img
                    loading="lazy"
                    src="../images/RSArtvent_2019_Day_17_THUMB.png"
                  />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card illustration">
              <h2>Nico, the Chameleon</h2>
              <a href="*" title="Nico, the Chameleon">
                <div className="project-image-holder">
                  <img
                    loading="lazy"
                    src="../images/Nico_the_Chameleon_THUMB.png"
                  />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card illustration">
              <h2>Scimitops for RuneFest 2019</h2>
              <a href="*" title="Scimitops for RuneFest 2019">
                <div className="project-image-holder">
                  <img
                    loading="lazy"
                    src="../images/Scimitops_for_RuneFest_THUMB.png"
                  />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card illustration">
              <h2>Mod Shauny's farewell</h2>
              <a href="*" title="Mod Shauny's farewell">
                <div className="project-image-holder">
                  <img
                    loading="lazy"
                    src="../images/Shauny_farewell_mockup_posters_THUMB.png"
                  />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card graphic-design">
              <h2>Circular Economy - Cigarettes</h2>
              <a href="*" title="Cigarette butts - Circular Economy">
                <div className="project-image-holder">
                  <img
                    loading="lazy"
                    src="../images/circular_beatas_mockup_posters_THUMB.png"
                  />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card web-design">
              <h2>Sight Seaing</h2>
              <a href="sight-seaing/index.html" title="Sight Seaing">
                <div className="project-image-holder">
                  <img
                    loading="lazy"
                    src="../images/Mockup_Sight_Seaing_2.png"
                  />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card graphic-design">
              <h2>Second Face</h2>
              <a href="*" title="Second Face - Masks">
                <div className="project-image-holder">
                  <img
                    loading="lazy"
                    src="../images/Second_face_mockup_posters_THUMB.png"
                  />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card web-design">
              <h2>Ask 4 Task</h2>
              <a href="*" title="Ask 4 Task">
                <div className="project-image-holder">
                  <img loading="lazy" src="../images/Mockup_Ask_4_Task_2.png" />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card graphic-design">
              <h2>Peixe-Aranha</h2>
              <a href="*" title="Peixe-Aranha">
                <div className="project-image-holder">
                  <img
                    loading="lazy"
                    src="../images/Peixe-aranha_mockup_posters_THUMB.png"
                  />
                </div>
              </a>
            </div>
            {/* single project */}
            <div className="project-grid-card">
              <h2>Fine Arts</h2>
              <a href="*" title="Fine Arts">
                <div className="project-image-holder">
                  <img loading="lazy" src="../images/Fine_arts_THUMB.png" />
                </div>
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default Work;
