import { useState } from "react";
import MenuItems from "./MenuItems";

function Header() {
  const [activepage, setActivepage] = useState("Home");
  return (
    <header>
      <div className="main-menu">
        <div className="main-menu-left">
          <div className="main-menu-left-1">
            <a href="/" title="Home">
              <h1>
                Diogo <br />
                Castro
              </h1>
            </a>
          </div>
          <div className="main-menu-left-2 show-for-medium">
            <ul>
              <MenuItems
                PageLink="/"
                PageName="Home"
                active={activepage}
                onPress={() => setActivepage("Home")}
              />
              <MenuItems
                PageLink="/Work"
                PageName="Work"
                active={activepage}
                onPress={() => setActivepage("Work")}
              />
              <MenuItems
                PageLink="/AboutMe"
                PageName="AboutMe"
                active={activepage}
                onPress={() => setActivepage("AboutMe")}
              />
              <MenuItems
                PageLink="#"
                PageName="Contact"
                active={activepage}
                onPress={() => setActivepage("Contact")}
              />
            </ul>
          </div>
        </div>
        <div className="main-menu-right hide-for-medium">
          <div className="hamburger">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
      </div>
      {/* DROP DOWN MENU */}
      <div className="drop-down-menu-bg hide-for-medium">
        <div className="drop-down-menu">
          <ul>
            <li>
              <a href="/" title="Home">
                Home
              </a>
            </li>
            <li>
              <a href="/Work" title="Work">
                Work
              </a>
            </li>
            <li>
              <a href="/AboutMe" title="About me">
                About Me
              </a>
            </li>
            <li>
              <a href="#" title="Contact">
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
      {/* END MAIN MENU */}
    </header>
  );
}

export default Header;
