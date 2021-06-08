import styled from "styled-components";
import { breakpoints } from "./breakpoints";
import netflix from "../assets/images/netflix.png";
import reddit from "../assets/images/reddit.png";
import amazon from "../assets/images/amazon.png";
import discord from "../assets/images/discord.png";
import spotify from "../assets/images/spotify.png";

const StyledLogoCloud = styled.section`
  padding: 0 var(--side-padding) 5rem;
  background-color: #f6f6f6;
`;

const LogoGroupBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-flow: row wrap;
`;

const SingleLogoBox = styled.div`
  flex: 20%;

  & img {
    display: block;
    margin: 0 auto;
  }

  @media (min-width: ${breakpoints.xs}) and (max-width: ${breakpoints.xs_end}) {
    flex: 50%;
  }
  @media (min-width: ${breakpoints.sm}) and (max-width: ${breakpoints.md_end}) {
    flex: 25%;
  }
`;

export default function LogoCloud() {
  return (
    <StyledLogoCloud>
      <LogoGroupBox>
        <SingleLogoBox>
          <img src={netflix} alt="Netflix" />
        </SingleLogoBox>
        <SingleLogoBox>
          <img src={reddit} alt="Reddit" />
        </SingleLogoBox>
        <SingleLogoBox>
          <img src={amazon} alt="Amazon" />
        </SingleLogoBox>
        <SingleLogoBox>
          <img src={discord} alt="Discord" />
        </SingleLogoBox>
        <SingleLogoBox>
          <img src={spotify} alt="Spotify" />
        </SingleLogoBox>
      </LogoGroupBox>
    </StyledLogoCloud>
  );
}
