import React from "react";
import { FiLinkedin, FiGithub } from "react-icons/fi";

import { FooterContainer, FooterText } from "./styles";

const Footer = () => {
  return (
    <FooterContainer>
      <FooterText>Developed by Daniel Paiva</FooterText>
      <a
        href="https://github.com/danielcspaiva"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiGithub size={20} color="#3D2992" />
      </a>
      <a
        href="https://www.linkedin.com/in/danielcspaiva/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FiLinkedin size={20} color="#3D2992" />
      </a>
    </FooterContainer>
  );
};

export default Footer;
