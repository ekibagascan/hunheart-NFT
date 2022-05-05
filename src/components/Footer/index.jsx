import React from "react";
import {
  FaInstagram,
  FaDiscord,
  FaTwitter,
  FaFacebook,
  FaTelegram,
} from "react-icons/fa";
import {
  FooterContainer,
  FooterWrap,
  SocialMedia,
  SocialMediaWrap,
  SocialLogo,
  SocialIcons,
  SocialIconLink,
} from "./FooterElements";
import opensea from "../../images/opensea.svg";

const Footer = ({ CONFIG }) => {
  return (
    <FooterContainer>
      <FooterWrap>
        <SocialMedia>
          <SocialMediaWrap>
            <SocialLogo to="/">{CONFIG.FOOTER_HEADING}</SocialLogo>
            <SocialIcons>
              <SocialIconLink
                href={CONFIG.DISCORD_LINK}
                target="_blank"
                aria-label="Discord"
              >
                <FaDiscord />
              </SocialIconLink>
              <SocialIconLink
                href={CONFIG.INSTAGRAM_LINK}
                target="_blank"
                aria-label="Instagram"
              >
                <FaInstagram />
              </SocialIconLink>
              <SocialIconLink
                href={CONFIG.TWITTER_LINK}
                target="_blank"
                aria-label="Twitter"
              >
                <FaTwitter />
              </SocialIconLink>
              <SocialIconLink
                href={CONFIG.TELEGRAM_LINK}
                target="_blank"
                aria-label="Telegram"
              >
                <FaTelegram />
              </SocialIconLink>
              <SocialIconLink
                href={CONFIG.FACEBOOK_LINK}
                target="_blank"
                aria-label="Facebook"
              >
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink
                href={CONFIG.MARKETPLACE_LINK}
                target="_blank"
                aria-label="Opensea"
              >
                <img src={opensea} alt="opensea" height={25} />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  );
};

export default Footer;
