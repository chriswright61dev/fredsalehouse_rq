import React from "react";
import "./Footer.css";
import themeSelect from "../../utilities/theme";
function Footer({ headerReady }) {
  const themeName = themeSelect();
  const classNames = themeName + " animate_fade_in duration4000";
  if (headerReady) {
    return (
      <footer
        className={
          classNames
          // themeName
        }
      >
        <div className="lpc-venue-block ">
          <h3>
            <a href="http://www.levenshulmepubcompany.co.uk">
              Levenshulme Pub Company
            </a>
          </h3>
          <p>
            Head Office: <br />
            First Floor <br />
            908 Stockport Road,
            <br />
            Levenshulme,
            <br />
            Manchester
            <br />
            M19 3AD
          </p>
          <p>Telephone 0161 257 2484</p>
          <p>
            <a href="mailto:info@levenshulmepubcompany.co.uk">
              email: info@levenshulmepubcompany.co.uk
            </a>
          </p>

          <p>
            <a href="https://twitter.com/LevePubCo">
              Levenshulme Pub Company on twitter
            </a>
          </p>
        </div>

        <div className="lpc-venue-block">
          <a href="http://www.unionlevenshulme.co.uk/">
            <h4>The Union Inn</h4>
          </a>
          <p>
            845 Stockport Road
            <br />
            Levenshulme
            <br />
            Manchester
            <br />
            M19 3PW
          </p>
          <p>0161 224 1271</p>
        </div>
        <div className="lpc-venue-block">
          <a href="http://www.fredsalehouse.com">
            <h4>Fred's Ale House</h4>
          </a>
          <p>
            843 Stockport Road
            <br />
            Levenshulme
            <br />
            Manchester
            <br />
            M19 3PW
          </p>
          <p>0161 221 0297</p>
        </div>

        <div className="lpc-venue-block">
          <a href="http://www.farmersburnage.co.uk/">
            <h4>The Farmer's Arms</h4>
          </a>
          <p>
            254 Burnage Lane
            <br />
            Burnage
            <br />
            Manchester
            <br />
            M19 1EN
          </p>
          <p>0161 432 6441</p>
        </div>

        <div className="lpc-venue-block">
          <a href="http://www.hennigansbar.co.uk">
            <h4>Hennigan's Sports Bar</h4>
          </a>
          <p>
            908 Stockport Road
            <br />
            Levenshulme
            <br />
            Manchester
            <br />
            M19 3AD
          </p>
          <p>0161 257 2702</p>
        </div>
      </footer>
    );
  } else {
    return null;
  }
}

export default Footer;
