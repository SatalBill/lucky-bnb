import React from "react";
import styled from 'styled-components'
import styles from "./SocialLink.module.css";

const StyledLink = styled.a`
  transition: 0.2s all ease-in-out;
  &:hover {
    transform: scale(1.05);
  }
`

const SocialLink = ({ icon, link = "/", target = "_self" }) => {
  return (
    <StyledLink
      href={link}
      target={target}
      className={`${styles.socialLink}`}
    >
      {icon}
    </StyledLink>
  );
};

export default SocialLink;
