import React from "react";
import "./footer.scss";

const flatIconAtributions = [
  <a href="https://www.flaticon.com/free-icons/teamwork" title="teamwork icons">
    Teamwork icons created by Becris - Flaticon
  </a>,
  <a
    href="https://www.flaticon.com/free-icons/commit-git"
    title="commit git icons"
  >
    Commit git icons created by Freepik - Flaticon
  </a>,
  <a href="https://www.flaticon.com/free-icons/database" title="database icons">
    Database icons created by Vectors Tank - Flaticon
  </a>,
  <a
    href="https://www.flaticon.com/free-icons/machine-learning"
    title="machine learning icons"
  >
    Machine learning icons created by Shahid-Mehmood - Flaticon
  </a>,
  <a
    href="https://www.flaticon.com/free-icons/development"
    title="development icons"
  >
    Development icons created by Freepik - Flaticon
  </a>,
  <a href="https://www.flaticon.com/free-icons/solution" title="solution icons">
    Solution icons created by Freepik - Flaticon
  </a>,
  <a
    href="https://www.flaticon.com/free-icons/technology"
    title="technology icons"
  >
    Technology icons created by Freepik - Flaticon
  </a>,
  <a href="https://www.flaticon.com/free-icons/academy" title="academy icons">
    Academy icons created by Freepik - Flaticon
  </a>,
  <a
    href="https://www.flaticon.com/free-icons/volunteer"
    title="volunteer icons"
  >
    Volunteer icons created by Freepik - Flaticon
  </a>,
  <a
    href="https://www.flaticon.com/free-icons/volunteer"
    title="volunteer icons"
  >
    Volunteer icons created by Freepik - Flaticon
  </a>,
  <a
    href="https://www.flaticon.com/free-icons/administrator"
    title="administrator icons"
  >
    Administrator icons created by Freepik - Flaticon
  </a>,
  <a href="https://www.flaticon.com/free-icons/brain" title="brain icons">
    Brain icons created by Freepik - Flaticon
  </a>,
  <a href="https://www.flaticon.com/free-icons/romania" title="romania icons">
    Romania icons created by IconMarketPK - Flaticon
  </a>,
  <a href="https://www.flaticon.com/free-icons/whatsapp" title="whatsapp icons">
    Whatsapp icons created by Enamo Studios - Flaticon
  </a>,
];

function Footer() {
  return (
    <div className="footer">
      <div className="container grey">
        <div className="box">
          <div className="title">Marius Mircioaga</div>
          <div>©{Date().split(" ")[3]}</div>
          <div>
            <a target="_blank" href="mailto:mariusmircioaga@gmail.com">
              mariusmircioaga@gmail.com
            </a>
          </div>
          <div>+40 770 770 365</div>
        </div>
        <div className="box">
          <div className="title">Asset Attributions:</div>
          <div className="desc">
            <div>Becris</div>
            <div>Freepik</div>
            <div>IconMarketPK</div>
          </div>
        </div>
        <div className="box">
          <div className="desc">
            <div>Enamo Studios</div>
            <div>Shahid-Mehmood</div>
            <div>Vectors Tank</div>
            <div>
              <a
                target="_blank"
                href="https://www.flaticon.com/"
                title="Flaticon"
              >
                www.flaticon.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
