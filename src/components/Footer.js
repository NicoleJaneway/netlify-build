import fb from "../img/icons/color-facebook-128.png";
import li from "../img/icons/color-linkedin-128.png";
import med from "../img/icons/color-medium-128.png";
import twit from "../img/icons/color-twitter-128.png";
import yt from "../img/icons/color-youtube-128.png";
import gh from "../img/icons/color-github-icon.png";
import em from "../img/icons/color-email-128.png";

export default function Footer() {
  return (
    <div className="footer-container">
      <p>made by Nicole Janeway</p>
      <div className="buttons" style={{ justifyContent: "center" }}>
        <a
          href="https://www.facebook.com/DataStrategyPros"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={fb} alt="facebook" />
        </a>
        <a
          href="https://twitter.com/Nicole_Janeway"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={twit} alt="twitter" />
        </a>
        <a
          href="https://github.com/DataStrategyPros"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={gh} alt="github" />
        </a>
        <a
          href="https://nicolejaneway.medium.com/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={med} alt="medium" />
        </a>
        <a
          href="https://www.linkedin.com/groups/13951141/"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={li} alt="linkedin" />
        </a>
        <a
          href="https://www.youtube.com/channel/UCO6JE24WY82TKabcGI8mA0Q"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={yt} alt="youtube" />
        </a>
        <a
          href="http://eepurl.com/hhFVsX"
          target="_blank"
          rel="noreferrer noopener"
        >
          <img src={em} alt="email" />
        </a>
      </div>
    </div>
  );
}
